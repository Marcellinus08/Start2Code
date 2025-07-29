import React from "react";
import SubModulCard from "../../elements/submodul/SubModulCard";

const submodulData = [
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
    deskripsi:
      "Memahami algoritma pencarian linear search dan binary search.",
    locked: true,
  },
];

const SubModulSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {submodulData.map((item, i) => (
        <SubModulCard key={i} {...item} />
      ))}
    </div>
  );
};

export default SubModulSection;
