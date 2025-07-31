// src/pages/AllPackages.jsx
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PackageContext } from '../context/PackageContext';

const AllPackages = () => {
  const { packages, setPackages } = useContext(PackageContext);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this package?')) {
      setPackages(prev => prev.filter(pkg => pkg.id !== id));
    }
  };

  const handleEdit = (pkg) => {
    navigate('/edit-package', { state: { pkg } });
  };

  return (
    <div className="content-area">
      <h2>All Packages</h2>
      <div className="grid updated">
        {packages.map((pkg) => (
          <div className="card" key={pkg.id}>
            <img
              src={pkg.image}
              alt={pkg.name}
              style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '6px' }}
            />
            <h4>{pkg.name}</h4>
            <p>{pkg.type} - ₹{pkg.price}</p>
            <p>{pkg.items} items</p>
            <p style={{ fontSize: '14px' }}>{pkg.description}</p>
            <div className="card-actions" style={{ display: 'flex', gap: '25px', marginTop: '12px', justifyContent: 'center' }}>
                <button onClick={() => handleEdit(pkg)} 
                style={{
                  backgroundColor: '#FFB300',  // amber/yellow
                  color: 'white',
                  padding: '6px 12px',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }} >
                Edit
                </button>
                
                <button onClick={() => handleDelete(pkg.id)} 
                style={{
                  backgroundColor: '#f44336',  // bright red
                  color: 'white',
                  padding: '6px 12px',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }} >
                Delete
                </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ffb300',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default AllPackages;
