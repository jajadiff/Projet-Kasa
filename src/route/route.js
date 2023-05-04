import React from "react";
// import App from "./App";
import Header from "./../components/Header.js";
import Banner from "./../components/Banner.js";
import Cartcontainer from "./../components/Cartcontainer.js";
import Footer from "./../components/Footer.js";
import ErrorPage from "../ErrorPage.js";
import "./../styles/main.css";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header /> <Banner /> <Cartcontainer /> <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/flat",
    element: <h1>Nos appartements</h1>,
  },
  {
    path: "/about",
    element: (
      <>
        <Header /> <Footer />
      </>
    ),
  },
]);
