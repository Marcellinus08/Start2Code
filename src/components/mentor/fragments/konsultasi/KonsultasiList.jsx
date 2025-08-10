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
