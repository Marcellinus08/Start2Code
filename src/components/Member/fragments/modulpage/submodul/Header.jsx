import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";

const Header = ({ title, desc }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const username = localStorage.getItem("username");
      if (!username) return;

      const { data, error } = await supabase
        .from("users")
        .select("image")
        .eq("username", username)
        .single();

      if (!error && data?.image) {
        setImage(data.image);
      }
    };

    fetchImage();
  }, []);

  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">{desc}</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="icon-btn">
          <span className="material-icons text-3xl">notifications_none</span>
        </button>
        <div className="w-10 h-10 rounded-full border-2 border-blue-300 bg-gray-100 flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              alt="Avatar"
              src={image}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="material-icons text-gray-400 text-xl">person</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
