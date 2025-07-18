// import ListNav2 from "../../elements/homepage/ListNav2";

// const SidebarListLeft = (props) => {
//     const{name, jenis, now} = props;
//     return(
//         <div>
//             <ListNav2 variant={jenis} now={now}>{name}</ListNav2>                 
//         </div>

//     );
// };
// export default SidebarListLeft;


// import ListNav2 from "../../elements/homepage/ListNav2";
// import { Link } from "react-router-dom";

// const SidebarListLeft = ({ name, jenis, now, to }) => {
//   return (
//     <Link to={to || "#"}>
//       <ListNav2 variant={jenis} now={now}>
//         {name}
//       </ListNav2>
//     </Link>
//   );
// };

// export default SidebarListLeft;


import ListNav2 from "../../elements/homepage/ListNav2";
import { useLocation, Link } from "react-router-dom";

const SidebarListLeft = ({ name, jenis, now, to = "#" }) => {
  const location = useLocation();
  const isActive = location.pathname === to && to !== "/logout";

  return (
    <Link to={to}>
      <ListNav2
        variant={jenis}
        now={now}
        isActive={isActive}
      >
        {name}
      </ListNav2>
    </Link>
  );
};

export default SidebarListLeft;





