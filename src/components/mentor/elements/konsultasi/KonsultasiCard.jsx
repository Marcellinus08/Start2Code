import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const ROOM_CODES = {
  konsultasi: { member: "pif-irlg-tnl", mentor: "ahv-rane-kph" },
};

const dayID = (d) => d.toLocaleDateString("id-ID", { weekday: "long" });
const pad2 = (n) => String(n).padStart(2, "0");

const buildDate = (tanggal, hhmm) => {
  const [h, m] = (hhmm || "00:00").split(":").map(Number);
  const [Y, Mo, Da] = tanggal.split("-").map(Number);
  return new Date(Y, Mo - 1, Da, h || 0, m || 0, 0, 0);
};

const KonsultasiCard = ({
  item,                 
  onAccept, onDecline, onReschedule,
}) => {
  const navigate = useNavigate();

  // tile tanggal
  const d = useMemo(() => new Date(item.tanggal), [item.tanggal]);
  const dd = pad2(d.getDate());
  const month = d.toLocaleString("default", { month: "short" }).toUpperCase();
  const yy = String(d.getFullYear()).slice(-2);
  const hari = dayID(d);

  // waktu
  const [mulai, selesai] = String(item.jam || "").split(/[-–—]/).map(s=>s.trim());
  const startAt = useMemo(() => buildDate(item.tanggal, mulai), [item.tanggal, mulai]);
  const endAt   = useMemo(() => buildDate(item.tanggal, selesai || mulai), [item.tanggal, selesai, mulai]);

  // tombol join aktif pas jamnya
  const [canJoin, setCanJoin] = useState(Date.now() >= startAt.getTime() && Date.now() <= endAt.getTime());
  useEffect(() => {
    const tick = () => setCanJoin(Date.now() >= startAt.getTime() && Date.now() <= endAt.getTime());
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [startAt, endAt]);

  const joinAsMentor = () => navigate(`/room/${ROOM_CODES.konsultasi.mentor}`);

  // status badge
  const statusStyle = {
    pending:  "bg-yellow-100 text-yellow-700",
    accepted: "bg-green-100 text-green-700",
    declined: "bg-red-100 text-red-700",
    done:     "bg-gray-100 text-gray-700",
  }[item.status || "pending"];

  return (
    <div className="bg-white rounded-xl shadow-md flex items-center justify-between px-8 py-6 mb-6 hover:shadow-lg transition">
      {/* tanggal tile */}
      <div className="flex flex-col items-center justify-center rounded-md w-[95px] h-[90px] bg-blue-600 text-white">
        <p className="text-[28px] font-bold leading-none">{dd}</p>
        <p className="text-sm font-semibold mt-1 uppercase">
          {month} <span className="font-medium normal-case">‘{yy}</span>
        </p>
      </div>

      {/* detail */}
      <div className="flex-1 px-6">
        <div className="flex gap-2 items-center">
          <span className={`px-2 py-[2px] rounded text-xs font-semibold ${statusStyle}`}>
            {item.status === "pending" && "Menunggu"}
            {item.status === "accepted" && "Diterima"}
            {item.status === "declined" && "Ditolak"}
            {item.status === "done" && "Selesai"}
          </span>
          <p className="text-sm text-blue-600 font-semibold">{hari}, {item.jam} WIB</p>
        </div>
        <h3 className="text-base font-bold text-gray-900 mt-1">{item.topik}</h3>
        <p className="text-sm text-gray-700">Pemohon: <span className="font-medium">{item.member}</span></p>
        {item.catatan && <p className="text-sm text-gray-600 mt-1">Catatan: {item.catatan}</p>}
      </div>

      {/* actions */}
      <div className="flex items-center gap-3">
        {item.status === "pending" && (
          <>
            <button
              onClick={() => onAccept(item)}
              className="px-3 py-2 text-sm bg-green-500 hover:bg-green-600 text-white rounded-lg shadow"
            >
              <span className="material-icons text-[18px] mr-1 align-[-3px]">check</span> Terima
            </button>
            <button
              onClick={() => onDecline(item)}
              className="px-3 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg shadow"
            >
              <span className="material-icons text-[18px] mr-1 align-[-3px]">close</span> Tolak
            </button>
          </>
        )}

        {item.status !== "done" && (
          <button
            onClick={() => onReschedule(item)}
            className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50 text-gray-700"
          >
            <span className="material-icons text-[18px] mr-1 align-[-3px]">schedule</span> Jadwalkan Ulang
          </button>
        )}

        {item.status === "accepted" && (
          canJoin ? (
            <button
              onClick={joinAsMentor}
              className="text-white bg-blue-500 hover:bg-blue-600 text-sm font-semibold py-3 px-5 rounded-lg flex items-center shadow"
            >
              <span className="material-icons text-white text-[18px] mr-2">video_call</span> Mulai Konsultasi
            </button>
          ) : (
            <button
              disabled
              className="bg-gray-300 text-gray-600 font-semibold py-3 px-5 text-sm rounded-lg flex items-center shadow-inner cursor-not-allowed"
            >
              <span className="material-icons mr-2 text-[18px]">watch_later</span> Belum Tersedia
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default KonsultasiCard;
