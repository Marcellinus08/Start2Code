import { useState } from "react";
import { supabase } from "@/supabaseClient";
import Swal from "sweetalert2";
import Data1 from "../../elements/Akun/Data1";
import Data2 from "../../elements/Akun/Data2";
import Data3 from "../../elements/Akun/Data3";
import Sandi from "../../elements/Akun/Sandi";
import Button from "../../elements/Akun/Button";

const Form = ({ username, email, telepon }) => {
  const [formData, setFormData] = useState({
    username,
    email,
    telepon,
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameFromStorage = localStorage.getItem("username");

    // 1. Update data profil
    const { error: updateProfileError } = await supabase
      .from("users")
      .update({
        username: formData.username,
        email: formData.email,
        telepon: formData.telepon,
      })
      .eq("username", usernameFromStorage);

    // 2. Jika password diisi, validasi & update
    let updatePasswordError = null;
    if (formData.oldPassword && formData.newPassword) {
      const { data: userData, error: fetchError } = await supabase
        .from("users")
        .select("password")
        .eq("username", usernameFromStorage)
        .single();

      if (fetchError || !userData) {
        return Swal.fire("Gagal", "Gagal mengambil data password!", "error");
      }

      if (userData.password !== formData.oldPassword) {
        return Swal.fire("Gagal", "Sandi lama salah!", "error");
      }

      const { error } = await supabase
        .from("users")
        .update({ password: formData.newPassword })
        .eq("username", usernameFromStorage);

      if (error) updatePasswordError = error;
    }

    // 3. Hasil akhir
    if (updateProfileError || updatePasswordError) {
      Swal.fire("Gagal", (updateProfileError || updatePasswordError).message, "error");
    } else {
      Swal.fire("Berhasil", "Data akun berhasil diperbarui!", "success");
      localStorage.setItem("username", formData.username);
      setFormData({ ...formData, oldPassword: "", newPassword: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <Data1 username={formData.username} onChange={handleChange} disabled={true} />
      <Data2 email={formData.email} onChange={handleChange} />
      <Data3 telepon={formData.telepon} onChange={handleChange} />
      <Sandi
        oldPassword={formData.oldPassword}
        newPassword={formData.newPassword}
        onChange={handleChange}
      />
      <Button />
    </form>
  );
};

export default Form;
