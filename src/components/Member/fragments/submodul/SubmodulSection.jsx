import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import SubModulCard from "@/components/member/elements/submodul/SubModulCard";

const SubModulSection = ({ modulName }) => {
  const [submoduls, setSubmoduls] = useState([]);
  const [modulDisplayName, setModulDisplayName] = useState("");

  useEffect(() => {
    const fetchSubmoduls = async () => {
      // Ambil modul_id dan nama lengkap modul
      const { data: modul, error: modulError } = await supabase
        .from("modul")
        .select("modul_id, modul_name")
        .eq("modul_name", decodeURIComponent(modulName))
        .single();

      if (modulError || !modul) {
        console.error("Modul tidak ditemukan:", modulError?.message);
        return;
      }

      setModulDisplayName(modul.modul_name); // untuk ditampilkan

      const { data, error } = await supabase
        .from("submodul")
        .select("*")
        .eq("modul_id", modul.modul_id)
        .order("submodul_id", { ascending: true });

      if (error) {
        console.error("Gagal memuat submodul:", error.message);
      } else {
        setSubmoduls(data);
      }
    };

    fetchSubmoduls();
  }, [modulName]);

  return (
    <section className="mt-10">
      {/* Judul Bagian */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Sub Bab Pembelajaran:
      </h2>

      {/* Grid Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {submoduls.map((submodul, index) => (
          <SubModulCard
            key={submodul.submodul_id}
            number={index + 1}
            title={submodul.submodul_name}
            desc={submodul.submodul_description}
            isLocked={submodul.is_locked}
            id={submodul.submodul_id}
          />
        ))}
      </div>
    </section>
  );
};

export default SubModulSection;
