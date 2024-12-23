import React from "react";
import { FaStar } from "react-icons/fa";

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

interface HotelCardProps {
  hotel: Hotel;
  onClick: () => void;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, onClick }) => {
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
      className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition transform hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={hotelImage}
        alt={hotel.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {hotel.name}
      </h2>
      <p className="text-sm text-gray-600 mb-4">{hotel.location}</p>
      <div className="flex items-center mb-4 space-x-1">
        {renderStars(hotel.rating)}
        <span className="text-sm text-gray-600">({hotel.rating.toFixed(1)})</span>
      </div>
      <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition">
        View Details
      </button>
    </div>
  );
};

export default HotelCard;
