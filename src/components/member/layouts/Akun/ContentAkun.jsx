import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import Header from "../../fragments/modulpage/submodul/Header";
import Profile from "../../fragments/Akun/Profile";
import Username from "../../fragments/Akun/Username";
import Form from "../../fragments/Akun/Form";

const ContentAkun = () => {
  const [userData, setUserData] = useState(null);

  const username = localStorage.getItem("username"); // Ambil dari sesi login

  const fetchUserData = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single();

    if (error) {
      console.error("Gagal mengambil data user:", error.message);
    } else {
      setUserData(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!userData) return <div className="ml-64 p-8">Memuat data akun...</div>;

  return (
    <main className="flex-1 p-8 overflow-y-auto ml-64">
      <Header
        title="Akun Saya"
        desc="Kelola data dan informasi akun Anda di sini."
      />

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <Profile />

          <div className="flex-1 w-full">
            <Username name={userData.full_name} email={userData.email} />
            <Form
              username={userData.username}
              email={userData.email}
              telepon={userData.telepon}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContentAkun;
