import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const TiffinRequests = () => {
  return (
    <div className="main-wrapper">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-area">
          <h2>Tiffin Requests</h2>
          {/* Tiffin request list goes here */}
        </div>
      </div>
    </div>
  );
};

export default TiffinRequests;