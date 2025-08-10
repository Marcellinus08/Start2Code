const ContentCard = ({ title, description }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Title & Deskripsi */}
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-sm text-gray-600 mb-4 min-h-[72px]">{description}</p>
      </div>

      {/* Tombol */}
      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">
        Lihat Detail
      </button>
    </div>
  );
};

export default ContentCard;
