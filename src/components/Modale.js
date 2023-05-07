import React from "react";
import { useState } from "react";
import arrowImage from "../assets/arrow.svg";
import data from "./../data/about.json";

function Modale({ keys }) {
  function getData(dataKeys) {
    return data.filter((item) => dataKeys.includes(item.key));
  }

  const dataToDisplay = getData(keys);

  const [openSubtitleIndexes, setOpenSubtitleIndexes] = useState([]);

  function handleTitleClick(index) {
    const isOpen = openSubtitleIndexes.includes(index);
    setOpenSubtitleIndexes(
      isOpen
        ? openSubtitleIndexes.filter((i) => i !== index)
        : [...openSubtitleIndexes, index]
    );
  }

  function isSubtitleOpen(index) {
    return openSubtitleIndexes.includes(index);
  }

  return (
    <div className="modale">
      {dataToDisplay.map((item, index) => (
        <div key={item.key} className="modale__content">
          <h2 className="modale__title" onClick={() => handleTitleClick(index)}>
            {item.title}{" "}
            <img
              className={`modale__arrow ${
                isSubtitleOpen(index) ? "modale__arrow--open" : ""
              }`}
              src={arrowImage}
              alt="Arrow"
            />
          </h2>
          {openSubtitleIndexes.includes(index) && (
            // <p className="modale__subtitle">{item.subtitle}</p>
            <p
              className={`modale__subtitle ${
                openSubtitleIndexes.includes(index)
                  ? "modale__subtitle--open"
                  : ""
              }`}
            >
              {item.subtitle}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Modale;
