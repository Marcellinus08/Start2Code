import { useState } from "react";
import SidebarMentor from "../../fragments/jadwalkelas/SidebarMentor";
import Header from "../../../member/fragments/homepage/Header";
import KonsultasiList from "../../fragments/konsultasi/KonsultasiList";

const KonsultasiLayout = () => {
  const [items, setItems] = useState([
    {
      id: "K-1001",
      member: "Andi Pratama",
      topik: "Konsultasi Proyek Akhir",
      tanggal: "2025-08-10",
      jam: "13:00 – 14:00",
      catatan: "Butuh review arsitektur.",
      status: "pending",
    },
    {
      id: "K-1002",
      member: "Budi Santoso",
      topik: "Debugging API",
      tanggal: "2025-08-10",
      jam: "15:30 – 16:00",
      status: "accepted",
    },
    {
      id: "K-1003",
      member: "Citra Lestari",
      topik: "Bahas UI/UX",
      tanggal: "2025-08-09",
      jam: "10:00 – 10:30",
      status: "declined",
    },
    {
      id: "K-1004",
      member: "Dewi Puspa",
      topik: "Final Check",
      tanggal: "2025-08-01",
      jam: "09:00 – 09:30",
      status: "done",
    },
  ]);

  return (
    <div className="flex min-h-screen bg-[#F0F9FF]">
      <SidebarMentor />

      <main className="ml-64 flex-1 overflow-y-auto px-8 py-8">
        <Header
          hello="Konsultasi"
          letsgo="Kelola permintaan konsultasi: terima/tolak, jadwalkan ulang, dan mulai sesi."
        />

        <KonsultasiList items={items} setItems={setItems} />
      </main>
    </div>
  );
};

export default KonsultasiLayout;
