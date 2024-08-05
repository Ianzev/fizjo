import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Treatments from "../components/Treatments";
import Specialists from "../components/Specialists";
import Partners from "../components/Partners";
import SectionHeader from "../components/SectionHeader";
import Offers from "../components/Offers";
import LocationMap from "../components/LocationMap";
import Footer from "./../components/Footer";
import Locations from "../components/Locations";

const Home = () => {
  const [navbarColor, setNavbarColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };
  addEventListener("scroll", changeColor);
  return (
    <>
      <section
        className={`navbar transition-colors duration-700 ${
          navbarColor ? "bg-white text-secondary shadow-md" : "text-white"
        }`}
      >
        <Navbar />
      </section>
      <Welcome />
      <section>
        <SectionHeader>
          <p className="text-primary">Nasze</p>
          <p className="text-secondary font-bold">usługi</p>
        </SectionHeader>
        <Treatments />
      </section>
      <section className="">
        <SectionHeader>
          <p className="text-primary">Oferty</p>
          <p className="text-secondary font-bold">specjalne</p>
        </SectionHeader>
        <Offers />
      </section>
      <section className="bg-[#f7f7f7]">
        <SectionHeader>
          <p className="text-primary">Nasi</p>
          <p className="text-secondary font-bold">specjaliści</p>
        </SectionHeader>
        <Specialists />
      </section>
      <section>
        <SectionHeader>
          <p className="text-primary">Nasze</p>
          <p className="text-secondary font-bold">lokalizacje</p>
        </SectionHeader>
        <LocationMap />
        {/* <Locations /> */}
      </section>
      <div>
        <SectionHeader>
          <p className="text-primary">Nasi</p>
          <p className="text-secondary font-bold">partnerzy</p>
        </SectionHeader>
        <section className="bg-secondary py-0 border">
          <Partners />
        </section>
      </div>
      <section className="bg-secondary pb-0">
        <Footer />
      </section>
    </>
  );
};

export default Home;
