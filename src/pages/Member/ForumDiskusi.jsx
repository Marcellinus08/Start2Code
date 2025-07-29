import React from "react";
import SidebarLeft from "@/components/member/layouts/homepage/SidebarLeft";
import ContentForum from "@/components/member/layouts/Forum/ContentForum";

const ForumDiskusi = () => {
    return (
        <div className="flex min-h-screen">
            <SidebarLeft />
            <ContentForum/>
        </div>
    );
};

export default ForumDiskusi; 