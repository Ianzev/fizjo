import React from "react";
import seniorzy from "../assets/images/offers/seniorzy.jpg";
import { specialOffers } from "./constants";

const Offers = () => {
  return (
    <div className="container">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-8 font-montserrat text-secondary 2xl:mx-20">
        <div className="flex-1 space-y-8 lg:text-right text-left lg:order-first order-last">
          {specialOffers.map((offer) => (
            <div className="space-y-4" key={offer.id}>
              <p className="font-bold text-2xl ">{offer.name}</p>
              <p className="text-sm text-justify">{offer.text}</p>
            </div>
          ))}
        </div>
        <div className="flex-1">
          <img src={seniorzy} className="rounded-lg object-cover"></img>
        </div>
      </div>
    </div>
  );
};

export default Offers;
