import React from "react";
import { useNavigate } from "react-router-dom";
import Img from '../assets/background.jpg';

const Main: React.FC = () => {
  const navigate = useNavigate();

  const handleSearchHotels = () => {
    navigate("/hotels"); 
  };

  return (
    <header
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${Img})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-50"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 space-y-6">
        <h1 className="text-4xl font-bold text-shadow-md sm:text-6xl lg:text-7xl text-white">
          Sunway Hotel
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-light max-w-xl mx-auto">
          Experience luxury, comfort, and world-class service in one place.
        </p>

        <button
          onClick={handleSearchHotels}
          className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-full shadow-2xl hover:bg-blue-600 transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none"
        >
          Search Hotels
        </button>
      </div>
    </header>
  );
};

export default Main;
