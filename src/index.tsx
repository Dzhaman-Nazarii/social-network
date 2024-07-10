import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routing } from './components/routes/Routing';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>
);
