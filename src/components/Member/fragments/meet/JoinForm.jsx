import { useRef } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
// import { ArrowRightIcon } from "@100mslive/react-icons";

function Join() {
  const hmsActions = useHMSActions();
  const roomCodeRef = useRef(null);
  const userNameRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = await hmsActions.getAuthTokenByRoomCode({
      roomCode: roomCodeRef.current?.value,
    });

    try {
      await hmsActions.join({
        userName: userNameRef.current?.value,
        authToken,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      <img
        className="h-20 w-auto mb-6"
        src="/assets/logo putih.png"
        alt="Start2Code Logo"
      />
      <h2 className="text-2xl font-semibold text-white mb-2">Join Room</h2>
      <p className="text-gray-300 mb-6 text-center">
        Enter your room code and name before joining
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-4"
      >
        <input
          ref={roomCodeRef}
          id="room-code"
          type="text"
          name="roomCode"
          placeholder="Your Room Code"
          className="w-full h-12 px-4 rounded-md bg-[#1e1f24] text-white border border-[#2c2d33] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          required
          ref={userNameRef}
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full h-12 px-4 rounded-md bg-[#1e1f24] text-white border border-[#2c2d33] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="flex items-center justify-center h-12 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Join Now
          {/* <ArrowRightIcon height={16} width={16} className="ml-2" /> */}
        </button>
      </form>
    </div>
  );
}

export default Join;
