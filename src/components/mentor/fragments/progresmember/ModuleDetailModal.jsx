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
