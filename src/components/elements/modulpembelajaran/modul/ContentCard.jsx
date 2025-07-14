import ProgressBar from "./ProgressBar";
import CardButton from "./CardButton";

const ContentCard = (props) => {
  const { title, icon, desc, progress, color } = props;

  return (
    <div className={`module-card border border-gray-200 hover:border-${color}-500`}>
      <div className={`w-full h-32 bg-${color}-100 rounded-lg mb-4 flex items-center justify-center`}>
        <span className={`material-icons text-${color}-500 text-5xl`}>{icon}</span>
      </div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{desc}</p>
      <div className="mt-auto">
        <ProgressBar value={progress} />
        <CardButton color={color} />
      </div>
    </div>
  );
};

export default ContentCard;
