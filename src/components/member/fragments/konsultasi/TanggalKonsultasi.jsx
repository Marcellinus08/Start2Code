import React, { useState } from "react";

const TanggalKonsultasi = () => {
  const [selectedDate, setSelectedDate] = useState(null); 
  const [currentDate, setCurrentDate] = useState(new Date()); 

  const changeMonth = (direction) => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + direction)));
  };

  const month = currentDate.toLocaleString("id-ID", { month: "long" });
  const year = currentDate.getFullYear();

  const startDay = new Date(year, currentDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();

  const dates = Array.from({ length: startDay }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  const handleDateClick = (date) => {
    setSelectedDate({ date, month: currentDate.getMonth(), year });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Pilih Tanggal Konsultasi</h3>
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => changeMonth(-1)} className="icon-btn">
            <span className="material-icons">chevron_left</span>
          </button>
          <h4 className="font-semibold text-gray-700">{`${month} ${year}`}</h4>
          <button onClick={() => changeMonth(1)} className="icon-btn">
            <span className="material-icons">chevron_right</span>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day, i) => (
            <div key={i} className="text-gray-500 text-sm">{day}</div>
          ))}
          {dates.map((day, i) => (
            <div
              key={i}
              className={`cursor-pointer rounded-full p-2 text-sm font-medium ${day ? "hover:bg-blue-200" : "text-transparent"} 
                ${selectedDate && selectedDate.date === day && selectedDate.month === currentDate.getMonth() && selectedDate.year === year ? "bg-blue-500 text-white" : ""}`}
              onClick={() => day && handleDateClick(day)}   
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TanggalKonsultasi;
