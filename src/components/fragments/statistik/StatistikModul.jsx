import React from "react";
import PieChart from "../../elements/statistik/PieChart";
import ProgressBar from "../../elements/statistik/ProgressBar";
import StatCard from "../../elements/statistik/StatCard";

const StatistikModul = () => {
  const modules = [
    { name: "Algorithm & Data Structure", percentage: 90, color: "text-blue-500" },
    { name: "Game Programming", percentage: 80, color: "text-green-500" },
    { name: "Web Programming", percentage: 75, color: "text-indigo-500" },
    { name: "Application Programming", percentage: 60, color: "text-yellow-500" },
    { name: "Crypto Programming", percentage: 45, color: "text-purple-500" },
    { name: "Basic Hardware Programming", percentage: 25, color: "text-red-500" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Modul Selesai</h3>
      <div className="space-y-4">
        {modules.map((modul, i) => (
          <ProgressBar
            key={i}
            label={modul.name}
            percentage={modul.percentage}
            color={modul.color}
          />
        ))}
      </div>
    </div>
  );
};

export default StatistikModul;
