import React from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Treatments from "../components/Treatments";

const Home = () => {
  return (
    <>
      <section className="navbar fixed top-0">
        <Navbar />
      </section>
        <Welcome />
      <section>
        <Treatments/>
      </section>
    </>
  );
};

export default Home;
