import seniorzy from "../assets/images/offers/seniorzy.jpg";
import { specialOffers } from "./constants";
import { CircleCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Offers = () => {
  return (
    <div className="container">
      <SectionHeader text={"Oferty"} textGreen={"specjalne"} />
      <div className="flex lg:flex-row flex-col justify-center items-center gap-8 font-montserrat text-secondary">
        <div className="flex-1">
          <img src={seniorzy} className="rounded-lg object-cover"></img>
        </div>
        <div className="flex-1 space-y-8 text-left">
          {specialOffers.map((offer) => (
            <div className="flex gap-2" key={offer.id}>
              <div className="text-center">
                <CircleCheck className="text-primary items-center mt-[3px]" />
              </div>
              <div className="space-y-4">
                <p className="font-bold text-2xl ">{offer.name}</p>
                <p className="text text-justify">{offer.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
