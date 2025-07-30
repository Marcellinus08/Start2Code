const Image = (props) => {
    const {img} = props;
    return (
        <img className="w-32 h-32 rounded-full border-4 border-blue-200" src={img} alt="Profile" />
    );
};

export default Image;