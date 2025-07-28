import React from 'react';
import { Menu } from 'lucide-react'; // modern hamburger icon

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <button onClick={toggleSidebar} className="menu-toggle-btn">
        <Menu size={24} />
      </button>
      <span>Vita-Plate | Vendor Dashboard</span>
    </nav>
  );
};

export default Navbar;
