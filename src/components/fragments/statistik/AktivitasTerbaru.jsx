import React from "react";

const AktivitasTerbaru = () => {
  const activities = [
    { icon: "check_circle", text: "Menyelesaikan sub modul 'React Hooks'", date: "Kemarin" },
    { icon: "menu_book", text: "Mengikuti Zoom 'Live Coding Session'", date: "2 hari yang lalu" },
    { icon: "emoji_events", text: "Mendapatkan lencana 'Master Javascript'", date: "4 hari yang lalu" }
  ];

  return (
    <div className="stat-card">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Aktivitas Terbaru</h3>
      <ul className="space-y-3">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-center space-x-3">
            <span className="material-icons text-green-500">{activity.icon}</span>
            <p className="text-gray-600 text-sm">
              {activity.text} <span className="text-gray-400 block">{activity.date}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AktivitasTerbaru;
