import ProductionBy from "../elements/ProductionBy";
import ProgramName from "../elements/ProgramName";
import DescribeProgram from "../elements/DescribeProgram";
const FontContent = (props) => {
    const {By, name, Describe} = props;
    return (
        <div>
            <ProductionBy>{By}</ProductionBy>
            <ProgramName>{name}</ProgramName>
            <DescribeProgram>{Describe}</DescribeProgram>
        </div>
    );
};

export default FontContent;