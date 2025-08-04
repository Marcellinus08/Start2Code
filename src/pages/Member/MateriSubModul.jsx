import MateriLayout from "@/components/Member/layouts/materisubmodul/MateriLayout";
import React from "react";
import SidebarLeft from "@/components/member/layouts/homepage/SidebarLeft";


const MateriSubModul = () => {
  return (
    <div className="flex min-h-screen">
      <SidebarLeft />
      <MateriLayout />
    </div>
    );  
};

export default MateriSubModul;
