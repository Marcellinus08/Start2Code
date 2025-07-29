import React from "react";
import ProgressBar from "../../elements/submodul/ProgressBar";

const TentangModul = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <span className="material-icons text-green-500 text-4xl mr-4">
          integration_instructions
        </span>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Tentang Modul Ini
          </h3>
          <p className="text-sm text-gray-600">
            Modul ini akan membimbingmu memahami konsep fundamental algoritma
            dan berbagai struktur data untuk pemecahan masalah yang efektif dan
            efisien dalam pemrograman.
          </p>
        </div>
      </div>
      <ProgressBar percent={10} />
    </div>
  );
};

export default TentangModul;
