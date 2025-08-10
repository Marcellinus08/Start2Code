import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import BarPersentase from "../../elements/homepage/BarPersentase";
import StatusPersentase from "../../elements/homepage/StatusPersentase";

const Persentase = () => {
  const [jumlah, setJumlah] = useState("0%");
  const [loading, setLoading] = useState(true);
  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        // 1. Ambil semua tugas dari seluruh submodul
        const { data: tugasData, error: tugasError } = await supabase
          .from("tugas")
          .select("tugas_id");

        // 2. Ambil jawaban tugas dari user
        const { data: jawabanData, error: jawabanError } = await supabase
          .from("jawaban_tugas")
          .select("tugas_id")
          .eq("username", username);

        if (tugasError || jawabanError) {
          console.error("Error:", tugasError || jawabanError);
          return;
        }

        const totalTugas = tugasData.length;
        const totalSelesai = jawabanData.length;
        const persen = totalTugas > 0 ? (totalSelesai / totalTugas) * 100 : 0;

        setJumlah(`${Math.round(persen)}%`);
      } catch (err) {
        console.error("Gagal menghitung progres global:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [username]);

  if (loading) {
    return <p className="text-sm text-gray-500">Menghitung progres...</p>;
  }

  return (
    <div className="mt-4">
      <BarPersentase jumlah={jumlah} />
      <StatusPersentase status={`${jumlah} Selesai`} />
    </div>
  );
};

export default Persentase;
