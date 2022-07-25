import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LoginInfoContextProvider } from './store/login-info';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginInfoContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoginInfoContextProvider>
);
 