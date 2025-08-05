import React, { useState } from "react";
import Sidebar from "@/components/admin/layouts/UserManagement/Sidebar";
import ContentModulSub from "@/components/admin/layouts/ModulAdd/ContentModulSub";
import ContentMateriTugas from "@/components/admin/layouts/ModulAdd/ContentMateriTugas";

const ModulAdd = () => {
  const [activeTab, setActiveTab] = useState("modul");

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-[#F0F9FF] min-h-screen ml-64">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Modul Management</h1>
          <p className="text-gray-600 mb-4">
            Buat modul beserta submodul, materi dan tugasnya.
          </p>

          {/* Tab Switch */}
          <div className="flex">
            <button
              className={`px-6 py-2 rounded-l-lg font-semibold ${
                activeTab === "modul"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white text-black border"
              }`}
              onClick={() => setActiveTab("modul")}
            >
              Modul & Submodul
            </button>
            <button
              className={`px-6 py-2 rounded-r-lg font-semibold ${
                activeTab === "materi"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white text-black border"
              }`}
              onClick={() => setActiveTab("materi")}
            >
              Tugas & Materi
            </button>
          </div>
        </div>

        {/* Konten dinamis berdasarkan tab */}
        {activeTab === "modul" && <ContentModulSub />}
        {activeTab === "materi" && <ContentMateriTugas />}
      </main>
    </div>
  );
};

export default ModulAdd;
