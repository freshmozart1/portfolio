import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';

document.getElementById('root')?.classList.add('custom-container');
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);