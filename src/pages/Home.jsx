import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Treatments from "../components/Treatments";
import Specialists from "../components/Specialists";
import Partners from "../components/Partners";
import Offers from "../components/SpecialOffers";
import Footer from "./../components/Footer";
import Locations from "../components/Locations";
import WhyUs2 from "../components/WhyUs2";
import SocialProof from "../components/SocialProof";
import Testimonials from "../components/Testimonials";
import fizjo from "../assets/images/offers/fizjo.jpg";

const Home = () => {
  return (
    <>
      <section className="py-0">
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
      <section
        className="social-proof"
        style={{
          backgroundImage: `linear-gradient(to bottom right, hsla(160, 50%, 20%, 0.90), rgba(14, 35, 28, 0.90) 50%), url(${fizjo})`,
          backgroundPosition: "center 20%",
        }}
      >
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
