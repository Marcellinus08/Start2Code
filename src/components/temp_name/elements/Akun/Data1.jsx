const Data1 = ({ username, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Username</label>
      <input
        name="username"
        type="text"
        value={username}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#4285F4] focus:border-[#4285F4]"
        placeholder="Masukkan username"
        required
        disabled
      />
    </div>
  );
};

export default Data1;
