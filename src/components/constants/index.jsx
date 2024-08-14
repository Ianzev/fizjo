import natalia from "../../assets/images/specialists/natalia.jpg";
import kasia from "../../assets/images/specialists/kasia.jpg";
import dominika from "../../assets/images/specialists/dominika.jpg";
import jarek from "../../assets/images/specialists/jarek.jpg";
import klaudia from "../../assets/images/specialists/klaudia.jpg";
import weronika from "../../assets/images/specialists/weronika.jpeg";
import ania from "../../assets/images/specialists/ania.jpg";

import pzu from "../../assets/images/partners/pzu.png";
import allianz from "../../assets/images/partners/allianz.png";
import medicover from "../../assets/images/partners/medicover.png";
import egzo from "../../assets/images/partners/egzo.png";
import signal from "../../assets/images/partners/signal.png";
import compensa from "../../assets/images/partners/compensa.png";
import meedy from "../../assets/images/partners/meedy.png";

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
import dlaFirm from "../../assets/images/treatments/handshake.png";

import fizjopunkt3maja from "../../assets/images/locations/fizjopunkt-3maj.jpg";
import fizjopunktBrzeska from "../../assets/images/locations/fizjopunkt-brzeska.jpg";
import {
  CalendarDays,
  ShieldCheck,
  Star,
  ThumbsUp,
  Trophy,
} from "lucide-react";

const size = 100;

export const navbarLinks = [
  {
    title: "O nas",
    url: "/o-nas",
  },
  {
    title: "Oferta",
    url: "#oferta",
  },
  {
    title: "Kontakt",
    url: "#kontakt",
  },
];

export const treatments = [
  {
    id: 1,
    title: "Osteopatia",
    img: osteopata,
  },
  {
    id: 2,
    title: "Kobido",
    img: kobido,
  },
  {
    id: 3,
    title: "Masaż",
    img: bodymsg,
  },
  {
    id: 4,
    title: "Fizykoterapia",
    img: electo,
  },
  {
    id: 5,
    title: "Urolog",
    img: urologist,
  },
  {
    id: 6,
    title: "Fizjoterapia",
    img: fizjo,
  },
  {
    id: 7,
    title: "Suche igłowanie",
    img: accu,
  },
  {
    id: 8,
    title: "Ortopedia",
    img: orthopedics,
  },
  {
    id: 9,
    title: "Dietetyka",
    img: dietetics,
  },
  {
    id: 10,
    title: "Pediatria",
    img: pediatrics,
  },
  {
    id: 11,
    title: "Dla firm",
    img: dlaFirm,
  },
];

export const specialist = [
  {
    id: 1,
    name: "Jarosław Maklakowski",
    title: "Fizjoterapeuta",
    photo: jarek,
  },
  { id: 2, name: "Katarzyna Nowak", title: "Osteopatka", photo: kasia },
  {
    id: 3,
    name: "Dominika Kruszyna",
    title: "Fizjoterapeutka",
    photo: dominika,
  },
  { id: 4, name: "Klaudia Rusek", title: "Fizjoterapeutka", photo: klaudia },
  { id: 5, name: "Natalia Polak", title: "Fizjoterapeutka", photo: natalia },
  {
    id: 6,
    name: "Weronika Bryndal",
    title: "Fizjoterapeutka",
    photo: weronika,
  },
  { id: 7, name: "Anna Kamińska", title: "Terapeutka", photo: ania },
  { id: 8, name: "Katarzyna Nowak", title: "Osteopatka", photo: kasia },
  {
    id: 9,
    name: "Dominika Kruszyna",
    title: "Fizjoterapeutka",
    photo: dominika,
  },
];

export const partners = [
  { id: 1, alt: "Allianz", url: "#allianz", logo: allianz },
  { id: 2, alt: "Compensa", url: "#compensa", logo: compensa },
  { id: 3, alt: "PZU", url: "#pzu", logo: pzu },
  { id: 4, alt: "Medicover", url: "#medicover", logo: medicover },
  { id: 5, alt: "Signal Iduna", url: "#signal-iduna", logo: signal },
  { id: 6, alt: "Egzo", url: "#egzo", logo: egzo },
  { id: 7, alt: "Meedy", url: "#meedy", logo: meedy },
];

export const specialOffers = [
  {
    id: 1,
    name: "Czwartki dla seniorów",
    text: "Serdecznie zapraszamy wszystkie osoby po 55 roku życia do naszego Centrum. Specjalnie dla Państwa przygotowaliśmy aż 30% zniżki na masaże i terapię indywidualną, w każdy czwartek godzinach 10.00-14.00.",
  },
  {
    id: 2,
    name: "Bezpłatne badania postawy ciała",
    text: "Zapraszamy rodziców  z dziećmi między 5 a 14 rokiem życia na bezpłatne badania postawy ciała. W ramach badania ocenimy ustawienie łopatek, barków, miednicy, kręgosłupa, oś stawów kolanowych i wysklepienie stóp.",
  },
  {
    id: 3,
    name: "Zniżki dla naszych partnerów",
    text: 'Zapraszamy wszystkich miłośników biegania do skorzystania z wyjątkowych rabatów na nasze usługi. Dla posiadaczy "Karty Biegacza" oraz członków stowarzyszenia "Niepołomice biegają" oferujemy 10% zniżki na wybrane zabiegi i masaże. To doskonała okazja, aby zadbać o swoje ciało i zregenerować siły po intensywnym treningu.',
  },
];

export const locations = [
  {
    id: 1,
    city: "Niepołomice",
    postCode: "32-005",
    street: "ul. Brzeska 28",
    position: { lat: 50.04259712466961, lng: 20.2199901558195 },
    contact: "+48 510 045 057",
    email: "biuro@fizjopunkt.eu",
    photo: fizjopunktBrzeska,
  },
  {
    id: 2,
    city: "Niepołomice",
    postCode: "32-005",
    street: "ul. 3 Maja 7A",
    position: { lat: 50.033834, lng: 20.2148882 },
    contact: "+48 510 045 057",
    email: "biuro@fizjopunkt.eu",
    photo: fizjopunkt3maja,
  },
];

export const whyUs = [
  {
    id: 1,
    title: "Profesjonalizm",
    text: "Doświadczenie i pasję naszych terapeutów łączymy z indywidualnym podejściem do każdego pacjenta.",
    icon: <ShieldCheck size={50} />,
  },
  {
    id: 2,
    title: "Kompleksowość",
    text: "Fizjopunkt to interdyscyplinarni specjaliści, wykorzystujący szerokie spektrum technik i zabiegów, zapewniając najlepsze efekty.",
    icon: <ShieldCheck size={50} />,
  },
  {
    id: 3,
    title: "Jakość",
    text: "Nasze działania przynoszą zamierzony efekt terapeutyczny, co potwierdzają liczne opinie zadowolonych pacjentów",
    icon: <ShieldCheck size={50} />,
  },
];

export const socialProof = [
  {
    id: 1,
    title: "+119",
    text: "Pozytywnych Opinii na Google",
    icon: <ThumbsUp size={50} />,
  },
  {
    id: 2,
    title: "4.6/5",
    text: "Gwiazdek na Google",
    icon: <Star size={50} />,
  },
  {
    id: 3,
    title: "5/5",
    text: "Ocena na Znany Lekarz",
    icon: <Trophy size={50} />,
  },
  {
    id: 4,
    title: "15 Lat",
    text: "Doświadczenia",
    icon: <CalendarDays size={50} />,
  },
];
export const opinions = [
  {
    id: 1,
    client: "Izabela Rębilas",
    text: "Spektrum usług świadczonych w tym miejscu jest naprawdę szerokie. Trafiając tutaj można poczuć się zaopiekowanym na każdym etapie. Panie z recepcji bardzo mile. Szczególnie polecam ortopedę - Pana Sylwestra , który konsultuje dotychczasowe wyniki badań, a także nie ma zahamowań przed poszerzeniem diagnostyki. Stara się znaleźć źródło problemu, rozwiązywać go najmniej inwazyjnymi środkami (operacje, farmakologia). To dzięki niemu poznałam najlepszą do tej pory masazytske -Panią Klaudię, gdzie w tej niepozornej i drobnej osobie drzemie naprawde duza sila. Szczerze polecam",
  },
  {
    id: 2,
    client: "Michał Musiał",
    text: "Każdemu polecam Panią Kasie! Trafiliśmy do niej z polecenia z dwumiesięcznym synem, który miał wzmożone napięcie mięśniowe oraz kręcz szyi, przez co był bardzo trudnym dzieckiem. Już po dwóch wizytach syn był nie do poznania. Zaczął lubić pozycje, których wcześniej nie znosił, nie płacze jest spokojny i uśmiechnięty a my z mężem odżyliśmy! Te ręce robią cuda!",
  },
  {
    id: 3,
    client: "Michał Musiał",
    text: "Mały Mikołaj jest bardzo zadowolony z wizyt u Pani Kasi. Wszystkie problemy związane ze skróconym wędzidełkiem i napięciem mięśniowym zostały opanowane. Otrzymaliśmy kompleksową pomoc i ćwiczenia do domu, które były bardzo przyjazne dla dziecka. Polecam!",
  },
  {
    id: 4,
    client: "Michał Musiał",
    text: "Cieszę się że jest takie miejsce gdzie pacjenta traktują jak człowieka.Bardzo miłe wszystkie Panie i Panowie rehabilitanci. A Pani w rejestracji bardzo życzliwa i pomocna. Bardzo dobry kontakt i terminy wizyt. Bardzo dobre miejsce w Niepołomicach aby podratować zdrowie.",
  },
];
