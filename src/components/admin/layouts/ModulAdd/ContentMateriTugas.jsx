import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";

const ContentMateriTugas = () => {
  const [submodulOptions, setSubmodulOptions] = useState([]);

  const [materi, setMateri] = useState({ submodul_id: "", judul: "", konten: "" });
  const [tugas, setTugas] = useState({ submodul_id: "", instruksi: "", konten: "" });

  useEffect(() => {
    const fetchSubmoduls = async () => {
      const { data, error } = await supabase.from("submodul").select("*");
      if (error) {
        console.error("❌ Gagal ambil submodul:", error.message);
      } else {
        setSubmodulOptions(data);
      }
    };
    fetchSubmoduls();
  }, []);

  const handleSaveMateri = async () => {
    const { submodul_id, judul, konten } = materi;
    if (!submodul_id || !judul || !konten) {
      alert("⚠️ Semua field materi wajib diisi.");
      return;
    }

    try {
      const { error } = await supabase.from("materi").insert([
        {
          submodul_id,
          materi_title: judul,
          materi_content: konten,
        },
      ]);

      if (error) throw error;

      alert("✅ Materi berhasil disimpan.");
      setMateri({ submodul_id: "", judul: "", konten: "" });
    } catch (err) {
      alert("❌ Gagal menyimpan materi: " + (err?.message || "Unknown error"));
    }
  };

  const handleSaveTugas = async () => {
    const { submodul_id, instruksi, konten } = tugas;
    if (!submodul_id || !instruksi || !konten) {
      alert("⚠️ Semua field tugas wajib diisi.");
      return;
    }

    try {
      const { error } = await supabase.from("tugas").insert([
        {
          submodul_id,
          tugas_title: instruksi,
          tugas_content: konten,
        },
      ]);

      if (error) throw error;

      alert("✅ Tugas berhasil disimpan.");
      setTugas({ submodul_id: "", instruksi: "", konten: "" });
    } catch (err) {
      alert("❌ Gagal menyimpan tugas: " + (err?.message || "Unknown error"));
    }
  };

  return (
    <section className="bg-white p-6 rounded-2xl shadow-lg">
      {/* FORM MATERI */}
      <h3 className="text-lg font-semibold mb-4">Form Materi</h3>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Pilih Submodul</label>
        <select
          value={materi.submodul_id}
          onChange={(e) => setMateri({ ...materi, submodul_id: e.target.value })}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">-- Pilih --</option>
          {submodulOptions.map((sub) => (
            <option key={sub.submodul_id} value={sub.submodul_id}>
              {sub.submodul_name}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        value={materi.judul}
        onChange={(e) => setMateri({ ...materi, judul: e.target.value })}
        className="w-full border border-gray-300 rounded-lg p-2 mb-2"
        placeholder="Judul Materi"
      />
      <textarea
        value={materi.konten}
        onChange={(e) => setMateri({ ...materi, konten: e.target.value })}
        className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        rows="4"
        placeholder="Isi Materi"
      />
      <button
        onClick={handleSaveMateri}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Simpan Materi
      </button>

      {/* FORM TUGAS */}
      <hr className="my-6 border-gray-300" />
      <h3 className="text-lg font-semibold mb-4 mt-6">Form Tugas</h3>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Pilih Submodul</label>
        <select
          value={tugas.submodul_id}
          onChange={(e) => setTugas({ ...tugas, submodul_id: e.target.value })}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">-- Pilih --</option>
          {submodulOptions.map((sub) => (
            <option key={sub.submodul_id} value={sub.submodul_id}>
              {sub.submodul_name}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        value={tugas.instruksi}
        onChange={(e) => setTugas({ ...tugas, instruksi: e.target.value })}
        className="w-full border border-gray-300 rounded-lg p-2 mb-2"
        placeholder="Judul Tugas"
      />
      <textarea
        value={tugas.konten}
        onChange={(e) => setTugas({ ...tugas, konten: e.target.value })}
        className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        rows="4"
        placeholder="Isi Tugas"
      />
      <button
        onClick={handleSaveTugas}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Simpan Tugas
      </button>
    </section>
  );
};

export default ContentMateriTugas;
