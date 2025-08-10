const TabButton = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-lg font-bold text-base shadow-md transition duration-300 ${
        active
          ? "bg-blue-500 text-white"
          : "bg-white text-black hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
