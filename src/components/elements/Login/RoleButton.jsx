import React from 'react';

const RoleButton = ({ icon, label, active, onClick }) => {
  return (
    <button
      className={`w-full py-4 px-4 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out transform flex items-center justify-center gap-2 role-button ${
        active
          ? 'bg-white text-[#4285F4] shadow-lg scale-105'
          : 'text-white/80 hover:bg-white/20 hover:text-white'
      }`}
      onClick={onClick}
    >
      <span className="material-icons text-[25px] leading-none align-middle">
        {icon}
      </span>
      <span className="align-middle">{label}</span>
    </button>
  );
};

export default RoleButton;
