const BarPersentase = (props) => {
    const {jumlah = '0%'} = props;
    return(
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-yellow-500 h-2.5 rounded-full" style={{width:jumlah}}></div>
        </div>
    );
};

export default BarPersentase;