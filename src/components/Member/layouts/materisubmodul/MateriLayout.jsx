import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarLeft from "../homepage/SidebarLeft";
import Header from "../../fragments/modulpage/submodul/Header";
import TabNavigation from "../../fragments/materisubmodul/TabNavigation";
import MateriKonten from "../../fragments/materisubmodul/MateriKonten";
import { supabase } from "@/supabaseClient";

const MateriLayout = () => {
  const { submodulId } = useParams(); // Ambil dari URL /materi/:submodulId
  const [activeTab, setActiveTab] = useState("materi");
  const [modul, setModul] = useState(null);
  const [submodul, setSubmodul] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModulBySubmodul = async () => {
      try {
        // 1. Ambil submodul lengkap (bukan cuma modul_id)
        const { data: submodulData, error: submodulError } = await supabase
          .from("submodul")
          .select("*")
          .eq("submodul_id", submodulId)
          .single();

        if (submodulError || !submodulData) {
          console.error("❌ Gagal ambil submodul:", submodulError?.message);
          setLoading(false);
          return;
        }

        setSubmodul(submodulData); // simpan submodul

        // 2. Ambil modul berdasarkan modul_id dari submodul
        const { data: modulData, error: modulError } = await supabase
          .from("modul")
          .select("*")
          .eq("modul_id", submodulData.modul_id)
          .single();

        if (modulError || !modulData) {
          console.error("❌ Gagal ambil modul:", modulError?.message);
        } else {
          setModul(modulData); // simpan modul
        }
      } catch (error) {
        console.error("❌ Error umum:", error.message);
      } finally {
        setLoading(false);
      }
    };

    if (submodulId) {
      fetchModulBySubmodul();
    }
  }, [submodulId]);

  if (loading) return <div className="ml-64 p-8 text-gray-600">Memuat konten...</div>;
  if (!modul || !submodul)
    return <div className="ml-64 p-8 text-red-500">Modul/Submodul tidak ditemukan.</div>;

  return (
    <div className="flex-1 mx-8 pl-64  py-8 overflow-y-auto w-full bg-[#F0F9FF]">
      <SidebarLeft />

      <main className="">
        <Header
          title={modul.modul_name}
          desc="Pahami konsep fundamental algoritma dan berbagai struktur data."
        />

        <section className="mt-6 bg-white p-6 rounded-xl card-shadow w-full" style={{ whiteSpace: "pre-line" }}>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            Sub Bab: {submodul.submodul_name}
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            {submodul.submodul_description || "Selamat datang di sub bab ini!"}
          </p>

          <TabNavigation activeTab={activeTab} onChangeTab={setActiveTab} />

          <MateriKonten activeTab={activeTab} />
        </section>
      </main>
    </div>
  );
};

export default MateriLayout;
