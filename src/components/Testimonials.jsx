import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { opinions } from "./constants";
import "./styles/testimonials.css";
import SectionHeader from "./SectionHeader";

// Testimonials Component
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="container items-center md:pb-12 pb-6">
      <div className=" bg-forth rounded-2xl p-12">
        <SectionHeader text={"Klienci o"} textGreen={"nas"} white={true} />
        <Slider {...settings} className="xl:mx-40">
          {opinions.map((opinion) => (
            <div
              key={opinion.id}
              className="text-center font-montserrat text-white space-y-4 lg:px-12"
            >
              <p className="lg:text-xl md:text-lg text-base">{opinion.text}</p>
              <p className="lg:text-2xl text-xl font-semibold text-primary">
                {opinion.client}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
