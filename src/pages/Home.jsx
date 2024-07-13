import React from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <>
      <section className="navbar fixed top-0">
        <Navbar />
      </section>
      <Welcome />
    </>
  );
};

export default Home;
