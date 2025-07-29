import React from "react";
import AboutBackground from "../../assets/about-background.png";
import AboutBackgroundImage from "../../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        Vita-Plate is your go-to platform for fresh, affordable, and timely home-style meals. Whether you're a student away from home, a working professional with a busy schedule, or simply someone who values healthy eating — we've got you covered.
        </p>
        <p className="primary-text">
        Browse daily menus, subscribe to flexible tiffin plans, or book meals as needed. With Vita-Plate, you can skip the hassle of cooking and still enjoy nutritious food, delivered right to your doorstep.
        Simple. Reliable. Delicious.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;