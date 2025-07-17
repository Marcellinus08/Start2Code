const BookingButton = ({ text }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-6 py-3 w-full md:w-1/2 lg:w-1/3 text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-full shadow-md transition">
      <span className="material-icons-outlined"/>
      {text}
    </button>
  );
};

export default BookingButton;
