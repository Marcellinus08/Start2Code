import Profile from "../elements/Profile";
import Mentor from "../elements/Mentor";
import Progres from "../elements/Progres";
const SidebarRightList = (props) => {
    const{name, bidang, name_mentor, persen, status} = props;
    return(
        <div className="space-y-6 hidden lg:block">
        <Profile status = {status}>{name}</Profile>
        <Mentor bidang = {bidang}>{name_mentor}</Mentor>
        <Progres>{persen}</Progres>
        </div>
    );
};

export default SidebarRightList;