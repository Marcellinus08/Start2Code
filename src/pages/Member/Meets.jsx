// import JoinForm from "../../components/Member/fragments/meet/JoinForm";
// import Conference from "../../components/Member/fragments/meet/Conference";
// import { useEffect } from "react";
// import {
//   HMSRoomState,
//   selectIsConnectedToRoom,
//   selectRoomState,
//   useHMSActions,
//   useHMSStore,
// } from "@100mslive/react-sdk";
// import Footer from "../../components/Member/fragments/meet/Footer";
// import { Loader } from "../../components/Member/elements/meet/Loader";
// import Header from "../../components/Member/layouts/meet/Header";

// const loadingStates = [HMSRoomState.Connecting, HMSRoomState.Disconnecting];

// export default function App() {
//   const isConnected = useHMSStore(selectIsConnectedToRoom);
//   const roomState = useHMSStore(selectRoomState);
//   const hmsActions = useHMSActions();

//   useEffect(() => {
//     window.onunload = () => {
//       if (isConnected) {
//         hmsActions.leave();
//       }
//     };
//   }, [hmsActions, isConnected]);

//   if (loadingStates.includes(roomState) || !roomState) {
//     return <Loader />;
//   }

//   return (
//     <div className="flex flex-col h-screen bg-black text-white">
//       {isConnected ? (
//         <>
//           <Header />
//           <Conference />
//           <Footer />
//         </>
//       ) : (
//         <JoinForm />
//       )}
//     </div>
//   );
// }
