import React from "react";
import { Link } from "react-router-dom";

function Cart({ id, title, cover }) {
  return (
    // {"/apartment/" + id}
    <Link to="/apartment/" className="container__link">
      <article className="container__cart" key={id}>
        <img
          src={cover}
          alt={title}
          className="container__cart container__img"
        />
        <p className="container__txt">{title}</p>
      </article>
    </Link>
  );
}

export default Cart;

/**************  TEST *********************************/

/********************************************************************************
// import React from "react";
// import { Link } from "react-router-dom";
// import data from "./../data/logements.json";

// function Cart() {
//   const keys = data.map((value) => value.id);

//   const id = keys[0];
//   const selectedItem = data.find((item) => item.id === id);

//   const { title, cover } = selectedItem;

//   return (
//     <Link to="/flat" className="container__link">
//       <article className="container__cart">
//         <img src={cover} alt={title} className="container__cart" />
//         <p className="container__txt">{title}</p>
//       </article>
//     </Link>
//   );
// }

// export default Cart;

/********************************************************************************************** */
// import React from "react";
// import { Link } from "react-router-dom";
// import data from "./../data/logements.json";
