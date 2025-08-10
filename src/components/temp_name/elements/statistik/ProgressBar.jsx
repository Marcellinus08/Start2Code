const ProgressBar = ({ label, percentage, color }) => {
  // Mapping warna aman Tailwind
  const colorMap = {
    blue: "bg-blue-600 text-blue-600",
    green: "bg-green-600 text-green-600",
    yellow: "bg-yellow-400 text-yellow-400",
    purple: "bg-purple-500 text-purple-500",
    red: "bg-red-500 text-red-500",
    gray: "bg-gray-500 text-gray-500",
  };

  // Ekstrak nama warna dari modul.color (contoh: "blue", "green", dst)
  const colorKey = color?.split("-")[0] || "gray";
  const finalColor = colorMap[colorKey] || colorMap.gray;

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className={`text-base font-medium ${finalColor.split(" ")[1]}`}>{label}</span>
        <span className={`text-sm font-medium ${finalColor.split(" ")[1]}`}>
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={`${finalColor.split(" ")[0]} h-4 rounded-full transition-all duration-500 ease-in-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
