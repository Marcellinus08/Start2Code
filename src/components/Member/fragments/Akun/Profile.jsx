import { useRef } from "react";
import { supabase } from "@/supabaseClient";

const Profile = ({ img }) => {
  const fileInputRef = useRef();

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const username = localStorage.getItem("username");
    const fileExt = file.name.split(".").pop();
    const fileName = `${username}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    // Upload ke Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("profile")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      return alert("Upload gagal: " + uploadError.message);
    }

    // Ambil URL publik dari file yang diupload
    const { data: urlData } = supabase.storage
      .from("profile")
      .getPublicUrl(filePath);

    // Simpan URL ke kolom image di tabel users
    const { error: updateError } = await supabase
      .from("users")
      .update({ image: urlData.publicUrl })
      .eq("username", username);

    if (updateError) {
      return alert("Gagal menyimpan URL gambar: " + updateError.message);
    }

    window.location.reload(); // refresh untuk tampilkan gambar baru
  };

  return (
    <div className="relative w-32 h-32 mb-4">
      {img ? (
        <img
          src={img}
          alt="Foto Profil"
          className="w-full h-full object-cover rounded-full border-4 border-blue-100"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-full">
          <span className="material-icons text-gray-400 text-6xl">person</span>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleUpload}
      />

      <button
        type="button"
        onClick={() => fileInputRef.current.click()}
        className="absolute bottom-0 right-0 bg-[#4285F4] text-white rounded-full p-2 shadow-md hover:bg-blue-600 transition duration-300"
        title="Ganti Foto Profil"
      >
        <i className="material-icons text-white text-base">edit</i>
      </button>
    </div>
  );
};

export default Profile;
