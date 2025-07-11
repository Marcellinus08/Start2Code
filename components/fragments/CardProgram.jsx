import CardImage from "../elements/CardImage";
import ContentCard from "../elements/ContentCard";
const CardProgram = (props) => {
    const {image, title, description} = props;
    return(
        <div className="bg-white rounded-xl p-6 card-shadow hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <CardImage image={image}></CardImage>
            <ContentCard title={title} description={description}></ContentCard>
        </div>
    );
};

export default CardProgram;