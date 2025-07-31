import { useState } from "react";
import CardImage from "../../elements/homepage/CardImage";

const CardProgram = ({ image, title, description, detail }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`w-full h-100 perspective rounded-xl`}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${flipped ? "rotate-y-180" : ""}`}
      >
        {/* Depan */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl p-6 card-shadow flex flex-col justify-between">
          <CardImage image={image} />
          <div className="flex-1 flex flex-col justify-between mt-2">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
            <p className="text-sm text-gray-600 mb-4 min-h-[72px]">{description}</p>
            <button
              onClick={() => setFlipped(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md text-sm"
            >
              Lihat Detail
            </button>
          </div>
        </div>

        {/* Belakang */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl p-6 card-shadow flex flex-col justify-between">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
          <p className="text-sm text-gray-600 flex-1">{detail}</p>
          <button
            onClick={() => setFlipped(false)}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md text-sm"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProgram;
