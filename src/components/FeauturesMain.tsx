import React from "react";
import { FaHotel, FaConciergeBell, FaSwimmingPool } from "react-icons/fa";
import Feature from "./Features";

const FeaturesMain: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Feature
            Icon={FaHotel}
            title="Luxury Rooms"
            description="Spacious, beautifully designed rooms with all the amenities you need."
          />
          <Feature
            Icon={FaConciergeBell}
            title="24/7 Service"
            description="Round-the-clock concierge services to make your stay seamless."
          />
          <Feature
            Icon={FaSwimmingPool}
            title="Premium Facilities"
            description="Enjoy our pool, spa, fitness center, and much more."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesMain;
