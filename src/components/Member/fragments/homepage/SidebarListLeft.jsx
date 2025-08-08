import { NavLink, useLocation } from "react-router-dom";
import ListNav2 from "../../elements/homepage/ListNav2";

const SidebarListLeft = ({ name, jenis, now, to = "/", onClick, noActive = false }) => {
  const location = useLocation();

  const isModulActive =
    to === "/modul_management" &&
    (
      location.pathname.startsWith("/modul_management") ||
      location.pathname.startsWith("/modul_add") ||
      location.pathname.startsWith("/modul_edit")
    );

  if (onClick) {
    return (
      <div onClick={onClick}>
        <ListNav2
          variant={jenis}
          now={now}
          isActive={false}
        >
          {name}
        </ListNav2>
      </div>
    );
  }

  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <ListNav2
          variant={jenis}
          now={now}
          isActive={noActive ? false : isActive || isModulActive}
        >
          {name}
        </ListNav2>
      )}
    </NavLink>
  );
};

export default SidebarListLeft;
