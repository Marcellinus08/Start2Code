const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Modul Pembelajaran</h2>
        <p className="text-gray-600">Pilih modul untuk memulai atau melanjutkan pembelajaranmu.</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="icon-btn">
          <span className="material-icons text-3xl">notifications_none</span>
        </button>
        <img
          alt="Avatar"
          className="w-10 h-10 rounded-full border-2 border-blue-300"
          src="https://lh3.googleusercontent.com/aida-public/..."
        />
      </div>
    </header>
  );
};

export default Header;
