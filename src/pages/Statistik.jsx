import React from "react";
import SidebarLeft from "../components/layouts/homepage/SidebarLeft";
import Header from "../components/fragments/modulpage/submodul/Header";
import StatistikModul from "../components/fragments/statistik/StatistikModul";
import PieChart from "../components/elements/statistik/PieChart";
import AktivitasTerbaru from "../components/fragments/statistik/AktivitasTerbaru";
import StatCard from "../components/elements/statistik/StatCard";

const Statistik = () => {
  return (
    <div className="flex min-h-screen bg-[#F0F9FF]">
      <SidebarLeft />
      <main className="ml-64 flex-1 p-8 overflow-auto w-full">
        <Header
          title="Statistik Pembelajaran"
          desc="Lihat statistik perjalanan pembelajaranmu."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

          <div className="lg:col-span-2 space-y-6">
            <StatistikModul />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
              <StatCard icon="school" color="text-blue-600" value="125" label="Total Sub Modul Selesai" />
              <StatCard icon="timer" color="text-green-600" value="82 Jam" label="Total Waktu Belajar" />
              <StatCard icon="military_tech" color="text-yellow-500" value="5" label="Lencana Keahlian" />
              <StatCard icon="check_circle" color="text-purple-600" value="95%" label="Tingkat Penyelesaian" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Distribusi Sub Modul</h3>
              <PieChart total={125} />
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-gray-600">Dasar Web (60%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
                  <span className="text-gray-600">Javascript (30%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <span className="text-gray-600">React JS (10%)</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <AktivitasTerbaru />
            </div>

            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition">
              <span className="material-icons align-middle mr-2">download</span>
              Unduh Statistik
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Statistik;
