import AnchorMain from "../elements/AnchorMain";
const MainContent = (props) => {
    const {name,} = props;
    return(
        <div className="flex justify-between mb-6 space-x-2">
            <AnchorMain>{name}</AnchorMain>
        </div>

    );
};

export default MainContent;