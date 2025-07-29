import React from "react";

const CardButton = ({ locked }) => {
  return (
    <button
      disabled={locked}
      className={`w-full text-sm font-semibold py-3 rounded-md transition duration-200 ease-in-out
        ${locked
          ? "bg-blue-500 text-white cursor-not-allowed hover:bg-gray-500 hover:scale-[1.02] shadow-sm"
          : "bg-blue-500 text-white hover:bg-blue-600 hover:scale-[1.02] shadow-sm"
        }
      `}
    >
      {locked ? "Terkunci" : "Masuk Sub Modul"}
    </button>
  );
};

export default CardButton;
