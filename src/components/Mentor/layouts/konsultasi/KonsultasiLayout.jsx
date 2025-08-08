import SidebarMentor from "../../fragments/jadwalkelas/SidebarMentor";
import Header from "../../../member/fragments/homepage/Header";

const KonsultasiLayout = () => {
  return (
    <div className="flex-1 p-8 ml-64 bg-[#F0F9FF] min-h-screen">
    <SidebarMentor />
    <Header
        hello="Konsultasi"
        letsgo="Kelola data pengguna dengan mudah dan efisien."
      />
    </div>
  );
};

export default KonsultasiLayout;
