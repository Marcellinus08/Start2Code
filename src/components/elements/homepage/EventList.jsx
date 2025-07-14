import React, { useEffect, useRef } from "react";

const EventList = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let cardWidth = 320 + 24; // w-80 (320px) + gap-6 (24px)
    let interval = setInterval(() => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        // reset tanpa animasi ke awal
        slider.scrollLeft = 0;
      } else {
        slider.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3000); // tiap 3 detik

    return () => clearInterval(interval);
  }, []);

  // Card JSX
  const cards = [
    {
      title: "Kids Online Coding Camp Mid-Year 2025",
      desc: "Liburan tengah tahun jadi lebih produktif dengan coding camp online!",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwjXAHuOJ-EyCtqZ8aT7yQRaTdMKQo0laOoL0rN657pyCGAIgPdRBjJ3cxOTkH-HE2-cMDhRLiW53dbmrNJqXxsIG4m9XGU0oMqFTFNPXTcx6r1f6ZERCqHA_T7kIGRFRyni0o84qLxkL0P-lyEUqZ4nodWSk-fEPIq79LUl9SFCRndjX4QBs95hfbJVIvYbc4AnbZusD5UdAnapp6lNnGDgnObX2-Ruzh1Z6KYYA_28HZBbwtZy28LFyLYTLge67H_-XitanrHhAu",
    },
    {
      title: "Kids Online Coding Camp",
      desc: "Belajar koding dari rumah dengan mentor profesional dan kurikulum terstruktur.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALHAXQDmAJJQORxzRyxzpMrXOraSBzzEB1sWeLExw1SyHKmKnNRDUO5hTvxBxDd0t57H5dPdre7RkXwJ_3Yx8qfeoGzNqvBeuHrELHnbyRrJvQI4wnOvveZqK1fkYI76SlSXUHbgrFnxKTP1xXB9rBEmq0w-d3Hb2GxH_6v3PhT5dN04IZLqlGfiwDAqd6sYRyh00WhEx8zy2b7W5zAQ6nboZMHpRH5t5-3gKYt1di53xyGogKK3OcclrAXNfO3LfaGnBFXTCG7oDa",
    },
    {
      title: "Kids Online Coding Camp (Special Edition)",
      desc: "Edisi spesial coding camp dengan materi dan proyek yang lebih menantang.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr0IvUn2tox8MLRnj-hAn9baYRnkD3HV6rdkhzWcLmVGt_QVqGY7mDynf5rOsxmrNc8v3kERp5yJsbfnKgNQ92Z0hlCM93Z9F3piCpSYwwP8EcO8Y6ckQPmgocS_1EyYLrlGxmJrspD2LCgRx7W325YMUgyIHYq1Utvas06iDiEG6lypSHExd6n2ELUwVt5KV2U94Q4aMZ_LLHMUz6l83JUdsnBPf_bTQFQYhQheC-tcx4UjC3EPeAvmloaokaJPrDShmpxV1BZIfH",
    },
    {
      title: "Advanced Coding Camp",
      desc: "Lanjutkan perjalanan kodingmu ke level yang lebih tinggi.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALHAXQDmAJJQORxzRyxzpMrXOraSBzzEB1sWeLExw1SyHKmKnNRDUO5hTvxBxDd0t57H5dPdre7RkXwJ_3Yx8qfeoGzNqvBeuHrELHnbyRrJvQI4wnOvveZqK1fkYI76SlSXUHbgrFnxKTP1xXB9rBEmq0w-d3Hb2GxH_6v3PhT5dN04IZLqlGfiwDAqd6sYRyh00WhEx8zy2b7W5zAQ6nboZMHpRH5t5-3gKYt1di53xyGogKK3OcclrAXNfO3LfaGnBFXTCG7oDa",
    },
  ];

  const renderCards = () =>
    [...cards, ...cards].map((card, index) => (
      <div
        key={index}
        className="bg-white rounded-xl card-shadow overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between w-80 flex-shrink-0"
      >
        <img alt={card.title} src={card.img} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h4>
          <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">
            Daftar Sekarang
          </button>
        </div>
      </div>
    ));

  return (
    <div
      ref={sliderRef}
      className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
    >
      {renderCards()}
    </div>
  );
};

export default EventList;
