import Header from "../../fragments/modulpage/submodul/Header";
import Profile from "../../fragments/akun/Profile";
import Username from "../../fragments/akun/Username";
const ContentAkun = () => {
    return (
        <main className="flex-1 p-8 overflow-y-auto ml-64">
            <Header
                title="Akun Saya"
                desc="Lakukan konsultasi dengan mentor apabila anda masih bingung."/>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                    <Profile img="https://lh3.googleusercontent.com/aida-public/AB6AXuCsVLdsreqFV6gE-iaeo2tbo_9VQnLl2Aa1axBE66LlE4aUnjerdiH6xNbScWmcjyQ9iUha0JDqzrp9bm_8Bmrud5EO-nx-bp9HVavll20Q6kS0_vnKm997edYRSuyMCcDlTsumvehoBXd4zCrgmKLjCdbncXz7baajEMvWM_05yggm82rSJ1EIY7PdCUKTG6HF5Qct_TfIG7BmeIHHVhZ5anEozR7QCpVELwBgy7pa6U7dDtp-xyq_GQP1MgeqzxiORvWr3eGQOi0_"/>
                    <div className="flex-1 w-full">
                        <Username name= "Sabrina Yuanti" email="sabrina@example.com"/>
                        <form className="mt-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                            <label for="nama_depan" className="block text-sm font-medium text-gray-700 mb-1">Nama Depan</label>
                            <input type="text" id="nama_depan" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition;" value="Sabrina" />
                            </div>
                            <div>
                            <label for="nama_belakang" className="block text-sm font-medium text-gray-700 mb-1">Nama Belakang</label>
                            <input type="text" id="nama_belakang" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition;" value="Yuanti" />
                            </div>
                        </div>

                        <div>
                            <label for="email" className="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
                            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition; bg-gray-100" value="sabrina.yuanti@example.com" disabled />
                        </div>

                        <div>
                            <label for="no_telepon" className="block text-sm font-medium text-gray-700 mb-1">No. Telepon</label>
                            <input type="tel" id="no_telepon" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition;" placeholder="Masukkan nomor telepon Anda" />
                        </div>

                        <div>
                            <a href="#" className="text-sm text-blue-600 hover:underline">Ganti Kata Sandi</a>
                        </div>

                        <div className="flex justify-end space-x-4 pt-4">
                            <button type="button" className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out">Batal</button>
                            <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">Simpan Perubahan</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>


            
        </main>
    );
};

export default ContentAkun;