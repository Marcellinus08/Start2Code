import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/supabaseClient";
import ProgressBar from "../../elements/submodul/ProgressBar";

const TentangModul = () => {
  const { modulName } = useParams(); // menangkap nama modul dari URL
  const [modul, setModul] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!modulName) return;

    const fetchModul = async () => {
      try {
        const { data, error } = await supabase
          .from("modul")
          .select("*")
          .eq("modul_name", decodeURIComponent(modulName))
          .single();

        if (error || !data) throw error;
        setModul(data);
      } catch (err) {
        console.error("Gagal mengambil data modul:", err.message);
        setError("Gagal mengambil data modul.");
      } finally {
        setLoading(false);
      }
    };

    fetchModul();
  }, [modulName]);

  if (loading) return <p className="text-gray-500">Memuat data modul...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!modul) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6 flex flex-col gap-4">
      <div className="flex items-start md:items-center gap-4">
        <span
          className="material-icons text-4xl"
          style={{ color: modul.color }}
        >
          {modul.icon}
        </span>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            {modul.modul_name}
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
