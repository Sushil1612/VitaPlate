import React from 'react';
import { useCart } from '../../Context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCartPlus } from "react-icons/fa";
import './FoodItemCard.css'; // you can reuse your existing CSS

const FoodItemCard = ({ item }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="tiffin-item-card">
      {item.image && (
        <img src={item.image} alt={item.name} className="item-img" />
      )}
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        {item.duration && <p><strong>Duration:</strong> {item.duration}</p>}
        <p className="price">₹{item.price}</p>
        <button className="add-to-cart-btn" onClick={handleAdd}>
          <FaCartPlus /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItemCard;
