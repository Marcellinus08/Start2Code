const ProgressBar = (props) => {
    const { value, color } = props;
    return (
      <>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
          <div
            className={` h-2.5 rounded-full bg-${color}-500 transition-all duration-500 ease-in-out`}
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mb-3 text-right">{value}% Selesai</p>
      </>
    );
};

export default ProgressBar;
