import React, { useState } from "react";
import { partners } from "./constants";
import SectionHeader from "./SectionHeader";

const Partners = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const duplicatedPartners = [...partners]

  return (
    <>
    <SectionHeader textBelow={"Zaufali nam"} textColor={true}/>
    <div
      className="logos flex overflow-hidden py-5"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className={`logos-slider flex flex-none justify-between items-center ${
          isHovered ? "" : "animate-logos-slide"
        }`}
        style={{
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {duplicatedPartners.map((partner) => (
          <img
            src={partner.logo}
            alt={partner.alt}
            className="md:h-20 h-16 md:mx-20 mx-10 hover:opacity-70"
          ></img>
        ))}
      </div>
    </div>
    </>
  );
};

export default Partners;
