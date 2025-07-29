import StatusPersentase from "../../elements/homepage/StatusPersentase";
import BarPersentase from "../../elements/homepage/BarPersentase";
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