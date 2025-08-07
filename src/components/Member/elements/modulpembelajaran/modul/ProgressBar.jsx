const ProgressBar = ({ value, color = "gray" }) => {
  const colorMap = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    red: "bg-red-500",
    purple: "bg-purple-500",
    gray: "bg-gray-500",
  };

  const barColor = colorMap[color] || colorMap.gray;

  return (
    <>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div
          className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${barColor}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 mb-3 text-right">{Math.round(value)}% Selesai</p>
    </>
  );
};

export default ProgressBar;
