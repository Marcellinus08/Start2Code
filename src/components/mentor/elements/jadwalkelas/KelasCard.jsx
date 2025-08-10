import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const ROOM_CODES = {
  kelas:       { member: "cxr-atgo-wqk", mentor: "bas-cffm-gwn" },
  konsultasi:  { member: "pif-irlg-tnl", mentor: "ahv-rane-kph" },
};

const KelasCard = ({
  id,
  tanggal,         
  jam,             
  modul,
  submodul,
  pengajar,
  type = "kelas",  
  onEdit,          
}) => {
  const navigate = useNavigate();

  const d = useMemo(() => new Date(tanggal), [tanggal]);
  const date  = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString("default", { month: "short" }).toUpperCase();
  const year  = String(d.getFullYear());
  const realDay = d.toLocaleDateString("id-ID", { weekday: "long" });

  const startTime = useMemo(() => (jam || "").split(/[-–—]/)[0]?.trim() ?? "", [jam]);
  const startDateTime = useMemo(() => {
    if (!tanggal || !startTime) return d;
    const [h, m] = startTime.split(":").map(Number);
    const [Y, Mo, Da] = tanggal.split("-").map(Number);
    return new Date(Y, Mo - 1, Da, h || 0, m || 0, 0, 0);
  }, [tanggal, startTime, d]);

  const [isAvailable, setIsAvailable] = useState(Date.now() >= startDateTime.getTime());
  useEffect(() => {
    const tick = () => setIsAvailable(Date.now() >= startDateTime.getTime());
    tick();
    const idTimer = setInterval(tick, 30_000);
    return () => clearInterval(idTimer);
  }, [startDateTime]);

  const handleJoinAsMentor = () => {
    const code = ROOM_CODES[type]?.mentor || ROOM_CODES.kelas.mentor;
    navigate(`/room/${code}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md flex items-center justify-between px-8 py-6 mb-6 transition-transform duration-300 hover:shadow-lg">
    
      <div className="flex flex-col items-center justify-center rounded-md w-[95px] h-[90px] bg-blue-600 text-white">
        <p className="text-[28px] font-bold leading-none">{date}</p>
        <p className="text-sm font-semibold mt-1 uppercase">
          {month} <span className="font-medium normal-case">‘{year.slice(-2)}</span>
        </p>
      </div>

      <div className="flex-1 px-6 flex flex-col gap-y-1">
        <p className="text-sm text-blue-600 font-semibold">{realDay}, {jam} WIB</p>
        <h3 className="text-base font-bold text-gray-800">{modul}</h3>
        {submodul && <p className="text-sm text-gray-600">Submodul: {submodul}</p>}
        {pengajar && <p className="text-sm text-gray-600">Dibawakan oleh: <span className="font-medium">{pengajar}</span></p>}
      </div>

      <div className="flex items-center gap-3">
        {onEdit && (
          <button onClick={onEdit} className="px-3 py-2 text-sm border rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
            <span className="material-icons text-[18px] mr-1">edit</span> Edit
          </button>
        )}

        {isAvailable ? (
          <button
            onClick={handleJoinAsMentor}
            className="text-white bg-blue-500 hover:bg-blue-600 text-sm font-semibold py-3 px-6 rounded-lg flex items-center hover:scale-[1.02] shadow-md"
          >
            <span className="material-icons text-white text-[18px] mr-2">video_call</span>
            Gabung Sesi
          </button>
        ) : (
          <button className="bg-gray-300 text-gray-600 font-semibold py-3 px-6 text-sm rounded-lg flex items-center shadow-inner cursor-not-allowed" disabled>
            <span className="material-icons mr-2 text-[18px]">watch_later</span>Belum Tersedia
          </button>
        )}
      </div>
    </div>
  );
};

export default KelasCard;
