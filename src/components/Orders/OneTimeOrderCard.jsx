// src/components/Orders/OneTimeOrderCard.jsx
import React from "react";
import "./Orders.css";

const OneTimeOrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <h4>{order.title}</h4>
      <p><strong>Date:</strong> {order.date}</p>
      <p><strong>Amount:</strong> ₹{order.amount}</p>
      <p><strong>Status:</strong> {order.status}</p>
    </div>
  );
};

export default OneTimeOrderCard;
