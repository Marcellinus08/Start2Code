import React, { useState } from "react";

const FormTambahKelas = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    modul: "",
    submodul: "",
    tanggal: "",
    jam: "",
    durasi: "",
    pengajar: "",
  });

  const mentorList = ["Bpk. Reno", "Ibu Sari", "Bpk. Rudi", "Ibu Nia"];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      modul: "",
      submodul: "",
      tanggal: "",
      jam: "",
      durasi: "",
      pengajar: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mb-6"
    >
      <h2 className="text-xl font-bold text-blue-500 mb-4 flex items-center gap-2">
        ➕ Tambah Kelas Baru
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="modul"
          placeholder="Nama Modul"
          value={formData.modul}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          name="submodul"
          placeholder="Submodul"
          value={formData.submodul}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="date"
          name="tanggal"
          value={formData.tanggal}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="time"
          name="jam"
          value={formData.jam}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="number"
          name="durasi"
          placeholder="Durasi (menit)"
          value={formData.durasi}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <select
          name="pengajar"
          value={formData.pengajar}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
        >
          <option value="">Pilih Mentor</option>
          {mentorList.map((mentor, i) => (
            <option key={i} value={mentor}>
              {mentor}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 flex items-center gap-2"
      >
        Tambah
      </button>
    </form>
  );
};

export default FormTambahKelas;
