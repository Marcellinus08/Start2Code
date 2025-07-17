import React from "react";
import JadwalJam from "../../elements/konsultasi/JadwalJam";
import BookingInput from "../../elements/konsultasi/BookingInput";

const WaktuKonsultasi = () => {
  const times = [
    { time: "09:00" },
    { time: "10:00", disabled: true },
    { time: "11:00" },
    { time: "13:00" },
    { time: "14:00", selected: true },
    { time: "15:00" },
    { time: "16:00", disabled: true },
    { time: "17:00" },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Pilih Waktu - Rabu, 12 Juni 2024
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-3 mb-6">
        {times.map((slot, i) => (
          <JadwalJam
            key={i}
            time={slot.time}
            selected={slot.selected}
            disabled={slot.disabled}
            onClick={() => console.log("Klik:", slot.time)}
          />
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
