const user = (props) => {
    const {name, email} = props;
    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
            <p className="text-gray-500">{email}</p>
        </div>
    );
};

export default user;