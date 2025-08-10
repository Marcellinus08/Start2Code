import { useNavigate } from "react-router-dom";
import { supabase } from "@/supabaseClient";
import Swal from "sweetalert2";
import SidebarListLeft from "../../../member/fragments/homepage/SidebarListLeft";

const SidebarMentor = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Apakah kamu yakin ingin keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Keluar",
      cancelButtonText: "Batal",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      const username = localStorage.getItem("username");
      if (!username) {
        return Swal.fire("Gagal", "Username tidak ditemukan di sesi", "error");
      }

      const { error } = await supabase.from("aktivitas").insert({
        username,
        aksi: "logout",
        waktu: new Date().toISOString(),
      });

      if (error) {
        console.error("Insert error:", error.message);
        return Swal.fire("Gagal", error.message, "error");
      }

      localStorage.removeItem("username");
      navigate("/");
    }
  };

  return (
    <aside className="w-64 bg-white shadow-lg p-6 h-screen fixed top-0 left-0 flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-2 mb-5">
          <img alt="Start2Code Logo" src="../assets/logo.png" />
        </div>
        <nav className="space-y-2">
          <SidebarListLeft jenis="event" name="Jadwal Kelas" to="/mentor" />
          <SidebarListLeft jenis="headset_mic" name="Konsultasi" to="/konsultasi_mentor" />
          <SidebarListLeft jenis="bar_chart" name="Progres Member" to="/progres_mentor" />
          <SidebarListLeft jenis="forum" name="Forum Diskusi" to="/forum_mentor" />
          <SidebarListLeft jenis="video_library" name="Rekaman Sesi" to="/rekaman_mentor" />
        </nav>
      </div>
      <div>
        <nav>
          <SidebarListLeft jenis="account_circle" name="Akun" to="/akun" />
          <SidebarListLeft
            jenis="logout"
            name="Keluar"
            onClick={handleLogout}
            now="mt-2 text-red-500 hover:bg-red-100 hover:text-red-600"
            noActive={true}
          />
        </nav>
      </div>
    </aside>
  );
};

export default SidebarMentor;
