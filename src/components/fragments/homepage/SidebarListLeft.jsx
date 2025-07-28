import ListNav2 from "../../elements/homepage/ListNav2";
import { NavLink } from "react-router-dom";

const SidebarListLeft = ({ name, jenis, now, to = "/" }) => {
  return (
    <NavLink to={to} end>
      {({ isActive }) => (
        <ListNav2
          variant={jenis}  
          now={now}
          isActive={isActive && to !== "/logout"}
        >
          {name}
        </ListNav2>
      )}
    </NavLink>
  );
};

export default SidebarListLeft;
