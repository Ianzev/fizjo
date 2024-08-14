import React from "react";
import { treatments } from "./constants";
import SectionHeader from "./SectionHeader";

const Treatments = () => {
  return (
    <div className="container">
      <SectionHeader text={"Nasze"} textGreen={"usługi"} />
      <div className="flex justify-center">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 lg:gap-x-20">
          {treatments.map((treatment) => (
            <li
              key={treatment.id}
              className="flex justify-center mb-8 lg:size-64 size-52 border-2"
            >
              <a
                href="#"
                className="text-black font-montserrat flex flex-col justify-center items-center p-4 w-full treatment-shadow hover:text-primary hover:font-semibold transition-all duration-500 ease-in-out group"
              >
                <div>
                  <img src={treatment.img} className="lg:h-32 h-24"></img>
                </div>
                <div className="lg:text-lg text-base pt-4">
                  {treatment.title}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Treatments;
