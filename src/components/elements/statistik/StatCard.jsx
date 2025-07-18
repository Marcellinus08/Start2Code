import React from "react";

const StatCard = () => {
    const { title, value, icon, color } = props;
    return (
        <div className="stat-card flex flex-col items-center justify-center text-center">
            <span className={`material-icons text-5xl ${color} mb-2`}>{icon}</span>
            <p className="text-3xl font-bold text-gray-800">{value}</p>
            <p className="text-gray-500">{title}</p>
        </div>
    );
};

export default StatCard;
