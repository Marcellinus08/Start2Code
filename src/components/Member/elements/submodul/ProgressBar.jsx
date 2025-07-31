const ProgressBar = ({ percent, color = "blue" }) => {
  const colorMap = {
    green: "bg-green-500",
    pink: "bg-pink-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    teal: "bg-teal-500",
  };

  const selectedColor = colorMap[color] || "bg-blue-500";

  return (
    <div className="relative w-full">
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${selectedColor} transition-all duration-500`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      <div className="text-xs text-gray-600 mt-1 text-right">
        {percent}% Selesai
      </div>
    </div>
  );
};

export default ProgressBar;
