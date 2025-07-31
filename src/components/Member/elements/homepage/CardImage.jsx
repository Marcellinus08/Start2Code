const CardImage = ({ image }) => {
  return (
    <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden">
      <img alt="Card Image" className="w-full h-full object-cover" src={image} />
    </div>
  );
};

export default CardImage;
