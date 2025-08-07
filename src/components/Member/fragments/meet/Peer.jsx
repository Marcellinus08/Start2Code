// import { MicOffIcon, PersonIcon } from "@100mslive/react-icons";
// import {
//   selectIsPeerAudioEnabled,
//   selectIsPeerVideoEnabled,
//   useVideo,
//   useHMSStore,
// } from "@100mslive/react-sdk";

// function Peer({ peer }) {
//   const { videoRef } = useVideo({
//     trackId: peer.videoTrack,
//   });

//   const isPeerAudioEnabled = useHMSStore(selectIsPeerAudioEnabled(peer.id));
//   const isPeerVideoEnabled = useHMSStore(selectIsPeerVideoEnabled(peer.id));

//   return (
//     <div className="relative m-2 w-[450px]">
//       <div className="relative h-[250px] w-full rounded-md border border-[#191b23] overflow-hidden">
//         {!isPeerAudioEnabled && (
//           <div className="absolute top-2 right-2 z-[10] bg-[#293042] p-2 rounded-xl h-8 w-8 flex items-center justify-center">
//             <MicOffIcon height={16} width={16} />
//           </div>
//         )}

//         <video
//           ref={videoRef}
//           className={`h-full w-full object-cover ${
//             peer.isLocal ? "scale-x-[-1]" : ""
//           }`}
//           autoPlay
//           muted
//           playsInline
//         />

//         {!isPeerVideoEnabled && (
//           <div className="absolute top-0 left-0 h-full w-full bg-[#191b23] flex items-center justify-center">
//             <PersonIcon height={48} width={48} />
//           </div>
//         )}
//       </div>

//       <div className="mt-2 text-center text-sm text-white">
//         {peer.name} {peer.isLocal ? "(You)" : ""}
//       </div>
//     </div>
//   );
// }

// export default Peer;
