import SidebarMentor from "../../fragments/jadwalkelas/SidebarMentor";
import Header from "../../../member/fragments/homepage/Header";

const JadwalLayout = ({ children }) => {
  return (
    <div className="flex">
      <SidebarMentor />
      <div className="flex-1 p-8 ml-64 bg-[#F0F9FF] min-h-screen">
        <Header
          hello="Jadwal Kelas"
          letsgo="Kelola data jadwal kelas dengan mudah dan efisien."
        />
        {children}
      </div>
    </div>
  );
};

export default JadwalLayout;
