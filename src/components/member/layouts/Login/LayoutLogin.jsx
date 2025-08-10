import React from 'react';
import KontenKiri from "../../fragments/Login/KontenKiri";

const LayoutLogin = ({ children }) => {
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen p-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <KontenKiri />
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutLogin;