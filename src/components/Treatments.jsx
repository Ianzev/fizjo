import React from "react";
import SectionHeader from "./SectionHeader";
import { treatments } from "./constants";

const Treatments = () => {
  return (
    <div className="container">
      <SectionHeader textAbove="Nasze" textBelow="usługi" />
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:mx-16 lg:mx-40">
        {treatments.map((treatment) => (
          <>
            <li
              key={treatment.id}
              className="flex mb-8 justify-center"
            >
              <a
                href="#"
                className="text-black font-montserrat flex flex-col justify-center items-center p-4 w-full treatment-shadow hover hover:text-primary transition-all duration-500 ease-in-out font"
              >
                {/* <div className="py-4">{treatment.icon}</div> */}
                <div><img src={treatment.img} className="h-28"></img></div>
                <div className="py-4">{treatment.title}</div>
              </a>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Treatments;
