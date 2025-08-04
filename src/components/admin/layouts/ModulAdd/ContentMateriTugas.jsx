import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";

const ContentMateriTugas = () => {
  const [submodulOptions, setSubmodulOptions] = useState([]);

  const [materi, setMateri] = useState({
    submodul_id: "",
    judul: "",
    file: null,
  });

  const [tugas, setTugas] = useState({
    submodul_id: "",
    instruksi: "",
    file: null,
  });

  // Ambil daftar submodul dari Supabase
  useEffect(() => {
    const fetchSubmoduls = async () => {
      const { data, error } = await supabase.from("submodul").select("*");
      if (error) {
        console.error("❌ Gagal mengambil submodul:", error.message);
      } else {
        setSubmodulOptions(data);
      }
    };
    fetchSubmoduls();
  }, []);

  // Upload file ke Storage Supabase
  const uploadFile = async (folder, file) => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    console.log("🟨 Akan mengupload:", filePath);

    const { error: uploadError } = await supabase.storage
      .from("materi-tugas") // HARUS cocok dengan nama bucket-mu
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error("❌ Upload error:", uploadError.message);
      throw uploadError;
    }

    const { data: urlData, error: urlError } = supabase.storage
      .from("materi-tugas")
      .getPublicUrl(filePath);

    if (urlError) {
      console.error("❌ URL error:", urlError.message);
      throw urlError;
    }

    console.log("✅ File URL:", urlData.publicUrl);
    return urlData.publicUrl;
  };

  // Simpan Materi
  const handleSaveMateri = async () => {
    const { submodul_id, judul, file } = materi;

    if (!submodul_id || !judul || !file) {
      alert("Semua field materi wajib diisi!");
      return;
    }

    try {
      const fileUrl = await uploadFile("materi", file);

      const { error } = await supabase.from("materi").insert([
        {
          submodul_id,
          materi_title: judul,
          materi_content: fileUrl,
        },
      ]);

      if (error) throw error;

      alert("✅ Materi berhasil disimpan!");
      setMateri({ submodul_id: "", judul: "", file: null });
    } catch (err) {
      alert("❌ Gagal menyimpan materi: " + err.message);
    }
  };

  // Simpan Tugas
  const handleSaveTugas = async () => {
    const { submodul_id, instruksi, file } = tugas;

    if (!submodul_id || !instruksi || !file) {
      alert("Semua field tugas wajib diisi!");
      return;
    }

    try {
      const fileUrl = await uploadFile("tugas", file);

      const { error } = await supabase.from("tugas").insert([
        {
          submodul_id,
          tugas_title: instruksi,
          tugas_content: fileUrl,
        },
      ]);

      if (error) throw error;

      alert("✅ Tugas berhasil disimpan!");
      setTugas({ submodul_id: "", instruksi: "", file: null });
    } catch (err) {
      alert("❌ Gagal menyimpan tugas: " + err.message);
    }
  };

  return (
    <section className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Form Materi</h3>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Pilih Submodul</label>
        <select
          value={materi.submodul_id}
          onChange={(e) =>
            setMateri({ ...materi, submodul_id: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">-- Pilih --</option>
          {submodulOptions.map((sub) => (
            <option key={sub.submodul_id} value={sub.submodul_id}>
              {sub.submodul_name}
            </option>
          ))}
        </select>
      </div>
      <input
        value={materi.judul}
        onChange={(e) => setMateri({ ...materi, judul: e.target.value })}
        className="w-full border border-gray-300 rounded-lg p-2 mb-2"
        placeholder="Judul Materi"
      />
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setMateri({ ...materi, file: e.target.files[0] })}
        className="mb-4"
      />
      <button
        onClick={handleSaveMateri}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Simpan Materi
      </button>

      <hr className="my-6 border-gray-300" />

      <h3 className="text-lg font-semibold mb-4 mt-6">Form Tugas</h3>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Pilih Submodul</label>
        <select
          value={tugas.submodul_id}
          onChange={(e) =>
            setTugas({ ...tugas, submodul_id: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">-- Pilih --</option>
          {submodulOptions.map((sub) => (
            <option key={sub.submodul_id} value={sub.submodul_id}>
              {sub.submodul_name}
            </option>
          ))}
        </select>
      </div>
      <textarea
        value={tugas.instruksi}
        onChange={(e) => setTugas({ ...tugas, instruksi: e.target.value })}
        className="w-full border border-gray-300 rounded-lg p-2 mb-2"
        placeholder="Instruksi tugas"
        rows={3}
      />
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setTugas({ ...tugas, file: e.target.files[0] })}
        className="mb-4"
      />
      <button
        onClick={handleSaveTugas}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Simpan Tugas
      </button>
    </section>
  );
};

export default ContentMateriTugas;
