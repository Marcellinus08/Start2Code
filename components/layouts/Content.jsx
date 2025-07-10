import Header from "../fragments/Header";
import MainContent from "../fragments/MainContent";
import Title from "../elements/Title";
import FontContent from "../fragments/FontContent";
const Content = () => {
    return (
        <main className="flex-1 p-8 overflow-y-auto ml-64 mr-80">
            <Header hello="Hai, Sabrina!" letsgo="Yuk, mulai petualangan seru belajar bersama!"></Header>
            <section className="mb-10">
                <div className="primary-gradient rounded-xl p-8 text-white card-shadow">
                    <div className="flex justify-between">
                        <div>
                        <Title title="Program Belajar"></Title>
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
                        <div className="mt-4">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '45%'}}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 text-right">45% Selesai</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Timeline Belajar</h3>
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
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Program Start2Code</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 card-shadow hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                            <img alt="Kids Regular Coding className" className="w-full h-full object-cover" src="/assets/kids_1.png" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Kids Regular Coding className</h4>
                        <p className="text-sm text-gray-600 mb-4">Kelas koding reguler untuk anak-anak, belajar dasar pemrograman dengan menyenangkan.</p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Lihat Detail</button>
                    </div>
                    <div className="bg-white rounded-xl p-6 card-shadow hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                            <img alt="Kids Weekday Coding className" className="w-full h-full object-cover" src="/assets/kids_2.png" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Kids Weekday Coding className</h4>
                        <p className="text-sm text-gray-600 mb-4">Kelas koding intensif di hari kerja untuk mengasah skill koding anak.</p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Lihat Detail</button>
                    </div>
                    <div className="bg-white rounded-xl p-6 card-shadow hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                            <img alt="Coding Mom" className="w-full h-full object-cover" src="/assets/kids_3.png" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Kids Coding Camp</h4>
                        <p className="text-sm text-gray-600 mb-4">Camp koding seru selama liburan untuk anak-anak usia 7-15 tahun.</p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Lihat Detail</button>
                    </div>
                    <div className="bg-white rounded-xl p-6 card-shadow hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                            <img alt="Online Private className" className="w-full h-full object-cover" src="/assets/kids_4.png" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Online Private className</h4>
                        <p className="text-sm text-gray-600 mb-4">Belajar koding secara privat dan online dengan mentor berpengalaman.</p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Lihat Detail</button>
                    </div>
                    <div className="bg-white rounded-xl p-6 card-shadow hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                            <img alt="Kids Coding Camp" className="w-full h-full object-cover" src="/assets/kids_5.png" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Tutoring Coding className</h4>
                        <p className="text-sm text-gray-600 mb-4">Kelas koding untuk anak, belajar bahasa pemograman dasar.</p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Lihat Detail</button>
                    </div>
                    <div className="bg-white rounded-xl p-6 card-shadow hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                            <img alt="Kids Coding Camp" className="w-full h-full object-cover" src="/assets/kids_6.png" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Coding Mom</h4>
                        <p className="text-sm text-gray-600 mb-4">Program khusus untuk para ibu yang ingin belajar koding dari dasar.</p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">Lihat Detail</button>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Event Start2Code</h3>
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
            </section>

            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Dokumentasi</h3>
                <div className="bg-white rounded-xl p-1 card-shadow">
                    <img alt="Dokumentasi ProcodeCG's" className="w-full h-auto rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApLO8BL15x3yympBfaZNmJ_R1NOPzRbbUPOl_Jg4mzSBWzEYcEFL-BxbcSvcr0XbzFdkPrQERyCW1PF1IBD3GysG5fbHNUcaxZYam5gbh52tOcASWHvkw9s4ukiuWvhYclF9VVCx0VNnKh1q6tyjPpLLDYGWQtFgYBqyKSIIFRJFLlUuEA5wU_E9zme3vulRbL50iC4sknPuTLik6Fh_eIRPD4e1LObL_JSIbbgi2X-AIZTSlhHbGEKqS5Ls-zFEn1MdW1ljWDbAPu" />
                </div>
            </section>
        </main>
    );
};

export default Content;
