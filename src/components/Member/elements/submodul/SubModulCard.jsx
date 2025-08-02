import { Link } from "react-router-dom";

const SubModulCard = ({ number, title, desc, isLocked, id }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-md">
          {number}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      </div>

      {isLocked ? (
        <button
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md cursor-not-allowed opacity-80"
          disabled
        >
          Terkunci
        </button>
      ) : (
        <Link
          to={`/materi/${id}`}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
        >
          Masuk Sub Modul
        </Link>
      )}
    </div>
  );
};

export default SubModulCard;
