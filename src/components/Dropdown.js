// import React from "react";
// import { useState } from "react";
// import arrowImage from "../assets/arrow.svg";
// import data from "./../data/about.json";

// function Modale({ keys }) {
//   function getData(dataKeys) {
//     return data.filter((item) => dataKeys.includes(item.key));
//   }

//   const dataToDisplay = getData(keys);

//   const [openSubtitleIndexes, setOpenSubtitleIndexes] = useState([]);

//   function handleTitleClick(index) {
//     const isOpen = openSubtitleIndexes.includes(index);
//     setOpenSubtitleIndexes(
//       isOpen
//         ? openSubtitleIndexes.filter((i) => i !== index)
//         : [...openSubtitleIndexes, index]
//     );
//   }
//   /** Réecrire **/

//   function isSubtitleOpen(index) {
//     return openSubtitleIndexes.includes(index);
//   }

//   return (
//     <div className="modale">
//       {dataToDisplay.map((item, index) => (
//         <div key={item.key} className="modale__content">
//           <h2 className="modale__title" onClick={() => handleTitleClick(index)}>
//             {item.title}{" "}
//             <img
//               className={`modale__arrow ${
//                 isSubtitleOpen(index) ? "modale__arrow--open" : ""
//               }`}
//               src={arrowImage}
//               alt="Arrow"
//             />
//           </h2>
//           {openSubtitleIndexes.includes(index) && (
//             // <p className="modale__subtitle">{item.subtitle}</p>
//             <p
//               className={`modale__subtitle ${
//                 openSubtitleIndexes.includes(index)
//                   ? "modale__subtitle--open"
//                   : ""
//               }`}
//             >
//               {item.subtitle}
//             </p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Modale;









import React from "react";
import arrowImage from "../assets/arrow.svg";
import { useState } from "react";
import data from "./../data/about.json";

function Dropdown() {
  // const isActiveArrow = () => {
  //   const [active, setActive] = useState(false);
  // };

  const [isOpen, setIsOpen] = useState(false);
  const dataAbout = data.map((value) => ({
    key: value.key,
    title: value.title,
    subtitle: value.subtitle,
  }));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="modale">
      {dataAbout.map((value) => (
        <div key={value.key} className="modale__content">
          <h2 className="modale__title" onClick={toggleDropdown}>
            {value.title}
            <img
              src={arrowImage}
              alt="Arrow"
              className={`modale__arrow ${
                isOpen ? "modale__arrow--open" : "modale__arrow--close"
              }`}
            />
          </h2>
          <p
            className={`modale__subtitle ${
              isOpen ? "modale__subtitle--open" : ""
            }`}
          >
            {value.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
