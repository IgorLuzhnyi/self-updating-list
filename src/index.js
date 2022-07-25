import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import Contracts from "./components/Contracts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contracts />
  </React.StrictMode>
);
