import React from "react";

const ProgressBar = ({ percent }) => {
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 text-right">{percent}% Selesai</p>
    </div>
  );
};

export default ProgressBar;
