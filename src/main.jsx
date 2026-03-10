import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // <-- ADD THIS
import App from "./App.jsx";
import "./index.css"; // Tailwind styles

/**
 * Entry point — TechnoVera Solutions Pvt. Ltd.
 *
 * Includes:
 * - React Router
 * - HelmetProvider (SEO Meta Management)
 */

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      {" "}
      {/* <-- WRAP THE ENTIRE APP */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
