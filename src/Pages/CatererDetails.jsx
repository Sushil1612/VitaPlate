import React from 'react';
import { useLocation } from 'react-router-dom';
import FoodItemCard from "../components/Caterer/FoodItemCard";
import './CatererDetails.css';

const sampleTiffins = [
  {
    id: "tiffin1",
    name: "2 Chapatis Only",
    description: "Soft tawa rotis",
    price: 20,
    image: "https://static.toiimg.com/thumb/61203720.cms?width=1200&height=900",
  },
  {
    id: "tiffin2",
    name: "Dry Bhaji",
    description: "Daily veg subzi (100g)",
    price: 30,
    image: "https://forkfulofplants.com/wp-content/uploads/2022/05/Aubergine-Bhaji_023.jpg",
  },
  {
    id: "tiffin3",
    name: "Mini Tiffin",
    description: "2 chapatis, sabzi, rice",
    price: 80,
    image: "https://img.freepik.com/free-photo/top-view-different-dishes-indian-cuisine_23-2148747514.jpg",
  },
];

const samplePackages = [
  {
    id: "pkg1",
    name: "Weekly Veg Package",
    description: "1 Tiffin / day, 6 days a week",
    duration: "7 Days",
    price: 720,
    image: "https://img.freepik.com/free-photo/top-view-different-dishes-indian-cuisine_23-2148747514.jpg"
  },
  {
    id: "pkg2",
    name: "Monthly Healthy Plan",
    description: "Low-oil meals with salad and fruits",
    duration: "30 Days",
    price: 2800,
    image: "https://img.freepik.com/free-photo/top-view-different-dishes-indian-cuisine_23-2148747514.jpg"
  },
];

const CatererDetails = () => {
  const { state } = useLocation();
  const caterer = state?.caterer;

  if (!caterer) return <p>Caterer data not found</p>;

  return (
    <div className="caterer-details-page">
      <h2>{caterer.name}</h2>
      <img src={caterer.image} alt={caterer.name} className="caterer-banner" />
      <p>
        <strong>Rating:</strong> ⭐ {caterer.rating}
      </p>
      <p>
        <strong>Delivery Time:</strong> {caterer.time}
      </p>
      <p>
        <strong>Food Type:</strong> {caterer.type}
      </p>
      <p>
        <strong>Location:</strong> {caterer.location}
      </p>

      <hr style={{ margin: "2rem 0" }} />

      <h3>Tiffin Packages</h3>
      <div className="vertical-stack">
        {samplePackages.map((item, i) => (
          <FoodItemCard key={i} item={item} />
        ))}
      </div>

      <h3 style={{ marginTop: "2rem" }}>Available Tiffins / Items</h3>
      <div className="vertical-stack">
        {sampleTiffins.map((item, i) => (
          <FoodItemCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CatererDetails;
