import React, { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import ProgressBar from "../../elements/statistik/ProgressBar";

const StatistikModul = ({ username }) => {
  const [modules, setModules] = useState([]);
  const [tugas, setTugas] = useState([]);
  const [jawaban, setJawaban] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, [username]);

  const fetchAllData = async () => {
    // Get all modul
    const { data: modulData, error: modulError } = await supabase
      .from("modul")
      .select("modul_id, modul_name, color");

    // Get all tugas (with modul_id via submodul)
    const { data: tugasData, error: tugasError } = await supabase
      .from("tugas")
      .select("tugas_id, submodul_id, submodul(modul_id)");

    // Get all jawaban_tugas by username
    const { data: jawabanData, error: jawabanError } = await supabase
      .from("jawaban_tugas")
      .select("tugas_id")
      .eq("username", username);

    if (modulError || tugasError || jawabanError) {
      console.error("Error fetching data:", modulError || tugasError || jawabanError);
      return;
    }

    setModules(modulData);
    setTugas(tugasData);
    setJawaban(jawabanData);
  };

  // Fungsi hitung progress per modul
  const calculateProgress = (modul_id) => {
    const tugasModul = tugas.filter(
      (t) => t.submodul && t.submodul.modul_id === modul_id
    );
    const jumlahTugas = tugasModul.length;

    const tugasSelesai = tugasModul.filter((t) =>
      jawaban.find((j) => j.tugas_id === t.tugas_id)
    ).length;

    const percent = jumlahTugas > 0 ? (tugasSelesai / jumlahTugas) * 100 : 0;
    return percent;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Modul Selesai</h3>
      <div className="space-y-4">
        {modules.map((modul) => {
          const percentage = calculateProgress(modul.modul_id);
          return (
            <ProgressBar
              key={modul.modul_id}
              label={modul.modul_name}
              percentage={percentage}
              color={modul.color || "text-gray-500"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StatistikModul;
