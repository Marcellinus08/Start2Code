import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";
import Header from "../../../member/fragments/homepage/Header";

const Content = () => {
  const [moduls, setModuls] = useState([]);
  const [submoduls, setSubmoduls] = useState([]);
  const [materi, setMateri] = useState([]);
  const [tugas, setTugas] = useState([]);
  const navigate = useNavigate();

  // Fetching Modul data
  const fetchData = async () => {
    const { data, error } = await supabase
      .from("modul")
      .select("modul_id, modul_name, modul_description")
      .order("modul_name", { ascending: true });

    if (!error) {
      setModuls(data);
    } else {
      console.error("Error fetching modul:", error.message);
    }
  };

  // Fetching Submodul data
  const fetchSubmoduls = async () => {
    const { data, error } = await supabase
      .from("submodul")
      .select("submodul_id, submodul_name, submodul_description, modul_id")
      .order("submodul_name", { ascending: true });

    if (!error) {
      setSubmoduls(data);
    } else {
      console.error("Error fetching submodul:", error.message);
    }
  };

  // Fetching Materi data
  const fetchMateri = async () => {
    const { data, error } = await supabase
      .from("materi")
      .select("materi_id, materi_title, submodul_id")
      .order("materi_title", { ascending: true });

    if (!error) {
      setMateri(data);
    } else {
      console.error("Error fetching materi:", error.message);
    }
  };

  // Fetching Tugas data
  const fetchTugas = async () => {
    const { data, error } = await supabase
      .from("tugas")
      .select("tugas_id, tugas_title, submodul_id")
      .order("tugas_title", { ascending: true });

    if (!error) {
      setTugas(data);
    } else {
      console.error("Error fetching tugas:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
    fetchSubmoduls();
    fetchMateri();
    fetchTugas();
  }, []);

  return (
    <main className="flex-1 p-8 ml-64 bg-[#F0F9FF] min-h-screen">
      <Header
        hello="Modul Management"
        letsgo="Kelola data pengguna dengan mudah dan efisien."
      />

      <section className="bg-white p-6 rounded-2xl shadow-lg mb-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Daftar Modul dan Sub Modul</h3>
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

        {/* Tabel Modul */}
        <table className="w-full table-auto border border-gray-200 mb-8">
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
                  {submoduls
                    .filter((submodul) => submodul.modul_id === modul.modul_id)
                    .map((sub, i) => (
                      <span key={i}>{sub.submodul_name}</span>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Tabel Modul dan Deskripsi */}
        <h3 className="text-lg font-semibold mb-4">Daftar Modul</h3>
        <table className="w-full table-auto border border-gray-200 mb-8">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-4 py-3 border">No</th>
              <th className="px-4 py-3 border">Nama Modul</th>
              <th className="px-4 py-3 border">Deskripsi Modul</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {moduls.map((modul, index) => (
              <tr key={modul.modul_id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{modul.modul_name}</td>
                <td className="px-4 py-2 border">{modul.modul_description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Tabel Submodul dan Deskripsi */}
        <h3 className="text-lg font-semibold mb-4">Daftar Submodul</h3>
        <table className="w-full table-auto border border-gray-200 mb-8">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-4 py-3 border">No</th>
              <th className="px-4 py-3 border">Nama Submodul</th>
              <th className="px-4 py-3 border">Deskripsi Submodul</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {submoduls.map((submodul, index) => (
              <tr key={submodul.submodul_id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{submodul.submodul_name}</td>
                <td className="px-4 py-2 border">{submodul.submodul_description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Tabel Materi dan Tugas */}
        <h3 className="text-lg font-semibold mb-4">Daftar Materi dan Tugas</h3>
        <table className="w-full table-auto border border-gray-200 mb-8">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-4 py-3 border">No</th>
              <th className="px-4 py-3 border">Materi</th>
              <th className="px-4 py-3 border">Tugas</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {/* Tampilkan Materi */}
            {materi.map((m, index) => (
              <tr key={m.materi_id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{m.materi_title}</td>
                <td className="px-4 py-2 border">Tugas</td> {/* Isi kolom Tugas dengan kata 'Tugas' */}
              </tr>
            ))}
            {/* Tampilkan Tugas */}
            {tugas.map((t, index) => (
              <tr key={t.tugas_id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">{index + 1 + materi.length}</td>
                <td className="px-4 py-2 border">Materi</td> {/* Isi kolom Materi dengan kata 'Materi' */}
                <td className="px-4 py-2 border">{t.tugas_title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Content;
