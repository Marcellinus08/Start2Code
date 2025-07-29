import React from "react";
import SidebarLeft from "@/components/member/layouts/homepage/SidebarLeft";
import ContentAkun from "@/components/member/layouts/Akun/ContentAkun";

const Akun = () => {
    return (
        <div className="flex min-h-screen">
            <SidebarLeft />
            <ContentAkun />
        </div>
    );
};

export default Akun; 