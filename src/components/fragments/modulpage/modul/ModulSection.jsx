import ContentCard from "../../../elements/modulpembelajaran/modul/ContentCard";

const ModulSection = () => {
  const modules = [
    {
      title: "Algorithm & Data Structure",
      icon: "integration_instructions",
      desc: "Pahami konsep fundamental algoritma dan berbagai struktur data untuk pemecahan masalah yang efektif dan efisien.",
      progress: 75,
      color: "green",
    },
    {
      title: "Game Programming",
      icon: "sports_esports",
      desc: "Pelajari dasar-dasar pengembangan game, mulai dari logika, grafis, hingga interaksi pemain.",
      progress: 50,
      color: "pink",
    },
    {
      title: "Web Programming",
      icon: "code",
      desc: "Kuasai teknologi untuk membangun aplikasi web interaktif, mulai dari frontend hingga backend.",
      progress: 25,
      color: "blue",
    },
    {
      title: "Application Programming",
      icon: "widgets",
      desc: "Kembangkan aplikasi desktop atau mobile dengan berbagai bahasa pemrograman dan framework populer.",
      progress: 7,
      color: "purple",
    },
    {
      title: "Crypto Programming",
      icon: "enhanced_encryption",
      desc: "Selami dunia kriptografi dan pelajari cara mengamankan data dan komunikasi digital.",
      progress: 0,
      color: "yellow",
    },
    {
      title: "Basic Hardware Programming",
      icon: "memory",
      desc: "Pelajari interaksi antara perangkat keras dan perangkat lunak melalui pemrograman tingkat rendah.",
      progress: 0,
      color: "teal",
    },
  ];

  return (
    <section className="mb-10 rounded-xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Modul Saya</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((modul, i) => (
          <ContentCard
            key={i}
            title={modul.title}
            icon={modul.icon}
            desc={modul.desc}
            progress={modul.progress}
            color={modul.color}
          />
        ))}
      </div>
    </section>
  );
};

export default ModulSection;
