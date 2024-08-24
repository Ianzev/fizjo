import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <>
      <section className="navbar-section">
        <Navbar />
      </section>
      <section className="fixed bottom-0 w-full">
        <Footer />
      </section>
    </>
  );
};

export default AboutUs;
