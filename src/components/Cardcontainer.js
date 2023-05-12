import React from "react";
import Card from "./Card.js";
import { Link } from "react-router-dom";
import data from "../data/logements.json";

function CardContainer() {
  const cardDatas = data.map((item) => ({
    key: item.id,
    title: item.title,
    cover: item.cover,
  }));

  const cardItem = cardDatas.map((cardData) => <Card {...cardData} />);

  return (
    <main className="container">
      <div className="container__grid">{cardItem}</div>
    </main>
  );
}

export default CardContainer;

// import React from "react";
// import Cart from "./Cart.js";
// import data from "./../data/logements.json";

// const keys = data.map((value) => value.id);

// function Cartcontainer() {
//   return (
//     <main className="container">
//       <div className="container__grid">
//         <Cart key={keys} />
//       </div>
//     </main>
//   );
// }

// export default Cartcontainer;

/******************************************************************************************** */
// import React from "react";
// import Cart from "./Cart.js";
// import data from "./../data/logements.json";

// function CartContainer() {
//   return (
//     <main className="container">
//       <div className="container__grid">
//         {data.map((item) => (
//           <Cart key={item.id} title={item.title} cover={item.cover} />
//         ))}
//       </div>
//     </main>
//   );
// }

// export default CartContainer;
/******************************************************************************************* */
