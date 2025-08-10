import { useNavigate } from "react-router-dom";

const CardButton = ({ color, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full text-sm mt-auto font-semibold py-3 px-6 rounded-lg bg-blue-600 hover:bg-${color}-500 text-white transition duration-300 ease-in-out`}
    >
      Mulai Belajar
    </button>
  );
};

export default CardButton;
