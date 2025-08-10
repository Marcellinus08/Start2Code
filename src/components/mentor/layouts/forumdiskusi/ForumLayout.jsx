import React from "react";
import SidebarMentor from "../../fragments/jadwalkelas/SidebarMentor";
import Header from "../../../member/fragments/homepage/Header";

const ForumLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#F0F9FF]">
      <SidebarMentor />
      <main className="ml-64 flex-1 overflow-hidden px-8 py-8 h-screen">
        <Header
          hello="Forum Diskusi"
          letsgo="Diskusi dengan member. Balas, tandai penting, dan kelola obrolan."
        />
        {children}
      </main>
    </div>
  );
};

export default ForumLayout;
