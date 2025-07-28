// src/components/Sidebar.jsx
import React, { useState } from "react";
import "./Sidebar.css"; // Add this import for styling
import { Link } from "react-router-dom";
import {
  FaUtensils,
  FaBoxOpen,
  FaClock,
  FaListAlt,
  FaUserFriends,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Add Menu", path: "/add-menu", icon: <FaUtensils /> },
    { name: "Add Package", path: "/add-package", icon: <FaBoxOpen /> },
    { name: "Pending Orders", path: "/pending-orders", icon: <FaClock /> },
    { name: "Tiffin Requests", path: "/tiffin-requests", icon: <FaListAlt /> },
    { name: "Subscribers", path: "/subscribers", icon: <FaUserFriends /> },
    { name: "Log Out", path: "/logout", icon: <FaSignOutAlt /> }
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2>Vita-Plate</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      <div className="vendor-info">
        <span className="vendor-name">@vendor123</span>
        <h3>Vendor Dashboard</h3>
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="menu-item"
            onClick={item.name === "Log Out" ? () => {/* handle logout */} : null}
          >
            <span className="menu-icon">{item.icon}</span>
            {isOpen && <span className="menu-text">{item.name}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;