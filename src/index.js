import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './App';
import { worker } from './Mocks/setupWorker';

worker.start({ onUnhandledRequest: 'bypass' });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
