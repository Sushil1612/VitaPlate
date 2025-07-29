import React from "react";
import "./HeroCarousel.css";

const images = [
  "https://img.freepik.com/premium-vector/healthy-food-social-media-cover-web-banner-template_589366-187.jpg",
  "https://img.freepik.com/premium-vector/delicious-food-menu-banner-template-promotions-web-social-media-design-template_553310-699.jpg",
  "https://elements-resized.envatousercontent.com/elements-video-cover-images/files/345939916/Health%20Food%20Restaurant%20Promotional%201920x1080.jpg?w=1200&h=630&cf_fit=crop&q=85&format=jpeg&s=551a57c77670d6f04056d08e323f9f7a4dc0bbbe2654ec6acf43f6eb5acc310c",
  "https://img.freepik.com/free-vector/gradient-indian-restaurant-landing-page-template_23-2149456209.jpg?semt=ais_hybrid&w=740",
  //"https://example.com/image5.jpg",
  //"https://example.com/image6.jpg",
];

const HeroCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`slide-${index}`} className="carousel-img" />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
