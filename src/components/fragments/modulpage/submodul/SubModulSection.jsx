import SubModulCard from "../../elements/submodul/SubModulCard";

const SubmodulSection = () => {
  const submoduls = [
    {
      nomor: "looks_one",
      title: "Pengenalan Algoritma",
      deskripsi:
        "Memahami definisi, karakteristik, dan pentingnya algoritma dalam pemrograman.",
      locked: false,
    },
    {
      nomor: "looks_two",
      title: "Struktur Data Dasar",
      deskripsi:
        "Mempelajari array, linked list, stack, dan queue beserta operasinya.",
      locked: true,
    },
    {
      nomor: "looks_3",
      title: "Algoritma Sorting",
      deskripsi:
        "Mengenal berbagai algoritma pengurutan seperti bubble sort, selection sort, dan insertion sort.",
      locked: true,
    },
    {
      nomor: "looks_4",
      title: "Algoritma Searching",
      deskripsi: "Memahami algoritma pencarian linear search dan binary search.",
      locked: true,
    },
  ];

  return (
    <section className="mb-10">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Sub Bab Pembelajaran</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {submoduls.map((item, index) => (
          <SubModulCard
            key={index}
            nomor={item.nomor}
            title={item.title}
            deskripsi={item.deskripsi}
            locked={item.locked}
          />
        ))}
      </div>
    </section>
  );
};

export default SubmodulSection;
