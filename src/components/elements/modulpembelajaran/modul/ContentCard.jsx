import ProgressBar from "./ProgressBar";
import CardButton from "./CardButton";

const ContentCard = (props) => {
  const { title, icon, desc, progress, color } = props;

  return (
    <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <div className={`w-full h-32 bg-${color}-100 rounded-lg mb-4 flex items-center justify-center`}>
        <span className={`material-icons text-${color}-500 text-5xl`}>{icon}</span>
      </div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-sm text-gray-600 mb-4 flex-grow whitespace-pre-line">{desc}</p>
      <div className="mt-auto">
        <ProgressBar value={progress} />
        <CardButton />
      </div>
    </div>
  );
};

export default ContentCard;
