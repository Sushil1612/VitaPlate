import React from 'react';
import './CatererCard.css';
import { useNavigate } from 'react-router-dom';

const CatererCard = ({ caterer }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/caterer/${caterer.id}`, { state: { caterer } });
  };

  return (
    <div className="caterer-card" onClick={handleClick}>
      <img src={caterer.image} alt={caterer.name} className="caterer-img" />
      <div className="caterer-info">
        <h3>{caterer.name}</h3>
        <p>⭐ {caterer.rating} • {caterer.time}</p>
        <p>{caterer.type}</p>
        <p><strong>Location:</strong> {caterer.location}</p>
      </div>
    </div>
  );
};

export default CatererCard;
