import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from './pages/hotelList';
import HotelDetail from './pages/hotelDetail';


const App: React.FC = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
