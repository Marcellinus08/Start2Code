import { useState } from "react";
import {
  AudioLevelIcon,
  MicOffIcon,
  MicOnIcon,
  ShareScreenIcon,
  VideoOffIcon,
  VideoOnIcon,
} from "@100mslive/react-icons";
import {
  selectIsLocalAudioPluginPresent,
  selectIsLocalScreenShared,
  selectRoom,
  useAVToggle,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import { HMSKrispPlugin } from "@100mslive/hms-noise-cancellation";

const plugin = new HMSKrispPlugin();

function Footer() {
  const { isLocalAudioEnabled, isLocalVideoEnabled, toggleAudio, toggleVideo } =
    useAVToggle();
  const amIScreenSharing = useHMSStore(selectIsLocalScreenShared);
  const actions = useHMSActions();
  const room = useHMSStore(selectRoom);
  const isAudioPluginAdded = useHMSStore(
    selectIsLocalAudioPluginPresent(plugin.getName())
  );
  const [isPluginActive, setIsPluginActive] = useState(false);

  const buttonClass = (isActive) =>
    `w-14 h-9 rounded-full flex items-center justify-center 
     text-white text-sm transition 
     ${isActive ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-700 hover:bg-gray-600"}`;

  return (
    <div className="fixed bottom-0 w-full py-4 flex justify-center gap-3 z-10 bg-black border-t border-gray-800">
      <button
        className={buttonClass(isLocalAudioEnabled)}
        onClick={toggleAudio}
      >
        {isLocalAudioEnabled ? <MicOnIcon /> : <MicOffIcon />}
      </button>

      <button
        className={buttonClass(isLocalVideoEnabled)}
        onClick={toggleVideo}
      >
        {isLocalVideoEnabled ? <VideoOnIcon /> : <VideoOffIcon />}
      </button>

      <button
        title="Screenshare"
        className={buttonClass(amIScreenSharing)}
        onClick={() => actions.setScreenShareEnabled(!amIScreenSharing)}
      >
        <ShareScreenIcon />
      </button>

      {room.isNoiseCancellationEnabled && (
        <button
          title="Noise cancellation"
          className={buttonClass(isPluginActive)}
          onClick={async () => {
            if (isAudioPluginAdded) {
              plugin.toggle();
              setIsPluginActive((prev) => !prev);
            } else {
              await actions.addPluginToAudioTrack(plugin);
              setIsPluginActive(true);
            }
          }}
        >
          <AudioLevelIcon />
        </button>
      )}
    </div>
  );
}

export default Footer;
