import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Subscriptions = () => {
  return (
    <div className="main-wrapper">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-area">
          <h2>Subscriptions</h2>
          {/* Subscription details go here */}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;