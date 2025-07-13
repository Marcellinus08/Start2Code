const AnchorMain = (props) => {
    const{children} = props;
    return(
        <div className="">
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-2 px-4 rounded-lg text-sm transition">{children}</button>
            </div>
    );
};

export default AnchorMain;