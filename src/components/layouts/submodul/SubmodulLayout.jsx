import Header from "../../fragments/modulpage/submodul/Header";
import SidebarLeft from "../homepage/SidebarLeft";


const SubmodulLayout = (props) => {
    const { children, title, desc } = props;
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-white shadow-md">
                <SidebarLeft />
            </aside>
            <main className="flex-1 bg-gray-50 p-6">
                <Header title={title} desc={desc} />
                {children}
            </main>
        </div>
    );
};

export default SubmodulLayout;
