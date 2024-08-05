import React, { useState } from "react";
import { partners } from "./constants";

const Partners = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="logos flex overflow-hidden py-5 bg-secondary group"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          className={`logos-slider flex flex-none justify-between items-center animate-loop-scroll group-hover:paused
            `}
        >
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.alt}
              className="md:h-16 h-16 md:mx-20 mx-10 hover:opacity-70 "
            ></img>
          ))}
        </div>
        <div
          className={`logos-slider flex flex-none justify-between items-center animate-loop-scroll group-hover:paused
            `}
        >
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.alt}
              className="md:h-16 h-16 md:mx-20 mx-10 hover:opacity-70 "
            ></img>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
