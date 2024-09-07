import React from "react";
import SectionHeader from "./SectionHeader";
import { treatments } from "./constants";
import { useState } from "react";
import { motion } from "framer-motion";

const Offers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const toggleOffer = (i) => {
    if (selectedOffer === i) {
      return setSelectedOffer(null);
    }
    setSelectedOffer(i);
  };

  return (
    <div className="container text-secondary font-montserrat">
      <SectionHeader text={"Oferta w naszym "} textGreen={"centrum"} />
      <div>
        {treatments.map((treatment, i) => (
          <div className="flex flex-col mb-2 border-2">
            <div
              key={i}
              className={`w-full h-full p-4 bg-secondary text-white ${
                selectedOffer === i ? "border-b-2" : "border-b-0"
              }`}
              onClick={() => toggleOffer(i)}
            >
              <div className="flex justify-between cursor-pointer">
                <p className="font-bold hover:text-primary ease-in-out transition-colors">
                  {treatment.title}
                </p>
                <p className="font-bold hover:text-primary ease-in-out transition-colors">
                  {selectedOffer === i ? "Zwiń" : "Rozwiń"}
                </p>
              </div>
            </div>
            {/* Animation with framer-motion */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: selectedOffer === i ? "auto" : 0,
                opacity: selectedOffer === i ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <div className="px-4 divide-y-2">
                {treatment.treatments.map((unit, j) => (
                  <div key={j} className="py-2">
                    <div className="flex justify-between">
                      <p className="font-semibold">{unit.title}</p>
                      <p className="font-semibold">{unit.price} PLN</p>
                    </div>

                    <div className="flex flex-col text-sm">
                      <p>{unit.time}</p>
                      <p>{unit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
