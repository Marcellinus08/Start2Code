import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";

const Profile = () => {
  const [userData, setUserData] = useState({
    username: "",
    role: "",
    image: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const username = localStorage.getItem("username");
      if (!username) return;

      const { data, error } = await supabase
        .from("users")
        .select("username, role, image")
        .eq("username", username)
        .single();

      if (!error && data) {
        setUserData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full mb-3 border-4 border-blue-200 shadow-md bg-gray-100 flex items-center justify-center overflow-hidden">
        {userData.image ? (
          <img
            src={userData.image}
            alt="profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="material-icons text-gray-400 text-5xl">person</span>
        )}
      </div>
      <h4 className="text-lg font-semibold text-gray-800">{userData.username}</h4>
      <p className="text-sm text-gray-500 capitalize">{userData.role}</p>
    </div>
  );
};

export default Profile;
