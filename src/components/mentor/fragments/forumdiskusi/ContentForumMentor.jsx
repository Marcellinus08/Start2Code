import React, { useEffect, useMemo, useRef, useState } from "react";
import Composer from "../../elements/forumdiskusi/Composer";
import MessageBubbleMentor from "../../elements/forumdiskusi/MessageBubleMentor";

/** Seed contoh — nanti tinggal ganti dari API */
const initialMessages = [
  {
    id: "m1",
    author: { name: "Ahmad Fauzi", role: "member", avatar: "https://i.pravatar.cc/100?img=15" },
    text: "Halo semua, masih bingung centering div (vertikal + horizontal). Ada tips?",
    at: "2025-08-10T13:45:00Z",
    flagged: false,
    replyTo: null,
  },
  {
    id: "m2",
    author: { name: "Budi Santoso", role: "member", avatar: "https://i.pravatar.cc/100?img=12" },
    text: "Coba Flexbox: display:flex; justify-content:center; align-items:center;",
    at: "2025-08-10T14:05:00Z",
    flagged: false,
    replyTo: "m1",
  },
  {
    id: "m3",
    author: { name: "Kamu (You)", role: "mentor", avatar: "" },
    text: "Untuk kasus kompleks, pertimbangkan Grid. Untuk centering simple, Flex sudah cukup. 👍",
    at: "2025-08-10T15:20:00Z",
    flagged: true,
    replyTo: "m1",
  },
];

const nowISO = () => new Date().toISOString();

const groupByDay = (messages) => {
  const map = new Map();
  messages.forEach((m) => {
    const d = new Date(m.at);
    const key = new Date(d.getFullYear(), d.getMonth(), d.getDate()).toISOString();
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(m);
  });
  return Array.from(map.entries())
    .sort((a, b) => new Date(a[0]) - new Date(b[0]))
    .map(([dateISO, msgs]) => ({
      dateISO,
      msgs: msgs.sort((a, b) => new Date(a.at) - new Date(b.at)),
    }));
};

const DayHeader = ({ dateISO }) => {
  const d = new Date(dateISO);
  const label = d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="text-center my-3">
      <span className="text-[11px] px-3 py-1 rounded-full bg-gray-200 text-gray-600">
        {label}
      </span>
    </div>
  );
};

const ContentForumMentor = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [text, setText] = useState("");
  const [replyTo, setReplyTo] = useState(null);

  const byId = useMemo(
    () => Object.fromEntries(messages.map((m) => [m.id, m])),
    [messages]
  );
  const grouped = useMemo(() => groupByDay(messages), [messages]);

  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onReply = (msg) => setReplyTo(msg);
  const clearReply = () => setReplyTo(null);

  const onToggleFlag = (id) =>
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, flagged: !m.flagged } : m)));

  const send = () => {
    const v = text.trim();
    if (!v) return;
    const payload = {
      id: `m-${Date.now()}`,
      author: { name: "Kamu (You)", role: "mentor", avatar: "" },
      text: v,
      at: nowISO(),
      flagged: false,
      replyTo: replyTo?.id || null,
    };
    setMessages((prev) => [...prev, payload]);
    setText("");
    setReplyTo(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-inner p-6 h-[calc(100vh-150px)] flex flex-col">
  
      <div className="flex-1 overflow-y-auto space-y-8">
        {grouped.map(({ dateISO, msgs }) => (
          <div key={dateISO}>
            <DayHeader dateISO={dateISO} />
            <div className="space-y-8">
              {msgs.map((m) => (
                <MessageBubbleMentor
                  key={m.id}
                  msg={m}
                  replyOf={m.replyTo ? byId[m.replyTo] : null}
                  onReply={onReply}
                  onToggleFlag={onToggleFlag}
                  isYou={m.author.role === "mentor" && /\(You\)/i.test(m.author.name)}
                />
              ))}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <Composer
        placeholder="Ketik jawaban sebagai mentor…"
        replyingTo={replyTo}
        value={text}
        onChange={setText}
        onSend={send}
        onCancel={clearReply}
      />
    </div>
  );
};

export default ContentForumMentor;
