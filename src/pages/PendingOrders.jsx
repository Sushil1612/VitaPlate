import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const PendingOrders = () => {
  return (
    <div className="main-wrapper">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-area">
          <h2>Pending Orders</h2>
          {/* Pending orders table goes here */}
        </div>
      </div>
    </div>
  );
};

export default PendingOrders;