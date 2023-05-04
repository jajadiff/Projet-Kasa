import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="header__list">
        <li>
          <NavLink to="/">
            <a>ACCUEIL</a>
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            <a>A PROPOS</a>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
