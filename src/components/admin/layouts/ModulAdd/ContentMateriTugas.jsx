const ContentMateriTugas = () => {
    return (
        <section className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Form Materi</h3>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Pilih Submodul</label>
            <select
              value={materi.submodul_id}
              onChange={(e) =>
                setMateri({ ...materi, submodul_id: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="">-- Pilih --</option>
              {submodulOptions.map((sub) => (
                <option key={sub.submodul_id} value={sub.submodul_id}>
                  {sub.submodul_name}
                </option>
              ))}
            </select>
          </div>
          <input
            value={materi.judul}
            onChange={(e) => setMateri({ ...materi, judul: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            placeholder="Judul Materi"
          />
          <textarea
            value={materi.isi}
            onChange={(e) => setMateri({ ...materi, isi: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            placeholder="Isi materi"
            rows={3}
          />
          <button
            onClick={handleSaveMateri}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Simpan Materi
          </button>

          <hr className="my-6 border-gray-300" />

          <h3 className="text-lg font-semibold mb-4 mt-6">Form Tugas</h3>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Pilih Submodul</label>
            <select
              value={tugas.submodul_id}
              onChange={(e) =>
                setTugas({ ...tugas, submodul_id: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="">-- Pilih --</option>
              {submodulOptions.map((sub) => (
                <option key={sub.submodul_id} value={sub.submodul_id}>
                  {sub.submodul_name}
                </option>
              ))}
            </select>
          </div>
          <textarea
            value={tugas.instruksi}
            onChange={(e) =>
              setTugas({ ...tugas, instruksi: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            placeholder="Instruksi tugas"
            rows={3}
          />
          <input
            value={tugas.jawaban_sample}
            onChange={(e) =>
              setTugas({ ...tugas, jawaban_sample: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            placeholder="Jawaban sample"
          />
          <button
            onClick={handleSaveTugas}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Simpan Tugas
          </button>
        </section>
    );
};

export default ContentMateriTugas;