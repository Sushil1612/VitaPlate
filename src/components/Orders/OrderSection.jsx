// src/components/Orders/OrderSection.jsx
import React from "react";
import OneTimeOrderCard from "./OneTimeOrderCard";
import SubscriptionOrderCard from "./SubscriptionOrderCard";

const OrderSection = ({ title, type, orders }) => {
  return (
    <div className="order-section">
      <h3 className="section-title">{title}</h3>
      <div className="order-list">
        {type === "one-time"
          ? orders.map((order) => <OneTimeOrderCard key={order.id} order={order} />)
          : orders.map((sub) => <SubscriptionOrderCard key={sub.id} order={sub} />)}
      </div>
    </div>
  );
};

export default OrderSection;
