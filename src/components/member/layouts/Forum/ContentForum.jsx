    import { useEffect, useMemo, useRef, useState } from "react";
    import Header from "../../fragments/modulpage/submodul/Header";

    const initialMessages = [
    {
        id: "m1",
        author: {
        name: "Ahmad Fauzi",
        role: "member",
        avatar: "https://i.pravatar.cc/100?img=15",
        },
        text: "Halo semua, masih bingung centering div (vertikal + horizontal). Ada tips?",
        at: "2025-08-10T13:45:00Z",
        flagged: false,
        replyTo: null,
    },
    {
        id: "m2",
        author: {
        name: "Budi Santoso",
        role: "member",
        avatar: "https://i.pravatar.cc/100?img=12",
        },
        text: "Coba Flexbox: display:flex; justify-content:center; align-items:center;",
        at: "2025-08-10T14:05:00Z",
        flagged: false,
        replyTo: "m1",
    },
    {
        id: "m3",
        author: {
        name: "Kamu (You)",
        role: "member",
        avatar: "",
        },
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

    const MessageItem = ({ msg, replyOf, onReply, onToggleFlag }) => {
    const isYou = /\(You\)/i.test(msg.author.name);

    const rowClass = isYou ? "justify-end" : "justify-start";
    const avatarOrder = isYou ? "order-2" : "order-1";
    const contentOrder = isYou ? "order-1 items-end text-right" : "order-2 items-start text-left";

    const mainBubbleClass = isYou
        ? "bg-blue-500 text-white"
        : "bg-gray-100 text-gray-800";

    return (
        <div className={`flex ${rowClass} gap-3`}>
        {/* Avatar */}
        <img
            className={`w-10 h-10 rounded-full object-cover ${avatarOrder}`}
            src={
            msg.author.avatar ||
            "https://ui-avatars.com/api/?name=You&background=3b82f6&color=fff"
            }
            alt={msg.author.name}
        />

        {/* Content */}
        <div
            className={`flex flex-col ${contentOrder} max-w-[820px] ${
            isYou ? "border-r-2 pr-2" : "border-l-2 pl-2"
            } border-gray-300`}
        >
            {/* Nama & role */}
            <div className="flex items-center gap-2">
            <p className="font-semibold text-gray-800">{msg.author.name}</p>
            <span className="text-[11px] px-2 py-[2px] rounded-full bg-gray-200 text-gray-600">
                Member
            </span>
            {msg.flagged && <span className="text-red-500 text-xs">🚩</span>}
            </div>

            {/* Balasan */}
            {replyOf && (
            <div
                className={`rounded-xl p-3 mb-2 text-[14px] leading-relaxed ${
                isYou
                    ? "bg-blue-50 text-blue-900 border border-blue-100"
                    : "bg-gray-100 text-gray-700"
                }`}
            >
                <div className="text-[12px] mb-1 opacity-90">
                Balasan untuk{" "}
                <span className="font-semibold text-blue-600">
                    @{replyOf.author.name}
                </span>
                </div>
                <div className="opacity-90">{replyOf.text}</div>
            </div>
            )}

            {/* Bubble utama */}
            <div className={`rounded-xl p-4 text-[15px] leading-relaxed ${mainBubbleClass}`}>
            {msg.text}
            </div>

            {/* Action bar */}
            <div
            className={`flex items-center gap-4 mt-2 text-xs ${
                isYou ? "justify-end" : "justify-start"
            }`}
            >
            <span className="text-gray-400">
                {new Date(msg.at).toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
                })}
            </span>
            <button
                onClick={() => onReply(msg)}
                className={`flex items-center gap-1 ${
                isYou ? "text-white/90 hover:text-white" : "text-blue-600 hover:text-blue-700"
                }`}
            >
                <span className="material-icons text-[14px]">reply</span> Balas
            </button>
            <button
                onClick={() => onToggleFlag(msg.id)}
                className={`flex items-center gap-1 ${
                msg.flagged
                    ? isYou
                    ? "text-white"
                    : "text-red-600"
                    : isYou
                    ? "text-white/70 hover:text-white"
                    : "text-gray-400 hover:text-red-500"
                }`}
            >
                <span className="material-icons text-[14px]">flag</span>
                {msg.flagged ? "Penting" : "Tandai"}
            </button>
            </div>
        </div>
        </div>
    );
    };

    const ContentForum = () => {
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
        setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, flagged: !m.flagged } : m))
        );

    const send = () => {
        const v = text.trim();
        if (!v) return;
        const payload = {
        id: `m-${Date.now()}`,
        author: {
            name: "Kamu (You)",
            role: "member",
            avatar: "",
        },
        text: v,
        at: nowISO(),
        flagged: false,
        replyTo: replyTo?.id || null,
        };
        setMessages((prev) => [...prev, payload]);
        setText("");
        setReplyTo(null);
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        send();
        }
    };

    return (
        <main className="flex-1 p-8 ml-64 h-screen overflow-hidden">
        <Header
            title="Forum Diskusi"
            desc="Punya pertanyaan atau ide? Ayo diskusikan bareng komunitas!"
        />

        <div className="bg-white rounded-xl shadow-inner p-6 h-[calc(100vh-150px)] flex flex-col">
            {/* list */}
            <div className="flex-1 overflow-y-auto space-y-8">
            {grouped.map(({ dateISO, msgs }) => (
                <div key={dateISO}>
                <DayHeader dateISO={dateISO} />
                <div className="space-y-8">
                    {msgs.map((m) => (
                    <MessageItem
                        key={m.id}
                        msg={m}
                        replyOf={m.replyTo ? byId[m.replyTo] : null}
                        onReply={onReply}
                        onToggleFlag={onToggleFlag}
                    />
                    ))}
                </div>
                </div>
            ))}
            <div ref={endRef} />
            </div>

            {/* composer */}
            <div className="pt-4 border-t mt-3">
            {replyTo && (
                <div className="mb-3 flex items-center justify-between bg-sky-50 border border-sky-200 text-sky-800 rounded px-3 py-2 text-xs">
                <div className="truncate">
                    Membalas <b>{replyTo.author.name}</b>:{" "}
                    <span className="opacity-80">{replyTo.text}</span>
                </div>
                <button onClick={clearReply} className="text-sky-700 hover:underline">
                    Batal
                </button>
                </div>
            )}
            <div className="relative flex">
                <textarea
                rows={1}
                className="w-full pl-4 pr-12 py-3 min-h-[44px] border rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Ketik pesan sebagai member…"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={onKeyDown}
                />
                <button
                onClick={send}
                className="absolute right-2 bottom-1.5 bg-sky-600 hover:bg-sky-700 text-white p-1 rounded-full"
                title="Kirim"
                >
                <span className="material-icons">send</span>
                </button>
            </div>
            </div>
        </div>
        </main>
    );
    };

    export default ContentForum;
