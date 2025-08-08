const PieChart = ({ data, total }) => {
  const radius = 15.9155;
  const strokeWidth = 3.8;
  let offset = 0;

  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          {/* Background lingkaran */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#e6e6e6"
            strokeWidth={strokeWidth}
          />

          {/* Data Selesai dan Belum */}
          {data.map((item, i) => {
            const dasharray = `${item.percent}, ${100 - item.percent}`;
            const dashoffset = -offset;
            offset += item.percent;

            return (
              <circle
                key={i}
                cx="18"
                cy="18"
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth={strokeWidth}
                strokeDasharray={dasharray}
                strokeDashoffset={dashoffset}
                transform="rotate(-90 18 18)"
              />
            );
          })}
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
