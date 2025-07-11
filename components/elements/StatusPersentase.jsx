const StatusPersentase = (props) => {
    const {status} = props;
    return(
        <p className="text-xs text-gray-500 mt-1 text-right">{status}</p>
    );
};

export default StatusPersentase;