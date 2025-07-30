import React from "react";
import ProgressBar from "../../elements/submodul/ProgressBar";

const modulInfo = {
  algoritma: {
    icon: "integration_instructions",
    color: "green",
    title: "Algorithm & Data Structure",
    desc: "Modul ini akan membimbingmu memahami konsep fundamental algoritma dan berbagai struktur data untuk pemecahan masalah yang efektif dan efisien.",
    progress: 10,
  },
  game: {
    icon: "sports_esports",
    color: "pink",
    title: "Game Programming",
    desc: "Pelajari dasar pengembangan game, logika permainan, grafik, dan interaksi pemain.",
    progress: 30,
  },
  web: {
    icon: "code",
    color: "blue",
    title: "Web Programming",
    desc: "Kuasai teknologi web dari frontend hingga backend untuk membangun aplikasi interaktif.",
    progress: 60,
  },
  app: {
    icon: "widgets",
    color: "purple",
    title: "Application Programming",
    desc: "Kembangkan aplikasi desktop atau mobile menggunakan berbagai bahasa dan framework.",
    progress: 25,
  },
  crypto: {
    icon: "enhanced_encryption",
    color: "yellow",
    title: "Crypto Programming",
    desc: "Pahami dasar kriptografi, hashing, dan teknik pengamanan digital.",
    progress: 5,
  },
  hardware: {
    icon: "memory",
    color: "teal",
    title: "Basic Hardware Programming",
    desc: "Pelajari cara perangkat lunak berinteraksi dengan hardware menggunakan pemrograman tingkat rendah.",
    progress: 0,
  },
};

const TentangModul = ({ slug }) => {
  const data = modulInfo[slug];

  if (!data) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <span className={`material-icons text-${data.color}-500 text-4xl mr-4`}>
          {data.icon}
        </span>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {data.title}
          </h3>
          <p className="text-sm text-gray-600">{data.desc}</p>
        </div>
      </div>

      <ProgressBar percent={data.progress} color={data.color} />
    </div>
  );
};

export default TentangModul;
