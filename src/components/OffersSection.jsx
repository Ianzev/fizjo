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
          <div key={i} className="mb-2 p-4 border-2">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleOffer(i)}
            >
              <p className="font-bold">{treatment.title}</p>
              <p className="font-bold">
                {selectedOffer === i ? "Zwiń" : "Rozwiń"}
              </p>
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
              <div className="py-2">
                {treatment.treatments.map((unit, j) => (
                  <div key={j} className="mb-2">
                    <div className="font-semibold">{unit.title}</div>
                    <div className="flex flex-col text-sm">
                      <p>{unit.description}</p>
                      <p>{unit.price}PLN</p>
                      <p>{unit.time}</p>
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
