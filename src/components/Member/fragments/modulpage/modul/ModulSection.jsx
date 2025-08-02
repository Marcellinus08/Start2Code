import ContentCard from "../../../elements/modulpembelajaran/modul/ContentCard";
import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";

const ModulSection = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true); // optional loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("modul")
        .select("modul_name, modul_description, icon, color");

      if (error) {
        console.error("Gagal mengambil modul:", error);
        setError("Gagal memuat modul. Silakan coba lagi nanti.");
      } else {
        setModules(data || []);
      }

      setLoading(false);
    };

    fetchModules();
  }, []);

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "") // hapus karakter khusus
      .replace(/\s+/g, "-"); // ubah spasi jadi dash
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
