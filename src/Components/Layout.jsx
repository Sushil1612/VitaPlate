import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUtensils, FaShoppingBag, FaClipboardList, FaBoxOpen, FaUserFriends } from 'react-icons/fa';

const PageLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarItems = [
    { to: '/dashboard', icon: FaUtensils, label: 'Dashboard' },
    { to: '/all-orders', icon: FaShoppingBag, label: 'All Orders' },
    { to: '/pending-orders', icon: FaClipboardList, label: 'Pending Orders' },
    { to: '/tiffin-requests', icon: FaBoxOpen, label: 'Tiffin Requests' },
    { to: '/subscribers', icon: FaUserFriends, label: 'Subscribers' },
  ];

  return (
    <Container fluid className="px-0">
      <Row className="g-0">
        <Col md={sidebarOpen ? 2 : 1} className={`bg-light vh-100 sticky-top ${sidebarOpen ? '' : 'collapse'}`}>
          <div className="p-3">
            <h4 className="mb-4" style={{ display: sidebarOpen ? 'block' : 'none' }}>Vendor Dashboard</h4>
            <nav className="nav flex-column">
              {sidebarItems.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) => `nav-link py-2 ${isActive ? 'active' : ''}`}
                >
                  <Icon className="me-2" />
                  {sidebarOpen && label}
                </NavLink>
              ))}
            </nav>
          </div>
        </Col>
        <Col md={sidebarOpen ? 10 : 11} className="p-4">
          <button className="btn btn-sm btn-primary mb-3" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? '◀' : '▶'}
          </button>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default PageLayout;
