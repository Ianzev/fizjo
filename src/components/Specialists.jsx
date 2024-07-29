import React from "react";
import SectionHeader from "./SectionHeader";
import { specialist } from "./constants";

const Specialists = () => {
  return (
    <div className="container">
      <SectionHeader textAbove="Nasi" textBelow="specjaliści"/>
      <ul className="grid grid-cols-3 lg:grid-cols-5 gap-4">
        {specialist.map((specialist) => (
          <li key={specialist.id} className="mb-8">
            <a
              href="#"
              className="group flex flex-col bg-white justify-center items-start shadow-md pb-4 hover:bg-secondary transition-colors overflow-hidden rounded-md"
            >
              <div className="w-full h-[200px] overflow-hidden mb-4">
              <img
                src={specialist.photo}
                alt="photo"
                className="w-full h-[312px] object-cover "
              /></div>
              <div className="flex flex-col font-montserrat px-2 overflow-hidden" >
                <p className="xl:text-xl md:text-base text-sm  text-secondary font-bold group-hover:text-white transition-colors text-nowrap">{specialist.name}</p>
                <p className="text-primary md:text-sm xl:text-base text-xs font-semibold">{specialist.title}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Specialists;
