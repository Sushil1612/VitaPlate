import React from 'react';
import { useCart } from '../../Context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/CommonButton.css';
import { FaCartPlus } from "react-icons/fa";


const PackageCard = ({ pkg }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(pkg);
    toast.success(`${pkg.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="package-card">
      <h4>{pkg.name}</h4>
      <p>{pkg.description}</p>
      <p>
        <strong>Duration:</strong> {pkg.duration}
      </p>
      <p>
        <strong>Price:</strong> ₹{pkg.price}
      </p>
      // Inside return:
      <button className="add-to-cart-btn" onClick={handleAdd}>
        <FaCartPlus /> Add to Cart
      </button>
    </div>
  );
};

export default PackageCard;
