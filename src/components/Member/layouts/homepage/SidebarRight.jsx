import SidebarRightList from "../../fragments/homepage/SidebarRightList";

const SidebarRight = () => {
  return (
    <aside className="w-80 bg-white shadow-lg p-6 h-screen fixed top-0 right-0">
      <SidebarRightList 
        name="Sabrina Yuanti"
        status="Member"
        bidang="Web Development"
        name_mentor="Lisa Amalia"
      />
    </aside>
  );
};

export default SidebarRight;
