import React from "react";
import CardButton from "../../elements/submodul/CardButton";

const SubModulCard = ({ nomor, title, deskripsi, locked }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
      <div className="flex items-center mb-3">
        <span className="material-icons text-blue-500 mr-3">{nomor}</span>
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      </div>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{deskripsi}</p>

      <CardButton locked={locked} />
    </div>
  );
};

export default SubModulCard;
