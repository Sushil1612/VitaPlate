// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaUtensils,
  FaBoxOpen,
  FaClipboardList,
  FaClock,
  FaUserFriends,
  FaShoppingBag,
  FaListAlt,
  FaPlusCircle
} from "react-icons/fa";

const Dashboard = () => {
  const modules = [
    { name: "Add Menu", path: "/add-menu", icon: <FaPlusCircle /> },
    { name: "Add Package", path: "/add-package", icon: <FaBoxOpen /> },
    { name: "All Menus", path: "/all-menus", icon: <FaUtensils /> },
    { name: "All Packages", path: "/all-packages", icon: <FaClipboardList /> },
    { name: "All Orders", path: "/all-orders", icon: <FaShoppingBag /> },
    { name: "Pending Orders", path: "/pending-orders", icon: <FaClock /> },
    { name: "Tiffin Requests", path: "/tiffin-requests", icon: <FaListAlt /> },
    { name: "Subscribers", path: "/subscribers", icon: <FaUserFriends /> }
  ];

  return (
    <div className="content-area dashboard">
      <h2>Vendor Dashboard</h2>
      <div className="dashboard-grid">
        {modules.map((mod, idx) => (
          <Link to={mod.path} key={idx} className="dashboard-card">
            <div className="icon">{mod.icon}</div>
            <div className="name">{mod.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
