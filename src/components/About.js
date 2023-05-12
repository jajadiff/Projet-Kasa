import React from "react";
import Banner from "./Banner.js";
// import Modale from "./Modale.js";
import data from "./../data/about.json";
import Dropdown from "./Dropdown.js";
// import backgroundAbout from "./../assets/banner_apropos.png";

/* Itération map clé meilleur pratique que call toute les keys*/
// const keys = data.map((value) => value.key);

// key={keys} 
function About() {
  return (
    <>
      <Banner />
      {/* <Modale keys={["fiabilite", "respect", "service", "securite"]} /> */}
      <Dropdown />
    </>
  );
}

export default About;
