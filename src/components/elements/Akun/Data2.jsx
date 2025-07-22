const Data2 = (props) => {
    const {email} = props;
    return (
        <div>
            <label for="email" className="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition;" value={email} disabled />
        </div>
    );
};

export default Data2;