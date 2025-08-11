import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

const StatusChip = ({ done }) => (
  <span className={`px-2 py-[2px] rounded text-xs font-semibold ${done ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
    {done ? "Selesai" : "Belum"}
  </span>
);

const ModalContent = ({ member, onClose }) => {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all"); 
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const init = {};
    (member?.modules || []).forEach((m) => { init[m.id] = true; });
    setExpanded(init);
    setQ("");
    setStatus("all");
  }, [member]);

  const modules = member?.modules || [];
  
  const filtered = useMemo(() => {
    const qlc = q.trim().toLowerCase();
    return modules
      .map((mod) => {
        const subs = (mod.submodules || []).filter((s) => {
          const byQ = !qlc || s.title.toLowerCase().includes(qlc);
          const byS = status === "all" ? true : status === "done" ? s.done : !s.done;
          return byQ && byS;
        });
        const passModuleTitle = !qlc || mod.title.toLowerCase().includes(qlc);
        if (passModuleTitle || subs.length > 0) {
          return { ...mod, submodules: subs };
        }
        return null;
      })
      .filter(Boolean);
  }, [modules, q, status]);

  const countAll  = modules.reduce((acc, m) => acc + (m.submodules?.length || 0), 0);
  const countDone = modules.reduce((acc, m) => acc + (m.submodules?.filter(s => s.done).length || 0), 0);

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      {/* card */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-3xl rounded-xl shadow-2xl p-6 relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-blue-600 flex items-center gap-2">
              <span className="material-icons">library_books</span>
              Detail Progres • {member?.name || "-"}
            </h3>
            <button onClick={onClose} className="p-2 rounded hover:bg-gray-100" aria-label="Tutup">
              <span className="material-icons">close</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
            <span className="px-2 py-[2px] rounded bg-blue-50 text-blue-700 font-semibold">
              Modul: {modules.length}
            </span>
            <span className="px-2 py-[2px] rounded bg-green-50 text-green-700 font-semibold">
              Submodul Selesai: {countDone}/{countAll}
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:items-center mb-4">
            <div className="flex-1 relative">
              <span className="material-icons absolute left-3 top-2.5 text-gray-400">search</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari modul / submodul…"
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="all">Semua</option>
              <option value="done">Selesai</option>
              <option value="todo">Belum</option>
            </select>
          </div>

          <div className="max-h-[60vh] overflow-y-auto pr-1">
            {(filtered?.length ?? 0) === 0 ? (
              <div className="text-gray-500 italic">Tidak ada data sesuai filter.</div>
            ) : (
              filtered.map((mod) => {
                const isOpen = !!expanded[mod.id];
                const doneCount = mod.submodules?.filter(s => s.done).length || 0;
                const total = mod.submodules?.length || 0;
                return (
                  <div key={mod.id} className="border border-gray-200 rounded-xl mb-3 overflow-hidden bg-white">
                    <button
                      type="button"
                      onClick={() => setExpanded((p) => ({ ...p, [mod.id]: !p[mod.id] }))}
                      className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-icons text-gray-600">{isOpen ? "expand_less" : "expand_more"}</span>
                        <div>
                          <div className="font-semibold text-gray-800">{mod.title}</div>
                          <div className="text-xs text-gray-500">Submodul selesai: {doneCount}/{total}</div>
                        </div>
                      </div>
                      <StatusChip done={!!mod.done} />
                    </button>

                    {isOpen && (
                      <div className="px-4 py-3 bg-gray-50">
                        {mod.submodules && mod.submodules.length > 0 ? (
                          <ul className="divide-y divide-gray-200">
                            {mod.submodules.map((s) => (
                              <li key={s.id} className="py-2 flex items-center justify-between">
                                <div className="min-w-0">
                                  <div className="text-sm font-medium text-gray-800 truncate">{s.title}</div>
                                  <div className="text-xs text-gray-500">
                                    {s.completedAt ? `Selesai: ${s.completedAt}` : "Belum selesai"}
                                    {typeof s.score === "number" && (
                                      <span className="ml-2">• Skor: <b>{s.score}</b></span>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  {s.done ? (
                                    <span className="material-icons text-green-600">check_circle</span>
                                  ) : (
                                    <span className="material-icons text-gray-400">radio_button_unchecked</span>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="text-sm text-gray-500 italic">Belum ada submodul.</div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ModuleDetailModal = ({ open, member, onClose }) => {
  if (!open || !member) return null;
  return createPortal(<ModalContent member={member} onClose={onClose} />, document.body);
};

export default ModuleDetailModal;