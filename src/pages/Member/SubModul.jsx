import React from "react";
import { useParams } from "react-router-dom";
import SubmodulLayout from "@/components/Member/layouts/submodul/SubmodulLayout";
import TentangModul from "@/components/Member/fragments/submodul/TentangModul";
import SubModulSection from "@/components/Member/fragments/submodul/SubModulSection";

const modulInfo = {
  algoritma: {
    title: "Algorithm & Data Structure",
    desc: "Pahami konsep fundamental algoritma dan berbagai struktur data.",
  },
  game: {
    title: "Game Programming",
    desc: "Pelajari dasar pengembangan game dan logika permainan.",
  },
  web: {
    title: "Web Programming",
    desc: "Kuasai teknologi web dari frontend hingga backend.",
  },
  app: {
    title: "Application Programming",
    desc: "Kembangkan aplikasi desktop atau mobile.",
  },
  crypto: {
    title: "Crypto Programming",
    desc: "Pahami dasar kriptografi dan pengamanan digital.",
  },
  hardware: {
    title: "Basic Hardware Programming",
    desc: "Pelajari cara software berinteraksi dengan hardware.",
  },
};

const SubModul = () => {
  const { slug } = useParams();
  const { title, desc } = modulInfo[slug] || {
    title: "Sub Modul",
    desc: "Deskripsi tidak tersedia.",
  };

  return (
    <SubmodulLayout title={title} desc={desc}>
      <TentangModul slug={slug} />
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Sub Bab Pembelajaran: {slug?.replace("-", " ")}
        </h2>
        <SubModulSection slug={slug} />
      </div>
    </SubmodulLayout>
  );
};

export default SubModul;
