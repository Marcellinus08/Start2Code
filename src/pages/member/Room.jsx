import RoomEmbed from '@/components/member/elements/meet/RoomEmbed';

const Room = () => {
  return (
    <div className="flex flex-col h-screen bg-black text-white p-4">
      <RoomEmbed roomCode="cxr-atgo-wqk" />
    </div>
  );
};

export default Room;
