import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Treatments from "../components/Treatments";
import Specialists from '../components/Specialists';
import Partners from '../components/Partners';
import SectionHeader from '../components/SectionHeader';
import Offers from '../components/Offers';

const Home = () => {
  const [navbarColor, setNavbarColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >=90){
      setNavbarColor(true)
    } else {
      setNavbarColor(false)
    }
  }
  addEventListener("scroll", changeColor)
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
        <Treatments />
      </section>{" "}
      <section>
        <Offers />
      </section>
      <section className="bg-[#f7f7f7]">
        <Specialists />
      </section>
      <section className="bg-secondary">
        <Partners />
      </section>
    </>
  );
};

export default Home;
