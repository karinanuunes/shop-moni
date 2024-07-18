import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./routes";
import { CartProvider } from "./contexts/cartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <Routes />
    </CartProvider>
  </React.StrictMode>
);
