// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaUtensils,
  FaBoxOpen,
  FaClipboardList,
  FaLock,
  FaClock,
  FaListAlt,
  FaUserFriends
} from "react-icons/fa";

const Dashboard = () => {
  const cards = [
    {
      name: "Add Menu",
      icon: <FaUtensils />,
      path: "/add-menu",
      description: "Create new menu items"
    },
    {
      name: "Add Package",
      icon: <FaBoxOpen />,
      path: "/add-package",
      description: "Create meal packages"
    },
    {
      name: "All Menus",
      icon: <FaClipboardList />,
      path: "/all-menus",
      description: "Manage your menu items"
    },
    {
      name: "All Packages",
      icon: <FaClipboardList />,
      path: "/all-packages",
      description: "View all packages"
    },
    {
      name: "All Orders",
      icon: <FaLock />,
      path: "/all-orders",
      description: "View complete order history",
      tag: "ALL"
    },
    {
      name: "Pending Orders",
      icon: <FaClock />,
      path: "/pending-orders",
      description: "Orders needing action",
      tag: "PENDING"
    },
    {
      name: "Tiffin Requests",
      icon: <FaListAlt />,
      path: "/tiffin-requests",
      description: "Manage tiffin orders",
      tag: "TIFFIN"
    },
    {
      name: "Subscribers",
      icon: <FaUserFriends />,
      path: "/subscribers",
      description: "Customer subscriptions"
    }
  ];

  return (
    <div className="dashboard-container">
      <h2 className="text-center">Vendor Dashboard</h2>
      <p className="text-center text-muted">Manage your catering business</p>

      <div className="card-grid">
        {cards.map((card, index) => (
          <Link to={card.path} key={index} className="dashboard-card">
            <div className="icon">{card.icon}</div>
            <h5>{card.name}</h5>
            <p>{card.description}</p>
            {card.tag && (
              <span className={`badge ${
                card.tag === "ALL"
                  ? "bg-info"
                  : card.tag === "PENDING"
                  ? "bg-warning"
                  : "bg-success"
              }`}>
                {card.tag}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
