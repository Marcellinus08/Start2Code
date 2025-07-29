import React, { useEffect, useRef, useState } from "react";

const EventList = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const position = useRef(0);
  const direction = useRef(1); // 1 = kanan, -1 = kiri
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  const speed = 0.5;
  const cardWidth = 320 + 24;

  // Auto Scroll Reverse
  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const animate = () => {
      if (!isManualScrolling) {
        position.current += speed * direction.current;

        const maxScroll = content.scrollWidth / 2 - container.offsetWidth;

        if (position.current >= maxScroll) {
          direction.current = -1;
        }

        if (position.current <= 0) {
          direction.current = 1;
        }

        content.style.transform = `translateX(-${position.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isManualScrolling]);

  // Smooth manual scroll on click
  const handleManualScroll = (dir = "right") => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const maxScroll = content.scrollWidth / 2 - container.offsetWidth;
    const delta = dir === "right" ? cardWidth : -cardWidth;

    position.current += delta;
    if (position.current > maxScroll) position.current = maxScroll;
    if (position.current < 0) position.current = 0;

    setIsManualScrolling(true);
    content.style.transition = "transform 0.4s ease";
    content.style.transform = `translateX(-${position.current}px)`;

    setTimeout(() => {
      content.style.transition = "none";
      setIsManualScrolling(false);
    }, 400); // tunggu sampai transisi selesai
  };

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
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-80 flex-shrink-0 mx-3"
      >
        <img src={card.img} alt={`event-${index}`} className="w-full object-cover" />
        <div className="p-4">
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Daftar Sekarang
          </button>
        </div>
      </div>
    ));

  return (
    <div className="py-1 overflow-hidden relative" ref={containerRef}>
      {/* Tombol Kiri */}
      <button
        onClick={() => handleManualScroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
      >
        <span className="material-icons">chevron_left</span>
      </button>

      {/* Tombol Kanan */}
      <button
        onClick={() => handleManualScroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
      >
        <span className="material-icons">chevron_right</span>
      </button>

      {/* Kontainer */}
      <div
        ref={contentRef}
        className="flex w-max gap-6"
        style={{
          willChange: "transform",
          transform: "translateX(0px)",
        }}
      >
        {renderCards()}
      </div>
    </div>
  );
};

export default EventList;
