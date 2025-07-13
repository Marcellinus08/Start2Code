const Title = (props) => {
    const {children} = props;
    return (
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">{children}</h3>
    );
};

export default Title;