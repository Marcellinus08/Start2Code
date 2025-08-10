import React from "react";
import CardSesi from "./CardSesi";

const ScheduleCard = ({ title, sessions }) => {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-gray-700 mb-5">{title}</h2>
      <div className="space-y-6">
        {sessions.map((sesi, index) => (
          <CardSesi key={index} {...sesi} />
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
