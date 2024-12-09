import React from 'react';
import ReactDOM from 'react-dom/client'; // Utilisé dans React 18+
import './index.css'; // Ajoutez si vous avez des styles globaux
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
