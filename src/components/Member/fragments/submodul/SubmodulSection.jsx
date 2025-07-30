import React from "react";
import SubModulCard from "../../elements/submodul/SubModulCard";

const submodulData = {
  algoritma: [
    {
      nomor: "looks_one",
      title: "Pengenalan Algoritma",
      deskripsi: "Memahami definisi, karakteristik, dan pentingnya algoritma dalam pemrograman.",
      locked: false,
    },
    {
      nomor: "looks_two",
      title: "Struktur Data Dasar",
      deskripsi: "Mempelajari array, linked list, stack, dan queue beserta operasinya.",
      locked: true,
    },
    {
      nomor: "looks_3",
      title: "Algoritma Sorting",
      deskripsi: "Mengenal bubble sort, selection sort, dan insertion sort.",
      locked: true,
    },
    {
      nomor: "looks_4",
      title: "Algoritma Searching",
      deskripsi: "Memahami algoritma pencarian linear search dan binary search.",
      locked: true,
    },
  ],
  game: [
    {
      nomor: "looks_one",
      title: "Dasar Game Engine",
      deskripsi: "Kenali struktur engine untuk membuat game sederhana.",
      locked: false,
    },
    {
      nomor: "looks_two",
      title: "Game Physics",
      deskripsi: "Simulasi fisika dalam game: gravitasi, tabrakan, dll.",
      locked: true,
    },
    {
      nomor: "looks_3",
      title: "Scripting dan Logika",
      deskripsi: "Bangun logika interaktif menggunakan bahasa pemrograman.",
      locked: true,
    },
    {
      nomor: "looks_4",
      title: "Interaksi Pemain",
      deskripsi: "Desain input dan reaksi dalam gameplay.",
      locked: true,
    },
  ],
  web: [
    {
      nomor: "looks_one",
      title: "HTML & CSS",
      deskripsi: "Pelajari dasar struktur dan gaya tampilan halaman web.",
      locked: false,
    },
    {
      nomor: "looks_two",
      title: "JavaScript Dasar",
      deskripsi: "Tambahkan logika dan interaktivitas pada web.",
      locked: true,
    },
    {
      nomor: "looks_3",
      title: "Framework Frontend",
      deskripsi: "Mengenal React/Vue untuk pengembangan modern.",
      locked: true,
    },
    {
      nomor: "looks_4",
      title: "Backend & API",
      deskripsi: "Koneksi antara frontend dan database melalui API.",
      locked: true,
    },
  ],
  app: [
    {
      nomor: "looks_one",
      title: "Pemrograman Desktop",
      deskripsi: "Buat aplikasi desktop menggunakan Java atau Python.",
      locked: false,
    },
    {
      nomor: "looks_two",
      title: "Pemrograman Mobile",
      deskripsi: "Mengenal Flutter dan React Native.",
      locked: true,
    },
    {
      nomor: "looks_3",
      title: "UI/UX Aplikasi",
      deskripsi: "Desain tampilan dan pengalaman pengguna aplikasi.",
      locked: true,
    },
    {
      nomor: "looks_4",
      title: "Deploy Aplikasi",
      deskripsi: "Distribusikan aplikasi ke toko aplikasi.",
      locked: true,
    },
  ],
  crypto: [
    {
      nomor: "looks_one",
      title: "Dasar Kriptografi",
      deskripsi: "Pahami enkripsi, dekripsi, dan cipher klasik.",
      locked: false,
    },
    {
      nomor: "looks_two",
      title: "Hashing & Signatures",
      deskripsi: "Amankan data dengan SHA, MD5, dan tanda tangan digital.",
      locked: true,
    },
    {
      nomor: "looks_3",
      title: "Blockchain",
      deskripsi: "Mekanisme kerja blockchain dan ledger terdistribusi.",
      locked: true,
    },
    {
      nomor: "looks_4",
      title: "Smart Contract",
      deskripsi: "Bangun kontrak digital dengan Solidity.",
      locked: true,
    },
  ],
  hardware: [
    {
      nomor: "looks_one",
      title: "Pengenalan Mikroprosesor",
      deskripsi: "Pelajari arsitektur dasar mikrokontroler.",
      locked: false,
    },
    {
      nomor: "looks_two",
      title: "Input & Output Digital",
      deskripsi: "Gunakan sensor dan aktuator dengan kode.",
      locked: true,
    },
    {
      nomor: "looks_3",
      title: "Pemrograman Arduino",
      deskripsi: "Tulis program dasar untuk perangkat keras.",
      locked: true,
    },
    {
      nomor: "looks_4",
      title: "Interkoneksi Perangkat",
      deskripsi: "Hubungkan dan integrasikan beberapa perangkat.",
      locked: true,
    },
  ],
};

const SubModulSection = ({ slug }) => {
  const list = submodulData[slug] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {list.map((item, i) => (
        <SubModulCard key={i} {...item} />
      ))}
    </div>
  );
};

export default SubModulSection;
