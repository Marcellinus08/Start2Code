import Image from "../../elements/Akun/Image";
const Profile = (props) => {
    const {img} = props;
    return (
        <div className="relative mb-6 md:mb-0">
            <Image img={img}/>
            <button className="absolute bottom-1 right-1 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
            <span className="material-icons">edit</span>
            </button>
        </div>
    );
};

export default Profile;