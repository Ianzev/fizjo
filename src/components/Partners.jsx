import React, { useState } from "react";
import { partners } from "./constants";

const Partners = () => {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovered(false);
  // };

  return (
    <>
      <div
        className="logos flex overflow-hidden py-12 group"
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
      >
        <div
          className={`logos-slider flex flex-none justify-between items-center animate-loop-scroll
            `}
        >
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.alt}
              className="h-12 mx-10 opacity-50 "
            ></img>
          ))}
        </div>
        <div
          className={`logos-slider flex flex-none justify-between items-center animate-loop-scroll
            `}
        >
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.alt}
              className="h-12 mx-10 opacity-50 "
            ></img>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
