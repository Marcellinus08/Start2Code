import React from "react";
import Sidebar from "../../components/admin/layouts/Sidebar";
import ContentAdmin from "../../components/admin/layouts/ContentAdmin"

const DashboardAdmin = () => {
  return (
    <div>
    <Sidebar></Sidebar>
    <ContentAdmin></ContentAdmin>
    </div>
  );
};

export default DashboardAdmin;
