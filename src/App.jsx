// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";
import Orders from "./Pages/Orders";
import PendingOrders from "./Pages/PendingOrders";
import CatererDetails from './Pages/CatererDetails';
import { ToastContainer } from 'react-toastify';
import CartPage from "./Pages/CartPage";
import LandingHomePage from "./Pages/LandingHomePage";


const App = () => {
  return (
    <>
      <ToastContainer />
    <Router>
      <Routes>
        <Route path="/" element={<LandingHomePage />} /> {/* ✅ root = Landing */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/pending" element={<PendingOrders />} />
        <Route path="/caterer/:id" element={<CatererDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
