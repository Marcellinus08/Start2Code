import SidebarListLeft from "../../member/fragments/homepage/SidebarListLeft";

const Sidebar = () => {
    return(
        <aside className="w-64 bg-white shadow-lg p-6 h-screen fixed top-0 left-0 flex flex-col justify-between">
            <div>
                <div className="flex items-center space-x-2 mb-5">
                    <img alt="Start2Code Logo" src="../assets/logo.png" />
                </div>
                <nav className="space-y-2">
                    <SidebarListLeft jenis="manage_accounts" name="User Management" to="/admin" />
                    <SidebarListLeft jenis="library_books" name="Modul Management" to="/modul_management" />
                </nav>
            </div>
            <div>
                <nav>
                    <SidebarListLeft jenis="account_circle" name="Akun" to="/" />
                    <SidebarListLeft jenis="logout" name="Keluar" to="/" now="mt-2 text-red-500 hover:bg-red-100 hover:text-red-600" />
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
