import { useState, useEffect } from "react";
import { supabase } from "@/supabaseClient";
import Header from "@/components/member/fragments/homepage/Header";

const ContentModulSub = () => {
  const [modul, setModul] = useState({
    modul_name: "",
    modul_description: "",
    icon: "",
    color: "",
  });

  const [modulList, setModulList] = useState([]);
  const [selectedModulId, setSelectedModulId] = useState("");

  const [submoduls, setSubmoduls] = useState([
    { submodul_name: "", submodul_description: "" },
  ]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchModulList();
  }, []);

  const fetchModulList = async () => {
    const { data, error } = await supabase
      .from("modul")
      .select("modul_id, modul_name");
    if (!error) setModulList(data);
  };

  const handleSubmodulChange = (index, field, value) => {
    const updated = [...submoduls];
    updated[index][field] = value;
    setSubmoduls(updated);
  };

  const handleAddSubmodulField = () => {
    setSubmoduls([
      ...submoduls,
      { submodul_name: "", submodul_description: "" },
    ]);
  };

  const handleRemoveSubmodulField = (index) => {
    const updated = [...submoduls];
    updated.splice(index, 1);
    setSubmoduls(updated);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      let modul_id = selectedModulId;

      // Jika membuat modul baru
      if (!selectedModulId) {
        const { data: newModul, error: modulError } = await supabase
          .from("modul")
          .insert([modul])
          .select()
          .single();

        if (modulError) throw modulError;
        modul_id = newModul.modul_id;
      }

      const submodulPayload = submoduls.map((sub) => ({
        modul_id,
        submodul_name: sub.submodul_name,
        submodul_description: sub.submodul_description,
      }));

      const { error: submodulError } = await supabase
        .from("submodul")
        .insert(submodulPayload);

      if (submodulError) throw submodulError;

      alert("✅ Modul & Submodul berhasil disimpan!");
      setModul({ modul_name: "", modul_description: "", icon: "", color: "" });
      setSelectedModulId("");
      setSubmoduls([{ submodul_name: "", submodul_description: "" }]);
      fetchModulList();
    } catch (err) {
      alert("❌ Gagal menyimpan modul: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (

    <section className="bg-white p-6 rounded-2xl shadow-lg mb-10">
      {/* Pilih Modul Lama */}
      <label className="block mb-2 font-medium">
        Pilih Modul (jika ingin menambah submodul ke modul lama)
      </label>
      <select
        value={selectedModulId}
        onChange={(e) => setSelectedModulId(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-2 mb-6"
      >
        <option value="">-- Buat Modul Baru --</option>
        {modulList.map((m) => (
          <option key={m.modul_id} value={m.modul_id}>
            {m.modul_name}
          </option>
        ))}
      </select>

      {/* Form Modul Baru */}
      {!selectedModulId && (
        <>
          <h3 className="text-lg font-semibold mb-4">Form Modul Baru</h3>
          <input
            name="modul_name"
            value={modul.modul_name}
            onChange={(e) =>
              setModul((prev) => ({ ...prev, modul_name: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            placeholder="Nama Modul"
          />
          <textarea
            name="modul_description"
            value={modul.modul_description}
            onChange={(e) =>
              setModul((prev) => ({
                ...prev,
                modul_description: e.target.value,
              }))
            }
            className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            placeholder="Deskripsi Modul"
            rows={3}
          />
          <input
            name="icon"
            value={modul.icon}
            onChange={(e) =>
              setModul((prev) => ({ ...prev, icon: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            placeholder="Material Icon (e.g. code, memory)"
          />
          <input
            name="color"
            value={modul.color}
            onChange={(e) =>
              setModul((prev) => ({ ...prev, color: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-lg p-2 mb-6"
            placeholder="Warna Tailwind (e.g. blue, green)"
          />
        </>
      )}

      {/* Submodul */}
      <hr className="my-6 border-gray-200" />
      <h3 className="text-lg font-semibold mb-4">Submodul</h3>
      {submoduls.map((sub, index) => (
        <div key={index} className="mb-4 bg-gray-50 p-4 rounded-lg">
          <input
            type="text"
            value={sub.submodul_name}
            onChange={(e) =>
              handleSubmodulChange(index, "submodul_name", e.target.value)
            }
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            placeholder={`Nama Submodul #${index + 1}`}
          />
          <textarea
            value={sub.submodul_description}
            onChange={(e) =>
              handleSubmodulChange(index, "submodul_description", e.target.value)
            }
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Deskripsi Submodul"
            rows={2}
          />
          {submoduls.length > 1 && (
            <div className="text-right mt-2">
              <button
                onClick={() => handleRemoveSubmodulField(index)}
                className="text-sm text-red-500 hover:underline"
              >
                Hapus Submodul
              </button>
            </div>
          )}
        </div>
      ))}
      <button
        onClick={handleAddSubmodulField}
        className="mb-6 text-sm text-blue-600 hover:underline"
      >
        + Tambah Submodul
      </button>

      <div className="text-right">
        <button
          onClick={handleSave}
          disabled={loading}
          className={`px-6 py-2 rounded-lg text-white ${
            loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Menyimpan..." : "Simpan Modul & Submodul"}
        </button>
      </div>
    </section>

  );
};

export default ContentModulSub;
