import React from "react";
import SidebarLeft from "../components/layouts/homepage/SidebarLeft";
import Content from "../components/layouts/modulpage/Content";

const Modul = () => {
    return (
        <div className="flex min-h-screen">
            <SidebarLeft />
            <Content />
        </div>
    );
};

export default Modul;