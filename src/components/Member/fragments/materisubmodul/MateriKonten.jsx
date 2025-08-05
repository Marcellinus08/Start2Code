import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/supabaseClient";
import TitleMateri from "../../elements/materisubmodul/TitleMateri";
import MateriText from "../../elements/materisubmodul/MateriText";
import NavigationButton from "../../elements/materisubmodul/NavigationButton";

const MateriKonten = ({ activeTab }) => {
  const { submodulId } = useParams();
  const [materi, setMateri] = useState(null);
  const [tugas, setTugas] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!submodulId) return;

    const fetchData = async () => {
      setLoading(true);

      // Ambil data materi
      const { data: materiData, error: materiError } = await supabase
        .from("materi")
        .select("*")
        .eq("submodul_id", submodulId)
        .order("created_at", { ascending: true })
        .limit(1)
        .single();

      // Ambil data tugas
      const { data: tugasData, error: tugasError } = await supabase
        .from("tugas")
        .select("*")
        .eq("submodul_id", submodulId)
        .order("created_at", { ascending: true })
        .limit(1)
        .single();

      if (materiError) console.error("❌ Gagal ambil materi:", materiError.message);
      if (tugasError) console.error("❌ Gagal ambil tugas:", tugasError.message);

      setMateri(materiData);
      setTugas(tugasData);
      setLoading(false);
    };

    fetchData();
  }, [submodulId]);

  const handlePrev = () => console.log("⬅️ Halaman sebelumnya");
  const handleNext = () => console.log("➡️ Halaman selanjutnya");

  if (loading) return <p className="text-gray-500 italic">Memuat konten...</p>;

  return (
    <div className="space-y-6">
      {activeTab === "materi" && materi ? (
        <>
          <TitleMateri title={materi.materi_title} />
          <MateriText>{materi.materi_content}</MateriText>
          <NavigationButton onPrev={handlePrev} onNext={handleNext} />
        </>
      ) : activeTab === "tugas" && tugas ? (
        <>
          <TitleMateri title={tugas.tugas_title} />
          <MateriText>{tugas.tugas_content}</MateriText>
          <NavigationButton onPrev={handlePrev} onNext={handleNext} />
        </>
      ) : (
        <p className="text-gray-500 italic">
          Konten belum tersedia untuk submodul ini.
        </p>
      )}
    </div>
  );
};

export default MateriKonten;
