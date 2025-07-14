import React from "react";
import Header from "../../fragments/homepage/Header";
import MainContent from "../../fragments/homepage/MainContent";
import TypeTitle from "../../elements/homepage/TypeTitle";
import FontContent from "../../fragments/homepage/FontContent";
import Persentase from "../../fragments/homepage/Persentase";
import CardProgram from "../../fragments/homepage/CardProgram";
import TitleContent from "../../fragments/homepage/TitleContent";
import EventList from "../../elements/homepage/EventList";

const Content = () => {
    return (
        <main className="flex-1 p-8 overflow-y-auto ml-64 mr-80">
            <Header hello="Hai, Sabrina!" letsgo="Yuk, mulai petualangan seru belajar bersama!"></Header>
            <section className="mb-10">
                <div className="primary-gradient rounded-xl p-8 text-white card-shadow">
                    <div className="flex justify-between">
                        <div>
                            <TypeTitle title="Program Belajar"></TypeTitle>
                        </div>
                        <div className="flex space-x-2 justify-end">
                            <MainContent name="Timeline"></MainContent>
                            <MainContent name="Program"></MainContent>
                            <MainContent name="Events"></MainContent>
                            <MainContent name="Dokumentasi"></MainContent>
                        </div>
                    </div>

                    <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-inner text-gray-800">
                        <div className="flex justify-between items-start">
                            <FontContent By="By PROCODECG’s" name="Kids Regular Coding Class" Describe="Kelas coding menyenangkan untuk anak-anak, mengembangkan logika, kreativitas, dan keterampilan teknologi sejak dini."></FontContent>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 transform hover:scale-105">Mulai Belajar</button>
                        </div>
                        <Persentase jumlah='45%'></Persentase>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <TitleContent name="Timeline Belajar"></TitleContent>
                <div className="bg-white rounded-xl p-6 card-shadow">
                    <div className="relative">
                        <div className="relative pl-8 pb-8">
                            <div className="ml-4 flex items-center justify-center h-full">
                                <div className="text-center text-gray-500 py-8">
                                    <span className="material-icons text-6xl mb-2 text-gray-400">manage_search</span>
                                    <p className="text-lg font-medium">Tidak ada timeline saat ini.</p>
                                    <p className="text-sm">Silakan cek kembali nanti atau tambahkan timeline baru.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <TitleContent name="Program Start2Code"></TitleContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <CardProgram image="/assets/kids_1.png" title="Kids Regular Coding Class" description="Kelas koding reguler untuk anak-anak, belajar dasar pemrograman dengan menyenangkan."></CardProgram>
                    <CardProgram image="/assets/kids_2.png" title="Kids Weekday Coding Class" description="Kelas koding intensif di hari kerja untuk mengasah skill koding anak."></CardProgram>
                    <CardProgram image="/assets/kids_3.png" title="Kids Coding Camp" description="Camp koding seru selama liburan untuk anak-anak usia 7-15 tahun."></CardProgram>
                    <CardProgram image="/assets/kids_4.png" title="Online Private Class" description="Belajar koding secara privat dan online dengan mentor berpengalaman."></CardProgram>
                    <CardProgram image="/assets/kids_5.png" title="Tutoring Coding Class" description="Kelas koding untuk anak, belajar bahasa pemograman dasar."></CardProgram>
                    <CardProgram image="/assets/kids_6.png" title="Coding Mom" description="Program khusus untuk para ibu yang ingin belajar koding dari dasar."></CardProgram>
                </div>
            </section>

            {/* <section className="mb-10">
                <TitleContent name="Event Start2Code"></TitleContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl card-shadow overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                        <img alt="Kids Online Coding Camp Mid Year 2025" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwjXAHuOJ-EyCtqZ8aT7yQRaTdMKQo0laOoL0rN657pyCGAIgPdRBjJ3cxOTkH-HE2-cMDhRLiW53dbmrNJqXxsIG4m9XGU0oMqFTFNPXTcx6r1f6ZERCqHA_T7kIGRFRyni0o84qLxkL0P-lyEUqZ4nodWSk-fEPIq79LUl9SFCRndjX4QBs95hfbJVIvYbc4AnbZusD5UdAnapp6lNnGDgnObX2-Ruzh1Z6KYYA_28HZBbwtZy28LFyLYTLge67H_-XitanrHhAu" />
                        <div className="p-6">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Kids Online Coding Camp Mid-Year 2025</h4>
                            <p className="text-sm text-gray-600 mb-4">Liburan tengah tahun jadi lebih produktif dengan coding camp online!</p>
                            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Daftar Sekarang</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl card-shadow overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                        <img alt="Kids Online Coding Camp" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALHAXQDmAJJQORxzRyxzpMrXOraSBzzEB1sWeLExw1SyHKmKnNRDUO5hTvxBxDd0t57H5dPdre7RkXwJ_3Yx8qfeoGzNqvBeuHrELHnbyRrJvQI4wnOvveZqK1fkYI76SlSXUHbgrFnxKTP1xXB9rBEmq0w-d3Hb2GxH_6v3PhT5dN04IZLqlGfiwDAqd6sYRyh00WhEx8zy2b7W5zAQ6nboZMHpRH5t5-3gKYt1di53xyGogKK3OcclrAXNfO3LfaGnBFXTCG7oDa" />
                        <div className="p-6">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Kids Online Coding Camp</h4>
                            <p className="text-sm text-gray-600 mb-4">Belajar koding dari rumah dengan mentor profesional dan kurikulum terstruktur.</p>
                            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Daftar Sekarang</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl card-shadow overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                        <img alt="Kids Online Coding Camp Event" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr0IvUn2tox8MLRnj-hAn9baYRnkD3HV6rdkhzWcLmVGt_QVqGY7mDynf5rOsxmrNc8v3kERp5yJsbfnKgNQ92Z0hlCM93Z9F3piCpSYwwP8EcO8Y6ckQPmgocS_1EyYLrlGxmJrspD2LCgRx7W325YMUgyIHYq1Utvas06iDiEG6lypSHExd6n2ELUwVt5KV2U94Q4aMZ_LLHMUz6l83JUdsnBPf_bTQFQYhQheC-tcx4UjC3EPeAvmloaokaJPrDShmpxV1BZIfH" />
                        <div className="p-6">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Kids Online Coding Camp (Special Edition)</h4>
                            <p className="text-sm text-gray-600 mb-4">Edisi spesial coding camp dengan materi dan proyek yang lebih menantang.</p>
                            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Daftar Sekarang</button>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="mb-10">
    <TitleContent name="Event Start2Code"></TitleContent>
    
    {/* <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide"> 
        
        <div className="bg-white rounded-xl card-shadow overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between w-80 flex-shrink-0">
            <img alt="Kids Online Coding Camp Mid Year 2025" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwjXAHuOJ-EyCtqZ8aT7yQRaTdMKQo0laOoL0rN657pyCGAIgPdRBjJ3cxOTkH-HE2-cMDhRLiW53dbmrNJqXxsIG4m9XGU0oMqFTFNPXTcx6r1f6ZERCqHA_T7kIGRFRyni0o84qLxkL0P-lyEUqZ4nodWSk-fEPIq79LUl9SFCRndjX4QBs95hfbJVIvYbc4AnbZusD5UdAnapp6lNnGDgnObX2-Ruzh1Z6KYYA_28HZBbwtZy28LFyLYTLge67H_-XitanrHhAu" />
            <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Kids Online Coding Camp Mid-Year 2025</h4>
                <p className="text-sm text-gray-600 mb-4">Liburan tengah tahun jadi lebih produktif dengan coding camp online!</p>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Daftar Sekarang</button>
            </div>
        </div>

        <div className="bg-white rounded-xl card-shadow overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between w-80 flex-shrink-0">
            <img alt="Kids Online Coding Camp" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALHAXQDmAJJQORxzRyxzpMrXOraSBzzEB1sWeLExw1SyHKmKnNRDUO5hTvxBxDd0t57H5dPdre7RkXwJ_3Yx8qfeoGzNqvBeuHrELHnbyRrJvQI4wnOvveZqK1fkYI76SlSXUHbgrFnxKTP1xXB9rBEmq0w-d3Hb2GxH_6v3PhT5dN04IZLqlGfiwDAqd6sYRyh00WhEx8zy2b7W5zAQ6nboZMHpRH5t5-3gKYt1di53xyGogKK3OcclrAXNfO3LfaGnBFXTCG7oDa" />
            <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Kids Online Coding Camp</h4>
                <p className="text-sm text-gray-600 mb-4">Belajar koding dari rumah dengan mentor profesional dan kurikulum terstruktur.</p>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Daftar Sekarang</button>
            </div>
        </div>

        <div className="bg-white rounded-xl card-shadow overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between w-80 flex-shrink-0">
            <img alt="Kids Online Coding Camp Event" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr0IvUn2tox8MLRnj-hAn9baYRnkD3HV6rdkhzWcLmVGt_QVqGY7mDynf5rOsxmrNc8v3kERp5yJsbfnKgNQ92Z0hlCM93Z9F3piCpSYwwP8EcO8Y6ckQPmgocS_1EyYLrlGxmJrspD2LCgRx7W325YMUgyIHYq1Utvas06iDiEG6lypSHExd6n2ELUwVt5KV2U94Q4aMZ_LLHMUz6l83JUdsnBPf_bTQFQYhQheC-tcx4UjC3EPeAvmloaokaJPrDShmpxV1BZIfH" />
            <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Kids Online Coding Camp (Special Edition)</h4>
                <p className="text-sm text-gray-600 mb-4">Edisi spesial coding camp dengan materi dan proyek yang lebih menantang.</p>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Daftar Sekarang</button>
            </div>
        </div>
        
        <div className="bg-white rounded-xl card-shadow overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between w-80 flex-shrink-0">
            <img alt="Kids Online Coding Camp" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALHAXQDmAJJQORxzRyxzpMrXOraSBzzEB1sWeLExw1SyHKmKnNRDUO5hTvxBxDd0t57H5dPdre7RkXwJ_3Yx8qfeoGzNqvBeuHrELHnbyRrJvQI4wnOvveZqK1fkYI76SlSXUHbgrFnxKTP1xXB9rBEmq0w-d3Hb2GxH_6v3PhT5dN04IZLqlGfiwDAqd6sYRyh00WhEx8zy2b7W5zAQ6nboZMHpRH5t5-3gKYt1di53xyGogKK3OcclrAXNfO3LfaGnBFXTCG7oDa" />
            <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Advanced Coding Camp</h4>
                <p className="text-sm text-gray-600 mb-4">Lanjutkan perjalanan kodingmu ke level yang lebih tinggi.</p>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Daftar Sekarang</button>
            </div>
        </div>

    </div> */}
    <EventList></EventList>
</section>

            <section className="mb-6">
                <TitleContent name="Dokumentasi"></TitleContent>
                <div className="bg-white rounded-xl p-1 card-shadow">
                    <img alt="Dokumentasi ProcodeCG's" className="w-full h-auto rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApLO8BL15x3yympBfaZNmJ_R1NOPzRbbUPOl_Jg4mzSBWzEYcEFL-BxbcSvcr0XbzFdkPrQERyCW1PF1IBD3GysG5fbHNUcaxZYam5gbh52tOcASWHvkw9s4ukiuWvhYclF9VVCx0VNnKh1q6tyjPpLLDYGWQtFgYBqyKSIIFRJFLlUuEA5wU_E9zme3vulRbL50iC4sknPuTLik6Fh_eIRPD4e1LObL_JSIbbgi2X-AIZTSlhHbGEKqS5Ls-zFEn1MdW1ljWDbAPu" />
                </div>
            </section>
            
        </main>
        
    );
};

export default Content;
