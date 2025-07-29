import React, { useState } from "react";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginForm = ({ selectedRole }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", form.username)
      .eq("password", form.password)
      .eq("role", selectedRole)
      .single();

    if (error || !data) {
      Swal.fire({
        icon: "error",
        title: "Gagal Login",
        text: "Username, password, atau role salah!",
      });
      return;
    }

    Swal.fire({
      title: `Selamat Datang, ${data.full_name}!`,
      text: `Login berhasil sebagai ${selectedRole}`,
      imageUrl: "../../../../assets/logo.png",
      imageAlt: "Logo Start2Code",
      timer: 3000,
      showConfirmButton: false,
      timerProgressBar: true,
    });

    // Arahkan berdasarkan role
    if (selectedRole === "admin") navigate("admin");
    else if (selectedRole === "mentor") navigate("mentor");
    else navigate("home");
  };

  return (
    <form onSubmit={handleLogin}>
      {/* Username */}
      <div className="mb-5 relative group">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400">
          <i className="material-icons text-xl">person_outline</i>
        </div>
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Masukkan username Anda"
          type="text"
          required
          className="appearance-none border-2 border-gray-200 rounded-full w-full py-3.5 pl-14 pr-4 text-gray-800 bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition duration-300"
        />
      </div>

      {/* Password */}
      <div className="mb-6 relative group">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400">
          <i className="material-icons text-xl">lock_outline</i>
        </div>
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Masukkan kata sandi Anda"
          type="password"
          required
          className="appearance-none border-2 border-gray-200 rounded-full w-full py-3.5 pl-14 pr-4 text-gray-800 bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition duration-300"
        />
        <a
          className="absolute inset-y-0 right-5 flex items-center text-sm text-[#4285F4] hover:text-blue-700 font-semibold"
          href="#"
        >
          Lupa?
        </a>
      </div>

      {/* Submit Button */}
      <div className="mb-6 mt-8">
        <button
          type="submit"
          className="bg-[#4285F4] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 w-full text-lg"
        >
          Masuk Sekarang
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
