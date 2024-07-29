import { TbMassage } from "react-icons/tb";
import photo from "../../assets/images/specialists/lekarz.jpeg";
import kasia from "../../assets/images/specialists/fizjo.jpeg";
import domka from "../../assets/images/specialists/fizjo2.jpeg";
import jaro from "../../assets/images/specialists/jaro.jpg";
import pzu from "../../assets/images/partners/pzu.png";
import allianz from "../../assets/images/partners/allianz.png";
import medicover from "../../assets/images/partners/medicover.png";
import egzo from "../../assets/images/partners/egzo.png";
import signal from "../../assets/images/partners/signal.png";
import compensa from "../../assets/images/partners/compensa.webp";
import bodymsg from "../../assets/images/treatments/body-spa.png";
import kobido from "../../assets/images/treatments/facial-massage.png";
import urologist from "../../assets/images/treatments/urologist.png";
import fizjo from "../../assets/images/treatments/physical-therapy.png";
import orthopedics from "../../assets/images/treatments/orthopedics.png";
import pediatrics from "../../assets/images/treatments/height.png";
import dietetics from "../../assets/images/treatments/diet.png";
import accu from "../../assets/images/treatments/acupuncture.png";
import electo from "../../assets/images/treatments/electric-current.png";
import osteopata from "../../assets/images/treatments/rachiocampsis.png";

const size=100;

export const navbarLinks = [
  {
    title: "O nas",
    url: "#o-nas",
  },
  {
    title: "Oferta",
    url: "#oferta",
  },
  {
    title: "Cennik",
    url: "#cennik",
  },
  {
    title: "Kontakt",
    url: "#kontakt",
  },
];

export const treatments = [
  { id: 1, title: "Osteopatia", icon: <TbMassage className="treatments-card-icon-size"/>, img: osteopata},
  { id: 2, title: "Kobido", icon: <TbMassage className="treatments-card-icon-size"/>, img: kobido},
  { id: 3, title: "Masaż", icon: <TbMassage className="treatments-card-icon-size"/>, img: bodymsg},
  { id: 4, title: "Fizykoterapia", icon: <TbMassage className="treatments-card-icon-size"/>, img: electo},
  { id: 5, title: "Urolog", icon: <TbMassage className="treatments-card-icon-size"/>, img: urologist},
  { id: 6, title: "Fizjoterapia", icon: <TbMassage className="treatments-card-icon-size"/>, img: fizjo},
  { id: 7, title: "Suche igłowanie", icon: <TbMassage className="treatments-card-icon-size"/>, img: accu},
  { id: 8, title: "Ortopedia", icon: <TbMassage className="treatments-card-icon-size"/>, img: orthopedics},
  { id: 9, title: "Dietetyka", icon: <TbMassage className="treatments-card-icon-size"/>, img: dietetics},
  { id: 10, title: "Pediatria", icon: <TbMassage className="treatments-card-icon-size"/>, img: pediatrics},
];

export const specialist = [
  { id: 1, name: "Jarosław Doe", title: "Fizjoterapeuta", photo: jaro },
  { id: 2, name: "Katarzyna Nowak", title: "Osteopatka", photo: kasia},
  { id: 3, name: "Dominika Kruszyna", title: "Fizjoterapeutka", photo: domka },
  { id: 4, name: "John Doe", title: "Fizjoterapeuta", photo: photo },
  { id: 5, name: "John Doe", title: "Osteopata", photo: photo},
  { id: 6, name: "John Doe", title: "Masazysta", photo: photo },
  { id: 1, name: "John Doe", title: "Fizjoterapeuta", photo: photo },
  { id: 2, name: "Katarzyna Nowak", title: "Osteopatka", photo: kasia},
  { id: 3, name: "Dominika Kruszyna", title: "Fizjoterapeutka", photo: domka },
];

export const partners = [
  { id: 1, alt: "Allianz", url: "#allianz", logo: allianz },
  { id: 2, alt: "Compensa", url: "#compensa", logo: compensa },
  { id: 3, alt: "PZU", url: "#pzu", logo: pzu },
  { id: 4, alt: "Medicover", url: "#medicover", logo: medicover },
  { id: 5, alt: "Signal Iduna", url: "#signal-iduna", logo: signal },
  { id: 6, alt: "Egzo", url: "#egzo", logo: egzo },
]