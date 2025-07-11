import './index.css';
import "./css/style.scss";
import App from './App.tsx';
import "./assets/scss/app.scss";
import "bootstrap/dist/js/bootstrap.js";
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./assets/static/js/components/dark.js";
import "./assets/scss/themes/dark/app-dark.scss";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
