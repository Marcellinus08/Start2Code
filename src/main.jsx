import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; 
import { HMSRoomProvider } from '@100mslive/react-sdk';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HMSRoomProvider>
      <App /> 
    </HMSRoomProvider>
  </React.StrictMode>
);
