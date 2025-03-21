import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Create a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app inside root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

