const Data3 = (props) => {
    const {telepon} = props;
    return (
        <div>
            <label for="no_telepon" className="block text-sm font-medium text-gray-700 mb-1">No. Telepon</label>
            <input type="tel" id="no_telepon" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition;" placeholder="Masukkan nomor telepon Anda" value={telepon}/>
        </div>
    );
};

export default Data3;