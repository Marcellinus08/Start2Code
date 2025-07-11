const ContentCard = (props) => {
    const {title, description} = props;
    return(
        <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Lihat Detail</button>
        </div>
    );
};

export default ContentCard;