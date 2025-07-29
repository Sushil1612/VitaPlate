import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Cart from "../Cart/Cart";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate(); // ✅ now inside the component

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <FaBars className="menu-icon" onClick={() => setSidebarOpen(true)} />
          <h2 className="brand">Vita-Plate</h2>
        </div>

        <div className="navbar-center">
          <input type="text" placeholder="Search for caterers..." className="search-input" />
        </div>

        <div className="navbar-right">
          {/* Option 1: Show cart popup */}
          {/* <FaShoppingCart className="cart-icon" onClick={() => setShowCart(true)} /> */}

          {/* Option 2: Navigate to Cart page */}
          <FaShoppingCart className="cart-icon" onClick={() => navigate("/cart")} />
        </div>
      </nav>

      {/* Sidebar and Cart Modal */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </>
  );
};

export default Navbar;
