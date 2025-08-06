import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import Swal from "sweetalert2";

const ContentMateriTugas = () => {
  const [submodulOptions, setSubmodulOptions] = useState([]);
  const [modulOptions, setModulOptions] = useState([]);
  const [compilerLanguages, setCompilerLanguages] = useState([]);

  // State untuk form Materi
  const [materi, setMateri] = useState({
    modul_id: "", // modul_id untuk materi
    submodul_id: "",
    judul: "",
    konten: "",
  });

  // State untuk form Tugas
  const [tugas, setTugas] = useState({
    modul_id: "", // modul_id untuk tugas
    submodul_id: "",
    instruksi: "",
    konten: "",
    use_compiler: false,
    compiler_lang: "",
  });

  // Ambil modul
  useEffect(() => {
    const fetchModuls = async () => {
      const { data, error } = await supabase.from("modul").select("*");
      if (error) {
        console.error("❌ Gagal ambil modul:", error.message);
      } else {
        setModulOptions(data);
      }
    };
    fetchModuls();
  }, []);

  // Ambil submodul berdasarkan modul_id yang dipilih (Materi)
  useEffect(() => {
    const fetchSubmodulsMateri = async () => {
      if (materi.modul_id) {
        const { data, error } = await supabase
          .from("submodul")
          .select("*")
          .eq("modul_id", materi.modul_id) // Filter berdasarkan modul_id
          .order("submodul_name", { ascending: true });

        if (error) {
          console.error("❌ Gagal ambil submodul materi:", error.message);
        } else {
          setSubmodulOptions(data);
        }
      }
    };

    fetchSubmodulsMateri();
  }, [materi.modul_id]);

  // Ambil submodul berdasarkan modul_id yang dipilih (Tugas)
  useEffect(() => {
    const fetchSubmodulsTugas = async () => {
      if (tugas.modul_id) {
        const { data, error } = await supabase
          .from("submodul")
          .select("*")
          .eq("modul_id", tugas.modul_id) // Filter berdasarkan modul_id
          .order("submodul_name", { ascending: true });

        if (error) {
          console.error("❌ Gagal ambil submodul tugas:", error.message);
        } else {
          setSubmodulOptions(data);
        }
      }
    };

    fetchSubmodulsTugas();
  }, [tugas.modul_id]);

  // Ambil materi berdasarkan submodul_id yang dipilih (untuk form Materi)
  useEffect(() => {
    // Reset materi jika submodul_id berubah
    setMateri({
      ...materi,
      judul: "",
      konten: "",
    });

    if (materi.submodul_id) {
      const fetchMateri = async () => {
        const { data, error } = await supabase
          .from("materi")
          .select("*")
          .eq("submodul_id", materi.submodul_id)
          .single(); // Ambil satu data materi berdasarkan submodul_id

        if (error) {
          console.error("❌ Gagal ambil materi:", error.message);
        } else if (data) {
          setMateri({
            ...materi,
            judul: data.materi_title,
            konten: data.materi_content,
          }); // Set materi jika ada
        }
      };

      fetchMateri();
    }
  }, [materi.submodul_id]);

  // Ambil tugas berdasarkan submodul_id yang dipilih (untuk form Tugas)
  useEffect(() => {
    // Reset tugas jika submodul_id berubah
    setTugas({
      ...tugas,
      instruksi: "",
      konten: "",
      use_compiler: false,
      compiler_lang: "",
    });

    if (tugas.submodul_id) {
      const fetchTugas = async () => {
        const { data, error } = await supabase
          .from("tugas")
          .select("*")
          .eq("submodul_id", tugas.submodul_id);

        if (error) {
          console.error("❌ Gagal ambil tugas:", error.message);
        } else if (data.length > 0) {
          // If there is data, set the values
          setTugas({
            ...tugas,
            instruksi: data[0].tugas_title,
            konten: data[0].tugas_content,
            use_compiler: data[0].use_compiler,
            compiler_lang: data[0].compiler_lang,
          });
        } else {
          // Reset if no data is found
          setTugas({
            ...tugas,
            instruksi: "",
            konten: "",
            use_compiler: false,
            compiler_lang: "",
          });
        }
      };

      fetchTugas();
    }
  }, [tugas.submodul_id]);

  // Ambil daftar bahasa compiler dari Judge0
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await fetch("https://judge0-ce.p.rapidapi.com/languages", {
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_JUDGE_API_KEY,
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
        });
        const allLangs = await res.json();

        const latestLangsMap = new Map();
        allLangs.forEach((lang) => {
          const baseName = lang.name.split(" ")[0];
          if (!latestLangsMap.has(baseName)) {
            latestLangsMap.set(baseName, lang);
          } else {
            const existing = latestLangsMap.get(baseName);
            const v1 = parseFloat(existing.name.replace(/[^0-9.]/g, ""));
            const v2 = parseFloat(lang.name.replace(/[^0-9.]/g, ""));
            if (!isNaN(v1) && !isNaN(v2) && v2 > v1) {
              latestLangsMap.set(baseName, lang);
            }
          }
        });

        const finalLangs = Array.from(latestLangsMap.values());
        setCompilerLanguages(finalLangs);
      } catch (error) {
        console.error("Gagal mengambil daftar bahasa:", error);
      }
    };

    fetchLanguages();
  }, []);

  // Handle save Materi
  const handleSaveMateri = async () => {
    const { submodul_id, judul, konten } = materi;
    if (!submodul_id || !judul || !konten) {
      Swal.fire({
        icon: 'warning',
        title: 'Semua field materi wajib diisi!',
      });
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

      Swal.fire({
        icon: 'success',
        title: 'Materi berhasil disimpan!',
      });
      setMateri({ ...materi, judul: "", konten: "" }); // Reset hanya judul dan konten, biarkan submodul_id tetap
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal menyimpan materi: ' + (err?.message || 'Unknown error'),
      });
    }
  };

  // Handle save Tugas
  const handleSaveTugas = async () => {
    const { submodul_id, instruksi, konten, use_compiler, compiler_lang } = tugas;

    if (!submodul_id || !instruksi || !konten) {
      Swal.fire({
        icon: 'warning',
        title: 'Semua field tugas wajib diisi!',
      });
      return;
    }

    if (use_compiler && !compiler_lang) {
      Swal.fire({
        icon: 'warning',
        title: 'Pilih bahasa compiler jika ingin menggunakan compiler!',
      });
      return;
    }

    try {
      const { error } = await supabase.from("tugas").insert([
        {
          submodul_id,
          tugas_title: instruksi,
          tugas_content: konten,
          use_compiler,
          compiler_lang: use_compiler ? parseInt(compiler_lang) : null,
        },
      ]);

      if (error) throw error;

      Swal.fire({
        icon: 'success',
        title: 'Tugas berhasil disimpan!',
      });
      setTugas({
        ...tugas,
        instruksi: "",
        konten: "",
        use_compiler: false,
        compiler_lang: "",
      }); // Reset hanya instruksi dan konten, biarkan submodul_id tetap
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal menyimpan tugas: ' + (err?.message || 'Unknown error'),
      });
    }
  };

  return (
    <section className="bg-white p-6 rounded-2xl shadow-lg">
      {/* === FORM MATERI === */}
      <h3 className="text-lg font-semibold mb-4">Form Materi</h3>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Pilih Modul</label>
        <select
          value={materi.modul_id} // Ensure value is correctly set
          onChange={(e) => setMateri({ ...materi, modul_id: e.target.value })}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">-- Pilih --</option>
          {modulOptions.map((modul) => (
            <option key={modul.modul_id} value={modul.modul_id}>
              {modul.modul_name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Pilih Submodul</label>
        <select
          value={materi.submodul_id} // Ensure value is correctly set
          onChange={(e) => setMateri({ ...materi, submodul_id: e.target.value })}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">-- Pilih Submodul --</option>
          {submodulOptions.map((submodul) => (
            <option key={submodul.submodul_id} value={submodul.submodul_id}>
              {submodul.submodul_name}
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

      {/* === FORM TUGAS === */}
      <hr className="my-6 border-gray-300" />
      <h3 className="text-lg font-semibold mb-4 mt-6">Form Tugas</h3>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Pilih Modul</label>
        <select
          value={tugas.modul_id} // Ensure value is correctly set
          onChange={(e) => setTugas({ ...tugas, modul_id: e.target.value })}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">-- Pilih Modul --</option>
          {modulOptions.map((modul) => (
            <option key={modul.modul_id} value={modul.modul_id}>
              {modul.modul_name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Pilih Submodul</label>
        <select
          value={tugas.submodul_id} // Ensure value is correctly set
          onChange={(e) => setTugas({ ...tugas, submodul_id: e.target.value })}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">-- Pilih Submodul --</option>
          {submodulOptions.map((submodul) => (
            <option key={submodul.submodul_id} value={submodul.submodul_id}>
              {submodul.submodul_name}
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
        className="w-full border border-gray-300 rounded-lg p-2 mb-2"
        rows="4"
        placeholder="Isi Tugas"
      />

      {/* === CHECKBOX + SELECT BAHASA COMPILER === */}
      <div className="mb-4">
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={tugas.use_compiler}
            onChange={(e) => setTugas({ ...tugas, use_compiler: e.target.checked })}
            className="form-checkbox"
          />
          Tugas ini menggunakan compiler?
        </label>
      </div>

      {tugas.use_compiler && (
        <div className="mb-4">
          <label className="block mb-1 font-medium">Pilih Bahasa Compiler</label>
          <select
            value={tugas.compiler_lang}
            onChange={(e) => setTugas({ ...tugas, compiler_lang: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">-- Pilih Bahasa --</option>
            {compilerLanguages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      )}

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
