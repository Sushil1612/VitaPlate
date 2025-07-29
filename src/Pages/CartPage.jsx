import React, { useState } from "react";
import "./CartPage.css";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import AddressSelector from "../components/AddressSelector";


const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const [showAddress, setShowAddress] = useState(false); 

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty 😕</h3>
        </div>
      ) : (
        <div className="cart-content">
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price} × {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
              </li>
            ))}
          </ul>

      {cart.length > 0 && !showAddress && (
        <div className="cart-summary">
          <h3>Total: ₹{total}</h3>
          <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
          <button className="checkout-btn" onClick={() => setShowAddress(true)}>
            Proceed to Checkout
          </button>
        </div>
      )}

      {showAddress && <AddressSelector total={total} />}
        </div>
      )}
    </div>
  );
};

export default CartPage;
