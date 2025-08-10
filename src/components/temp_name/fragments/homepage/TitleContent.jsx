import Title from "../../elements/homepage/Title";

const TitleContent = (props) => {
    const {name} = props;
    return(
        <Title>{name}</Title>
    );
};

export default TitleContent;