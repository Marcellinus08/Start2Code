import { useEffect, useState } from "react";

const EditNoteModal = ({ open, member, onClose, onSave }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (open) setText(member?.notes || "");
  }, [open, member]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
          <span className="material-icons">sticky_note_2</span>
          Catatan Progres • {member?.name}
        </h3>

        <textarea
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tulis catatan bimbingan, kendala, atau rencana tindak lanjut..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800">
            Batal
          </button>
          <button
            onClick={() => onSave(member.id, text)}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNoteModal;
