import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-profile">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="User Profile"
        />
        <p>Show Profile</p>
      </div>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/add-menu">Add Menu</Link>
        <Link to="/add-package">Add Package</Link>
        <Link to="/pending-orders">Pending Orders</Link>
        <Link to="/tiffin-requests">Tiffin Requests</Link>
        <Link to="/subscribers">Subscribers</Link>
        <Link to="/login">Log Out</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
