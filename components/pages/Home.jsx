import React from "react"
import SidebarLeft from "../layouts/SidebarLeft";
import SidebarRight from "../layouts/SidebarRight";
function App() {
  return (
    <div className="flex min-h-screen">
      <SidebarLeft></SidebarLeft>
      <SidebarRight></SidebarRight>
    </div>
  );
}

export default App;
