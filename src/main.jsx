import "./css/style.scss";
import "./css/custom.scss";
import App from "./App.tsx";
import "./assets/scss/app.scss";
import "primeicons/primeicons.css";
import "bootstrap/dist/js/bootstrap.js";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/static/js/components/dark.js";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/themes/dark/app-dark.scss";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
