import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center">
      &copy; {new Date().getFullYear()} Sunway Hotel. All Rights Reserved.
    </footer>
  );
};

export default Footer;
