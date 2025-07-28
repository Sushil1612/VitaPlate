import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const PendingRequests = () => {
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem('pendingRequests') || '[]');
    setPendingRequests(storedRequests);
  }, []);

  const handleComplete = (uniqueKey) => {
    const updatedRequests = pendingRequests.filter(request => request.uniqueKey !== uniqueKey);
    setPendingRequests(updatedRequests);
    localStorage.setItem('pendingRequests', JSON.stringify(updatedRequests));
    alert('Order marked as completed!');
  };

  return (
    <Container className="py-3">
      <h2 className="text-center mb-4">Pending Requests</h2>
      
      {pendingRequests.length === 0 ? (
        <p className="text-center">No pending requests</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {pendingRequests.map((request) => (
            <Col key={request.uniqueKey}>
              <Card className="h-100" style={{ 
                maxWidth: '350px',
                border: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <Card.Body className="p-3">
                  <div className="mb-3">
                    <h5 className="mb-1" style={{ fontWeight: 600 }}>{request.name}</h5>
                    <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                      {request.address}
                    </p>
                    <small className="text-muted">
                      Accepted on: {new Date(request.date).toLocaleString()}
                    </small>
                  </div>
                  
                  <table className="w-100 mb-3">
                    <thead>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <th className="text-start pb-2" style={{ fontWeight: 500 }}>Item</th>
                        <th className="text-end pb-2" style={{ fontWeight: 500 }}>Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {request.items.map((item, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid #f1f1f1' }}>
                          <td className="text-start py-2">{item.name}</td>
                          <td className="text-end py-2">{item.qty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  <div className="mt-3">
                    <p className="mb-2" style={{ fontWeight: 500 }}>Total Amount</p>
                    <h4 className="mb-3" style={{ fontWeight: 600 }}>₹{request.total}</h4>
                    <span className="badge bg-success mb-3">Accepted</span>
                    
                    <div className="d-grid">
                      <Button 
                        variant="primary" 
                        onClick={() => handleComplete(request.uniqueKey)}
                        style={{ fontWeight: 500 }}
                      >
                        Mark as Completed
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default PendingRequests;