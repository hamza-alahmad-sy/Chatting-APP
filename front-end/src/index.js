/*
 * index.js — App entry point.
 * Global styles are imported here so they load exactly once.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';   // variables + animations + base layout
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
