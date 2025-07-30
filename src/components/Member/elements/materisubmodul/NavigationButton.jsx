const NavigationButton = ({ onPrev, onNext }) => {
  return (
    <div className="mt-8 flex justify-end gap-4">
      <button
        onClick={onPrev}
        className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium py-3 px-5 rounded-lg transition duration-300 ease-in-out hover:scale-[1.02] shadow-sm"
      >
        Sebelumnya
      </button>
      <button
        onClick={onNext}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 px-5 rounded-lg transition duration-300 ease-in-out hover:scale-[1.02] shadow-sm"
      >
        Selanjutnya
      </button>
    </div>
  );
};

export default NavigationButton;
