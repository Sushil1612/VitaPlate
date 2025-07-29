import React from "react";
import "./TiffinCard.css";

const TiffinCard = ({ tiffin }) => {
  return (
    <div className="tiffin-card">
      <img src={tiffin.image} alt={tiffin.name} className="tiffin-img" />
      <div className="tiffin-info">
        <h4>{tiffin.name}</h4>
        <p>{tiffin.description}</p>
        <p><strong>Price:</strong> ₹{tiffin.price}</p>
      </div>
    </div>
  );
};

export default TiffinCard;