const Greeting = (props) => {
    const {hello, letsgo} = props;
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800">{hello}</h2>
            <p className="text-gray-600">{letsgo}</p>
        </div>
    );
};

export default Greeting;