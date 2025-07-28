import React, { useState, useEffect } from 'react';
import { Table, Badge, Button, Alert } from 'react-bootstrap';

// Define order status and types directly in component (or keep in separate file)
const orderStatus = {
  NEW: 'new',
  PENDING: 'pending',
  COMPLETED: 'completed',
  REJECTED: 'rejected'
};

const orderTypes = {
  TIFFIN: 'tiffin',
  PACKAGE: 'package'
};

const Orders = ({ mode = 'all' }) => {
  const [orders, setOrders] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(0); // Force re-render

  // Load orders from localStorage
  useEffect(() => {
    if (localStorage.getItem('orders') === null) {
      const sampleOrders = [
        {
          id: 1,
          customer: "Test Customer",
          items: [{ name: "Veg Meal", qty: 2 }],
          status: orderStatus.PENDING,
          type: orderTypes.TIFFIN,
          amount: 200,
          completedDate: null
        },
        {
          id: 2,
          customer: "Another Customer",
          items: [{ name: "Non-Veg Meal", qty: 1 }],
          status: orderStatus.NEW,
          type: orderTypes.TIFFIN,
          amount: 150,
          completedDate: null
        }
      ];
      localStorage.setItem('orders', JSON.stringify(sampleOrders));
      setOrders(sampleOrders);
    } else {
      const storedOrders = JSON.parse(localStorage.getItem('orders'));
      setOrders(storedOrders);
    }
  }, []);


  // Filter orders based on current mode
  const filteredOrders = orders.filter(order => {
    if (mode === 'all') return order.status !== orderStatus.COMPLETED;
    if (mode === 'pending') return order.status === orderStatus.PENDING;
    if (mode === 'tiffin') return order.type === orderTypes.TIFFIN;
    return true;
  });

  // Get completed orders for the history section
  const completedOrders = orders.filter(order => 
    order.status === orderStatus.COMPLETED
  );

  // Update order status and save to localStorage
  const updateOrderStatus = (id, newStatus) => {
    const updatedOrders = orders.map(order => {
      if (order.id === id) {
        return {
          ...order,
          status: newStatus,
          completedDate: newStatus === orderStatus.COMPLETED 
            ? new Date().toISOString() 
            : order.completedDate
        };
      }
      return order;
    });
    
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setForceUpdate(prev => prev + 1); // Force component to update
  };

  // Get badge color based on status
  const getStatusVariant = (status) => {
    switch(status) {
      case orderStatus.NEW: return 'warning';
      case orderStatus.PENDING: return 'primary';
      case orderStatus.COMPLETED: return 'success';
      case orderStatus.REJECTED: return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <div className="orders-container p-3">
      <h2 className="mb-4">
        {mode === 'all' && 'All Orders'}
        {mode === 'pending' && 'Pending Orders'}
        {mode === 'tiffin' && 'Tiffin Requests'}
      </h2>

      {/* Main Orders Table */}
      <Table striped bordered hover responsive className="mb-5">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Type</th>
            <th>Items</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.customer}</td>
                <td>
                  <Badge bg={order.type === orderTypes.TIFFIN ? 'info' : 'primary'}>
                    {order.type}
                  </Badge>
                </td>
                <td>
                  {order.items.map((item, i) => (
                    <div key={i}>{item.name} × {item.qty}</div>
                  ))}
                </td>
                <td>₹{order.amount}</td>
                <td>
                  <Badge bg={getStatusVariant(order.status)}>
                    {order.status}
                  </Badge>
                </td>
                <td>
                  {order.status === orderStatus.NEW && (
                    <div className="d-flex gap-2">
                      <Button 
                        size="sm" 
                        variant="success"
                        onClick={() => updateOrderStatus(order.id, orderStatus.PENDING)}
                      >
                        Accept
                      </Button>
                      <Button 
                        size="sm" 
                        variant="danger"
                        onClick={() => updateOrderStatus(order.id, orderStatus.REJECTED)}
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                  {order.status === orderStatus.PENDING && (
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => updateOrderStatus(order.id, orderStatus.COMPLETED)}
                    >
                      Complete
                    </Button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                <Alert variant="info">No orders found</Alert>
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Completed Orders Section (only shown in 'all' mode) */}
      {mode === 'all' && (
        <div className="completed-orders-section mt-5">
          <h3 className="mb-3">Completed Orders History</h3>
          {completedOrders.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Completed On</th>
                  <th>Amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {completedOrders.map(order => (
                  <tr key={`completed-${order.id}`}>
                    <td>#{order.id}</td>
                    <td>{order.customer}</td>
                    <td>
                      {order.completedDate 
                        ? new Date(order.completedDate).toLocaleString() 
                        : 'N/A'}
                    </td>
                    <td>₹{order.amount}</td>
                    <td>
                      <Badge bg={order.type === orderTypes.TIFFIN ? 'info' : 'primary'}>
                        {order.type}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <Alert variant="info">No completed orders yet</Alert>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;