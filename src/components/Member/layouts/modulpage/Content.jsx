import Header from "../../fragments/modulpage/modul/Header";
import ModulSection from "../../fragments/modulpage/modul/ModulSection";

const Content = () => {
  return (
    <main className="flex-1 p-8 overflow-y-auto ml-64">
      <Header />
      <ModulSection />
    </main>
  );
};

export default Content;
