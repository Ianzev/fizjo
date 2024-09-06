import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OffersSection from "../components/OffersSection";

const Offers = () => {
  return (
    <>
      <section className="py-0">
        <Navbar />
      </section>
      <section className="relative contact h-1/3-screen">
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-montserrat text-4xl md:text-6xl font-bold text-nowrap
  `}
        >
          <h1 className="items-center text-white">
            Nasza <span className="text-primary">oferta</span>
          </h1>
        </div>
      </section>
      <section>
        <OffersSection />
      </section>

      <section className="footer pb-0">
        <Footer white={true} />
      </section>
    </>
  );
};

export default Offers;
