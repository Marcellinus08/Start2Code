import React from "react";
import BookingButton from "../../elements/konsultasi/BookingButton";

const DeskripsiKonsultasi = () => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col items-center">
      <div className="text-center mb-4">
        <p className="text-gray-600">
          Anda akan melakukan booking konsultasi dengan mentor pada:
        </p>
        <p className="text-gray-800 font-semibold text-xl text-blue-600">
          Rabu, 12 Juni 2024 - 14:00 WIB
        </p>
      </div>
      <BookingButton text="Booking Jadwal Konsultasi" />
    </div>
  );
};

export default DeskripsiKonsultasi;