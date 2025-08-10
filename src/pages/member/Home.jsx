import React from "react";
import SidebarLeft from "@/components/member/layouts/homepage/SidebarLeft";
import SidebarRight from "@/components/member/layouts/homepage/SidebarRight";
import Content from "@/components/member/layouts/homepage/Content";

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
