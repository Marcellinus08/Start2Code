import React, { useState } from "react";
import SidebarLeft from "../homepage/SidebarLeft";
import Header from "../../fragments/modulpage/submodul/Header";
import TabNavigation from "../../fragments/materisubmodul/TabNavigation";
import MateriKonten from "../../fragments/materisubmodul/MateriKonten";

const MateriLayout = () => {
  const [activeTab, setActiveTab] = useState("materi");

  return (
    <div className="flex min-h-screen bg-[#F0F9FF]">
      <SidebarLeft />

      <main className="ml-64 flex-1 overflow-y-auto px-8 py-8">
        <Header
          title="Algorithm & Data Structure"
          desc="Pahami konsep fundamental algoritma dan berbagai struktur data."
        />

        <section className="mt-6 bg-white p-6 rounded-xl card-shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            Sub Bab: Pengenalan Algoritma
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Selamat datang di sub bab pertama! Mari kita mulai.
          </p>

          <TabNavigation activeTab={activeTab} onChangeTab={setActiveTab} />

          {activeTab === "materi" && <MateriKonten />}
          {activeTab === "tugas" && (
            <div className="text-gray-600 italic">
              Konten tugas akan ditampilkan di sini.
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default MateriLayout;
