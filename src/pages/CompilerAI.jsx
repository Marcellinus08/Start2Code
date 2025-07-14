import React from "react";
import SidebarLeft from "../components/layouts/homepage/SidebarLeft";
import Compiler from "../components/layouts/Compiler&AI/Compiler";

const CompilerAI = () => {
    return (
        <div className="flex min-h-screen">
            <SidebarLeft />
            <Compiler />
        </div>
    );
};

export default CompilerAI; 