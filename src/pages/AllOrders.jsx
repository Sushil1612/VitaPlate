import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AllOrders = () => {
  return (
    <div className="main-wrapper">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-area">
          <h2>All Orders</h2>
          {/* Orders table goes here */}
        </div>
      </div>
    </div>
  );
};

export default AllOrders;