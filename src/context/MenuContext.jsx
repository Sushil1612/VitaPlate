// src/context/MenuContext.jsx
import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menus, setMenus] = useState([
    { id: 1, name: 'Rice Bowl', price: 80, qty: '1 Bowl', img: '/images/fried_rice.jpg' },
    { id: 2, name: 'Chapati', price: 10, qty: '1 piece', img: '/images/roti.jpg' },
    { id: 3, name: 'Paneer Tikka', price: 120, qty: '150 gm', img: '/images/paneer_tikka.jpg' },
    { id: 4, name: 'Dal Tadka', price: 100, qty: '200 gm', img: '/images/dal_tadka.jpg' },
  ]);

  return (
    <MenuContext.Provider value={{ menus, setMenus }}>
      {children}
    </MenuContext.Provider>
  );
};
