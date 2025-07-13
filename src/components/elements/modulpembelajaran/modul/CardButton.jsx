const CardButton = (props) => {
    const { variant } = props;
    return (
        <button class="w-full btn-primary text-sm mt-auto bg-${variant}-500 hover:bg-${variant}-600">
            Mulai Belajar
        </button>
    );
};

export default CardButton;