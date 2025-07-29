import React from "react";
import PieChart from "../../elements/statistik/PieChart";

const DistribusiChart = () => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Distribusi Sub Modul</h3>
    <PieChart total={125} />
    <div className="mt-4 space-y-2">
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
        <span className="text-gray-600">Dasar Web (60%)</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
        <span className="text-gray-600">Javascript (30%)</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
        <span className="text-gray-600">React JS (10%)</span>
      </div>
    </div>
  </div>
);

export default DistribusiChart;