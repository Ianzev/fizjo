import React, { useEffect, useState } from "react";

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
    <div className="welcome relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-montserrat text-white text-center text-nowrap transition-all">
        <div
          className={`duration-[1500ms] ease-in-out xl:text-9xl md:text-7xl text-5xl font-bold mb-5 ${
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
          className={`duration-[1500ms] delay-[1500ms] ease-in-out xl:text-6xl md:text-4xl text-3xl mb-5 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          Centrum sportowo-rehabilitacyjne <br />w Niepołomicach
        </div>
        {/* <div
          className={`duration-1000 delay-[2000ms] ease-in-out text-xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <button className="bg-secondary rounded-md py-4 px-4">
            Zarezerwuj wizytę
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Welcome;
