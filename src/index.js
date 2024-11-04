// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Импортируем createRoot из react-dom/client
import App from './App';
import './i18n';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Используем createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
