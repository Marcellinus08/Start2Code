import React, { useState, useEffect } from "react";

const EditKelasModal = ({ isOpen, onClose, data, onUpdate }) => {
  const [formData, setFormData] = useState(data || {});

  useEffect(() => {
    setFormData(data || {});
  }, [data]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-blue-600">✏️ Edit Jadwal Kelas</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="modul" value={formData.modul} onChange={handleChange} required className="input-style" />
          <input name="submodul" value={formData.submodul} onChange={handleChange} required className="input-style" />
          <input type="date" name="tanggal" value={formData.tanggal} onChange={handleChange} required className="input-style" />
          <input type="time" name="jam" value={formData.jam} onChange={handleChange} required className="input-style" />
          <input type="number" name="durasi" value={formData.durasi} onChange={handleChange} required className="input-style" />
          <input name="deskripsi" value={formData.deskripsi} onChange={handleChange} required className="input-style" />
        </form>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
            Batal
          </button>
          <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditKelasModal;
