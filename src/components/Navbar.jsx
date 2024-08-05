import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { navbarLinks } from "./constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="container">
        <div className="flex items-center">
          <div className="flex flex-1 justify-start">
            <a href="#">
              <img src={logo} className="h-10"></img>
            </a>
          </div>
          <div className="flex flex-1 justify-end">
            <ul
              className={`lg:flex hidden gap-10 text-base font-montserrat uppercase`}
            >
              {navbarLinks.map((link) => (
                <a
                  className="hover:text-primary hover:transition-all hover:duration-300 text-nowrap"
                  key={link.title}
                  href={link.url}
                >
                  <li>{link.title}</li>
                </a>
              ))}
            </ul>
            <div onClick={toggleMenu} className="cursor-pointer">
              <Menu className="lg:hidden block justify-end" size={30} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          menu
            ? "bg-white absolute w-screen h-screen top-0 left-0 pt-[10px]"
            : "hidden"
        } lg:hidden`}
      >
        <div className="container flex items-center">
          <div className="flex flex-1 justify-start">
            <a href="#">
              <img src={logo} className="h-10"></img>
            </a>
          </div>
          <div className="flex flex-1 justify-end">
            <div onClick={toggleMenu}>
              <X
                className="lg:hidden block justify-end text-secondary"
                size={30}
              />
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-10 px-5">
          <div>
            <ul className="flex flex-col gap-20 text-2xl text-secondary font-bold font-montserrat uppercase text-center">
              {navbarLinks.map((link) => (
                <li key={link.title}>
                  <a
                    className="hover:text-primary hover:transition-colors hover:duration-300 text-nowrap"
                    href={link.url}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
