import ContentCard from "../../../elements/modulpembelajaran/modul/ContentCard";
import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";

const ModulSection = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = localStorage.getItem("username"); // ✅ ambil dari localStorage

  useEffect(() => {
    const fetchModules = async () => {
      setLoading(true);

      // ✅ 1. Ambil data modul
      const { data: modulData, error: modulError } = await supabase
        .from("modul")
        .select("modul_id, modul_name, modul_description, icon, color");

      // ✅ 2. Ambil data tugas + relasi submodul → modul
      const { data: tugasData, error: tugasError } = await supabase
        .from("tugas")
        .select("tugas_id, submodul_id, submodul(modul_id)");

      // ✅ 3. Ambil data jawaban berdasarkan username
      const { data: jawabanData, error: jawabanError } = await supabase
        .from("jawaban_tugas")
        .select("tugas_id")
        .eq("username", username);

      if (modulError || tugasError || jawabanError) {
        console.error("Gagal fetch:", modulError || tugasError || jawabanError);
        setError("Gagal memuat data modul.");
        setLoading(false);
        return;
      }

      // ✅ 4. Hitung progress untuk setiap modul
      const modulesWithProgress = modulData.map((modul) => {
        const tugasModul = tugasData.filter(
          (t) => t.submodul && t.submodul.modul_id === modul.modul_id
        );
        const jumlahTugas = tugasModul.length;

        const tugasSelesai = tugasModul.filter((t) =>
          jawabanData.find((j) => j.tugas_id === t.tugas_id)
        ).length;

        const percent = jumlahTugas > 0 ? (tugasSelesai / jumlahTugas) * 100 : 0;

        return {
          ...modul,
          progress: Math.round(percent), // progress dibulatkan
        };
      });

      setModules(modulesWithProgress);
      setLoading(false);
    };

    fetchModules();
  }, [username]);

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");
  };

  return (
    <section className="mb-10 rounded-xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Modul Saya</h3>

      {loading ? (
        <p className="text-gray-500">Memuat modul...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : modules.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((modul, i) => (
            <ContentCard
              key={i}
              title={modul.modul_name}
              icon={modul.icon}
              desc={modul.modul_description}
              progress={modul.progress || 0}
              color={modul.color}
              to={`/submodul/${encodeURIComponent(modul.modul_name)}`}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Belum ada modul yang tersedia.</p>
      )}
    </section>
  );
};

export default ModulSection;
