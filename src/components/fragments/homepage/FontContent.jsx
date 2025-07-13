import ProductionBy from "../../elements/homepage/ProductionBy";
import ProgramName from "../../elements/homepage/ProgramName";  
import DescribeProgram from "../../elements/homepage/DescribeProgram";
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