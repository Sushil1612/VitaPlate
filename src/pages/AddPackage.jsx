import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PackageContext } from '../context/PackageContext';

const AddPackage = () => {
  const { packages, setPackages } = useContext(PackageContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    price: '',
    items: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? URL.createObjectURL(files[0]) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPackage = {
      id: Date.now(),
      name: formData.name,
      type: formData.type,
      price: formData.price,
      items: formData.items,
      description: formData.description,
      image: formData.image || 'https://img.icons8.com/emoji/96/package-emoji.png'
    };
    setPackages([...packages, newPackage]);
    alert('Package added successfully!');
    setFormData({
      name: '',
      type: '',
      price: '',
      items: '',
      description: '',
      image: ''
    });
  };

  return (
    <div className="content-area">
      <div style={{
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: 'white',
        padding: '40px 30px',
        borderRadius: '16px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Add Package</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Package Name"
            required
          />
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Package Type (e.g., Weekly, Monthly)"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Package Price"
            required
          />
          <input
            type="number"
            name="items"
            value={formData.items}
            onChange={handleChange}
            placeholder="No of Items"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Package Description"
            rows="3"
            required
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />

          <button type="submit" style={{
            backgroundColor: '#ffb300',
            color: 'white',
            fontWeight: 'bold',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}>
            Add Package
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              backgroundColor: '#ffb300',
              color: 'white',
              fontWeight: 'bold',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer'
            }}>
            Back to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
