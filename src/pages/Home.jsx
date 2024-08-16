import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Treatments from "../components/Treatments";
import Specialists from "../components/Specialists";
import Partners from "../components/Partners";
import Offers from "../components/Offers";
import Footer from "./../components/Footer";
import Locations from "../components/Locations";
import WhyUs from "../components/WhyUs";
import WhyUs2 from "../components/WhyUs2";
import SocialProof from "../components/SocialProof";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <section className="navbar-section">
        <Navbar />
      </section>
      <Welcome />
      <section>
        <Treatments />
      </section>
      <section className="">
        <WhyUs2 />
      </section>
      <section className="bg-third">
        <Specialists />
      </section>{" "}
      <section className="bg-forth">
        <SocialProof />
      </section>
      <section className="">
        <Offers />
      </section>
      <section>
        <Testimonials />
      </section>
      <section className="bg-forth pb-0">
        <Locations />
      </section>
      <section className="py-0 bg-forth">
        <Partners />
      </section>
      <section className="bg-white pb-0">
        <Footer />
      </section>
    </>
  );
};

export default Home;
