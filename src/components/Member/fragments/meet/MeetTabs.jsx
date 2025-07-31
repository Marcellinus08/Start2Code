import { useState } from "react";
import TabButton from "../../elements/meet/TabButton";
import ScheduleCard from "../../elements/meet/ScheduleCard";

const MeetTabs = () => {
  const [activeTab, setActiveTab] = useState("kelas");

  const data = {
    kelas: {
      mendatang: [
        {
          date: "05",
          month: "AGU",
          year: "2025",
          day: "Selasa",
          time: "10:00 - 11:30",
          title: "Sesi Tanya Jawab: Struktur Data Lanjutan",
          subtitle: "Sub Bab: Pengenalan Algoritma",
          teacher: "Bpk. Reno",
          joinUrl: "https://zoom.com/meet1",
          type: "kelas",
        },
      ],
      selesai: [
        {
          date: "29",
          month: "JUL",
          year: "2025",
          day: "Senin",
          time: "13:00 - 14:30",
          title: "Review Tugas: Pengenalan Algoritma",
          subtitle: "Sub Bab: Pengenalan Algoritma",
          teacher: "Ibu Dini",
          isFinished: true,
          type: "kelas",
        },
        {
          date: "25",
          month: "JUL",
          year: "2025",
          day: "Kamis",
          time: "09:00 - 10:30",
          title: "Live Coding: Implementasi Array & Linked List",
          subtitle: "Sub Bab: Pengenalan Algoritma",
          teacher: "Bpk. Reno",
          isFinished: true,
          type: "kelas",
        },
        {
          date: "25",
          month: "JUL",
          year: "2025",
          day: "Kamis",
          time: "09:00 - 10:30",
          title: "Live Coding: Implementasi Array & Linked List",
          subtitle: "Sub Bab: Pengenalan Algoritma",
          teacher: "Bpk. Reno",
          isFinished: true,
          type: "kelas",
        },
      ],
    },
    konsultasi: {
      mendatang: [
        {
          date: "06",
          month: "AGU",
          year: "2025",
          day: "Rabu",
          time: "14:00 - 14:30",
          title: "Konsultasi Proyek Akhir",
          subtitle: "Sub Bab: Pengenalan Algoritma",
          teacher: "Ibu Dini",
          type: "konsultasi",
        },
      ],
      selesai: [
        {
          date: "28",
          month: "JUL",
          year: "2025",
          day: "Minggu",
          time: "16:00 - 16:30",
          title: "Diskusi Konsep OOP",
          subtitle: "Sub Bab: Pengenalan Algoritma",
          teacher: "Bpk. Reno",
          isFinished: true,
          type: "konsultasi",
        },
        {
          date: "28",
          month: "JUL",
          year: "2025",
          day: "Minggu",
          time: "16:00 - 16:30",
          title: "Diskusi Konsep OOP",
          subtitle: "Sub Bab: Pengenalan Algoritma",
          teacher: "Bpk. Reno",
          isFinished: true,
          type: "konsultasi",
        },
        {
          date: "28",
          month: "JUL",
          year: "2025",
          day: "Minggu",
          time: "16:00 - 16:30",
          title: "Diskusi Konsep OOP",
          subtitle: "Sub Bab: Pengenalan Algoritma",
          teacher: "Bpk. Reno",
          isFinished: true,
          type: "konsultasi",
        },
      ],
    },
  };

  const sesi = data[activeTab];

  return (
    <div className="space-y-12">
      <div className="flex space-x-4">
        <TabButton active={activeTab === "kelas"} onClick={() => setActiveTab("kelas")}>
          Kelas
        </TabButton>
        <TabButton active={activeTab === "konsultasi"} onClick={() => setActiveTab("konsultasi")}>
          Konsultasi
        </TabButton>
      </div>

      <ScheduleCard
        title={`Sesi ${activeTab === "kelas" ? "Kelas" : "Konsultasi"} Mendatang`}
        sessions={sesi.mendatang}
      />

      <ScheduleCard
        title={`Sesi ${activeTab === "kelas" ? "Kelas" : "Konsultasi"} Selesai`}
        sessions={sesi.selesai}
      />
    </div>
  );
};

export default MeetTabs;
