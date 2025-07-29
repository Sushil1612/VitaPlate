import React from "react";
import Navbar from "../../components/LandingPage/Navbar";
import BannerBackground from "../../assets/home-banner-background.png";
import BannerImage from "../../assets/home-banner-image.png"; // Adjust the filename if different
import { FiArrowRight } from "react-icons/fi";

const Home = ({ onOrderClick }) => {
  return (
    <div className="home-container" id="home">
      <Navbar />

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Eat well, live better — with Vita-Plate.
            We make everyday meals easy by connecting you with reliable home-style tiffin services.
          </p>

          <button className="secondary-button" onClick={onOrderClick}>
            Order Now <FiArrowRight />
          </button>
        </div>

        <div className="home-image-section pl-0 -ml-8">
          <img
            src={BannerImage}
            alt="food banner"
            className="w-[600px] h-auto rounded-[2rem] object-cover shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
