import React from "react";
import ReactDOM from "react-dom/client";
// // import App from "./App";
// import Header from "./components/Header.js";
// import Banner from "./components/Banner.js";
// import Cartcontainer from "./components/Cartcontainer.js";
// import Footer from "./components/Footer.js";
import "./styles/main.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/route.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
