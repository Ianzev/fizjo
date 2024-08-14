import React from "react";
import { socialProof } from "./constants";

const SocialProof = () => {
  return (
    <div className="container">
      <ul className="flex md:flex-row flex-col justify-between xl:mx-32 gap-16">
        {socialProof.map((reason) => (
          <div
            key={reason.id}
            className="flex flex-col flex-1 text-center items-center font-montserrat gap-4 text-white"
          >
            <div className="p-4 text-primary border-2 border-white rounded-full">
              {reason.icon}
            </div>
            <div className="text-6xl font-bold text-primary">
              {reason.title}
            </div>
            <div className="text-lg font-semibold">{reason.text}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SocialProof;
