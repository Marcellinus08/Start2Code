import { useDevices, DeviceType } from "@100mslive/react-sdk";

const DeviceSettings = () => {
  const { allDevices, selectedDeviceIDs, updateDevice } = useDevices();
  const { videoInput, audioInput, audioOutput } = allDevices;

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto mt-8">
      <h1 className="text-xl font-semibold mb-6 text-gray-800">Device Settings</h1>

      <Select
        title="Camera"
        value={selectedDeviceIDs.videoInput}
        list={videoInput}
        onChange={(e) =>
          updateDevice({
            deviceId: e.target.value,
            deviceType: DeviceType.videoInput,
          })
        }
      />

      <Select
        title="Microphone"
        value={selectedDeviceIDs.audioInput}
        list={audioInput}
        onChange={(e) =>
          updateDevice({
            deviceId: e.target.value,
            deviceType: DeviceType.audioInput,
          })
        }
      />

      <Select
        title="Speaker"
        value={selectedDeviceIDs.audioOutput}
        list={audioOutput}
        onChange={(e) =>
          updateDevice({
            deviceId: e.target.value,
            deviceType: DeviceType.audioOutput,
          })
        }
      />
    </div>
  );
};

const Select = ({ list, value, onChange, title }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">{title}:</label>
      {list?.length ? (
        <select
          onChange={onChange}
          value={value}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {list.map((device) => (
            <option value={device.deviceId} key={device.deviceId}>
              {device.label}
            </option>
          ))}
        </select>
      ) : (
        <p className="text-sm text-gray-500">No {title.toLowerCase()} devices found.</p>
      )}
    </div>
  );
};

export default DeviceSettings;
