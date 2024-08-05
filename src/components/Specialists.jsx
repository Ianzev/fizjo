import React from "react";
import { specialist } from "./constants";

const Specialists = () => {
  return (
    <div className="container">
      <ul className="grid grid-cols-3 xl:grid-cols-6 lg:grid-cols-4 gap-4">
        {specialist.map((specialist) => (
          <li key={specialist.id}>
            <a
              href="#"
              className="group flex flex-col bg-white justify-center items-start shadow-md hover:bg-secondary transition-colors overflow-hidden rounded-md"
            >
              <div className="w-full 2xl:h-72 h-[250px] overflow-hidden">
                <img
                  src={specialist.photo}
                  alt="photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col font-montserrat px-2 overflow-hidden xl:py-3 py-2 max-w-xs">
                <p className="2xl:text-lg md:text-base text-sm  text-secondary font-bold group-hover:text-white transition-colors text-nowrap trancate">
                  {specialist.name}
                </p>
                <p className="text-primary xl:text-sm text-[0.8rem] font-semibold">
                  {specialist.title}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Specialists;
