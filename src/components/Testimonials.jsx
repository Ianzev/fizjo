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
    <div className="container bg-[#EDF9F2] rounded-xl items-center">
      <div className="lg:p-12 pt-4 pb-12">
        <SectionHeader text={"Klienci o"} textGreen={"nas"} />
        <Slider {...settings} className="xl:mx-40">
          {opinions.map((opinion) => (
            <div
              key={opinion.id}
              className="text-center font-montserrat text-secondary space-y-4 lg:px-12"
            >
              <p className="lg:text-xl md:text-lg sm:text-base text-sm">
                {opinion.text}
              </p>
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
