import React from "react";
import { useParams } from "react-router-dom";
import SubmodulLayout from "@/components/member/layouts/submodul/SubmodulLayout";
import TentangModul from "@/components/member/fragments/submodul/TentangModul";
import SubModulSection from "@/components/member/fragments/submodul/SubmodulSection";
import SidebarLeft from "@/components/member/layouts/homepage/SidebarLeft";

const SubModul = () => {
  const { modulName } = useParams(); // ambil modul_name dari URL

  return (
    <div>
    <SidebarLeft />
    <SubmodulLayout>
      <TentangModul modulName={modulName} />
      <SubModulSection modulName={modulName} />
    </SubmodulLayout>
    </div>
  );
};

export default SubModul;
