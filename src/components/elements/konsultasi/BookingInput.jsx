const BookingInput = (props) => {
    const { label, id, placeholder, type = "text", textarea = false } = props;
    return (
        <div className="mt-6">
            <label htmlFor={id} className="block text-lg font-semibold text-gray-800 mb-2">
                {label}
            </label>
            {textarea ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                ></textarea>
            ) : (
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
            )}
        </div>
    );
};

export default BookingInput;
