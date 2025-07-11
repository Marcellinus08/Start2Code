import Title from "../elements/Title";

const TitleContent = (props) => {
    const {name} = props;
    return(
        <Title>{name}</Title>
    );
};

export default TitleContent;