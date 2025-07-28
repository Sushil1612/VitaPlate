import React, { useState } from 'react';
import './Subscribers.css'; // Add your CSS file for styling

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2023-01-15', isActive: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2023-02-20', isActive: false },
    { id: 3, name: 'Alex Johnson', email: 'alex@example.com', joinDate: '2023-03-10', isActive: true },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', joinDate: '2023-04-05', isActive: true },
    { id: 5, name: 'Michael Brown', email: 'michael@example.com', joinDate: '2023-05-12', isActive: false }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const toggleStatus = (id) => {
    setSubscribers(subscribers.map(subscriber => 
      subscriber.id === id 
        ? { ...subscriber, isActive: !subscriber.isActive } 
        : subscriber
    ));
  };

  const filteredSubscribers = subscribers.filter(subscriber =>
    subscriber.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB'); // DD/MM/YYYY format
  };

  return (
    <div className="subscribers-container">
      <h2 className="subscribers-title">Subscribers ({filteredSubscribers.length})</h2>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search subscribers..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="subscribers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Join Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSubscribers.map(subscriber => (
            <tr key={subscriber.id}>
              <td>{subscriber.name}</td>
              <td>{subscriber.email}</td>
              <td>{formatDate(subscriber.joinDate)}</td>
              <td>
                <span className={`status-badge ${subscriber.isActive ? 'active' : 'inactive'}`}>
                  {subscriber.isActive ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td>
                <button 
                  onClick={() => toggleStatus(subscriber.id)}
                  className="toggle-btn"
                >
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subscribers;