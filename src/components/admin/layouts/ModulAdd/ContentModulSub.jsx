import { useState, useEffect } from "react";
import { supabase } from "@/supabaseClient";
import Header from "../../../member/fragments/homepage/Header";
import { useNavigate } from "react-router-dom";

const ContentModulSub = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("modul");
  const [loading, setLoading] = useState(false);

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

  const [submodulOptions, setSubmodulOptions] = useState([]);

  const [materi, setMateri] = useState({
    submodul_id: "",
    materi_title: "",
  });
  const [materiFile, setMateriFile] = useState(null);

  const [tugas, setTugas] = useState({
    submodul_id: "",
    tugas_title: "",
  });
  const [tugasFile, setTugasFile] = useState(null);

  useEffect(() => {
    fetchSubmodulOptions();
    fetchModulList();
  }, []);

  const fetchSubmodulOptions = async () => {
    const { data, error } = await supabase
      .from("submodul")
      .select("submodul_id, submodul_name");

    if (!error) setSubmodulOptions(data);
  };

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
    setSubmoduls([...submoduls, { submodul_name: "", submodul_description: "" }]);
  };

  const handleRemoveSubmodulField = (index) => {
    const updated = [...submoduls];
    updated.splice(index, 1);
    setSubmoduls(updated);
  };

  const uploadFileToStorage = async (bucket, file) => {
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(`files/${fileName}`, file);

    if (error) throw error;

    const { data: publicData } = supabase
      .storage
      .from(bucket)
      .getPublicUrl(`files/${fileName}`);

    return publicData.publicUrl;
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      let modul_id = selectedModulId;

      if (!selectedModulId) {
        const { data: modulData, error: modulError } = await supabase
          .from("modul")
          .insert([modul])
          .select()
          .single();

        if (modulError) throw modulError;

        modul_id = modulData.modul_id;
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
      fetchSubmodulOptions();
    } catch (err) {
      alert("❌ Gagal menyimpan modul: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveMateri = async () => {
    try {
      if (!materiFile) return alert("❗ Upload file materi terlebih dahulu");

      const fileUrl = await uploadFileToStorage("materi", materiFile);

      const { error } = await supabase.from("materi").insert([
        {
          submodul_id: materi.submodul_id,
          materi_title: materi.materi_title,
          materi_content: fileUrl,
        },
      ]);

      if (error) throw error;

      alert("✅ Materi berhasil disimpan!");
      setMateri({ submodul_id: "", materi_title: "" });
      setMateriFile(null);
    } catch (err) {
      alert("❌ Gagal menyimpan materi: " + err.message);
    }
  };

  const handleSaveTugas = async () => {
    try {
      if (!tugasFile) return alert("❗ Upload file tugas terlebih dahulu");

      const fileUrl = await uploadFileToStorage("tugas", tugasFile);

      const { error } = await supabase.from("tugas").insert([
        {
          submodul_id: tugas.submodul_id,
          tugas_title: tugas.tugas_title,
          tugas_content: fileUrl,
        },
      ]);

      if (error) throw error;

      alert("✅ Tugas berhasil disimpan!");
      setTugas({ submodul_id: "", tugas_title: "" });
      setTugasFile(null);
    } catch (err) {
      alert("❌ Gagal menyimpan tugas: " + err.message);
    }
  };

  return (
    <main className="flex-1 p-8 ml-64 bg-[#F0F9FF] min-h-screen">
      <Header
        hello="Modul Management"
        letsgo="Buat modul beserta submodul, materi dan tugasnya."
      />

      {/* Tab Switch */}
      <div className="flex mb-6">
        <button
          className={`px-6 py-2 rounded-l-lg font-semibold ${
            activeTab === "modul" ? "bg-blue-600 text-white shadow" : "bg-white text-black border"
          }`}
          onClick={() => setActiveTab("modul")}
        >
          Modul & Submodul
        </button>
        <button
          className={`px-6 py-2 rounded-r-lg font-semibold ${
            activeTab === "materi" ? "bg-blue-600 text-white shadow" : "bg-white text-black border"
          }`}
          onClick={() => setActiveTab("materi")}
        >
          Tugas & Materi
        </button>
      </div>

      {/* === FORM MODUL & SUBMODUL === */}
      {activeTab === "modul" && (
        <section className="bg-white p-6 rounded-2xl shadow-lg mb-10">
          {/* Pilih Modul yang Sudah Ada */}
          <label className="block mb-2 font-medium">Pilih Modul (jika ingin menambah submodul ke modul lama)</label>
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

          {/* form modul baru hanya tampil jika tidak memilih dari dropdown */}
          {!selectedModulId && (
            <>
              <h3 className="text-lg font-semibold mb-4">Form Modul Baru</h3>
              <input
                name="modul_name"
                value={modul.modul_name}
                onChange={(e) => setModul((prev) => ({ ...prev, modul_name: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                placeholder="Nama Modul"
              />
              <textarea
                name="modul_description"
                value={modul.modul_description}
                onChange={(e) => setModul((prev) => ({ ...prev, modul_description: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                placeholder="Deskripsi Modul"
                rows={3}
              />
              <input
                name="icon"
                value={modul.icon}
                onChange={(e) => setModul((prev) => ({ ...prev, icon: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                placeholder="Material Icon (e.g. code, memory)"
              />
              <input
                name="color"
                value={modul.color}
                onChange={(e) => setModul((prev) => ({ ...prev, color: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg p-2 mb-6"
                placeholder="Warna Tailwind (e.g. blue, green)"
              />
            </>
          )}

          {/* submodul */}
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
      )}

      {/* === FORM MATERI & TUGAS === */}
      {activeTab === "materi" && (
        <section className="bg-white p-6 rounded-2xl shadow-lg">
          {/* Form Materi */}
          <h3 className="text-lg font-semibold mb-4">Form Materi</h3>
          <select
            value={materi.submodul_id}
            onChange={(e) => setMateri({ ...materi, submodul_id: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
          >
            <option value="">-- Pilih Submodul --</option>
            {submodulOptions.map((sub) => (
              <option key={sub.submodul_id} value={sub.submodul_id}>
                {sub.submodul_name}
              </option>
            ))}
          </select>
          <input
            value={materi.materi_title}
            onChange={(e) => setMateri({ ...materi, materi_title: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            placeholder="Judul Materi"
          />
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setMateriFile(e.target.files[0])}
            className="w-full border border-gray-300 rounded-lg p-2 mb-4"
          />
          <button
            onClick={handleSaveMateri}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Simpan Materi
          </button>

          <hr className="my-6 border-gray-300" />

          {/* Form Tugas */}
          <h3 className="text-lg font-semibold mb-4 mt-6">Form Tugas</h3>
          <select
            value={tugas.submodul_id}
            onChange={(e) => setTugas({ ...tugas, submodul_id: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
          >
            <option value="">-- Pilih Submodul --</option>
            {submodulOptions.map((sub) => (
              <option key={sub.submodul_id} value={sub.submodul_id}>
                {sub.submodul_name}
              </option>
            ))}
          </select>
          <input
            value={tugas.tugas_title}
            onChange={(e) => setTugas({ ...tugas, tugas_title: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            placeholder="Judul Tugas"
          />
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setTugasFile(e.target.files[0])}
            className="w-full border border-gray-300 rounded-lg p-2 mb-4"
          />
          <button
            onClick={handleSaveTugas}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Simpan Tugas
          </button>
        </section>
      )}
    </main>
  );
};

export default ContentModulSub;
