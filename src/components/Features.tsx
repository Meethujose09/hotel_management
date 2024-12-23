import React from "react";

interface FeatureProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const Features: React.FC<FeatureProps> = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Icon className="text-blue-500 text-6xl mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Features;
