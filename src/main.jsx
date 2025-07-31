import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { PackageProvider } from './context/PackageContext';
import { MenuProvider } from './context/MenuContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
      <PackageProvider>
        <App />
      </PackageProvider>
    </MenuProvider>
  </React.StrictMode>
);
