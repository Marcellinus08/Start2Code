const Button = () => {
  return (
    <div className="flex justify-end space-x-2">
      <button
        type="button"
        className="bg-gray-200 px-4 py-2 rounded text-black hover:bg-gray-300"
        onClick={() => window.location.reload()}
      >
        Batal
      </button>
      <button
        type="submit"
        className="bg-[#4285F4] text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Simpan Perubahan
      </button>
    </div>
  );
};

export default Button;
