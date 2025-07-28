import { useState } from 'react';
import Layout from './Components/Layout';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from "./pages/RegistrationForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/login.jsx";  // You'll create this file
import Dashboard from "./pages/Dashboard.jsx";
import TiffinRequests from './pages/TiffinRequests';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PendingRequests from './pages/PendingRequests';
import Subscribers from "./pages/Subscribers";
import Orders from './pages/orders.jsx';
import './App.css';
import AllOrders from "./pages/AllOrders";

function App() {

  return (
    <Router>
      <div className="app-container">
        <Routes>
           <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/tiffin-requests" element={<TiffinRequests />} />
           <Route path="/pending-requests" element={<PendingRequests />} />
           //<Route path="/pending-requests" element={<PendingRequests />} />
           <Route path="/pending-orders" element={<PendingRequests />} />
           <Route path="/subscribers" element={<Subscribers />} />
           <Route path="/" element={<Dashboard />} />
           //<Route path="/orders" element={<AllOrders />} />
           <Route path="/all-orders" element={<AllOrders />} />
           
           
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
