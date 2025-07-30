import React from "react";
import { useNavigate } from "react-router-dom";

const CardButton = ({ locked, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!locked && to) {
      navigate(to);
    }
  };

  return (
    <button
      disabled={locked}
      onClick={handleClick}
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
