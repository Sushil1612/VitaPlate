// src/components/Orders/AllOrders.jsx
import React from "react";
import OrderSection from "./OrderSection";
import "./Orders.css";

const AllOrders = () => {
  const oneTimeOrders = [
    {
      id: 1,
      title: "Paneer Biryani",
      date: "2025-07-20",
      amount: 180,
      status: "Delivered",
    },
    {
      id: 2,
      title: "Veg Thali",
      date: "2025-07-18",
      amount: 150,
      status: "Cancelled",
    },
  ];

  const subscriptions = [
    {
      id: 1,
      title: "Monthly Tiffin",
      startDate: "2025-07-01",
      endDate: "2025-07-31",
      plan: "Monthly",
      status: "Active",
    },
    {
      id: 2,
      title: "Weekly South Indian",
      startDate: "2025-07-15",
      endDate: "2025-07-21",
      plan: "Weekly",
      status: "Completed",
    },
  ];

  return (
    <div className="orders-page">
      <h2 className="orders-title">All Orders</h2>

      <OrderSection title="One-Time Orders" type="one-time" orders={oneTimeOrders} />
      <OrderSection title="Subscribed Tiffin Packages" type="subscription" orders={subscriptions} />
    </div>
  );
};

export default AllOrders;
