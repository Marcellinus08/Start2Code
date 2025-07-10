import ListNav2 from "../elements/List";
const SidebarListLeft = (props) => {
    const{name, jenis, now} = props;
    return(
        <div>
            <ListNav2 variant={jenis} now={now}>{name}</ListNav2>                 
        </div>

    );
};
export default SidebarListLeft;