import Header from "../../fragments/modulpage/submodul/Header";
import ModulSection from "../../fragments/modulpage/modul/ModulSection";

const Content = () => {
  return (
    <main className="flex-1 p-8 overflow-y-auto ml-64">
      <Header
          title="Modul Pembelajaran"
          desc="Pilih modul untuk memulai atau melanjutkan pembelajaranmu."
        />      
        <ModulSection />
    </main>
  );
};

export default Content;
