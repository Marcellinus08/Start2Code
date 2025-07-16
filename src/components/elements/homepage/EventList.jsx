import React, { useEffect, useRef } from "react";

const EventList = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = 320 + 24; // 320px card + 24px gap
    const interval = setInterval(() => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    { img: "/assets/event_1.png" },
    { img: "/assets/event_2.png" },
    { img: "/assets/event_3.png" },
    { img: "/assets/event_4.png" },
    { img: "/assets/event_5.png" },
    { img: "/assets/event_6.png" },
    { img: "/assets/event_7.png" },
    { img: "/assets/event_8.png" },
  ];

  const renderCards = () =>
    [...cards, ...cards].map((card, index) => (
      <div
        key={index}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-80 flex-shrink-0">
        <img src={card.img} alt={`event-${index}`} className="w-full object-cover" />
        <div className="p-4">
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Daftar Sekarang
          </button>
        </div>
      </div>
    ));

  return (
    <div className="py-6">
      <div ref={sliderRef} className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth">
        {renderCards()}
      </div>
    </div>
  );
};

export default EventList;
