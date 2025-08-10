const RoomEmbed = ({ roomCode }) => {
  return (
    <iframe
       src={`https://start2code.app.100ms.live/preview/${roomCode}?skipPreview=true`}
       allow="camera; microphone; fullscreen; display-capture"
       style={{
       position: "fixed",
       top: 0,
       left: 0,
       width: "100vw",
       height: "100vh",
       border: "none",
       margin: 0,
       padding: 0,
       zIndex: 9999,
  }}
/>
  );
};

export default RoomEmbed;
