import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Table } from 'react-bootstrap';

const AllOrders = () => {
  // Load orders from localStorage or initialize with sample data
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('allOrders');
    return savedOrders ? JSON.parse(savedOrders) : [
      {
        id: 1,
        name: "Rahul Sharma",
        address: "Sector 45, Gurgaon",
        phone: "+919876543210",
        items: [
          { name: "Veg Thali", qty: 2 },
          { name: "Chapati", qty: 4 }
        ],
        total: "280",
        status: "pending",
        type: "tiffin",
        date: new Date().toISOString()
      },
      {
        id: 2,
        name: "Priya Patel",
        address: "MG Road, Bangalore",
        phone: "+919876543211",
        items: [
          { name: "Non-Veg Thali", qty: 1 },
          { name: "Naan", qty: 2 }
        ],
        total: "320",
        status: "accepted",
        type: "tiffin",
        date: new Date(Date.now() - 86400000).toISOString() // Yesterday
      },
      {
        id: 3,
        name: "Amit Singh",
        address: "Connaught Place, Delhi",
        phone: "+919876543212",
        items: [
          { name: "Weekly Meal Plan", qty: 1 }
        ],
        total: "1200",
        status: "completed",
        type: "package",
        date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        completedDate: new Date(Date.now() - 86400000).toISOString()
      }
    ];
  });

  // Save to localStorage whenever orders change
  useEffect(() => {
    localStorage.setItem('allOrders', JSON.stringify(orders));
  }, [orders]);

  // Group orders by status
  const ordersByStatus = {
    pending: orders.filter(order => order.status === "pending"),
    accepted: orders.filter(order => order.status === "accepted"),
    completed: orders.filter(order => order.status === "completed")
  };

  // Mark order as completed
  const markAsCompleted = (id) => {
    const updatedOrders = orders.map(order => 
      order.id === id ? { 
        ...order, 
        status: "completed",
        completedDate: new Date().toISOString()
      } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center" style={{ fontWeight: 600 }}>
        All Orders
      </h2>

      {/* Current Orders Section */}
      <div className="mb-5">
        <h4 className="mb-3">Current Orders</h4>
        
        {/* Pending Orders */}
        <h5 className="mt-4 mb-3 text-warning">
          Pending Requests ({ordersByStatus.pending.length})
        </h5>
        {ordersByStatus.pending.length > 0 ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {ordersByStatus.pending.map(order => (
              <OrderCard 
                key={`pending-${order.id}`} 
                order={order} 
                onComplete={markAsCompleted}
              />
            ))}
          </Row>
        ) : (
          <p className="text-muted">No pending requests</p>
        )}

        {/* Accepted Orders */}
        <h5 className="mt-5 mb-3 text-primary">
          Accepted Orders ({ordersByStatus.accepted.length})
        </h5>
        {ordersByStatus.accepted.length > 0 ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {ordersByStatus.accepted.map(order => (
              <OrderCard 
                key={`accepted-${order.id}`} 
                order={order} 
                onComplete={markAsCompleted}
              />
            ))}
          </Row>
        ) : (
          <p className="text-muted">No accepted orders</p>
        )}
      </div>

      {/* Completed Orders Section */}
      <div className="mt-5">
        <h4 className="mb-3 text-success">
          Completed Orders ({ordersByStatus.completed.length})
        </h4>
        {ordersByStatus.completed.length > 0 ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {ordersByStatus.completed.map(order => (
              <OrderCard 
                key={`completed-${order.id}`} 
                order={order} 
                isCompleted={true}
              />
            ))}
          </Row>
        ) : (
          <p className="text-muted">No completed orders yet</p>
        )}
      </div>
    </Container>
  );
};

// Order Card Component
const OrderCard = ({ order, onComplete, isCompleted }) => {
  const statusColors = {
    pending: "warning",
    accepted: "primary",
    completed: "success"
  };

  return (
    <Col>
      <Card className="h-100 shadow-sm" style={{ borderRadius: "8px" }}>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div>
              <Card.Title style={{ fontWeight: 600 }}>{order.name}</Card.Title>
              <Card.Subtitle className="text-muted small mb-2">
                {order.address}
              </Card.Subtitle>
            </div>
            <Badge 
              bg={statusColors[order.status]} 
              className="text-capitalize"
            >
              {order.status}
            </Badge>
          </div>

          <Badge bg={order.type === "tiffin" ? "info" : "secondary"} className="mb-2">
            {order.type}
          </Badge>

          <Table bordered size="sm" className="mb-3">
            <thead>
              <tr>
                <th>Item</th>
                <th className="text-end">Qty</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td className="text-end">{item.qty}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0">Total: ₹{order.total}</h6>
            <small className="text-muted">
              {isCompleted 
                ? `Completed: ${new Date(order.completedDate).toLocaleString()}`
                : `Received: ${new Date(order.date).toLocaleString()}`}
            </small>
          </div>

          {!isCompleted && (
            <button
              className="btn btn-success w-100 mt-3"
              onClick={() => onComplete(order.id)}
            >
              Mark as Completed
            </button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AllOrders;