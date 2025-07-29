const Image = (props) => {
    const {img = "https://lh3.googleusercontent.com/aida-public/AB6AXuCsVLdsreqFV6gE-iaeo2tbo_9VQnLl2Aa1axBE66LlE4aUnjerdiH6xNbScWmcjyQ9iUha0JDqzrp9bm_8Bmrud5EO-nx-bp9HVavll20Q6kS0_vnKm997edYRSuyMCcDlTsumvehoBXd4zCrgmKLjCdbncXz7baajEMvWM_05yggm82rSJ1EIY7PdCUKTG6HF5Qct_TfIG7BmeIHHVhZ5anEozR7QCpVELwBgy7pa6U7dDtp-xyq_GQP1MgeqzxiORvWr3eGQOi0_"} = props;
    return (
        <img className="w-32 h-32 rounded-full border-4 border-blue-200" src={img} alt="Profile" />
    );
};

export default Image;