import MeetTabs from "../../fragments/meet/MeetTabs";
import Header from "../../fragments/modulpage/submodul/Header";
import SidebarLeft from "../homepage/SidebarLeft";

const MeetLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F0F9FF]">
      <SidebarLeft />
      <main className="ml-64 flex-1 overflow-y-auto px-8 py-8">
        <Header
          title="Jadwal Meet"
          desc="Berikut adalah jadwal sesi tatap muka online Anda."
        />
        <MeetTabs />
      </main>
    </div>
  );
};

export default MeetLayout;
