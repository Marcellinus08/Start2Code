const JadwalJam = (props) => {
    const { time, selected, disabled, onClick } = props;
        let baseStyle = "px-6 py-2 rounded-full text-center border transition ";
        if (disabled) {
            baseStyle += "bg-gray-200 text-gray-400 cursor-not-allowed ";
        } else if (selected) {
            baseStyle += "bg-blue-600 text-white font-semibold shadow ";
        } else {
            baseStyle += "bg-white hover:bg-blue-50 text-gray-800 cursor-pointer border-gray-300 ";
        }

        return (
            <div className={baseStyle} onClick={!disabled ? onClick : undefined}>
            {time}
            </div>
        );
};

export default JadwalJam;
