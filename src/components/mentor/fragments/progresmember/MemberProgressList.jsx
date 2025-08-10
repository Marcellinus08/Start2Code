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
