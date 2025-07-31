// src/context/PackageContext.jsx
import React, { createContext, useState } from 'react';

export const PackageContext = createContext();

export const PackageProvider = ({ children }) => {
  const [packages, setPackages] = useState([
    {
          id: 1,
          name: 'Starter Pack',
          type: 'Monthly',
          price: 4500,
          items: 5,
          description: 'Basic plan with daily 2 times tiffins for 1 month.',
          image: '/images/package1.jpg'
        },
        {
          id: 2,
          name: 'Family Feast',
          type: 'Yearly',
          price: 50000,
          items: 7,
          description: 'Ideal for families, full-year service. 2 meals a day',
          image: '/images/package2.jpg'
        },
        {
          id: 3,
          name: 'Trial Box',
          type: 'Weekly',
          price: 1000,
          items: 5,
          description: 'Try out our service for a week. 2 meals daily',
          image: '/images/package3.jpg'
        },
  ]);

  return (
    <PackageContext.Provider value={{ packages, setPackages }}>
      {children}
    </PackageContext.Provider>
  );
};
