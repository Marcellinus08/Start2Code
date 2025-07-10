const ProductionBy = (props) => {
    const {children} = props;
    return(
        <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full mb-2 inline-block">{children}</span>
    );
};

export default ProductionBy;