const CardButton = (props) => {
    const {locked} = props;
    return locked ? ( 
        <button 
            className="w-full btn-primary text-sm bg-gray-300 hover:bg-gray-400 text-gray-700 cursor-not-allowed" 
            disabled>
                Terkunci
        </button>
    ) : (
        <button className="w-full btn-primary text-sm bg-blue-500 hover:bg-blue-600">
            Masuk Sub Bab
        </button>
    );
};

export default CardButton;