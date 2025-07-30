import React from "react";
import Sidebar from "../../components/admin/layouts/UserManagement/Sidebar";
import ContentAdmin from "../../components/admin/layouts/UserManagement/ContentAdmin"

const DashboardAdmin = () => {
  return (
    <div>
    <Sidebar></Sidebar>
    <ContentAdmin></ContentAdmin>
    </div>
  );
};

export default DashboardAdmin;
