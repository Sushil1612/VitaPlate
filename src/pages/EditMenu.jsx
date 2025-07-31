import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MenuContext } from '../context/MenuContext';

const EditMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { menus, setMenus } = useContext(MenuContext);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    qty: '',
    unit: '',
    image: ''
  });

  useEffect(() => {
    const menuItem = menus.find(menu => menu.id.toString() === id);
    if (menuItem) {
      const [qtyValue, unitValue] = menuItem.qty.split(' ');
      setFormData({
        name: menuItem.name,
        price: menuItem.price,
        qty: qtyValue,
        unit: unitValue,
        image: menuItem.img
      });
    }
  }, [id, menus]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? URL.createObjectURL(files[0]) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      id: parseInt(id),
      name: formData.name,
      price: formData.price,
      qty: `${formData.qty} ${formData.unit}`,
      img: formData.image
    };

    const updatedMenus = menus.map(item => item.id === updatedItem.id ? updatedItem : item);
    setMenus(updatedMenus);
    alert("Menu updated successfully!");
    navigate('/all-menus');
  };

  return (
    <div className="content-area">
      <div style={styles.container}>
        <h2 style={styles.heading}>Edit Menu</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Food Name"
            required
            style={styles.input}
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Food Price"
            required
            style={styles.input}
          />
          <input
            type="text"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            placeholder="Quantity"
            required
            style={styles.input}
          />
          <input
            type="text"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            placeholder="Unit (e.g. pieces, bowls)"
            required
            style={styles.input}
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
              onClick={() => navigate('/all-menus')}
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
    margin: '40px auto',
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

export default EditMenu;
