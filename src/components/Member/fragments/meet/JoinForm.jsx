import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const JoinRoom = () => {
  const navigate = useNavigate();
  const roomCodeRef = useRef(null);
  const nameRef = useRef(null);

  const handleJoin = (e) => {
    e.preventDefault();
    const roomCode = roomCodeRef.current?.value.trim();
    const name = nameRef.current?.value.trim();

    if (roomCode && name) {
      navigate(`/room/${roomCode}/${name}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-2xl font-semibold mb-4">Join a Room</h1>
      <form onSubmit={handleJoin} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="text"
          ref={roomCodeRef}
          placeholder="Enter Room Code"
          className="p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="text"
          ref={nameRef}
          placeholder="Enter Your Name"
          className="p-2 rounded bg-gray-800 text-white"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 p-2 rounded text-white"
        >
          Join Room
        </button>
      </form>
    </div>
  );
};

export default JoinRoom;
