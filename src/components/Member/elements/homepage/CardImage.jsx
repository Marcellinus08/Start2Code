const CardImage = (props) => {
    const {image} = props;
    return(
        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img alt="Kids Regular Coding Class" className="w-full h-full object-cover" src={image} />
            </div>
    );
};

export default CardImage;