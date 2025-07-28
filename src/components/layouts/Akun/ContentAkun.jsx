import Header from "../../fragments/modulpage/submodul/Header";
import Profile from "../../fragments/akun/Profile";
import Username from "../../fragments/akun/Username";
import Form from "../../fragments/akun/Form";
const ContentAkun = () => {
    return (
        <main className="flex-1 p-8 overflow-y-auto ml-64">
            <Header
                title="Akun Saya"
                desc="Kelola data dan informasi akun Anda di sini."/>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                    <Profile img="https://lh3.googleusercontent.com/aida-public/AB6AXuCsVLdsreqFV6gE-iaeo2tbo_9VQnLl2Aa1axBE66LlE4aUnjerdiH6xNbScWmcjyQ9iUha0JDqzrp9bm_8Bmrud5EO-nx-bp9HVavll20Q6kS0_vnKm997edYRSuyMCcDlTsumvehoBXd4zCrgmKLjCdbncXz7baajEMvWM_05yggm82rSJ1EIY7PdCUKTG6HF5Qct_TfIG7BmeIHHVhZ5anEozR7QCpVELwBgy7pa6U7dDtp-xyq_GQP1MgeqzxiORvWr3eGQOi0_"/>
                    <div className="flex-1 w-full">
                        <Username name= "Sabrina Yuanti" email="sabrina@example.com"/>
                        <Form
                        nama_depan="Sabrina"
                        nama_belakang="Yuanti"
                        email="sabrina.yuanti@example.com"
                        telepon="0812345678979"/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContentAkun;