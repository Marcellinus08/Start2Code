const PieChart = ({ total }) => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#e6e6e6" strokeWidth="3.8" />
          <path className="text-blue-600" d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="currentColor" strokeDasharray="60, 100" strokeWidth="3.8" />
          <path className="text-green-500" d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="currentColor" strokeDasharray="30, 100" strokeDashoffset="-60" strokeWidth="3.8" />
          <path className="text-yellow-400" d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="currentColor" strokeDasharray="10, 100" strokeDashoffset="-90" strokeWidth="3.8" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-3xl font-bold text-gray-800">{total}</span>
          <span className="text-sm text-gray-500">Sub Modul</span>
        </div>
      </div>
    </div>
  );
};

export default PieChart;