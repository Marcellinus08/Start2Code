import React from "react";

const TanggalKonsultasi = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Pilih Tanggal Konsultasi</h3>
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <button className="icon-btn">
            <span className="material-icons">chevron_left</span>
          </button>
          <h4 className="font-semibold text-gray-700">Juni 2024</h4>
          <button className="icon-btn">
            <span className="material-icons">chevron_right</span>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center">
          {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((hari, i) => (
            <div key={i} className="text-gray-500 text-sm">
              {hari}
            </div>
          ))}

          {[...Array(42)].map((_, i) => (
            <div
              key={i}
              className={`cursor-pointer rounded-full p-2 text-sm font-medium
                ${i === 17 ? "bg-blue-500 text-white" :
                  i >= 6 && i <= 35 ? "hover:bg-blue-200" : "text-gray-400"}`}
            >
              {i - 5 > 0 && i - 5 <= 30 ? i - 5 : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TanggalKonsultasi;