import User from "../../elements/Akun/User";
const Username = (props) => {
    const {name, email} = props;
    return (
        <User name={name} email={email}></User>
    );
};

export default Username;