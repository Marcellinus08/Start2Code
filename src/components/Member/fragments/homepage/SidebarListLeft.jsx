import ListNav2 from "../../elements/homepage/ListNav2";
import { NavLink, useLocation } from "react-router-dom";

const SidebarListLeft = ({ name, jenis, now, to = "/", onClick, noActive = false }) => {
  if (onClick) {
    // 🔴 Jika ada onClick, render <div> biasa agar tidak langsung navigate
    return (
      <div onClick={onClick}>
        <ListNav2
          variant={jenis}
          now={now}
          isActive={false} // tidak aktifkan warna biru
        >
          {name}
        </ListNav2>
      </div>
    );
  }

  // ✅ Default: jika tidak ada onClick, tetap gunakan NavLink
  return (
    <NavLink to={to} end>
      {({ isActive }) => (
        <ListNav2
          variant={jenis}
          now={now}
          isActive={noActive ? false : isActive}
        >
          {name}
        </ListNav2>
      )}
    </NavLink>
  );
};

export default SidebarListLeft;
