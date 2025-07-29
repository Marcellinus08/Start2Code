import React from "react";
import SidebarLeft from "@/components/member/layouts/homepage/SidebarLeft";
import Compiler from "@/components/member/layouts/Compiler&AI/Compiler";

const CompilerAI = () => {
    return (
        <div className="flex min-h-screen">
            <SidebarLeft />
            <Compiler />
        </div>
    );
};

export default CompilerAI; 