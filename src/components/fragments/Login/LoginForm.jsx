import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    navigate('/home'); 
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-5 relative group">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400">
          <i className="material-icons text-xl">person_outline</i>
        </div>
        <input
          className="appearance-none border-2 border-gray-200 rounded-full w-full py-3.5 pl-14 pr-4 text-gray-800 bg-gray-50 leading-tight focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition duration-300"
          placeholder="Masukkan email Anda"
          type="email"
          required
        />
      </div>

      <div className="mb-6 relative group">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400">
          <i className="material-icons text-xl">lock_outline</i>
        </div>
        <input
          className="appearance-none border-2 border-gray-200 rounded-full w-full py-3.5 pl-14 pr-24 text-gray-800 bg-gray-50 leading-tight focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition duration-300"
          placeholder="Masukkan kata sandi Anda"
          type="password"
          required
        />
        <a
          className="absolute inset-y-0 right-5 flex items-center text-sm text-[#4285F4] hover:text-blue-700 font-semibold"
          href="#"
        >
          Lupa?
        </a>
      </div>

      <div className="mb-6 mt-8">
<<<<<<< HEAD
        <button
          type="submit"
          className="bg-[#4285F4] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 w-full text-lg"
        >
=======
        <button className="bg-[#4285F4] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 w-full text-lg">
          <a href="Home">
<<<<<<< Updated upstream
=======
>>>>>>> befb08526f6a06d6f69826a857b47f392c17510c
>>>>>>> Stashed changes
          Masuk Sekarang
          </a>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
