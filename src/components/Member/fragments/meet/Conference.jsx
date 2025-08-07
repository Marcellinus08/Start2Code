import {
  selectPeers,
  selectPeersScreenSharing,
  useHMSStore,
} from "@100mslive/react-sdk";
import Peer from "./Peer";
import { ScreenTile } from "./ScreenTile";

function Conference() {
  const peers = useHMSStore(selectPeers);
  const presenters = useHMSStore(selectPeersScreenSharing);

  return (
    <div className="px-6 py-5 max-w-[1000px] h-full mx-auto">
      <div className="flex flex-wrap w-full max-w-[1000px] h-full justify-center items-center">
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer} />
        ))}
        {presenters.map((peer) => (
          <ScreenTile key={"screen" + peer.id} peer={peer} />
        ))}
      </div>
    </div>
  );
}

export default Conference;
