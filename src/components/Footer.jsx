import { FaFacebook } from "react-icons/fa";
import { Clock, Pin, Phone, Mail } from "lucide-react";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className="container justify-items-center text-white font-montserrat">
      <div className="grid md:grid-cols-3 grid-cols-2">
        <div className="flex flex-col items-center text-left">
          <div>
            <p className="font-bold text-3xl">Fizjopunkt</p>
            <p className="text-xl mb-3">Twoje zdrowie, nasza pasja.</p>
            <div>
              <FaFacebook size={30} className="opacity-80 hover:opacity-100" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-left">
          <div className="divide-y divide-white">
            <p className="font-bold text-xl pb-2">Kontakt</p>
            <div className="py-2">
              <span className="flex items-center gap-2">
                <Pin size={20} />
                <p>ul. 3 Maja 7A, 32-005 Niepołomice</p>
              </span>
              <span className="flex items-center gap-2">
                <Clock size={20} />
                <p>Pon - Pt 08:00 - 20:00</p>
              </span>
            </div>
            <div className="py-2">
              <span className="flex items-center gap-2">
                <Pin size={20} />
                <p>ul. Brzeska 28, 32-005 Niepołomice</p>
              </span>
              <span className="flex items-center gap-2">
                <Clock size={20} />
                <p>Pon - Pt 08:00 - 20:00</p>
                <p>Sob 08:00 - 14:00</p>
              </span>
            </div>
            <div className="py-2">
              <span className="flex items-center gap-2">
                <Mail size={20} />
                <p>biuro@fizjopunkt.eu</p>
              </span>
              <span className="flex items-center gap-2">
                <Phone size={20} />
                <p>+48 510 045 057</p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-left">
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
      <div className="text-center mt-10">
        Copyright © Fizjopunkt Niepołomice | {currentYear} All rights reserved
      </div>
    </div>
  );
};

export default Footer;
