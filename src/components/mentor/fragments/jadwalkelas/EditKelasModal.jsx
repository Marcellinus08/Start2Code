            onChange={onChange}
            required
          >
            <option value="">Pilih Mentor</option>
            {mentorList.map((mentor, idx) => (
              <option key={idx} value={mentor}>
                {mentor}
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
