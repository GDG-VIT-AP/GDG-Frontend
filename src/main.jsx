/**
 * Purpose: Initializes and renders the React application into the DOM.
 * Contributor: Daksh asati(REG : 23BEC7195)
 */

import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
