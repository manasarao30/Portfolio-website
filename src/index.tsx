import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
