const Data1 = (props) => {
    const {nama_depan, nama_belakang} = props;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="nama_depan" className="block text-sm font-medium text-gray-700 mb-1">Nama Depan</label>
                <input type="text" id="nama_depan" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition;" value={nama_depan} />
            </div>
            <div>
                <label for="nama_belakang" className="block text-sm font-medium text-gray-700 mb-1">Nama Belakang</label>
                <input type="text" id="nama_belakang" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition;" value={nama_belakang} />
            </div>
        </div>
    );
};

export default Data1;