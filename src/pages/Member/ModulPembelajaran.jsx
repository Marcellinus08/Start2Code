import React from "react";
import SidebarLeft from "@/components/member/layouts/homepage/SidebarLeft";
import Content from "@/components/member/layouts/modulpage/Content";

const Modul = () => {
    return (
        <div className="flex min-h-screen">
            <SidebarLeft />
            <Content />
        </div>
    );
};

export default Modul;