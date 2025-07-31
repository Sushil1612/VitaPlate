import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuContext } from '../context/MenuContext';

const AllMenus = () => {
  const { menus, setMenus } = useContext(MenuContext);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this item?')) {
      setMenus(prev => prev.filter(menu => menu.id !== id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-menu/${id}`);
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="content-area">
      <h2 style={{ marginBottom: '20px' }}>All Menus</h2>
      <div className="grid updated">
        {menus.length === 0 ? (
          <p>No menus found. Please add some.</p>
        ) : (
          menus.map((item) => (
            <div className="card" key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '10px'
                }}
              />
              <h4>{item.name}</h4>
              <p>₹{item.price} - {item.qty}</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginTop: '12px' }}>
                <button
                  onClick={() => handleEdit(item.id)}
                  style={{
                    backgroundColor: '#FFB300',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '6px 14px',
                    fontSize: '13px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  style={{
                    backgroundColor: '#f44336',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '6px 14px',
                    fontSize: '13px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Back Button */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button
          onClick={goBack}
          style={{
            padding: '10px 20px',
            fontSize: '15px',
            backgroundColor: '#FFB300',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default AllMenus;
