import React, { useEffect, useState } from "react";
import welcomeImage from "../assets/images/welcome/fizjopunkt.jpg";

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay to ensure initial render is complete
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as needed

    // Cleanup timer if component unmounts before animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="welcome"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(4, 22, 8, 0.8), rgba(0, 58, 13, 0.6)), url(${welcomeImage})`,
      }}
    >
      {/* other content */}

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-montserrat text-white text-center text-nowrap transition-transform">
        <div
          className={`duration-[1500ms] ease-in-out xl:text-9xl md:text-8xl text-7xl font-bold mb-5 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <div className="flex justify-center">
            <p>Fizjo</p>
            <p className="text-primary">punkt</p>
          </div>
        </div>
        <div
          className={`duration-[1500ms] delay-[1500ms] ease-in-out xl:text-6xl md:text-4xl sm:text-3xl text-xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          Centrum Rehabilitacyjno-Sportowe <br />w Niepołomicach
        </div>
      </div>
    </div>
  );
};

export default Welcome;
