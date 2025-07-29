// src/components/Orders/PendingOrderList.jsx
import React from "react";
import OrderSection from "./OrderSection";
import "../Orders/Orders.css";

const PendingOrderList = () => {
  const oneTimePending = [
    {
      id: 3,
      title: "Rajma Chawal",
      date: "2025-07-24",
      amount: 130,
      status: "Pending",
    },
    {
      id: 4,
      title: "Dal Tadka",
      date: "2025-07-25",
      amount: 110,
      status: "Preparing",
    },
  ];

  const subscriptionPending = [
    {
      id: 5,
      title: "Biweekly North Indian",
      startDate: "2025-07-22",
      endDate: "2025-08-05",
      plan: "Biweekly",
      status: "Ongoing",
    },
  ];

  return (
    <div className="orders-page">
      <h2 className="orders-title">Pending Orders</h2>

      <OrderSection title="One-Time Orders (Pending)" type="one-time" orders={oneTimePending} />
      <OrderSection title="Subscribed Tiffin Packages (Ongoing)" type="subscription" orders={subscriptionPending} />
    </div>
  );
};

export default PendingOrderList;
