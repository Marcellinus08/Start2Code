import React, { useState } from "react";
import BookingInput from "../../elements/konsultasi/BookingInput";

const WaktuKonsultasi = () => {
  const [selectedTime, setSelectedTime] = useState(null); 
  const times = [
    { time: "09:00", disabled: false },
    { time: "10:00", disabled: true }, 
    { time: "11:00", disabled: false },
    { time: "13:00", disabled: false },
    { time: "14:00", disabled: false },
    { time: "15:00", disabled: false },
    { time: "16:00", disabled: true }, 
    { time: "17:00", disabled: false },
  ];

  const handleTimeClick = (time) => {
    if (selectedTime === time) {
      setSelectedTime(null); 
    } else {
      setSelectedTime(time); 
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Pilih Waktu - Selasa, 4 Juni 2024
      </h3>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {times.map((slot, i) => (
          <div
            key={i}
            className={`time-slot cursor-pointer p-3 rounded-lg text-center font-medium border ${
              slot.disabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : selectedTime === slot.time
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-100"
            }`}
            onClick={() => !slot.disabled && handleTimeClick(slot.time)} // hanya aktif jika slot tidak disabled
          >
            {slot.time}
          </div>
        ))}
      </div>

      <BookingInput
        id="consultation-topic"
        label="Topik Konsultasi"
        placeholder="Contoh: State management di React"
      />

      <BookingInput
        id="consultation-description"
        label="Deskripsi Topik"
        placeholder="Jelaskan lebih detail mengenai topik yang ingin Anda diskusikan..."
        textarea
      />
    </div>
  );
};

export default WaktuKonsultasi;
