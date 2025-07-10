const Profile = (props) => {
    const {children, status} = props;
    return(
        <div  className="flex flex-col items-center text-center">
            <img alt="Avatar Sabrina Yuanti" className="w-24 h-24 rounded-full mb-3 border-4 border-blue-200 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsVLdsreqFV6gE-iaeo2tbo_9VQnLl2Aa1axBE66LlE4aUnjerdiH6xNbScWmcjyQ9iUha0JDqzrp9bm_8Bmrud5EO-nx-bp9HVavll20Q6kS0_vnKm997edYRSuyMCcDlTsumvehoBXd4zCrgmKLjCdbncXz7baajEMvWM_05yggm82rSJ1EIY7PdCUKTG6HF5Qct_TfIG7BmeIHHVhZ5anEozR7QCpVELwBgy7pa6U7dDtp-xyq_GQP1MgeqzxiORvWr3eGQOi0_" />
            <h4 className="text-lg font-semibold text-gray-800">{children}</h4>
            <p className="text-sm text-gray-500">{status}</p>
        </div>
    );
};

export default Profile;