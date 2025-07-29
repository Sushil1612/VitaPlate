import React from 'react';
import './TiffinItemCard.css';
import { useCart } from '../../Context/CartContext';
import '../Styles/CommonButton.css';
import { FaCartPlus } from "react-icons/fa";

const TiffinItemCard = ({ item }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(item);
  };

  return (
    <div className="tiffin-item-card">
      <img src={item.image} alt={item.name} className="item-img" />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <p className="price">₹{item.price}</p>
        <button className="add-to-cart-btn" onClick={handleAdd}>
  <FaCartPlus /> Add to Cart
</button>
      </div>
    </div>
  );
};

export default TiffinItemCard;
