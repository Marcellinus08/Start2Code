import React from "react";
import { useNavigate } from "react-router-dom";

const getDayName = (dateString) => {
  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return hari[new Date(dateString).getDay()];
};

const CardSesi = ({ date, month, year, time, title, subtitle, teacher, joinUrl, isFinished, type }) => {
  const navigate = useNavigate();

  const cardColor = isFinished ? "bg-gray-200 text-gray-600" : "bg-blue-500 text-white";
  const validDate = `${year}-${{
    JAN: "01", FEB: "02", MAR: "03", APR: "04", MEI: "05", JUN: "06",
    JUL: "07", AGU: "08", SEP: "09", OKT: "10", NOV: "11", DES: "12"
  }[month]}-${date.padStart(2, "0")}`;
  const realDay = getDayName(validDate);

  return (
    <div className="bg-white rounded-xl shadow-md flex items-center justify-between px-8 py-6 mb-6 transition-transform duration-300 hover:shadow-lg">
      <div className={`flex flex-col items-center justify-center rounded-md w-[95px] h-[90px] ${cardColor}`}>
        <p className="text-[28px] font-bold leading-none">{date}</p>
        <p className="text-sm font-semibold mt-1 uppercase">{month} <span className="font-medium normal-case">‘{year.slice(-2)}</span></p>
      </div>

      <div className="flex-1 px-6 flex flex-col gap-y-1">
        <p className="text-sm text-blue-600 font-semibold">{realDay}, {time} WIB</p>
        <h3 className="text-base font-bold text-gray-800">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        {teacher && <p className="text-sm text-gray-600">Dibawakan oleh: <span className="font-medium">{teacher}</span></p>}
      </div>

      <div>
        {joinUrl ? (
          <button
            onClick={() => navigate(`/meetroom/${joinUrl}`)}
            className="text-white bg-blue-500 hover:bg-blue-600 text-sm font-semibold py-3 px-6 rounded-lg flex items-center hover:scale-[1.02] shadow-md"
          >
            <span className="material-icons text-white text-[18px] mr-2">video_call</span>Gabung Sesi
          </button>
        ) : isFinished ? (
          <button className="text-white bg-yellow-500 hover:bg-yellow-600 text-sm font-semibold py-3 px-6 rounded-lg flex items-center hover:scale-[1.02] shadow-md">
            <span className="material-icons text-white text-[18px] mr-2">movie</span>Lihat rekaman
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

export default CardSesi;