import CardButton from "./CardButton";
import ProgressBar from "./ProgressBar";

const SubModulCard = (props) => {
    const { nomor, title, deskripsi, locked } = props;
    return (
        <div class="sub-module-card">
            <div class="flex items-center mb-3">
                <span class="material-icons text-blue-500 mr-3">{nomor}</span>
                <h4 class="text-lg font-semibold text-gray-800">{title}</h4>
            </div>
        <p class="text-sm text-gray-600 mb-4 flex-grow">{deskripsi}</p>
        <CardButton locked={locked} />
        </div>
    );
};

export default SubModulCard;