const ListNav2 = (props) => {
    const { children, variant, now = "", isActive } = props;

    const base = "flex items-center space-x-2 px-4 py-3 rounded-lg transition duration-150 ease-in-out";
    const activeStyle = "bg-blue-500 text-white shadow-md hover:bg-blue-100 hover:text-blue-600";
    const defaultStyle = "text-gray-700 hover:bg-blue-100 hover:text-blue-600";
    return (
        <div className={`${base} ${isActive ? activeStyle : defaultStyle} ${now}`}>
            <span className="material-icons">{variant}</span>
            <span>{children}</span>
        </div>
    );
};

export default ListNav2;





