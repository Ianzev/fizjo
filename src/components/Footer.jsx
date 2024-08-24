import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className="container flex flex-col justify-items-center text-secondary font-montserrat gap-8">
      <div className="flex flex-col items-center text-center">
        <div>
          <p className="font-bold text-3xl">Fizjopunkt</p>
          <p className="text-xl mb-3">Twoje zdrowie, nasza pasja.</p>
        </div>
      </div>
      <div className="flex xl:mx-80 lg:mx-40 text-center justify-between">
        <div className="flex flex-col items-center">
          <div>
            <p className="font-bold text-xl mb-3">Informacje</p>
            <p>O nas</p>
            <p>Oferta</p>
            <p>Regulamin</p>
            <p>Fundacja</p>
            <p>Oferta dla firm</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <p className="font-bold text-xl mb-3">Informacje</p>
            <p>O nas</p>
            <p>Oferta</p>
            <p>Regulamin</p>
            <p>Fundacja</p>
            <p>Oferta dla firm</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <p className="font-bold text-xl mb-3">Informacje</p>
            <p>O nas</p>
            <p>Oferta</p>
            <p>Regulamin</p>
            <p>Fundacja</p>
            <p>Oferta dla firm</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        <FaFacebook size={30} className="opacity-40 hover:opacity-100" />
        <FaInstagram size={32} className="opacity-40 hover:opacity-100" />
      </div>
      <div className="text-center">
        Copyright © Fizjopunkt Niepołomice | {currentYear} All rights reserved
      </div>
    </div>
  );
};

export default Footer;
