import Data1 from "../../elements/Akun/Data1";
import Data2 from "../../elements/Akun/Data2";
import Data3 from "../../elements/Akun/Data3";
import Sandi from "../../elements/Akun/Sandi";
import Button from "../../elements/Akun/Button";

const Form = (props) => {
    const {nama_depan, nama_belakang, email, telepon} = props;
    return (
        <form className="mt-8 space-y-6">
            <Data1 nama_depan={nama_depan} nama_belakang={nama_belakang}/>
            <Data2 email={email}/>
            <Data3 telepon={telepon}/>
            <Sandi/>
            <Button/>
        </form>
    );
};

export default Form;