import React, { useEffect, useMemo, useState } from "react";
import KelasCard from "../../elements/jadwalkelas/KelasCard";

const splitRange = (s = "") => s.split(/[-–—]/).map(x => x.trim());

const parseHHMM = (hhmm = "") => {
  const m = /^(\d{2}):(\d{2})/.exec(hhmm);
  if (!m) return null;
  return { h: +m[1], m: +m[2] };
};

const makeLocalDate = (yyyy_mm_dd = "", hhmm = "00:00") => {
  const d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(yyyy_mm_dd);
  const t = parseHHMM(hhmm);
  if (!d || !t) return null;
  const year = +d[1];
  const monthIdx = +d[2] - 1; 
  const day = +d[3];
  return new Date(year, monthIdx, day, t.h, t.m, 0, 0); 
};

const getEndDateTime = (item) => {
  const jam = String(item.jam || "");
  const [startStr = "", endStrRaw = ""] = splitRange(jam);
  const endStr = endStrRaw || startStr;
  if (!item.tanggal || !endStr) return null;
  return makeLocalDate(item.tanggal, endStr);
};

const getStartDateTime = (item) => {
  const jam = String(item.jam || "");
  const [startStr = ""] = splitRange(jam);
  if (!item.tanggal || !startStr) return null;
  return makeLocalDate(item.tanggal, startStr);
};

const DaftarKelas = ({ kelasList, handleMulai, handleEdit }) => {

  const [nowTick, setNowTick] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNowTick(Date.now()), 5000); 
    return () => clearInterval(id);
  }, []);

  const upcomingList = useMemo(() => {
    const now = nowTick;
    return (kelasList || [])
      .filter((k) => {
        const endDt = getEndDateTime(k);

        if (!endDt) return true;
        return now <= endDt.getTime();
      })
      .sort((a, b) => {
        const aStart = getStartDateTime(a)?.getTime() ?? 0;
        const bStart = getStartDateTime(b)?.getTime() ?? 0;
        return aStart - bStart;
      });
  }, [kelasList, nowTick]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-gray-700 mb-5">Jadwal Kelas Saat Ini</h2>

      {upcomingList.length === 0 ? (
        <p className="text-gray-500 italic">Belum ada jadwal kelas saat ini.</p>
      ) : (
        upcomingList.map((kelas, i) => (
          <KelasCard
            key={i}
            {...kelas}
            onMulai={() => handleMulai(kelas)}
            onEdit={() => handleEdit(kelas)}
          />
        ))
      )}
    </div>
  );
};

export default DaftarKelas;
