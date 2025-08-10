import RoomEmbed from '@/components/member/elements/meet/RoomEmbed';

import React from "react";

const Room = () => {
  const params = useParams();

  if (!code) {
    return (
      <div className="h-screen grid place-items-center bg-black text-white">
        <div className="text-center">
          <p className="text-lg font-semibold">Room code tidak ditemukan.</p>
          <p className="text-sm opacity-70 mt-1">Navigasi harus ke /room/:code</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <RoomEmbed roomCode={code} />
    </div>
  );
};

export default Room;
