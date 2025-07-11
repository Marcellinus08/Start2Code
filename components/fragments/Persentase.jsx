import StatusPersentase from "../elements/StatusPersentase";
import BarPersentase from "../elements/BarPersentase";
const Persentase = (props) => {
    const {jumlah} = props;
    return(
        <div className="mt-4">
            <BarPersentase jumlah = {jumlah}></BarPersentase>
            <StatusPersentase status = {`${jumlah} Selesai`}></StatusPersentase>
        </div>
    );
};

export default Persentase;