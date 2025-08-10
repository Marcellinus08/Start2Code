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
