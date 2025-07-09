import Side from "../elements/SidebarList";
const Sidebar = (props) => {
    return(
        <aside className="w-64 bg-white shadow-lg p-6 h-screen fixed top-0 left-0 flex flex-col justify-between">
            <div>
                <div className="flex items-center space-x-3 mb-10">
                    <img alt="Start2Code Logo" className="h-10 w-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDZ3l6qPfkg2_z_2DOyGzAu0Kr0Ggo1w6pU0OoXjvGAAm30NcvO9GxTgxmqOPEmX4LYV9rSKJyRzW0ZQSvW6wWJoFsd97c12bieY06tbZO-X9HiIS46jGvIqC2ohPa_ZamwxQoKJAiJXou9HTuXfOcktZliGW7wLD9iCqqTiR1eumRxOHIEq96uA_b7o5y5Uuyhoc1uEOzFbPhvqdPqxM2rxxcQL85m8SnGe9_3Pml50Gl85wOT69grg9VtUbw3vch_vyhXz3FLz8K" />
                    <h1 className="text-2xl font-bold text-blue-600">Start2Code</h1>
                </div>
                <a class="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition duration-150 ease-in-out bg-blue-500 text-white shadow-md" href="#">
                    <span class="material-icons">home</span>
                    <span>Home page</span>
                </a>
                <Side jenis="menu_book" name="Modul Pembelajaran"></Side>
                <Side jenis="videocam" name="Meet"></Side>
                <Side jenis="forum" name="Forum diskusi"></Side>
                <Side jenis="headset_mic" name="Konsultasi"></Side>
                <Side jenis="bar_chart" name="Statistik"></Side>
                <Side jenis="auto_awesome" name="Compiler & AI"></Side>
            </div>
            </aside>
    );
};

export default Sidebar;