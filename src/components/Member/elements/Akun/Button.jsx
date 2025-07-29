const Button = () => {
    return (
        <div className="flex justify-end space-x-4 pt-4">
            <button type="button" className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out">Batal</button>
            <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">Simpan Perubahan</button>
        </div>
    );
};

export default Button;