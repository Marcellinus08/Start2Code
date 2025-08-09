import React from "react";
import Header from "../../fragments/homepage/Header";
import MainContent from "../../fragments/homepage/MainContent";
import TypeTitle from "../../elements/homepage/TypeTitle";
import FontContent from "../../fragments/homepage/FontContent";
import Persentase from "../../fragments/homepage/Persentase";
import CardProgram from "../../fragments/homepage/CardProgram";
import TitleContent from "../../fragments/homepage/TitleContent";
import EventList from "../../elements/homepage/EventList";
import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import { Link } from "react-router-dom";

const Content = () => {
    const [namaDepan, setNamaDepan] = useState("");
    useEffect(() => {
    const fetchNama = async () => {
        const username = localStorage.getItem("username");
        if (!username) return;

        const { data, error } = await supabase
        .from("users")
        .select("full_name")
        .eq("username", username)
        .single();

        if (!error && data) {
        const firstName = data.full_name.split(" ")[0];
        setNamaDepan(firstName);
        }
    };

    fetchNama();
    }, []);

    return (
        <main className="flex-1 p-8 overflow-y-auto ml-64 mr-80">
            <Header hello={`Hai, ${namaDepan}!`} letsgo="Yuk, mulai petualangan seru belajar bersama!" />
            <section className="mb-10">
                <div className="primary-gradient rounded-xl p-8 text-white card-shadow">
                    <div className="flex justify-between">
                        <div>
                            <TypeTitle title="Program Belajar"></TypeTitle>
                        </div>
                        <div className="flex space-x-2 justify-end">
                            <MainContent name="Timeline" targetId="timeline" />
                            <MainContent name="Program" targetId="program" />
                            <MainContent name="Events" targetId="events" />
                        </div>
                    </div>

                    <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-inner text-gray-800">
                        <div className="flex justify-between items-start">
                            <FontContent By="By PROCODECG’s" name="Kids Regular Coding Class" Describe="Kelas coding menyenangkan untuk anak-anak, mengembangkan logika, kreativitas, dan keterampilan teknologi sejak dini."></FontContent>
                            <Link to="/modul"><button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 transform hover:scale-105">Mulai Belajar</button></Link>
                        </div>
                        <Persentase></Persentase>
                    </div>
                </div>
            </section>

            <section className="mb-10" id="timeline">
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

            <section className="mb-10" id="program">
                <TitleContent name="Program Start2Code"></TitleContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <CardProgram image="/assets/kids_1.png" title="Kids Regular Class" description="Kelas koding reguler untuk anak-anak, belajar dasar pemrograman dengan menyenangkan."
                    detail="Di era digital ini, koding adalah literasi baru. Berikan anak Anda keunggulan dengan membekali mereka skill masa depan melalui kelas reguler kami. Program ini tidak hanya mengajarkan cara membuat program, tetapi juga melatih pola pikir terstruktur, ketekunan, dan kreativitas."></CardProgram>
                    <CardProgram image="/assets/kids_2.png" title="Kids Weekday Class" description="Kelas koding intensif di hari kerja untuk mengasah skill koding anak."></CardProgram>
                    <CardProgram image="/assets/kids_3.png" title="Kids Coding Camp" description="Camp koding seru selama liburan untuk anak-anak usia 7-15 tahun."></CardProgram>
                    <CardProgram image="/assets/kids_4.png" title="Online Private Class" description="Belajar koding secara privat dan online dengan mentor berpengalaman."></CardProgram>
                    <CardProgram image="/assets/kids_5.png" title="Tutoring Coding Class" description="Kelas koding untuk anak, belajar bahasa pemograman dasar."></CardProgram>
                    <CardProgram image="/assets/kids_6.png" title="Coding Mom" description="Program khusus untuk para ibu yang ingin belajar koding dari dasar."></CardProgram>
                </div>
            </section>

            <section id="events">
                <TitleContent name="Event Start2Code" />
                <EventList
                    cards={[
                    { img: "/assets/event_1.png" },
                    { img: "/assets/event_2.png" },
                    { img: "/assets/event_3.png" },
                    { img: "/assets/event_4.png" },
                    { img: "/assets/event_5.png" },
                    { img: "/assets/event_6.png" },
                    { img: "/assets/event_7.png" },
                    { img: "/assets/event_8.png" },
                    ]}
                />
            </section>

            
        </main>
        
    );
};

export default Content;
