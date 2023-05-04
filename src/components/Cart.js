import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <Link to="/flat" className="container__link">
      <article className="container__cart">
        <p className="container__txt">Titre de la location</p>
      </article>
    </Link>
  );
}

export default Cart;
