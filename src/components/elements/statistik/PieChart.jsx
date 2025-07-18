import React from "react";

const PieChart = () => {
    const { data } = props;
    return (
        <div className="relative w-48 h-48">
            <svg className="w-full h-full" viewBox="0 0 36 36">
                {data.map((segment, index) => (
                    <path
                        key={index}
                        d={segment.path}
                        fill="none"
                        stroke={segment.color}
                        strokeWidth="3.8"
                        strokeDasharray={`${segment.value}, 100`}
                    ></path>
                ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-gray-800">{data[0].total}</span>
                <span className="text-sm text-gray-500">Sub Modul</span>
            </div>
        </div>
    );
};

export default PieChart;
