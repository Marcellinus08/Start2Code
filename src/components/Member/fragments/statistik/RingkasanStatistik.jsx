import React from "react";
import StatCard from "../../elements/statistik/StatCard";

const RingkasanStatistik = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
    <StatCard icon="school" color="text-blue-500" value="125" label="Total Sub Modul Selesai" />
    <StatCard icon="timer" color="text-green-500" value="82 Jam" label="Total Waktu Belajar" />
    <StatCard icon="military_tech" color="text-yellow-500" value="5" label="Lencana Keahlian" />
    <StatCard icon="task_alt" color="text-purple-500" value="95%" label="Tingkat Penyelesaian" />
  </div>
);

export default RingkasanStatistik;