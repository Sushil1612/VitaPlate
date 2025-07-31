import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PackageContext } from '../context/PackageContext';

const EditPackage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { packages, setPackages } = useContext(PackageContext);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    type: '',
    price: '',
    items: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    if (state?.pkg) {
      setFormData(state.pkg);
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? URL.createObjectURL(files[0]) : value
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedList = packages.map(pkg =>
      pkg.id === formData.id ? formData : pkg
    );
    setPackages(updatedList);
    alert('Package updated successfully!');
    navigate('/packages');
  };

  return (
    <div className="content-area">
      <div style={styles.container}>
        <h2 style={styles.heading}>Edit Package</h2>
        <form onSubmit={handleUpdate} style={styles.form}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Package Name"
            required
            style={styles.input}
          />
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Package Type"
            required
            style={styles.input}
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            required
            style={styles.input}
          />
          <input
            type="number"
            name="items"
            value={formData.items}
            onChange={handleChange}
            placeholder="No of Items"
            required
            style={styles.input}
          />
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            style={styles.textarea}
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            style={{ margin: '10px 0' }}
          />
          <div style={styles.buttonRow}>
            <button type="submit" style={styles.buttonPrimary}>Update</button>
            <button
              type="button"
              onClick={() => navigate('/packages')}
              style={styles.buttonSecondary}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '10px auto',
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px'
  },
  textarea: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    resize: 'vertical'
  },
  buttonRow: {
    display: 'flex',
    gap: '10px',
    marginTop: '15px'
  },
  buttonPrimary: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#ffb300',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  buttonSecondary: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#ffb300',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default EditPackage;
