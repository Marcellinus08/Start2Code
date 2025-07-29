const StatCard = (props) => {
  const { icon, color, value, label } = props;
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
      <span className={`material-icons text-5xl ${color} mb-2`}>{icon}</span>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      <p className="text-gray-500">{label}</p>
    </div>
  );
};

export default StatCard;