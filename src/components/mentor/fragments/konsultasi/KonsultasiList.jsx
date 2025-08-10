import React, { useMemo, useState } from "react";
import KonsultasiCard from "../../elements/konsultasi/KonsultasiCard";
import RescheduleModal from "./RescheduleModal";

const tabs = [
  { key: "pending",  label: "Menunggu" },
  { key: "accepted", label: "Diterima" },
  { key: "declined", label: "Ditolak" },
  { key: "done",     label: "Selesai" },
];

const KonsultasiList = ({ items, setItems }) => {
  const [active, setActive] = useState("pending");
  const [resData, setResData] = useState(null);
  const [openRes, setOpenRes] = useState(false);

  const filtered = useMemo(
    () => items.filter((x) => x.status === active),
    [items, active]
  );

  const mutate = (id, patch) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...patch } : it)));

  const onAccept     = (item) => mutate(item.id, { status: "accepted" });
  const onDecline    = (item) => mutate(item.id, { status: "declined" });
  const onReschedule = (item) => { setResData(item); setOpenRes(true); };
  const onSaveRes    = ({ id, tanggal, jam }) => mutate(id, { tanggal, jam, status: "accepted" });

  return (
    <div>
      <div className="flex gap-3 mb-6">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-5 py-2.5 rounded-lg font-bold text-sm shadow
              ${active === t.key ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 italic">Belum ada permintaan pada tab ini.</p>
      ) : (
        filtered.map((it) => (
          <KonsultasiCard
            key={it.id}
            item={it}
            onAccept={onAccept}
            onDecline={onDecline}
            onReschedule={onReschedule}
          />
        ))
      )}

      <RescheduleModal
        open={openRes}
        initial={resData}
        onClose={() => setOpenRes(false)}
        onSave={onSaveRes}
      />
    </div>
  );
};

export default KonsultasiList;
