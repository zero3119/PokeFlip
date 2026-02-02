import React from "react";
import {useNavigate} from "react-router-dom"

const Landing = () => {
  const navigate = useNavigate();
  
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(43,44,48)]">
      <div className="absolute border-4 border-solid-black h-75 w-150 mb-75 rounded-t-full bg-red-500">

      </div>
      <div className="absolute border-4 border-solid-black h-75 w-150 mt-75 rounded-b-full bg-white">

      </div>
      <div className="absolute h-45 w-45 bg-black rounded-full">
      </div>
      <div className="absolute h-15 w-148 bg-black rounded-">
      </div>
      true && <button onClick={() => navigate("/mode")} className="absolute h-20 w-20 bg-white rounded-full text-3xl font-bold cursor-pointer">
        PLAY
      </button>
    </div>
  );
};

export default Landing;
