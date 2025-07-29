const Data1 = (props) => {
    const {nama_lengkap} = props;
    return (
            <div>
                <label for="nama_lengkap" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input type="text" id="nama_lengkap" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition;" value={nama_lengkap} />
            </div>
    );
};

export default Data1;