import React, { useEffect, useState } from "react";
import StatistikModul from "../../fragments/statistik/StatistikModul";
import RingkasanStatistik from "../../fragments/statistik/RingkasanStatistik";
import DistribusiChart from "../../fragments/statistik/DistribusiChart";
import AktivitasTerbaru from "../../fragments/statistik/AktivitasTerbaru";

const StatistikLayout = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <div className="lg:col-span-2 space-y-6">
        {username && (
          <>
            <StatistikModul username={username} />
            <RingkasanStatistik username={username} />
          </>
        )}
      </div>
      <div className="space-y-6">
        {username && (
          <>
            <DistribusiChart username={username} />
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <AktivitasTerbaru username={username} />
            </div>
          </>
        )}
        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition">
          <span className="material-icons align-middle mr-2">download</span>
          Unduh Statistik
        </button>
      </div>
    </div>
  );
};

export default StatistikLayout;
