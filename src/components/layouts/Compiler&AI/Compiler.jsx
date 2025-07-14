const Compiler = () => {
  return (
    <div className="h-screen bg-[#F4F6F8] text-gray-800 flex-col flex-1 overflow-y-auto ml-64">

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden">
        {/* Compiler Section */}
        <section className="flex flex-col flex-[2] p-6 space-y-4 overflow-auto">
          <div>
            <h1 className="text-2xl font-bold">Compiler & AI Assistant</h1>
            <p className="text-sm text-gray-500">Lakukan konsultasi dengan mentor apabila Anda masih bingung.</p>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-lg font-semibold">Compiler</span>
            <select className="border rounded-md px-3 py-1 text-sm">
              <option>C++</option>
              <option>Python</option>
              <option>JavaScript</option>
            </select>
            <button className="flex items-center gap-1 px-4 py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm shadow">
              <span className="material-icons">play_arrow</span>
              Run
            </button>
          </div>

          <div className="bg-[#1E1E1E] text-white rounded-lg p-4 font-mono min-h-[250px] whitespace-pre overflow-auto shadow">
{`#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}`}
          </div>

          <div className="bg-black text-white rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Output:</h3>
            <p>Hello, World!</p>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section className="flex flex-col flex-[1] bg-white border-l border-gray-200 p-4 space-y-4">
          <h2 className="text-xl font-bold">AI Assistant</h2>

          <div className="flex-1 overflow-y-auto space-y-3 px-1">
            <Bubble type="ai" text="Halo Sabrina! Ada yang bisa saya bantu dengan kode C++ Anda hari ini?" />
            <Bubble type="user" text="Ya, bisakah kamu jelaskan apa fungsi dari #include <iostream>?" />
            <Bubble
              type="ai"
              text="Tentu saja! #include <iostream> adalah header file yang berisi fungsi-fungsi untuk operasi input dan output. Ini memungkinkan Anda menggunakan objek seperti std::cout untuk mencetak ke konsol dan std::cin untuk membaca input dari pengguna.\n\nApakah ada lagi yang ingin Anda tanyakan?"
            />
            <Bubble type="user" text="Bagaimana cara saya membuat variabel di C++?" />
            <Bubble
              type="ai"
              text='Anda dapat mendeklarasikan variabel dengan menentukan tipe data diikuti dengan nama variabel. Contohnya: int umur = 25; atau std::string nama = "Sabrina"; Apakah Anda ingin contoh yang lebih spesifik?'
            />
          </div>

          <div className="relative mt-auto">
            <input
              type="text"
              className="w-full pl-4 pr-12 py-2 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ketik pesan Anda..."
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full text-white bg-blue-600 rounded-r-full hover:bg-blue-700">
              <span className="material-icons">send</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

// Komponen item menu sidebar
const MenuItem = ({ icon, label, active, className = "" }) => (
  <div
    className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer hover:bg-blue-100 ${
      active ? "bg-blue-500 text-white" : "text-gray-700"
    } ${className}`}
  >
    <span className="material-icons text-lg">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

// Komponen bubble chat
const Bubble = ({ type, text }) => {
  const base = "px-4 py-2 rounded-lg text-sm max-w-[90%] whitespace-pre-wrap";
  const style =
    type === "user"
      ? "bg-blue-500 text-white self-end rounded-br-none"
      : "bg-gray-100 text-gray-800 self-start rounded-bl-none";
  return <div className={`flex ${type === "user" ? "justify-end" : "justify-start"}`}><div className={`${base} ${style}`}>{text}</div></div>;
};

export default Compiler;
