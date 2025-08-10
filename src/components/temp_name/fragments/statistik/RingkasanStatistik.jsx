import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import StatCard from "../../elements/statistik/StatCard";

const RingkasanStatistik = () => {
  const username = localStorage.getItem("username");
  const [selesai, setSelesai] = useState(0);
  const [total, setTotal] = useState(0);
  const [lencana, setLencana] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatistik = async () => {
      setLoading(true);

      // 1. Ambil semua tugas + submodul
      const { data: tugasData, error: tugasError } = await supabase
        .from("tugas")
        .select("tugas_id, submodul_id, submodul(modul_id)");

      // 2. Ambil semua jawaban user
      const { data: jawabanData, error: jawabanError } = await supabase
        .from("jawaban_tugas")
        .select("tugas_id")
        .eq("username", username);

      if (tugasError || jawabanError) {
        console.error("Gagal ambil data:", tugasError || jawabanError);
        setLoading(false);
        return;
      }

      const totalTugas = tugasData.length;
      const tugasSelesai = tugasData.filter((tugas) =>
        jawabanData.some((jawab) => jawab.tugas_id === tugas.tugas_id)
      );

      // Hitung total & selesai
      setTotal(totalTugas);
      setSelesai(tugasSelesai.length);

      // 3. Hitung lencana berdasarkan modul
      const modulMap = new Map(); // modul_id -> { total, selesai }

      tugasData.forEach((tugas) => {
        const modulId = tugas.submodul?.modul_id;
        if (!modulId) return;

        if (!modulMap.has(modulId)) {
          modulMap.set(modulId, { total: 0, selesai: 0 });
        }
        modulMap.get(modulId).total++;
      });

      tugasSelesai.forEach((tugas) => {
        const modulId = tugas.submodul?.modul_id;
        if (!modulId || !modulMap.has(modulId)) return;

        modulMap.get(modulId).selesai++;
      });

      let lencanaCount = 0;
      modulMap.forEach(({ total, selesai }) => {
        if (total > 0 && selesai === total) lencanaCount++;
      });

      setLencana(lencanaCount);
      setLoading(false);
    };

    fetchStatistik();
  }, [username]);

  const tingkatSelesai = total > 0 ? Math.round((selesai / total) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
      <StatCard
        icon="school"
        color="text-blue-500"
        value={loading ? "..." : selesai}
        label="Total Sub Modul Selesai"
      />
      <StatCard
        icon="timer"
        color="text-green-500"
        value="0 Jam" // opsional: bisa dibuat dinamis juga nanti
        label="Total Waktu Belajar"
      />
      <StatCard
        icon="military_tech"
        color="text-yellow-500"
        value={loading ? "..." : lencana}
        label="Lencana Keahlian"
      />
      <StatCard
        icon="task_alt"
        color="text-purple-500"
        value={loading ? "..." : `${tingkatSelesai}%`}
        label="Tingkat Penyelesaian"
      />
    </div>
  );
};

export default RingkasanStatistik;
