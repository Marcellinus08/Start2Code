import { useEffect, useState } from "react";
import Profile from "../../elements/homepage/Profile";
import Mentor from "../../elements/homepage/Mentor";
import { supabase } from "@/supabaseClient";

const SidebarRightList = (props) => {
  const { name, bidang, name_mentor, status } = props;
  const username = localStorage.getItem("username");

  const [selesai, setSelesai] = useState(0);
  const [totalSubmodul, setTotalSubmodul] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      setLoading(true);

      const { data: tugasData, error: tugasError } = await supabase
        .from("tugas")
        .select("tugas_id, submodul_id");

      const { data: jawabanData, error: jawabanError } = await supabase
        .from("jawaban_tugas")
        .select("tugas_id")
        .eq("username", username);

      if (tugasError || jawabanError) {
        console.error("Gagal ambil data:", tugasError || jawabanError);
        setLoading(false);
        return;
      }

      const submodulMap = new Map();
      tugasData.forEach((tugas) => {
        if (!submodulMap.has(tugas.submodul_id)) {
          submodulMap.set(tugas.submodul_id, []);
        }
        submodulMap.get(tugas.submodul_id).push(tugas.tugas_id);
      });

      let selesaiCount = 0;
      submodulMap.forEach((tugasList) => {
        const semuaTerjawab = tugasList.every((tugasId) =>
          jawabanData.some((jawab) => jawab.tugas_id === tugasId)
        );
        if (semuaTerjawab) selesaiCount++;
      });

      setTotalSubmodul(submodulMap.size);
      setSelesai(selesaiCount);
      setLoading(false);
    };

    fetchProgress();
  }, [username]);

  const percent = totalSubmodul > 0 ? Math.round((selesai / totalSubmodul) * 100) : 0;
  const strokeDasharray = `${(percent * 283) / 100} ${283 - (percent * 283) / 100}`;

  return (
    <div className="space-y-6 hidden lg:block">
      <Profile status={status}>{name}</Profile>
      <Mentor bidang={bidang}>{name_mentor}</Mentor>

      {/* Progress Sub Modul Chart */}
      <div className="bg-white p-4 rounded-xl shadow-md text-center">
        <h3 className="text-md font-semibold text-gray-800 mb-2">Progress Belajar</h3>

        {loading ? (
          <p className="text-gray-500">Memuat data...</p>
        ) : (
          <>
            <div className="relative w-32 h-32 mx-auto">
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                {/* Background */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="10"
                />
                {/* Progress */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="10"
                  strokeDasharray={strokeDasharray}
                  strokeLinecap="butt"
                  transform="rotate(-90 50 50)"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-gray-800">{totalSubmodul}</span>
                <span className="text-sm text-gray-500">Sub Modul</span>
              </div>
            </div>

            <div className="mt-2 text-sm text-gray-600">
              <p>Total Sub Modul: <span className="font-semibold">{totalSubmodul}</span></p>
              <p>Sudah Selesai: <span className="font-semibold">{selesai}</span></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SidebarRightList;
