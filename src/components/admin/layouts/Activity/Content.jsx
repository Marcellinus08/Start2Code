import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import Header from "../../../member/fragments/homepage/Header";

const Content = () => {
  const [aktivitas, setAktivitas] = useState([]);

  const fetchAktivitas = async () => {
    const { data, error } = await supabase
      .from("aktivitas")
      .select("*")
      .order("waktu", { ascending: false }); // Urutkan dari terbaru ke lama

    if (error) {
      console.error("Gagal mengambil data aktivitas:", error.message);
    } else {
      setAktivitas(data);
    }
  };

  useEffect(() => {
    fetchAktivitas();
  }, []);

  return (
    <main className="flex-1 p-8 ml-64 bg-[#F0F9FF] min-h-screen">
      <Header
        hello="Activity"
        letsgo="Kelola data pengguna dengan mudah dan efisien."
      />

      <section className="bg-white p-6 rounded-2xl shadow-lg mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Riwayat Aktivitas
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 rounded-md">
            <thead className="bg-gray-100 text-gray-700 text-sm">
              <tr>
                <th className="px-4 py-3 border">Username</th>
                <th className="px-4 py-3 border">Aksi</th>
                <th className="px-4 py-3 border">Waktu</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {aktivitas.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-400">
                    Tidak ada aktivitas tercatat.
                  </td>
                </tr>
              ) : (
                aktivitas.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{item.username}</td>
                    <td className="px-4 py-2 border capitalize">
                      {item.aksi}
                    </td>
                    <td className="px-4 py-2 border">
                      {new Date(item.waktu).toLocaleString("id-ID", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Content;
