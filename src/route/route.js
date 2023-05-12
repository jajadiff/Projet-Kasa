import React from "react";
// import App from "./App";
import Header from "./../components/Header.js";
import Banner from "./../components/Banner.js";
import Cardcontainer from "./../components/Cardcontainer.js";
import Footer from "./../components/Footer.js";
import ErrorPage from "../pages/ErrorPage.js";
import About from "../components/About.js";
// import Modale from "../components/Modale.js";
import "./../styles/main.css";
import { createBrowserRouter } from "react-router-dom";
import Logement from "../components/Logement.js";
// import Apartment from "../pages/ApartmentPage.js";
// import AboutPage from "../pages/AboutPage.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header /> <Banner /> <Cardcontainer /> <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/apartment/",
    element: (
      <>
        <Header /> <Logement /> <Footer />
      </>
    ),
  },
  // {
  //   path: "/apartment",
  //   element: <Apartment />,
  // },
  {
    path: "/about",
    element: (
      <>
        <Header /> <About /> <Footer />
      </>
    ),
  },
]);
