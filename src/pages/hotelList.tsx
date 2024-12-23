import React, { useState, useEffect } from "react";
import axios from "axios";
import HotelCard from "../components/HotelCard";
import { useNavigate } from "react-router-dom";

interface Room {
  roomType: string;
  amount: number;
}

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  datesOfTravel: string[];
  boardBasis: string;
  rooms: Room[];
}

const HotelsList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[] | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get<Hotel[]>("/hotels.json")
        .then((response) => {
          setHotels(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching hotels:", error);
          setLoading(false);
        });
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full animate-spin border-8 border-solid border-purple-500 border-t-transparent"></div>
          <p className="text-lg text-white font-semibold mt-4">Loading hotels...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-black-600 mb-8">
        Available Hotels
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels?.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            onClick={() => navigate(`/hotels/${hotel.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelsList;
