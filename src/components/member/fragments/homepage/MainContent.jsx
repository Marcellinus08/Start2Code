import AnchorMain from "../../elements/homepage/AnchorMain";

const MainContent = ({ name, targetId }) => {
  return (
    <div className="flex justify-between mb-6 space-x-2">
      <AnchorMain targetId={targetId}>{name}</AnchorMain>
    </div>
  );
};

export default MainContent;
