import React from "react";
import SidebarLeft from "../components/layouts/homepage/SidebarLeft";
import Content from "../components/layouts/Akun/ContentAkun";
import ContentAkun from "../components/layouts/Akun/ContentAkun";

const Akun = () => {
    return (
        <div className="flex min-h-screen">
            <SidebarLeft />
            <ContentAkun />
        </div>
    );
};

export default Akun; 