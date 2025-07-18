import React from "react";

const ProgressBar = () => {
    const { percent, color } = props;
    return (
        <div className="w-full bg-gray-200 rounded-full h-4">
            <div
                className={`h-4 rounded-full ${color}`}
                style={{ width: `${percent}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
