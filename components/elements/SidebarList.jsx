import List from "./List";
const Side = (props) => {
    const{name, jenis} = props;
    return(
        <nav className="space-y-2">
            
            <List variant={jenis}>{name}</List>
                                
        </nav>
    );
};
export default Side;