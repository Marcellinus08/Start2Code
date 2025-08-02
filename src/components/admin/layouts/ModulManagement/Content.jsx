import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";
import Header from "../../../member/fragments/homepage/Header";

const Content = () => {
  const [moduls, setModuls] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("modul")
      .select("modul_id, modul_name, submodul(submodul_name)")
      .order("modul_name", { ascending: true });

    if (!error) {
      setModuls(data);
    } else {
      console.error("Error fetching modul:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex-1 p-8 ml-64 bg-[#F0F9FF] min-h-screen">
      <Header
        hello="Modul Management"
        letsgo="Kelola data pengguna dengan mudah dan efisien."
      />

      <section className="bg-white p-6 rounded-2xl shadow-lg mb-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Daftar Modul</h3>
          <div className="space-x-2">
            <button
              onClick={() => navigate("/modul_add")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              + Add
            </button>
            <button
              onClick={() => navigate("/modul_edit")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Edit
            </button>
          </div>
        </div>

        <table className="w-full table-auto border border-gray-200">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-4 py-3 border">No</th>
              <th className="px-4 py-3 border">Nama Modul</th>
              <th className="px-4 py-3 border">Nama Submodul</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {moduls.map((modul, index) => (
              <tr key={modul.modul_id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{modul.modul_name}</td>
                <td className="px-4 py-2 border">
                  {modul.submodul?.length > 0 ? (
                    <ul className="list-disc pl-4">
                      {modul.submodul.map((sub, i) => (
                        <li key={i}>{sub.submodul_name}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400 italic">Belum ada</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Content;
