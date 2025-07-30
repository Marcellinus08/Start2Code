const Data3 = ({ telepon, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
      <input
        name="telepon"
        type="tel"
        value={telepon}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#4285F4] focus:border-[#4285F4]"
        placeholder="Contoh: 08123456789"
        required
      />
    </div>
  );
};

export default Data3;
