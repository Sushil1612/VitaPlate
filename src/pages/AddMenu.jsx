import React, { useState, useContext } from 'react';
import { MenuContext } from '../context/MenuContext';
import { useNavigate } from 'react-router-dom';

const AddMenu = () => {
  const { menus, setMenus } = useContext(MenuContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    qty: '',
    unit: '',
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
    const newItem = {
      id: Date.now(),
      name: formData.name,
      price: formData.price,
      qty: `${formData.qty} ${formData.unit}`,
      img: formData.image || 'https://img.icons8.com/emoji/96/fork-and-knife-with-plate-emoji.png'
    };
    setMenus([...menus, newItem]);
    alert('Menu item added successfully!');
    setFormData({ name: '', price: '', qty: '', unit: '', image: '' });
  };

  return (
    <div className="center-form-container">
      <div className="form-box">
        <h2>Add Menu</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Food Name" required />
          <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Food Price" required />
          <input type="text" name="qty" value={formData.qty} onChange={handleChange} placeholder="Qty (e.g. 1,10)" required />
          <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit (e.g. piece, gm)" required />
          <input type="file" name="image" accept="image/*" onChange={handleChange} />
          <button type="submit">Add Menu</button>
          <button type="button" onClick={() => navigate('/')}>Back to Dashboard</button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
