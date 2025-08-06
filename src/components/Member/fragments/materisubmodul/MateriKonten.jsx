import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/supabaseClient";
import Editor from "@monaco-editor/react";
import Swal from "sweetalert2";
import TitleMateri from "../../elements/materisubmodul/TitleMateri";
import MateriText from "../../elements/materisubmodul/MateriText";
import NavigationButton from "../../elements/materisubmodul/NavigationButton";

const MateriKonten = ({ activeTab }) => {
  const { submodulId } = useParams();
  const [materi, setMateri] = useState(null);
  const [tugas, setTugas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState(`# Program Python\nprint("Hello, World!")`);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [keterangan, setKeterangan] = useState("");
  const [username, setUsername] = useState("");
  const [saving, setSaving] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [modulName, setModulName] = useState(null);

  const formatTanggalIndonesia = (isoDate) => {
    const tanggal = new Date(isoDate);
    return tanggal.toLocaleString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
      hour12: false,
    }) + " WIB";
  };

  useEffect(() => {
    const stored = localStorage.getItem("username");
    if (stored) setUsername(stored);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data: materiData } = await supabase
        .from("materi")
        .select("*")
        .eq("submodul_id", submodulId)
        .single();

      const { data: tugasData } = await supabase
        .from("tugas")
        .select("*")
        .eq("submodul_id", submodulId)
        .single();

      setMateri(materiData);
      setTugas(tugasData);

      if (tugasData && username) {
        const { data: jawabanData } = await supabase
          .from("jawaban_tugas")
          .select("*")
          .eq("tugas_id", tugasData.tugas_id)
          .eq("username", username)
          .single();

        if (jawabanData) {
          setSubmittedData(jawabanData);
          setCode(jawabanData.jawaban_code);
          setOutput(jawabanData.jawaban_output);
          setKeterangan(jawabanData.jawaban_keterangan);
        }
      }

      const { data: submodulData } = await supabase
        .from("submodul")
        .select("modul_id, modul(modul_name)")
        .eq("submodul_id", submodulId)
        .single();

      if (submodulData?.modul?.modul_name) {
        setModulName(submodulData.modul.modul_name);
      }

      setLoading(false);
    };

    if (submodulId && username) fetchData();
  }, [submodulId, username]);

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput("⏳ Menjalankan kode...");

    try {
      const res = await fetch(
        "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": import.meta.env.VITE_JUDGE_API_KEY,
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
          body: JSON.stringify({
            source_code: code,
            language_id: tugas?.compiler_lang || 71,
          }),
        }
      );

      const result = await res.json();
      const finalOutput = result.stderr || result.stdout || "Tidak ada output.";
      setOutput(finalOutput);
    } catch (err) {
      setOutput("❌ Gagal menjalankan kode: " + err.message);
    } finally {
      setIsRunning(false);
    }
  };

  const handleSaveJawaban = async () => {
    if (!username) {
      Swal.fire("Gagal", "Username tidak tersedia.", "error");
      return;
    }

    if (!tugas?.tugas_id) {
      Swal.fire("Gagal", "Data tugas tidak ditemukan.", "error");
      return;
    }

    if (submittedData) {
      Swal.fire("Gagal", "Anda sudah mengirimkan jawaban.", "warning");
      return;
    }

    setSaving(true);

    const { data, error } = await supabase
      .from("jawaban_tugas")
      .insert([{
        username,
        tugas_id: tugas.tugas_id,
        jawaban_code: code,
        jawaban_output: output,
        jawaban_keterangan: keterangan,
        jawaban_submitted_at: new Date().toISOString(),
      }])
      .select("*")
      .single();

    if (error) {
      Swal.fire("Error", "Gagal menyimpan jawaban.", "error");
      console.error(error);
    } else {
      setSubmittedData(data);
      Swal.fire("Berhasil", "Jawaban berhasil disubmit!", "success");
    }

    setSaving(false);
  };

  const handleUpdateJawaban = async () => {
    if (!submittedData?.id) return;

    setSaving(true);

    const { error } = await supabase
      .from("jawaban_tugas")
      .update({
        jawaban_code: code,
        jawaban_output: output,
        jawaban_keterangan: keterangan,
      })
      .eq("id", submittedData.id);

    if (error) {
      Swal.fire("Error", "Gagal memperbarui jawaban.", "error");
      console.error(error);
    } else {
      Swal.fire("Berhasil", "Jawaban berhasil diperbarui!", "success");
      setIsEditing(false);
    }

    setSaving(false);
  };

  if (loading) return <p className="text-gray-500 italic">Memuat konten...</p>;

  return (
    <div className="space-y-6">
      {activeTab === "materi" && materi ? (
        <>
          <TitleMateri title={materi.materi_title} />
          <MateriText>{materi.materi_content}</MateriText>
          <div className="mt-4 text-center flex justify-end">
            <Link to={`/submodul/${encodeURIComponent(modulName)}`}>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Sub Modul Selanjutnya
              </button>
            </Link>
          </div>
        </>
      ) : activeTab === "tugas" && tugas ? (
        submittedData && !isEditing ? (
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-300">
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-500 text-4xl">✔</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Tugas Berhasil Disubmit!</h2>
              <p className="text-gray-600 text-sm">Jawaban Anda sudah terkirim dan akan dinilai.</p>
              <div className="text-sm text-gray-600 mt-2">
                Submitted on: {formatTanggalIndonesia(submittedData.jawaban_submitted_at)}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-md bg-blue-50 border border-blue-300 text-sm text-gray-700 space-y-1">
              <p><span className="font-bold text-blue-700">Sub Modul:</span> {materi?.materi_title}</p>
              <p><span className="font-bold text-blue-700">Tugas:</span> {tugas?.tugas_title}</p>
              <p><span className="font-bold text-blue-700">Catatan:</span> {submittedData.jawaban_keterangan}</p>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                ✏️ Edit Jawaban
              </button>
              <Link to={`/submodul/${encodeURIComponent(modulName)}`}>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Sub Modul Selanjutnya
                </button>
              </Link>
            </div>
          </div>
        ) : isEditing ? (
          <>
            <TitleMateri title={`Edit Jawaban: ${tugas?.tugas_title}`} />
            <MateriText>{tugas?.tugas_content}</MateriText>

            <div className="bg-[#DFF0FF] p-6 rounded-lg space-y-4">
              <div className="flex justify-between items-center mb-1">
                <p className="text-black font-semibold">Input:</p>
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className={`flex items-center gap-2 px-4 py-1 text-white rounded-md shadow ${
                    isRunning ? "bg-blue-700" : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  <span className="text-lg">▶</span>
                  {isRunning ? "Running..." : "Run"}
                </button>
              </div>

              <div className="bg-black rounded-md overflow-hidden border border-gray-700">
                <Editor
                  height="500px"
                  defaultLanguage="python"
                  theme="vs-dark"
                  value={code}
                  onChange={(val) => setCode(val)}
                />
              </div>

              <div>
                <p className="text-black font-semibold mb-1">Output:</p>
                <div className="bg-black text-white p-4 rounded-md font-mono text-sm whitespace-pre-wrap min-h-[80px]">
                  {output}
                </div>
              </div>

              <div className="mt-4">
                <label className="text-black font-semibold mb-1 block">Keterangan:</label>
                <textarea
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Tuliskan catatan, penjelasan, atau refleksi jawaban..."
                  rows={4}
                  value={keterangan}
                  onChange={(e) => setKeterangan(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="flex space-x-4 justify-end mt-4">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setCode(submittedData.jawaban_code);
                  setOutput(submittedData.jawaban_output);
                  setKeterangan(submittedData.jawaban_keterangan);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Batal Edit
              </button>
              <button
                onClick={handleUpdateJawaban}
                disabled={saving}
                className={`px-4 py-2 rounded-md text-white shadow ${
                  saving ? "bg-gray-500" : "bg-yellow-500 hover:bg-yellow-600"
                }`}
              >
                📝 {saving ? "Menyimpan..." : "Update Jawaban"}
              </button>
            </div>
          </>
        ) : (
          <>
            <TitleMateri title={tugas.tugas_title} />
            <MateriText>{tugas.tugas_content}</MateriText>

            {tugas.use_compiler && (
              <div className="bg-[#DFF0FF] p-6 rounded-lg space-y-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-black font-semibold">Input:</p>
                  <button
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className={`flex items-center gap-2 px-4 py-1 text-white rounded-md shadow ${
                      isRunning ? "bg-blue-700" : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    <span className="text-lg">▶</span>
                    {isRunning ? "Running..." : "Run"}
                  </button>
                </div>

                <div className="bg-black rounded-md overflow-hidden border border-gray-700">
                  <Editor
                    height="500px"
                    defaultLanguage="python"
                    theme="vs-dark"
                    value={code}
                    onChange={(val) => setCode(val)}
                  />
                </div>

                <div>
                  <p className="text-black font-semibold mb-1">Output:</p>
                  <div className="bg-black text-white p-4 rounded-md font-mono text-sm whitespace-pre-wrap min-h-[80px]">
                    {output}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-black font-semibold mb-1 block">Keterangan:</label>
                  <textarea
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Tuliskan catatan, penjelasan, atau refleksi jawaban..."
                    rows={4}
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                  ></textarea>
                </div>
              </div>
            )}

            <div className="text-right mt-4">
              <button
                onClick={handleSaveJawaban}
                disabled={saving}
                className={`px-4 py-2 rounded-md text-white shadow ${
                  saving ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                💾 {saving ? "Menyimpan..." : "Save Jawaban"}
              </button>
            </div>
          </>
        )
      ) : (
        <p className="text-gray-500 italic">Konten belum tersedia untuk submodul ini.</p>
      )}
    </div>
  );
};

export default MateriKonten;
