import Footer from "../components/Footer";
import LocationMap from "../components/LocationMap";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";

const AboutUs = () => {
  return (
    <>
      <section className="navbar-section sticky">
        <Navbar />
      </section>
      <section className="relative social-proof h-1/3-screen">
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-montserrat text-4xl md:text-6xl font-bold text-nowrap
      `}
        >
          <h1 className="items-center text-white">
            Skontaktuj się <span className="text-primary">z nami</span>
          </h1>
        </div>
      </section>
      <section className="pb-0">
        <LocationMap/>
      </section>
      <section className="">
        <Footer />
      </section>
    </>
  );
};

export default AboutUs;
