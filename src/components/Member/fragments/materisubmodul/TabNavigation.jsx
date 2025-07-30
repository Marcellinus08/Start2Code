const TabNavigation = ({ activeTab, onChangeTab }) => {
  return (
    <div className="border-b border-gray-200 mb-6">
      <nav aria-label="Tabs" className="-mb-px flex space-x-4">
        <button
          onClick={() => onChangeTab("materi")}
          className={`flex items-center gap-2 px-6 py-3 font-medium border-b-2 transition duration-150 ease-in-out 
            ${activeTab === "materi" 
              ? "border-blue-500 text-blue-600" 
              : "border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-500"}`}
        >
          <span className="material-icons text-base leading-none">description</span>
          Materi
        </button>

        <button
          onClick={() => onChangeTab("tugas")}
          className={`flex items-center gap-2 px-6 py-3 font-medium border-b-2 transition duration-150 ease-in-out 
            ${activeTab === "tugas" 
              ? "border-blue-500 text-blue-600" 
              : "border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-500"}`}
        >
          <span className="material-icons text-base leading-none">assignment</span>
          Tugas
        </button>
      </nav>
    </div>
  );
};

export default TabNavigation;
