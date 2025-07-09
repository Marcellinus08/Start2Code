import React from "react"
import Sidebar from "../fragments/Sidebar";
function App() {
  return (
    <div className="flex min-h-screen">
            <aside className="w-64 bg-white shadow-lg p-6 h-screen fixed top-0 left-0 flex flex-col justify-between">
                <Sidebar></Sidebar>
            </aside>
        </div>
  );
}

export default App;
