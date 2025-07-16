import SubmodulLayout from "../components/layouts/SubmodulLayout";
import TentangModul from "../components/fragments/submodul/TentangModul";
import SubmodulSection from "../components/fragments/submodul/SubmodulSection";

const SubModul = () => {
  return (
    <SubmodulLayout
      title="Algorithm & Data Structure"
      desc="Pahami konsep fundamental algoritma dan berbagai struktur data."
    >
      <TentangModul />
      <SubmodulSection />
    </SubmodulLayout>
  );
};

export default SubModul;
