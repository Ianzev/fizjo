import Footer from "../components/Footer";
import ImgPhoto from "../components/ImgPhoto";
import Navbar from "../components/Navbar";
import SocialProof from "../components/SocialProof";
import Specialists from "../components/Specialists";
import Testimonials from "../components/Testimonials";
import Timeline from "../components/Timeline";
import WhyUs2 from "../components/WhyUs2";
import fizjo from "../assets/images/offers/fizjo.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="navbar-section fixed z-20">
        <Navbar />
      </section>
      <section
        className="relative social-proof h-1/3-screen"
        style={{
          backgroundImage: `linear-gradient(to bottom right, hsla(160, 50%, 20%, 0.90), rgba(14, 35, 28, 0.90) 50%), url(${fizjo})`,
          backgroundPosition: "center 20%",
        }}
      >
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-montserrat text-4xl md:text-6xl font-bold text-nowrap
      `}
        >
          <h1 className="items-center text-white">
            O naszym <span className="text-primary">centrum</span>
          </h1>
        </div>
      </section>
      <section className="bg-[#EDF9F2]">
        <ImgPhoto />
      </section>{" "}
      <section className="">
        <Timeline />
      </section>
      <section className="">
        <WhyUs2 />
      </section>
      <section className="bg-forth">
        <SocialProof />
      </section>
      <section>
        <Testimonials />
      </section>{" "}
      <section className="bg-third">
        <Specialists />
      </section>
      <section className="footer pb-0">
        <Footer white={true} />
      </section>
    </>
  );
};

export default AboutUs;
