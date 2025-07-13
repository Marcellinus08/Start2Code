import React from "react";
import SidebarLeft from "../components/layouts/homepage/SidebarLeft";
import SidebarRight from "../components/layouts/homepage/SidebarRight";
import Content from "../components/layouts/homepage/Content";

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <SidebarLeft></SidebarLeft>
      <Content></Content>
      <SidebarRight></SidebarRight>
    </div>
  );
};

export default Home;
