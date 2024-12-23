import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";

import { FaStar, FaBed } from "react-icons/fa"; // Added bed icon

const imageMapping: Record<string, string> = {
  "image1.jpg": image1,
  "image2.jpg": image2,
  "image3.jpg": image3,
  "image4.jpg": image4,
  "image5.jpg": image5,
  "image6.jpg": image6,
  "image7.jpg": image7,
  "image8.jpg": image8,
  "image9.jpg": image9,
  "image10.jpg": image10,
};

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

const HotelDetail: React.FC = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      axios
        .get<Hotel[]>("/hotels.json")
        .then((response) => {
          const foundHotel = response.data.find(
            (hotel) => hotel.id.toString() === id
          );
          if (foundHotel) {
            setHotel(foundHotel);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("There was an error fetching the hotel details!", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-8 border-solid border-t-transparent border-blue-500 rounded-full animate-spin mb-4"></div>
          <p className="text-lg text-white font-semibold mt-4">Loading hotels...</p>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return <div className="text-center text-xl text-red-600">Hotel not found</div>;
  }

  const hotelImage = imageMapping[hotel.imageUrl];

  if (!hotelImage) {
    return <div>Error: Image not found</div>;
  }

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${hotelImage})` }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen py-12">
        <div className="container mx-auto px-6 max-w-4xl bg-white rounded-lg shadow-lg">
      
          <h1
            className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right,rgb(12, 6, 18),rgb(8, 11, 17))",
            }}
          >
            {hotel.name}
          </h1>

       
          <div className="mb-8">
            <img
              src={hotelImage}
              alt={hotel.name}
              className="w-full h-48 object-cover rounded-lg shadow-lg mx-auto"
            />
          </div>

      
          <div className="text-center text-lg text-gray-700 mb-6">
            <p className="mb-4 text-xl">{hotel.location}</p>

        
            <div className="flex justify-center items-center mb-4 space-x-1">
              {renderStars(hotel.rating)}
            </div>

            <p className="font-semibold mb-2 text-gray-600">
              Board Basis: <span className="text-blue-600">{hotel.boardBasis}</span>
            </p>
            <p className="font-medium text-gray-600">
              Dates of Travel: {hotel.datesOfTravel.join(" to ")}
            </p>
          </div>

       
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
              Available Rooms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hotel.rooms.map((room, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <FaBed className="text-blue-500 text-xl" />
                    <span className="text-lg font-medium text-gray-800">
                      {room.roomType}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">${room.amount} per night</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
