import React, { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient"; 

const EditKelasModal = ({ isOpen, onClose, data, onUpdate }) => {
  const [formData, setFormData] = useState({
    id: "",
    modul: "",
    submodul: "",
    tanggal: "",
    jam_mulai: "",
    jam_selesai: "",
    pengajar: "",
  });

  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      const { data: mentorData, error } = await supabase
        .from("users")
        .select("username, full_name")
        .eq("role", "mentor");

      if (!error) {
        setMentors(mentorData);
      } else {
        console.error("Gagal ambil mentor:", error);
      }
    };

    if (isOpen) fetchMentors();
  }, [isOpen]);

  useEffect(() => {
    if (!data) return;

    const [mulai = "", selesai = ""] = String(data.jam || "")
      .split(/[-–—]/)
      .map((s) => s.trim());

    setFormData({
      id: data.id ?? "",
      modul: data.modul ?? "",
      submodul: data.submodul ?? "",
      tanggal: data.tanggal ?? "",
      jam_mulai: mulai,
      jam_selesai: selesai,
      pengajar: data.pengajar ?? "",
    });
  }, [data]);

  if (!isOpen) return null;

  const onChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();

    if (!formData.jam_mulai || !formData.jam_selesai) return;

    const start = new Date(`1970-01-01T${formData.jam_mulai}:00`);
    const end = new Date(`1970-01-01T${formData.jam_selesai}:00`);
    if (start > end) {
      alert("Jam selesai tidak boleh lebih awal dari jam mulai.");
      return;
    }

    const payload = {
      id: formData.id,
      modul: formData.modul,
      submodul: formData.submodul,
      tanggal: formData.tanggal,
      jam: `${formData.jam_mulai} – ${formData.jam_selesai}`,
      pengajar: formData.pengajar,
    };

    onUpdate(payload);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-blue-600 flex items-center gap-2">
          <span className="material-icons">edit</span>
          Edit Jadwal Kelas
        </h2>

        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            className="input-style"
            name="modul"
            value={formData.modul}
            onChange={onChange}
            placeholder="Nama Modul"
            required
          />
          <input
            className="input-style"
            name="submodul"
            value={formData.submodul}
            onChange={onChange}
            placeholder="Submodul"
            required
          />
          <input
            className="input-style"
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={onChange}
            required
          />

          <input
            className="input-style"
            type="time"
            name="jam_mulai"
            value={formData.jam_mulai}
            onChange={onChange}
            required
          />
          <input
            className="input-style"
            type="time"
            name="jam_selesai"
            value={formData.jam_selesai}
            onChange={onChange}
            required
          />

          <select
            className="input-style"
            name="pengajar"
            value={formData.pengajar}
            onChange={onChange}
            required
          >
            <option value="">Pilih Mentor</option>
            {mentors.map((mentor, idx) => (
              <option key={idx} value={mentor.full_name || mentor.username}>
                {mentor.full_name || mentor.username}
              </option>
            ))}
          </select>

          <div className="md:col-span-3 flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditKelasModal;
