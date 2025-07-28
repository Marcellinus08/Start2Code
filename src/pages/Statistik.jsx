import React from "react";
import SidebarLeft from "../components/layouts/homepage/SidebarLeft";
import Header from "../components/fragments/modulpage/submodul/Header";
import StatistikLayout from "../components/layouts/statistik/StatistikLayout";

const Statistik = () => {
  return (
    <div className="flex min-h-screen bg-[#F0F9FF]">
      <SidebarLeft />
      <main className="ml-64 flex-1 p-8 overflow-auto w-full">
        <Header
          title="Statistik Pembelajaran"
          desc="Lihat statistik perjalanan pembelajaranmu."
        />
        <StatistikLayout />
      </main>
    </div>
  );
};

export default Statistik;
