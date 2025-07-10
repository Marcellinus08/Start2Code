import SidebarListLeft from "../fragments/SidebarListLeft";
const SidebarLeft = () => {
    return(
        <aside className="w-64 bg-white shadow-lg p-6 h-screen fixed top-0 left-0 flex flex-col justify-between">
            <div>
                <div className="flex items-center space-x-2 mb-5">
                    <img alt="Start2Code Logo" src="../assets/logo.png" />
                </div>
                <nav className="space-y-2">
                    <SidebarListLeft jenis="home" name="Home page" now="bg-blue-500 text-white shadow-md"></SidebarListLeft>
                    <SidebarListLeft jenis="menu_book" name="Modul Pembelajaran"></SidebarListLeft>
                    <SidebarListLeft jenis="videocam" name="Meet"></SidebarListLeft>
                    <SidebarListLeft jenis="forum" name="Forum diskusi"></SidebarListLeft>
                    <SidebarListLeft jenis="headset_mic" name="Konsultasi"></SidebarListLeft>
                    <SidebarListLeft jenis="bar_chart" name="Statistik"></SidebarListLeft>
                    <SidebarListLeft jenis="auto_awesome" name="Compiler & AI"></SidebarListLeft>
                </nav>
            </div>
            <div>
                <nav>
                    <SidebarListLeft jenis="account_circle" name="Akun"></SidebarListLeft>
                    <SidebarListLeft jenis="logout" name="Keluar" now="mt-2 text-red-500 hover:bg-red-100 hover:text-red-600"></SidebarListLeft>
                </nav>
            </div>
            </aside>
    );
};

export default SidebarLeft;