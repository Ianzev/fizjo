import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo-normal-fizjopunkt.png";
import logoWhite from "../assets/images/logo-white-fizjopunkt.png";
import { navbarLinks } from "./constants";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);
  const [navIcon, setNavIcon] = useState(true);

  const location = useLocation();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const changeNavBackground = () => {
    if (window.scrollY >= 90) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  const changeColorNavIcon = () => {
    if (!menu && !navbarColor) {
      setNavIcon(true);
    } else {
      setNavIcon(false);
    }
  };

  useEffect(() => {
    changeColorNavIcon();
  }, [menu, navbarColor]);

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     window.addEventListener("scroll", changeNavBackground);
  //   } else {
  //     setNavbarColor(true);
  //     window.removeEventListener("scroll", changeNavBackground);
  //   }

  //   // Cleanup on unmount or path change
  //   return () => {
  //     window.removeEventListener("scroll", changeNavBackground);
  //   };
  // }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);

    // Cleanup on unmount or path change
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  }, []); // No dependency on location, so it's always active

  return (
    <>
      <div
        className={`fixed w-full py-[10px] z-50 top-0 ${
          navbarColor
            ? "bg-white shadow-md transition-colors duration-[700ms]"
            : "duration-[700ms]"
        }`}
      >
        <div className="container">
          <div className="flex items-center">
            <div className="flex flex-1 justify-start">
              <a href="/" className="relative transition-all">
                <img
                  src={logoWhite}
                  className={`lg:h-16 h-12 opacity-0 `}
                ></img>
                <img
                  src={logoWhite}
                  className={`absolute lg:h-16 h-12 transition-opacity duration-[700ms] top-0 ${
                    navbarColor ? "opacity-0 " : "opacity-100 "
                  } ${navIcon ? "opacity-100" : "opacity-0"}`}
                ></img>
                <img
                  src={logo}
                  className={`absolute lg:h-16 h-12 transition-opacity duration-[700ms] top-0 ${
                    navbarColor ? "opacity-100 " : "opacity-0"
                  } ${navIcon ? "opacity-0" : "opacity-100"}`}
                ></img>
              </a>
            </div>
            <div className="flex flex-1 justify-end">
              <ul
                className={`md:flex hidden gap-10 xl:text-lg text-base font-montserrat uppercase transition-colors ${
                  navbarColor ? "text-secondary " : "text-white"
                }`}
              >
                {navbarLinks.map((link) => (
                  <a
                    className="text-nowrap transition-all duration-500 ease-in-out hover:text-primary"
                    key={link.title}
                    href={link.url}
                  >
                    <li>{link.title}</li>
                  </a>
                ))}
              </ul>
              <div
                onClick={toggleMenu}
                className="md:hidden block justify-end cursor-pointer group"
              >
                <div
                  className={`w-8 h-[3px] m-[5px] transition-all duration-[700ms] 
                    ${menu ? "transform rotate-45 translate-y-2" : ""} 
                    ${
                      navIcon ? "bg-white" : "bg-secondary"
                    } group-hover:bg-primary`}
                ></div>

                <div
                  className={`w-8 h-[3px] m-[5px] transition-all duration-[700ms] 
                    ${menu ? "opacity-0" : ""}
                    ${
                      navIcon ? "bg-white" : "bg-secondary"
                    } group-hover:bg-primary`}
                ></div>

                <div
                  className={`w-8 h-[3px] m-[5px] transition-all duration-[700ms]  
                    ${menu ? "transform -rotate-45 -translate-y-2 " : ""}
                    ${
                      navIcon ? "bg-white" : "bg-secondary"
                    } group-hover:bg-primary`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 w-full bg-white transition-all duration-[1500ms] lg:hidden z-10 ${
          menu ? "h-screen " : "h-0 overflow-hidden"
        }`}
      >
        <ul
          className={`relative top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-3xl text-secondary font-bold font-montserrat uppercase text-center gap-10 px-5 transition-opacity duration-1000 ease-in-out ${
            menu ? "opacity-100 delay-500" : "opacity-0"
          }`}
        >
          {navbarLinks.map((link) => (
            <li key={link.title}>
              <a
                className="hover:text-primary transition-colors duration-500 text-nowrap ease-in-out"
                href={link.url}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
