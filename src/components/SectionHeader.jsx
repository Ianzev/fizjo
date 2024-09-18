import React from "react";

const SectionHeader = ({ text, textGreen, white }) => {
  return (
    <div
      className={`text-center font-montserrat text-4xl md:text-6xl mb-6 md:mb-12 font-bold ${
        white ? "text-white" : "text-secondary"
      }`}
    >
      <h1 className="items-center">
        {text} <span className="text-primary">{textGreen}</span>
      </h1>
    </div>
  );
};

export default SectionHeader;
