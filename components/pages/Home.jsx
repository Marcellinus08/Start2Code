import React from "react"
import SidebarLeft from "../layouts/SidebarLeft";
import SidebarRight from "../layouts/SidebarRight";
import Content from "../layouts/Content";
function App() {
  return (
    <div className="flex min-h-screen">
      <SidebarLeft></SidebarLeft>
      <SidebarRight></SidebarRight>
      <Content></Content>
      
    </div>
  );
}

export default App;
