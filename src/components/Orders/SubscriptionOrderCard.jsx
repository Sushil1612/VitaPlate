// src/components/Orders/SubscriptionOrderCard.jsx
import React from "react";
import "./Orders.css";

const SubscriptionOrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <h4>{order.title}</h4>
      <p><strong>Start:</strong> {order.startDate}</p>
      <p><strong>End:</strong> {order.endDate}</p>
      <p><strong>Plan:</strong> {order.plan}</p>
      <p><strong>Status:</strong> {order.status}</p>
    </div>
  );
};

export default SubscriptionOrderCard;
