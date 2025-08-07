import { ExitIcon } from "@100mslive/react-icons";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import React from "react";

function Header() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  return (
    <header className="fixed top-0 w-full px-6 py-4 flex items-center justify-between bg-black text-white shadow-lg z-10 border-b border-gray-800">
      <img
        className="h-11 w-auto"
        src="/assets/logo putih.png"
        alt="Start2Code Logo"
      />
      {isConnected && (
        <button
          id="leave-btn"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition"
          onClick={() => hmsActions.leave()}
        >
          <ExitIcon className="ml-1" /> Leave Room
        </button>
      )}
    </header>
  );
}

export default Header;
