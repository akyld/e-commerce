import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartProvider from "./context/CartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <MainLayout>
      <App />
    </MainLayout>
  </CartProvider>
);
