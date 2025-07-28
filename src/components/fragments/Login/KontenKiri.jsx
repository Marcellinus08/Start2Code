import React from 'react';

const KontenKiri = () => {
  return (
    <div className="relative hidden lg:flex flex-col justify-center items-center p-12 bg-[#4285F4] text-white text-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')" }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="bg-white/20 p-6 rounded-full mb-8">
          <i className="material-icons text-7xl text-white">school</i>
        </div>
        <h1 className="text-4xl font-extrabold tracking-wider mb-4">Start2Code</h1>
        <p className="text-blue-100 text-lg max-w-md">
          Belajar coding jadi menyenangkan bersama mentor terbaik!
        </p>
      </div>
    </div>
  );
};

export default KontenKiri;