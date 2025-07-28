import SidebarListLeft from "../../fragments/homepage/SidebarListLeft";

const SidebarLeft = () => {
    return(
        <aside className="w-64 bg-white shadow-lg p-6 h-screen fixed top-0 left-0 flex flex-col justify-between">
            <div>
                <div className="flex items-center space-x-2 mb-5">
                    <img alt="Start2Code Logo" src="../assets/logo.png" />
                </div>
                <nav className="space-y-2">
                    <SidebarListLeft jenis="home" name="Home" to="/home" />
                    <SidebarListLeft jenis="menu_book" name="Modul Pembelajaran" to="/modul" />
                    <SidebarListLeft jenis="videocam" name="Meet" to="/meet" />
                    <SidebarListLeft jenis="forum" name="Forum diskusi" to="/forum" />
                    <SidebarListLeft jenis="headset_mic" name="Konsultasi" to="/konsultasi" />
                    <SidebarListLeft jenis="bar_chart" name="Statistik" to="/statistik" />
                    <SidebarListLeft jenis="auto_awesome" name="Compiler & AI" to="/compilerai" />
                </nav>
            </div>
            <div>
                <nav>
                    <SidebarListLeft jenis="account_circle" name="Akun" to="/akun" />
                    <SidebarListLeft jenis="logout" name="Keluar" to="/" now="mt-2 text-red-500 hover:bg-red-100 hover:text-red-600" />
                </nav>
            </div>
        </aside>
    );
};

export default SidebarLeft;
