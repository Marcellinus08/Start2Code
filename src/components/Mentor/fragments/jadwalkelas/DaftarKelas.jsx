import React from "react";
import KelasCard from "../../elements/jadwalkelas/KelasCard";


const DaftarKelas = ({ kelasList, handleMulai, handleEdit }) => {
  return (
    <div className="mt-6">
      {kelasList.length === 0 ? (
        <p className="text-gray-500">Belum ada jadwal kelas minggu ini.</p>
      ) : (
        kelasList.map((kelas, i) => (
          <KelasCard
            key={i}
            {...kelas}
            onMulai={() => handleMulai(kelas)}
            onEdit={() => handleEdit(kelas)}
          />
        ))
      )}
    </div>
  );
};

export default DaftarKelas;
