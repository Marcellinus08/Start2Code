import ListNav2 from "../../elements/homepage/ListNav2";
import { NavLink, useLocation } from "react-router-dom";

const SidebarListLeft = ({ name, jenis, now, to = "/" }) => {
  const location = useLocation();

  const isActive = location.pathname === to || location.pathname.startsWith(to + "/") ||
    (
      to === "/modul" && ["/submodul/algoritma" , "/submodul/game", "/submodul/web", "/submodul/app", "/submodul/crypto", "/submodul/hardware", "/materisubmodul"].includes(location.pathname)
    );

  return (
    <NavLink to={to}>
      <ListNav2 variant={jenis} now={now} isActive={isActive}>
        {name}
      </ListNav2>
    </NavLink>
  );
};

export default SidebarListLeft;
