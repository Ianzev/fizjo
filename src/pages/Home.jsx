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
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <>
      <section className="navbar-section">
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
      <section className="why-us">
        <SectionHeader>
          <p className="text-primary">Czemu</p>
          <p className="text-white font-bold">my?</p>
        </SectionHeader>
        <WhyUs />
      </section>
      <section className="">
        <SectionHeader>
          <p className="text-primary">Oferty</p>
          <p className="text-secondary font-bold">specjalne</p>
        </SectionHeader>
        <Offers />
      </section>
      <section className="bg-third">
        <SectionHeader>
          <p className="text-primary">Nasi</p>
          <p className="text-secondary font-bold">specjaliści</p>
        </SectionHeader>
        <Specialists />
      </section>
      <section className="">
        <SectionHeader>
          <p className="text-primary">Nasze</p>
          <p className="text-secondary font-bold">lokalizacje</p>
        </SectionHeader>
        <LocationMap />
        {/* <Locations /> */}
      </section>
      <section className="py-0 border-b-2 bg-secondary">
        <Partners />
      </section>
      <section className="bg-secondary pb-0">
        <Footer />
      </section>
    </>
  );
};

export default Home;
