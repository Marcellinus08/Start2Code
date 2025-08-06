import React, { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import ProgressBar from "../../elements/statistik/ProgressBar";

const StatistikModul = () => {
  const [modules, setModules] = useState([]);
  const [submoduls, setSubmoduls] = useState([]);
  const [progress, setProgress] = useState([]);

  // Fetching Modul data from Supabase, including color
  const fetchModuls = async () => {
    const { data, error } = await supabase
      .from("modul")
      .select("modul_id, modul_name, color")  // Added color to the select query
      .order("modul_name", { ascending: true });

    if (!error) {
      setModules(data);
    } else {
      console.error("Error fetching modul:", error.message);
    }
  };

  // Fetching Submodul data from Supabase
  const fetchSubmoduls = async () => {
    const { data, error } = await supabase
      .from("submodul")
      .select("submodul_id, modul_id") // Fetch submodul related to modul
      .order("submodul_name", { ascending: true });

    if (!error) {
      setSubmoduls(data);
    } else {
      console.error("Error fetching submodul:", error.message);
    }
  };

  // Fetching Statistik data from Supabase
  const fetchProgress = async () => {
    const { data, error } = await supabase
      .from("statistik")
      .select("modul_id, statistik_status")
      .eq("statistik_status", true); // Only get tasks marked as completed

    if (!error) {
      setProgress(data);
    } else {
      console.error("Error fetching statistik:", error.message);
    }
  };

  // Calculate completion percentage based on submoduls
  const calculatePercentage = (modul_id) => {
    // Filter submoduls for this module
    const moduleSubmoduls = submoduls.filter((submodul) => submodul.modul_id === modul_id);
    
    // Calculate completed tasks for this module
    const completedTasks = progress.filter(
      (statistik) => statistik.modul_id === modul_id
    ).length;
    
    // Calculate percentage based on submoduls
    const percentage = (completedTasks / moduleSubmoduls.length) * 100;
    
    return percentage;
  };

  useEffect(() => {
    fetchModuls();
    fetchSubmoduls();
    fetchProgress();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Modul Selesai</h3>
      <div className="space-y-4">
        {modules.map((modul, i) => {
          const percentage = calculatePercentage(modul.modul_id);
          return (
            <ProgressBar
              key={i}
              label={modul.modul_name}
              percentage={percentage}
              color={modul.color || "text-gray-500"}  // Use module color, default to gray if not available
            />
          );
        })}
      </div>
    </div>
  );
};

export default StatistikModul;
