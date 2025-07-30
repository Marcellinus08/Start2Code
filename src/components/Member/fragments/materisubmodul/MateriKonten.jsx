import IlustrasiGambar from "../../elements/materisubmodul/IlustrasiGambar";
import KarakteristikList from "../../elements/materisubmodul/KarakteristikList";
import MateriText from "../../elements/materisubmodul/MateriText";
import NavigationButton from "../../elements/materisubmodul/NavigationButton";
import TitleMateri from "../../elements/materisubmodul/TitleMateri";


const MateriKonten = () => {
  const karakteristik = [
    { label: "Input", desc: "Algoritma dapat memiliki nol atau lebih input." },
    { label: "Output", desc: "Algoritma harus menghasilkan setidaknya satu output." },
    { label: "Definiteness (Kepastian)", desc: "Setiap langkah harus didefinisikan secara jelas dan tidak ambigu." },
    { label: "Finiteness (Keterbatasan)", desc: "Algoritma harus berakhir setelah sejumlah langkah terbatas." },
    { label: "Effectiveness (Efektivitas)", desc: "Setiap langkah harus cukup sederhana sehingga dapat dilakukan dalam waktu yang wajar." },
  ];

  const handlePrev = () => {
    console.log("Navigasi ke halaman sebelumnya");
  };

  const handleNext = () => {
    console.log("Navigasi ke halaman selanjutnya");
  };

  return (
    <div>
      <TitleMateri title="Apa itu Algoritma?" />

      <MateriText>
        Algoritma adalah urutan langkah-langkah logis dan sistematis yang digunakan untuk menyelesaikan suatu masalah atau mencapai tujuan tertentu. Dalam konteks komputer, algoritma adalah inti dari sebuah program. Bayangkan seperti resep masakan; setiap langkah harus diikuti dengan benar untuk menghasilkan hidangan yang lezat.
      </MateriText>

      <IlustrasiGambar
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD0qgMkDWOJmGO4bok8KfAjwDJSa0Q_6FaYMDujsYxxbrpKAiem_44lqIojWtBmXsrQfUAI8Fhl6OkAPOhTJs61JPc4S2q4ALxtbWVuWw78kMKqJ7A20LlIeIEiLw4L_c__rZoLfSfSVj-Su1ZDCeRUS4xhn00uTU2nBeSuXtyMeQ0tyk-vXpzhbjU6Yay3__oCgAXIUnar_WpltkL8vUOAFLwSOb4RBjn_BC3tbvkuq1kEQk8eHphsEQZiBqy6iDChzWUJdmWBjd4"
        alt="Ilustrasi Algoritma"
      />

      <MateriText>
        Berikut ini adalah karakteristik penting dari sebuah algoritma:
      </MateriText>

      <KarakteristikList items={karakteristik} />

      <MateriText>
        Memahami algoritma adalah kunci untuk menjadi programmer yang handal. Dengan algoritma yang baik, program akan berjalan efisien dan menghasilkan output yang benar.
      </MateriText>

      <NavigationButton onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};

export default MateriKonten;
