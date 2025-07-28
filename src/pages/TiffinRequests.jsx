import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Modal, Form, Badge, Table } from "react-bootstrap";

const TiffinRequests = () => {
  const [requests, setRequests] = useState([
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
      status: "new"
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
      status: "new"
    }
  ]);

  // State for rejection modal
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [currentRejectId, setCurrentRejectId] = useState(null);

  const handleAccept = (id) => {
    const updatedRequests = requests.map(request => 
      request.id === id ? { ...request, status: "accepted" } : request
    );
    setRequests(updatedRequests);
    
    const acceptedRequest = requests.find(request => request.id === id);
    const requestWithTimestamp = {
      ...acceptedRequest,
      date: new Date().toISOString(),
      uniqueKey: `${acceptedRequest.id}-${Date.now()}`
    };

    const pendingRequests = JSON.parse(localStorage.getItem('pendingRequests') || '[]');
    
    if (!pendingRequests.some(req => req.uniqueKey === requestWithTimestamp.uniqueKey)) {
      localStorage.setItem(
        'pendingRequests',
        JSON.stringify([...pendingRequests, requestWithTimestamp])
      );
      alert(`Order #${id} accepted! You can view it in Pending Requests.`);
    }
  };

  const handleRejectClick = (id) => {
    setCurrentRejectId(id);
    setShowRejectModal(true);
  };

  const handleRejectConfirm = () => {
    if (rejectReason.trim()) {
      const rejectedRequest = requests.find(request => request.id === currentRejectId);
      
      // Simulate sending SMS (in a real app, call an API)
      console.log(`Sending SMS to ${rejectedRequest.phone}: 
        Your order has been rejected. Reason: ${rejectReason}`);
      
      // Remove the request
      setRequests(requests.filter(request => request.id !== currentRejectId));
      setShowRejectModal(false);
      setRejectReason("");
      
      alert(`Order #${currentRejectId} rejected and customer notified.`);
    }
  };

  const newRequests = requests.filter(request => request.status === "new");

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4" style={{ fontWeight: '600' }}>Tiffin Requests</h2>
      
      {newRequests.length === 0 ? (
        <p className="text-center text-muted">No new requests available</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {newRequests.map((request) => (
            <Col key={request.id}>
              <Card className="border-0 shadow-sm" style={{ borderRadius: '8px' }}>
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <h4 className="mb-1" style={{ fontWeight: '600' }}>{request.name}</h4>
                    <p className="text-muted mb-2 small">{request.address}</p>
                    <Badge bg="light" text="dark" className="fs-6">New Request</Badge>
                  </div>
                  
                  <Table bordered className="mb-4">
                    <thead>
                      <tr>
                        <th className="ps-2">Item</th>
                        <th className="pe-2 text-end">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {request.items.map((item, index) => (
                        <tr key={index}>
                          <td className="ps-2">{item.name}</td>
                          <td className="pe-2 text-end">{item.qty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  
                  <div className="mb-3">
                    <p className="text-muted small mb-1">Total Amount</p>
                    <h4 className="mb-0" style={{ fontWeight: '600' }}>₹{request.total}</h4>
                  </div>
                  
                  <div className="d-flex justify-content-between">
                    <Button 
                      variant="success" 
                      className="flex-grow-1 me-2"
                      onClick={() => handleAccept(request.id)}
                    >
                      Accept
                    </Button>
                    <Button 
                      variant="outline-danger" 
                      className="flex-grow-1 ms-2"
                      onClick={() => handleRejectClick(request.id)}
                    >
                      Reject
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Rejection Reason Modal */}
      <Modal show={showRejectModal} onHide={() => setShowRejectModal(false)} centered>
        <Modal.Header closeButton className="border-0 pb-2">
          <Modal.Title style={{ fontWeight: '600' }}>Reason for Rejection</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0">
          <Form.Group>
            <Form.Label className="small text-muted">Please specify the reason:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="E.g.: Item not available, delivery location too far, etc."
              style={{ borderRadius: '8px' }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0">
          <Button 
            variant="light" 
            onClick={() => setShowRejectModal(false)}
            style={{ borderRadius: '8px', fontWeight: '500' }}
          >
            Cancel
          </Button>
          <Button 
            variant="danger" 
            onClick={handleRejectConfirm}
            style={{ borderRadius: '8px', fontWeight: '500' }}
          >
            Confirm Rejection
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TiffinRequests;