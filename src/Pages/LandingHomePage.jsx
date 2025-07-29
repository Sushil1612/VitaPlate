// src/Pages/LandingHomePage.jsx
import React, { useState } from "react";
import Home from "../components/LandingPage/Home";
import About from "../components/LandingPage/About";
import Work from "../components/LandingPage/Work";
import Testimonial from "../components/LandingPage/Testimonial";
import Contact from "../components/LandingPage/Contact";
import Footer from "../components/LandingPage/Footer";
import { useNavigate } from "react-router-dom";
import "../components/LandingPage/Home.css";
import HomePage from "../Pages/HomePage";


const LandingHomePage = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/home"); // go to User HomePage
  };

  return (
    <div className="App">
      <Home onOrderClick={handleOrderClick} />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingHomePage;
