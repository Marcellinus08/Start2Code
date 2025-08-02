import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarLeft from "@/components/member/layouts/homepage/SidebarLeft";
import Header from "@/components/member/fragments/modulpage/submodul/Header";
import { supabase } from "@/supabaseClient";

const SubmodulLayout = ({ children }) => {
  const { modulName } = useParams();
  const [modul, setModul] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModul = async () => {
      const { data, error } = await supabase
        .from("modul")
        .select("*")
        .eq("modul_name", decodeURIComponent(modulName))
        .single();

      if (!error) setModul(data);
      setLoading(false);
    };

    fetchModul();
  }, [modulName]);

  if (loading) return <div className="ml-64 p-8 text-gray-600">Loading...</div>;
  if (!modul) return <div className="ml-64 p-8 text-red-500">Modul tidak ditemukan.</div>;

  return (
    <div className="flex min-h-screen bg-[#F0F9FF]">
      <SidebarLeft />
      <main className="ml-64 flex-1 overflow-auto px-8 py-8">
        <Header title={modul.modul_name} desc={modul.modul_description} />
        {children}
      </main>
    </div>
  );
};

export default SubmodulLayout;