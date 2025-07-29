import React from "react";
import SidebarLeft from "../../components/layouts/homepage/SidebarLeft";
import Header from "../../components/fragments/modulpage/submodul/Header";
import TanggalKonsultasi from "../../components/fragments/konsultasi/TanggalKonsultasi";
import WaktuKonsultasi from "../../components/fragments/konsultasi/WaktuKonsultasi";
import DeskripsiKonsultasi from "../../components/fragments/konsultasi/DeskripsiKonsultasi";

const Konsultasi = () => {
  return (
    <div className="flex bg-[#F0F9FF] min-h-screen">
      <SidebarLeft />

      <main className="ml-64 flex-1 p-8 overflow-auto w-full">
        <Header
          title="Konsultasi"
          desc="Lakukan konsultasi dengan mentor apabila anda masih bingung."/>

        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TanggalKonsultasi />
            <WaktuKonsultasi />
          </div>

          <DeskripsiKonsultasi />
        </div>
      </main>
    </div>
  );
};

export default Konsultasi;
