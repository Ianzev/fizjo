import React from "react";

const SectionHeader = ({ children }) => {
  return (
    <div
      className={`text-center font-montserrat text-3xl md:text-4xl md:mb-12 mb-6`}
    >
      {children}
    </div>
  );
};

export default SectionHeader;
