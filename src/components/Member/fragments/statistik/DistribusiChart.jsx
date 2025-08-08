import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import PieChart from "../../elements/statistik/PieChart";

const DistribusiChart = () => {
  const [totalSubmodul, setTotalSubmodul] = useState(0);
  const [selesai, setSelesai] = useState(0);
  const [loading, setLoading] = useState(true);

  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // 1. Ambil semua tugas + relasi submodul
      const { data: tugasData, error: tugasError } = await supabase
        .from("tugas")
        .select("tugas_id, submodul_id");

      // 2. Ambil semua jawaban user
      const { data: jawabanData, error: jawabanError } = await supabase
        .from("jawaban_tugas")
        .select("tugas_id")
        .eq("username", username);

      if (tugasError || jawabanError) {
        console.error("Error fetching data:", tugasError || jawabanError);
        setLoading(false);
        return;
      }

      const total = tugasData.length;
      const tugasSelesai = tugasData.filter((tugas) =>
        jawabanData.some((j) => j.tugas_id === tugas.tugas_id)
      ).length;

      setTotalSubmodul(total);
      setSelesai(tugasSelesai);
      setLoading(false);
    };

    fetchData();
  }, [username]);

  const belum = totalSubmodul - selesai;
  const percent = totalSubmodul > 0 ? Math.round((selesai / totalSubmodul) * 100) : 0;

  const dataChart = [
    { label: "Selesai", value: selesai, percent, color: "#2563eb" },
    { label: "Belum", value: belum, percent: 100 - percent, color: "#e5e7eb" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Progress Sub Modul</h3>

      {loading ? (
        <p className="text-gray-500">Memuat data...</p>
      ) : (
        <>
          <PieChart data={dataChart} total={totalSubmodul} />

          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <p>Total Sub Modul: <strong>{totalSubmodul}</strong></p>
            <p>Sudah Selesai: <strong>{selesai}</strong></p>
          </div>
        </>
      )}
    </div>
  );
};

export default DistribusiChart;
