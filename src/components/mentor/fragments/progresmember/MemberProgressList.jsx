import { useState } from "react";
import EditNoteModal from "./EditNoteModal";
import ModuleDetailModal from "./ModuleDetailModal";

const StatusBadge = ({ value }) => {
  const map = {
    aktif:     "bg-blue-100 text-blue-700",
    selesai:   "bg-green-100 text-green-700",
    bimbingan: "bg-yellow-100 text-yellow-700",
  };
  const label = {
    aktif: "Aktif",
    selesai: "Selesai",
    bimbingan: "Butuh Bimbingan Ulang",
  }[value] || value;
  return (
    <span className={`px-2 py-[2px] rounded text-xs font-semibold ${map[value] || "bg-gray-100 text-gray-700"}`}>
      {label}
    </span>
  );
};

const ProgressBar = ({ value }) => {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div className="h-2 rounded-full bg-blue-500" style={{ width: `${pct}%` }} />
    </div>
  );
};

const MemberRow = ({ m, onEditNotes, onChangeStatus, onViewModules }) => {
  const completion = (m.stats.modul / (m.stats.totalModul || 1)) * 100;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-lg transition mb-4">
      {/* Left: identity + stats */}
      <div className="flex-1">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 grid place-items-center text-blue-700 font-bold">
            {m.name.split(" ").map((x) => x[0]).slice(0,2).join("")}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base font-bold text-gray-900 truncate">{m.name}</h3>
              <StatusBadge value={m.status} />
            </div>
            <p className="text-sm text-gray-600">{m.email}</p>

            {/* Stats (tanpa tugas) */}
            <div className="mt-3 grid grid-cols-2 gap-3 max-w-sm">
              <div>
                <p className="text-xs text-gray-500">Modul</p>
                <p className="text-sm font-semibold">{m.stats.modul}/{m.stats.totalModul}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Submodul</p>
                <p className="text-sm font-semibold">{m.stats.submodul}</p>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-3">
              <ProgressBar value={completion} />
              <p className="text-xs text-gray-500 mt-1">{Math.round(completion)}% selesai</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={() => onViewModules(m)}
          className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50 text-gray-700 flex items-center"
        >
          <span className="material-icons text-[18px] mr-1">library_books</span>
          Lihat Detail
        </button>

        <button
          onClick={() => onEditNotes(m)}
          className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50 text-gray-700 flex items-center"
        >
          <span className="material-icons text-[18px] mr-1">note_alt</span>
          Catatan
        </button>

        <select
          value={m.status}
          onChange={(e) => onChangeStatus(m.id, e.target.value)}
          className="px-3 py-2 text-sm border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          title="Ubah status"
        >
          <option value="aktif">Aktif</option>
          <option value="selesai">Selesai</option>
          <option value="bimbingan">Butuh Bimbingan Ulang</option>
        </select>
      </div>
    </div>
  );
};

const MemberProgressList = ({ data, onUpdateStatus, onUpdateNotes }) => {
  const [editing, setEditing] = useState(null);
  const [viewing, setViewing] = useState(null);

  const handleEditNotes = (member) => setEditing(member);
  const handleSaveNotes = (id, notes) => {
    onUpdateNotes(id, notes);
    setEditing(null);
  };

  const handleViewModules = (member) => setViewing(member);

  return (
    <>
      {data.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-6 text-gray-500 italic">
          Belum ada member yang cocok dengan filter/pencarian.
        </div>
      ) : (
        data.map((m) => (
          <MemberRow
            key={m.id}
            m={m}
            onEditNotes={handleEditNotes}
            onChangeStatus={onUpdateStatus}
            onViewModules={handleViewModules}
          />
        ))
      )}

      <EditNoteModal
        open={!!editing}
        member={editing}
        onClose={() => setEditing(null)}
        onSave={handleSaveNotes}
      />

      <ModuleDetailModal
        open={!!viewing}
        member={viewing}
        onClose={() => setViewing(null)}
      />
    </>
  );
};

export default MemberProgressList;