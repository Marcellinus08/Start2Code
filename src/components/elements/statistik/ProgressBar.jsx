const ProgressBar = (props) => {
  const { label, percentage, color } = props;
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className={`text-base font-medium ${color}`}>{label}</span>
        <span className={`text-sm font-medium ${color}`}>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={`${color.replace("text", "bg")} h-4 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;