const Sandi = ({ oldPassword, newPassword, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Ganti Kata Sandi
      </label>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="password"
          name="oldPassword"
          value={oldPassword}
          onChange={onChange}
          placeholder="Sandi Lama"
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#4285F4] focus:border-[#4285F4]"
        />

        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={onChange}
          placeholder="Sandi Baru"
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#4285F4] focus:border-[#4285F4]"
        />
      </div>
    </div>
  );
};

export default Sandi;
