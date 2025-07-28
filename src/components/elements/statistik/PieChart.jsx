const PieChart = (props) => {
  const { total } = props;
  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          {/* Abu-abu latar belakang 100% */}
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 1 1 0 31.831
               a 15.9155 15.9155 0 1 1 0 -31.831"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="3.8"
          />

          {/* Biru - 60% */}
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 1 1 0 31.831
               a 15.9155 15.9155 0 1 1 0 -31.831"
            fill="none"
            stroke="#2563eb"
            strokeWidth="3.8"
            strokeDasharray="60, 40"
            strokeDashoffset="0"
          />

          {/* Hijau - 30% */}
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 1 1 0 31.831
               a 15.9155 15.9155 0 1 1 0 -31.831"
            fill="none"
            stroke="#22c55e"
            strokeWidth="3.8"
            strokeDasharray="30, 70"
            strokeDashoffset="-60"
          />

          {/* Kuning - 10% */}
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 1 1 0 31.831
               a 15.9155 15.9155 0 1 1 0 -31.831"
            fill="none"
            stroke="#facc15"
            strokeWidth="3.8"
            strokeDasharray="10, 90"
            strokeDashoffset="-90"
          />
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
  