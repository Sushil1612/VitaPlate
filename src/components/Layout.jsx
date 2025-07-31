import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  // ⛔ Hidden by default
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(prev => !prev);
  };

  return (
    <div className="main-wrapper">
      {/* ✅ Conditionally render sidebar */}
      {sidebarVisible && <Sidebar />}

      <div className="main-content">
        {/* ✅ Pass toggle function to Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="content-area">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
