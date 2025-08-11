import React, { useEffect, useState } from "react";

const pad = (v) => v?.trim?.() || "";

const RescheduleModal = ({ open, initial, onClose, onSave }) => {
  const [tanggal, setTanggal] = useState("");
  const [mulai, setMulai] = useState("");
  const [selesai, setSelesai] = useState("");

  useEffect(() => {
    if (!open) return;
    const [m = "", s = ""] = String(initial?.jam || "")
      .split(/[-–—]/)
      .map((x) => x.trim());
    setTanggal(initial?.tanggal || "");
    setMulai(m);
    setSelesai(s);
  }, [open, initial]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tanggal || !mulai || !selesai) return;
    const start = new Date(`1970-01-01T${mulai}:00`);
    const end   = new Date(`1970-01-01T${selesai}:00`);
    if (start > end) {
      alert("Jam selesai tidak boleh lebih awal dari jam mulai.");
      return;
    }
    onSave({
      id: initial?.id,
      tanggal: pad(tanggal),
      jam: `${pad(mulai)} – ${pad(selesai)}`,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
          <span className="material-icons">event</span> Jadwalkan Ulang
        </h3>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="date" className="input-style" value={tanggal} onChange={(e)=>setTanggal(e.target.value)} required />
          <input type="time" className="input-style" value={mulai} onChange={(e)=>setMulai(e.target.value)} required />
          <input type="time" className="input-style" value={selesai} onChange={(e)=>setSelesai(e.target.value)} required />

          <div className="md:col-span-3 flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800">Batal</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RescheduleModal;