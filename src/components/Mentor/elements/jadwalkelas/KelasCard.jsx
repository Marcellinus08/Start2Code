import React from "react";
import { useNavigate } from "react-router-dom";

const KelasCard = ({ tanggal, jam, modul, submodul, pengajar, joinUrl }) => {
  const navigate = useNavigate();

  const d = new Date(tanggal);
  const date = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString("default", { month: "short" }).toUpperCase();
  const year = String(d.getFullYear());
  const realDay = d.toLocaleDateString("id-ID", { weekday: "long" });

  return (
    <div className="bg-white rounded-xl shadow-md flex items-center justify-between px-8 py-6 mb-6 transition-transform duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center justify-center rounded-md w-[95px] h-[90px] bg-blue-600 text-white">
        <p className="text-[28px] font-bold leading-none">{date}</p>
        <p className="text-sm font-semibold mt-1 uppercase">
          {month} <span className="font-medium normal-case">‘{year.slice(-2)}</span>
        </p>
      </div>

      <div className="flex-1 px-6 flex flex-col gap-y-1">
        <p className="text-sm text-blue-600 font-semibold">
          {realDay}, {jam} WIB
        </p>
        <h3 className="text-base font-bold text-gray-800">{modul}</h3>
        {submodul && (
          <p className="text-sm text-gray-600">Submodul: {submodul}</p>
        )}
        {pengajar && (
          <p className="text-sm text-gray-600">
            Dibawakan oleh: <span className="font-medium">{pengajar}</span>
          </p>
        )}
      </div>

      <button
        onClick={() => navigate(`/room/${joinUrl}`)}
        className="text-white bg-blue-500 hover:bg-blue-600 text-sm font-semibold py-3 px-6 rounded-lg flex items-center shadow-md hover:scale-[1.02]"
      >
        <span className="material-icons text-white text-[18px] mr-2">video_call</span>
        Gabung Sesi
      </button>
    </div>
  );
};

export default KelasCard;
