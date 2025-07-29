const CardButton = (props) => {
  const { color } = props;
  return (
    <button 
    className={`w-full text-sm mt-auto font-semibold py-3 px-6 rounded-lg bg-blue-600 hover:bg-${color}-500 text-white transition duration-300 ease-in-out`}>
      Mulai Belajar
    </button>
  );
};

export default CardButton;
