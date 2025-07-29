import React from "react";
import SubmodulLayout from "@/components/Member/layouts/submodul/SubmodulLayout";
import TentangModul from "@/components/Member/fragments/submodul/TentangModul";
import SubModulSection from "@/components/Member/fragments/submodul/SubModulSection";

const SubModul = () => {
  return (
    <SubmodulLayout>
      <TentangModul />
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Sub Bab Pembelajaran
        </h2>
        <SubModulSection />
      </div>
    </SubmodulLayout>
  );
};

export default SubModul;
