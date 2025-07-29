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

            <section>
                <TitleContent name="Event Start2Code"></TitleContent>
                <EventList></EventList>
            </section>
            
        </main>
        
    );
};

export default Content;
