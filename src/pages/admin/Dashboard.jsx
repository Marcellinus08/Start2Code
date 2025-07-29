import React from "react";
import LayoutDashboard from "../../components/admin/layouts/LayoutDashboard";

const DashboardAdmin = () => {
  return (
    <LayoutDashboard>
      <h1 className="text-2xl font-bold">Selamat Datang Admin!</h1>
      <p className="text-gray-600 mt-2">Kelola data user, statistik, forum, dan lainnya.</p>
    </LayoutDashboard>
  );
};

export default DashboardAdmin;
