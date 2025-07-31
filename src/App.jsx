import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import AddMenu from "./pages/AddMenu";
import AddPackage from "./pages/AddPackage";
import AllMenus from "./pages/AllMenus";
import AllPackages from "./pages/AllPackages";
import EditMenu from "./pages/EditMenu";
import EditPackage from "./pages/EditPackage";
import AllOrders from "./pages/AllOrders";
import PendingOrders from "./pages/PendingOrders";
import Subscriptions from "./pages/Subscriptions";
import TiffinRequests from "./pages/TiffinRequests";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-menu" element={<AddMenu />} />
          <Route path="/add-package" element={<AddPackage />} />
          <Route path="/all-menus" element={<AllMenus />} />
          <Route path="/all-packages" element={<AllPackages />} />
          <Route path="/edit-menu/:id" element={<EditMenu />} />
          <Route path="/edit-package" element={<EditPackage />} />
          <Route path="/all-orders" element={<AllOrders />} />
          <Route path="/pending-orders" element={<PendingOrders />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/tiffin-requests" element={<TiffinRequests />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
