import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="container">
      <div className="flex items-center">
        <div className="flex flex-1 justify-start">
          <img src={logo} className="h-10"></img>
        </div>
        <div className="flex flex-1 justify-end">
          <ul className="flex gap-10 text-white text-xl">
            <li>O nas</li>
            <li>Oferta</li>
            <li>Cennik</li>
            <li>Kontakt</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
