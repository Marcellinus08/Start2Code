import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/supabaseClient";
import ProgressBar from "../../elements/submodul/ProgressBar";

const TentangModul = () => {
  const { modulName } = useParams();
  const username = localStorage.getItem("username");
  const [modul, setModul] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!modulName || !username) return;

    const fetchModulProgress = async () => {
      try {
        // 1. Ambil data modul berdasarkan nama
        const { data: modulData, error: modulError } = await supabase
          .from("modul")
          .select("modul_id, modul_name, modul_description, icon, color")
          .eq("modul_name", decodeURIComponent(modulName))
          .single();

        if (modulError || !modulData) throw modulError;

        const modulId = modulData.modul_id;

        // 2. Ambil data semua tugas dan relasi ke submodul
        const { data: tugasData, error: tugasError } = await supabase
          .from("tugas")
          .select("tugas_id, submodul(modul_id)");

        if (tugasError) throw tugasError;

        // 3. Filter hanya tugas yang submodul-nya milik modul ini
        const tugasModul = tugasData.filter(
          (t) => t.submodul && t.submodul.modul_id === modulId
        );

        // 4. Ambil jawaban user berdasarkan username
        const { data: jawabanData, error: jawabanError } = await supabase
          .from("jawaban_tugas")
          .select("tugas_id")
          .eq("username", username);

        if (jawabanError) throw jawabanError;

        // 5. Hitung progress
        const jumlahTugas = tugasModul.length;
        const tugasSelesai = tugasModul.filter((t) =>
          jawabanData.some((j) => j.tugas_id === t.tugas_id)
        ).length;

        const percent = jumlahTugas > 0 ? (tugasSelesai / jumlahTugas) * 100 : 0;

        setModul({
          ...modulData,
          progress: Math.round(percent),
        });
      } catch (err) {
        console.error("Gagal mengambil data modul:", err.message);
        setError("Gagal mengambil data modul.");
      } finally {
        setLoading(false);
      }
    };

    fetchModulProgress();
  }, [modulName, username]);

  if (loading) return <p className="text-gray-500">Memuat data modul...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!modul) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6 flex flex-col gap-4">
      <div className="flex items-start md:items-center gap-4">
        <span
          className="material-icons text-6xl"
          style={{ color: modul.color }}
        >
          {modul.icon}
        </span>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            Tentang Modul ini
          </h3>
          <p className="text-sm md:text-base text-gray-600">
            {modul.modul_description}
          </p>
        </div>
      </div>

      <div className="mt-2">
        <ProgressBar percent={modul.progress || 0} color={modul.color} />
      </div>
    </div>
  );
};

export default TentangModul;
