import React from "react";

const MessageBubbleMentor = ({ msg, replyOf, onReply, onToggleFlag, isYou }) => {
  const rowClass = isYou ? "justify-end" : "justify-start";
  const avatarOrder = isYou ? "order-2" : "order-1";
  const contentColClass = isYou
    ? "order-1 items-end text-right border-r-2 pr-2"
    : "order-2 items-start text-left border-l-2 pl-2";

  const mainBubbleClass = isYou ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800";

  return (
    <div className={`flex ${rowClass} gap-3`}>
      <img
        className={`w-10 h-10 rounded-full object-cover ${avatarOrder}`}
        src={msg.author.avatar || "https://ui-avatars.com/api/?name=Mentor&background=3b82f6&color=fff"}
        alt={msg.author.name}
      />

      <div className={`flex flex-col max-w-[820px] border-gray-300 ${contentColClass}`}>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-gray-800">{msg.author.name}</p>
          <span className="text-[11px] px-2 py-[2px] rounded-full bg-blue-100 text-blue-600">
            Mentor
          </span>
          {msg.flagged && <span className="text-red-500 text-xs">🚩</span>}
        </div>

        {replyOf && (
          <div
            className={`rounded-xl p-3 mb-2 text-[14px] leading-relaxed ${
              isYou ? "bg-blue-50 text-blue-900 border border-blue-100" : "bg-gray-100 text-gray-700"
            } ${isYou ? "text-right" : "text-left"}`}
          >
            <div className="text-[12px] mb-1 opacity-90">
              Balasan untuk{" "}
              <span className="font-semibold text-blue-600">@{replyOf.author.name}</span>
            </div>
            <div className="opacity-90">{replyOf.text}</div>
          </div>
        )}

        <div className={`rounded-xl p-4 text-[15px] leading-relaxed ${mainBubbleClass}`}>
          {msg.text}
        </div>

        <div className={`flex items-center gap-4 mt-2 text-xs ${isYou ? "justify-end" : "justify-start"}`}>
          <span className="text-gray-400">
            {new Date(msg.at).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
          </span>

          <button
            onClick={() => onReply(msg)}
            className={isYou ? "text-white/90 hover:text-white" : "text-blue-600 hover:text-blue-700"}
          >
            <span className="material-icons text-[14px] align-[-3px] mr-1">reply</span>
            Balas
          </button>

          <button
            onClick={() => onToggleFlag(msg.id)}
            className={
              msg.flagged
                ? isYou ? "text-white" : "text-red-600"
                : isYou ? "text-white/70 hover:text-white" : "text-gray-400 hover:text-red-500"
            }
          >
            <span className="material-icons text-[14px] align-[-3px] mr-1">flag</span>
            {msg.flagged ? "Penting" : "Tandai"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageBubbleMentor;
