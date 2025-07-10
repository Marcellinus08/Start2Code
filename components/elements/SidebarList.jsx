import List from "./List";
const Side = (props) => {
    const{name, jenis} = props;
    return(
        <div>
            
            <List variant={jenis}>{name}</List>
                                
        </div>
    );
};
export default Side;