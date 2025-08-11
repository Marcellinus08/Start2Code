import React from "react";

const Composer = ({ placeholder, replyingTo, value, onChange, onSend, onCancel }) => {
  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="pt-4 border-t mt-3">
      {replyingTo && (
        <div className="mb-3 flex items-center justify-between bg-sky-50 border border-sky-200 text-sky-800 rounded px-3 py-2 text-xs">
          <div className="truncate">
            Membalas <b>{replyingTo.author.name}</b>:{" "}
            <span className="opacity-80">{replyingTo.text}</span>
          </div>
          <button onClick={onCancel} className="text-sky-700 hover:underline">Batal</button>
        </div>
      )}

      <div className="relative flex">
        <textarea
          rows={1}
          className="w-full pl-4 pr-12 py-3 min-h-[44px] border rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-sky-500"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <button
          onClick={onSend}
          className="absolute right-2 bottom-1 bg-sky-600 hover:bg-sky-700 text-white py-1 px-2 rounded-full"
          title="Kirim"
        >
          <span className="material-icons">send</span>
        </button>
      </div>
    </div>
  );
};

export default Composer;