import React from "react";
import SidebarLeft from "@/components/member/layouts/homepage/SidebarLeft";
import Header from "@/components/member/fragments/modulpage/submodul/Header";

const SubmodulLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#F0F9FF]">
      <SidebarLeft />
      <main className="ml-64 flex-1 overflow-auto px-8 py-8">
        <Header
          title="Algorithm & Data Structure"
          desc="Pahami konsep fundamental algoritma dan berbagai struktur data."
        />
        <div className="space-y-8">{children}</div>
      </main>
    </div>
  );
};

export default SubmodulLayout;
