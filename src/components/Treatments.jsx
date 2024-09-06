import React from "react";
import { treatments } from "./constants";
import SectionHeader from "./SectionHeader";

const Treatments = () => {
  return (
    <div className="container text-center">
      <SectionHeader text={"Nasze"} textGreen={"usługi"} />
      <ul className="grid grid-cols-2 lg:grid-cols-3 xl:px-32 gap-x-4 lg:gap-x-0">
        {treatments.map((treatment) => (
          <li key={treatment.id} className="flex justify-center mb-8">
            <a
              href="#"
              className="text-secondary lg:w-64 w-full border-2 font-montserrat flex flex-col justify-center items-center p-4 treatment-shadow hover:text-primary hover:font-semibold transition-all duration-500 ease-in-out group"
            >
              <div>
                <img src={treatment.img} className="lg:h-32 sm:h-28 h-24"></img>
              </div>
              <div className="lg:text-lg text-base pt-4">{treatment.title}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Treatments;
