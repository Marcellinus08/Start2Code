const ProgressBar = ({ percent, color = "blue" }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className={`h-4 rounded-full bg-${color}-500 transition-all duration-500`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
