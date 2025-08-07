import {
  selectScreenShareByPeerID,
  useHMSStore,
  useVideo,
} from "@100mslive/react-sdk";

export const ScreenTile = ({ peer }) => {
  const screenshareVideoTrack = useHMSStore(selectScreenShareByPeerID(peer.id));
  const { videoRef } = useVideo({
    trackId: screenshareVideoTrack.id,
  });

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="h-[250px] w-[450px] rounded-md object-cover m-2 border border-[#191b23]"
        autoPlay
        muted
        playsInline
      />
      <div className="text-sm text-center">
        Screen shared by {peer.name} {peer.isLocal ? "(You)" : ""}
      </div>
    </div>
  );
};
