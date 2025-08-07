// import React, { useEffect, useRef } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const MeetRoom = () => {
//   const iframeRef = useRef(null);
//   const navigate = useNavigate();
//   const { roomCode } = useParams();

//   useEffect(() => {
//     if (!roomCode) {
//       navigate("/meet");
//     }
//   }, [roomCode, navigate]);

//   return (
//     <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center px-4 py-8">
//       <h1 className="text-2xl font-bold text-gray-800 mb-4">Sesi Kelas/Konsultasi</h1>

//       <div className="w-full max-w-6xl aspect-video shadow-lg border rounded-xl overflow-hidden">
//         <iframe
//           ref={iframeRef}
//           src={`https://start2code.app.100ms.live/preview/${roomCode}?skip_preview=true&recording=true`}
//           title="100ms Video Conference"
//           allow="camera; microphone; display-capture; fullscreen"
//           allowFullScreen
//           className="w-full h-full"
//         />
//       </div>

//       <button
//         onClick={() => navigate("/meet")}
//         className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
//       >Kembali ke Jadwal</button>
//     </div>
//   );
// };

// export default MeetRoom;
