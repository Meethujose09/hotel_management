import React from "react";
import Main from "../components/Main";
import FeauturesMain from "../components/FeauturesMain";
import Testimonials from "../components/ReviewMain";

import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Main/>
      <FeauturesMain />
      <Testimonials />
  
      <Footer />
    </>
  );
};

export default Home;
