import React from "react";
import Cart from "./Cart.js";

function Cartcontainer() {
  return (
    <main className="container">
      <div className="container__grid">
        {/* <article className="container__cart">

        </article>
        <article className="container__cart">
          
        </article>
        <article className="container__cart">
          
        </article>
        <article className="container__cart">
          
        </article> */}
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </main>
  );
}

export default Cartcontainer;
