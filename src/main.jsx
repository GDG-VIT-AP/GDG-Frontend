/**
 * Purpose: Initializes and renders the React application into the DOM.
 * Contributor: Daksh asati(REG : 23BEC7195)
 */


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
