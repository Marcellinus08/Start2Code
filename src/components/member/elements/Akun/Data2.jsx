const Data2 = ({ email, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        name="email"
        type="email"
        value={email}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
      />
    </div>
  );
};

export default Data2;
