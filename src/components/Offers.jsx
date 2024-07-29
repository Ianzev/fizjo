import React from 'react'
import SectionHeader from './SectionHeader'
import dzieci from "../assets/images/offers/dzieci.jpg";
import seniorzy from "../assets/images/offers/seniorzy.jpg";
import bieg from "../assets/images/offers/bieganie.webp";


const Offers = () => {
  return (
    <div className="container">
      <SectionHeader textAbove={"Specjalne"} textBelow={"oferty"} />
      <div className="flex flex-col gap-4">
        <div className="flex md:flex-row flex-col overflow-hidden bg-secondary rounded-md md:h-72 h-96">
          <div className="md:w-2/5 w-full h-3/5 md:h-full overflow-hidden">
            <img
              src={dzieci}
              className="md:h-full w-full h-auto rounded-md object-cover"
            ></img>
          </div>
          <div className="flex flex-col flex-1 items-start justify-center py-2 px-4 text-white">
            <p className="font-montserrat font-bold mb-3 text-3xl">
              Bezpłatne badania postawy ciała
            </p>
            <p className='text-gray-200'>
              Zapraszamy rodziców wraz z dziećmi w wieku od 5 do 14 lat na
              bezpłatne badania postawy ciała. Podczas badania ocenimy położenie
              łopatek, barków, miednicy, kręgosłupa, osi stawów kolanowych oraz
              wysklepienie stóp.
              <br />
              Zachęcamy wszystkich zainteresowanych rodziców do rejestracji
              telefonicznej lub osobistej w naszym Centrum.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col overflow-hidden bg-[#f7f7f7] rounded-md md:h-72 h-96 ">
          <div className="md:w-2/5  h-3/5 md:h-full w-auto border overflow-hidden md:order-last object-left-top">
            <img
              src={seniorzy}
              className="md:h-full w-full h-auto rounded-md object-cover"
            ></img>
          </div>
          <div className="flex flex-col flex-1 items-start justify-center py-2 px-4">
            <p className="font-montserrat font-bold mb-3 text-3xl">
              Czwartki dla seniorów
            </p>
            <p>
              Serdecznie zapraszamy wszystkie osoby po 55 roku życia do naszego
              Centrum. Specjalnie dla Państwa przygotowaliśmy aż 30% zniżki na
              masaże i terapię indywidualną, w każdy czwartek godzinach
              10.00-14.00.
              <br />
              Prosimy o wcześniejszą rezerwację.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col overflow-hidden bg-[#f7f7f7] rounded-md md:h-72 h-96 ">
          <div className="md:w-2/5 w-full h-3/5 md:h-full border overflow-hidden object-left-top">
            <img
              src={bieg}
              className="md:h-full md:w-auto w-full h-auto rounded-md object-cover"
            ></img>
          </div>
          <div className="flex flex-col flex-1 items-start justify-center py-2 px-4">
            <p className="font-montserrat font-bold mb-3 text-3xl">
              Zniżki dla naszych partnerów
            </p>
            <p>
              Zapraszamy wszystkich miłośników biegania do skorzystania z
              wyjątkowych rabatów na nasze usługi. Dla posiadaczy "Karty
              Biegacza" oraz członków stowarzyszenia "Niepołomice biegają"
              oferujemy 10% zniżki na wybrane zabiegi i masaże. To doskonała
              okazja, aby zadbać o swoje ciało i zregenerować siły po
              intensywnym treningu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers