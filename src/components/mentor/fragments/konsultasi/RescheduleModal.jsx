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
