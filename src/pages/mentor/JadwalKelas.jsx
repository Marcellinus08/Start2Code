import DaftarKelas from "@/components/mentor/fragments/jadwalkelas/DaftarKelas";
import EditKelasModal from "@/components/mentor/fragments/jadwalkelas/EditKelasModal";
import FormTambahKelas from "@/components/mentor/fragments/jadwalkelas/FormTambahKelas";
import JadwalLayout from "@/components/mentor/layouts/jadwalkelas/JadwalLayout";
import React, { useState } from "react";


const JadwalKelas = () => {
  const [kelasList, setKelasList] = useState([]);
  const [editData, setEditData] = useState(null);

  const tambahKelas = (kelasBaru) => {
    setKelasList([...kelasList, kelasBaru]);
  };

  const mulaiKelas = (kelas) => {
    alert(`Mulai kelas untuk modul ${kelas.modul}`);
  };

  const editKelas = (kelas) => {
    setEditData(kelas);
  };

  const updateKelas = (updated) => {
    setKelasList((prev) =>
      prev.map((item) =>
        item === editData ? updated : item
      )
    );
    setEditData(null);
  };

  return (
    <JadwalLayout>
      <FormTambahKelas onSubmit={tambahKelas} />
      <DaftarKelas kelasList={kelasList} handleMulai={mulaiKelas} handleEdit={editKelas} />
      <EditKelasModal
        isOpen={!!editData}
        onClose={() => setEditData(null)}
        data={editData}
        onUpdate={updateKelas}
      />
    </JadwalLayout>
  );
};

export default JadwalKelas;
