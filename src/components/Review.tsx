import React from "react";

interface ReviewProps {
  text: string;
  author: string;
}

const Review: React.FC<ReviewProps> = ({ text, author }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="italic text-gray-600 mb-4">&quot;{text}&quot;</p>
      <h3 className="font-bold text-lg">- {author}</h3>
    </div>
  );
};

export default Review;
