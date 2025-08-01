import { useState } from "react";
import TabButton from "../../elements/meet/TabButton";
import ScheduleCard from "../../elements/meet/ScheduleCard";

const MeetTabs = () => {
  const [activeTab, setActiveTab] = useState("kelas");

  const data = {
    kelas: {
      mendatang: [
        {
          date: "02",
          month: "AGU",
          year: "2025",
          time: "04:36 - 23:30",
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
          time: "13:00 - 14:30",
          title: "Review Tugas: Pengenalan Algoritma",
          subtitle: "Sub Bab: Pengenalan Algoritma",
          teacher: "Ibu Dini",
          isFinished: true,
          type: "kelas",
        },
        {
          date: "24",
          month: "JUL",
          year: "2025",
          time: "09:00 - 10:30",
          title: "Live Coding: Implementasi Array & Linked List",
          subtitle: "Sub Bab: Pengenalan Algoritma",
          teacher: "Bpk. Reno",
          isFinished: true,
          type: "kelas",
        },
        {
          date: "21",
          month: "JUL",
          year: "2025",
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
          date: "04",
          month: "AGU",
          year: "2025",
          time: "02:00 - 14:30",
          title: "Konsultasi Proyek Akhir",
          subtitle: "Sub Bab: Pengenalan Algoritma",
          teacher: "Ibu Dini",
          joinUrl: "https://zoom.com/konsul",
          type: "konsultasi",
        },
      ],
      selesai: [
        {
          date: "28",
          month: "JUL",
          year: "2025",
          time: "16:00 - 16:30",
          title: "Diskusi Konsep OOP",
          subtitle: "Sub Bab: Pengenalan Algoritma",
          teacher: "Bpk. Reno",
          isFinished: true,
          type: "konsultasi",
        },
        {
          date: "25",
          month: "JUL",
          year: "2025",
          time: "16:00 - 16:30",
          title: "Diskusi Konsep OOP",
          subtitle: "Sub Bab: Pengenalan Algoritma",
          teacher: "Bpk. Reno",
          isFinished: true,
          type: "konsultasi",
        },
        {
          date: "23",
          month: "JUL",
          year: "2025",
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

  const parseDatetime = (sesi) => {
    const [start, end] = sesi.time.split(" - ");
    const monthMap = {
      JAN: 0, FEB: 1, MAR: 2, APR: 3, MEI: 4, JUN: 5,
      JUL: 6, AGU: 7, SEP: 8, OKT: 9, NOV: 10, DES: 11,
    };
    const month = monthMap[sesi.month];
    const date = parseInt(sesi.date);
    const year = parseInt("20" + sesi.year.slice(-2));
    const [startHour, startMin] = start.split(":").map(Number);
    const [endHour, endMin] = end.split(":").map(Number);
    const startTime = new Date(year, month, date, startHour, startMin);
    const endTime = new Date(year, month, date, endHour, endMin);
    const now = new Date();

    return { startTime, endTime, now };
  };

  const enrichSesiList = (list) => {
    return list.map((sesi) => {
      const { startTime, endTime, now } = parseDatetime(sesi);
      const isNow = now >= startTime && now <= endTime;
      const isFinished = now > endTime;
      return {
        ...sesi,
        joinUrl: isNow ? sesi.joinUrl : null,
        isFinished,
      };
    });
  };

  const sesi = {
    mendatang: enrichSesiList(data[activeTab].mendatang).filter((s) => !s.isFinished),
    selesai: [
      ...data[activeTab].selesai,
      ...enrichSesiList(data[activeTab].mendatang).filter((s) => s.isFinished),
    ],
  };

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

      <div>
        <h2 className="text-xl font-bold text-gray-700 mb-5">
          Sesi {activeTab === "kelas" ? "Kelas" : "Konsultasi"} Mendatang
        </h2>
        {sesi.mendatang.length > 0 ? (
          <ScheduleCard sessions={sesi.mendatang} />
        ) : (
          <p className="text-gray-500 italic">
            Tidak ada sesi {activeTab === "kelas" ? "kelas" : "konsultasi"} saat ini.
          </p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-700 mb-5">
          Sesi {activeTab === "kelas" ? "Kelas" : "Konsultasi"} Selesai
        </h2>
        {sesi.selesai.length > 0 ? (
          <ScheduleCard sessions={sesi.selesai} />
        ) : (
          <p className="text-gray-500 italic">
            Belum ada sesi {activeTab === "kelas" ? "kelas selesai" : "konsultasi selesai"} saat ini.
          </p>
        )}
      </div>
    </div>
  );
};

export default MeetTabs;
