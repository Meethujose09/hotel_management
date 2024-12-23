import React from "react";
import Review from "./Review";

const ReviewMain: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Review
            text="Amazing experience! The rooms were clean and the staff was incredibly friendly."
            author="John Doe"
          />
          <Review
            text="Best hotel stay ever! Highly recommend for families and couples."
            author="Sarah Smith"
          />
          <Review
            text="The facilities and services exceeded all expectations. Will visit again!"
            author="Emily Johnson"
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewMain;
