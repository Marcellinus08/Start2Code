import { useMemo, useState } from "react";
import SidebarMentor from "../../fragments/jadwalkelas/SidebarMentor";
import Header from "../../../member/fragments/homepage/Header";
import MemberProgressList from "../../fragments/progresmember/MemberProgressList";

const initialMembers = [
  {
    id: "M-001",
    name: "Andi Pratama",
    email: "andi@example.com",
    stats: { modul: 6, submodul: 28, totalModul: 10 },
    notes: "Kuat di logika, perlu latihan di optimasi.",
    status: "aktif",
    modules: [
      {
        id: "MDL-01",
        title: "Dasar JavaScript",
        done: true,
        submodules: [
          { id: "SM-1", title: "Variabel & Tipe Data", done: true,  score: 90, completedAt: "2025-07-10" },
          { id: "SM-2", title: "Operator & Kondisional", done: true, score: 88, completedAt: "2025-07-11" },
          { id: "SM-3", title: "Looping", done: true, score: 85, completedAt: "2025-07-12" },
        ],
      },
      {
        id: "MDL-02",
        title: "Array & Object",
        done: true,
        submodules: [
          { id: "SM-1", title: "Array dasar", done: true,  score: 92, completedAt: "2025-07-14" },
          { id: "SM-2", title: "Object dasar", done: true, score: 89, completedAt: "2025-07-15" },
          { id: "SM-3", title: "Method bawaan", done: false, score: null, completedAt: null },
        ],
      },
      {
        id: "MDL-03",
        title: "Asynchronous",
        done: false,
        submodules: [
          { id: "SM-1", title: "Callback", done: true,  score: 80, completedAt: "2025-08-01" },
          { id: "SM-2", title: "Promise",  done: false, score: null, completedAt: null },
          { id: "SM-3", title: "Async/Await", done: false, score: null, completedAt: null },
        ],
      },
    ],
  },
  {
    id: "M-002",
    name: "Budi Santoso",
    email: "budi@example.com",
    stats: { modul: 10, submodul: 40, totalModul: 10 },
    notes: "Siap wisuda, tinggal final review.",
    status: "selesai",
    modules: [
      { id: "MDL-01", title: "Dasar JavaScript", done: true, submodules: [] },
      { id: "MDL-02", title: "Array & Object",   done: true, submodules: [] },
      { id: "MDL-03", title: "Asynchronous",     done: true, submodules: [] },
    ],
  },
  {
    id: "M-003",
    name: "Citra Lestari",
    email: "citra@example.com",
    stats: { modul: 3, submodul: 12, totalModul: 10 },
    notes: "Butuh remedial di dasar JS.",
    status: "bimbingan",
    modules: [],
  },
  {
    id: "M-004",
    name: "Dewi Puspa",
    email: "dewi@example.com",
    stats: { modul: 7, submodul: 31, totalModul: 10 },
    notes: "Konsisten. Next: project integrasi API.",
    status: "aktif",
    modules: [],
  },
];

const ProgressLayout = () => {
  const [members, setMembers] = useState(initialMembers);
  const [q, setQ] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filtered = useMemo(() => {
    return members.filter((m) => {
      const matchQ =
        !q ||
        m.name.toLowerCase().includes(q.toLowerCase()) ||
        m.email.toLowerCase().includes(q.toLowerCase()) ||
        m.id.toLowerCase().includes(q.toLowerCase());
      const matchStatus = filterStatus === "all" ? true : m.status === filterStatus;
      return matchQ && matchStatus;
    });
  }, [members, q, filterStatus]);

  const updateStatus = (id, status) =>
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));

  const updateNotes = (id, notes) =>
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, notes } : m)));

  return (
    <div className="flex min-h-screen bg-[#F0F9FF]">
      <SidebarMentor />
      <main className="ml-64 flex-1 overflow-y-auto px-8 py-8">
        <Header
          hello="Progres Member"
          letsgo="Pantau statistik belajar, catatan mentor, dan status akhir masing-masing member."
        />

        {/* Toolbar */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <div className="flex-1 relative">
              <span className="material-icons absolute left-3 top-2.5 text-gray-400">search</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari nama, email, atau ID…"
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-600">Status:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="all">Semua</option>
                <option value="aktif">Aktif</option>
                <option value="selesai">Selesai</option>
                <option value="bimbingan">Butuh Bimbingan Ulang</option>
              </select>
            </div>
          </div>
        </div>

        {/* List Progres */}
        <MemberProgressList
          data={filtered}
          onUpdateStatus={updateStatus}
          onUpdateNotes={updateNotes}
        />
      </main>
    </div>
  );
};

export default ProgressLayout;
