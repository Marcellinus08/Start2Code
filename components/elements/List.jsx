const ListNav2 = (props) => {
    const{children,variant, now} = props;
    return(
        <a className={`flex items-center space-x-2 px-4 py-3 ${now} text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition duration-150 ease-in-out`} href="#">
            <span className="material-icons">{variant}</span>
            <span>{children}</span>
        </a>
    );
};

export default ListNav2;