import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-brand">Vita-Plate</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <ul className="menu-list">
        <li><Link to="/profile" onClick={onClose}>Profile</Link></li>
        <li><Link to="/orders" onClick={onClose}>All Orders</Link></li>
        <li><Link to="/pending" onClick={onClose}>Pending Orders</Link></li>
        <li><Link to="/logout" onClick={onClose}>Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
