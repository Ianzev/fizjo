import Footer from "../components/Footer";
import LocationMap from "../components/LocationMap";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import Partners from "../components/Partners";
import contact from "../assets/images/contact.jpg";

const Contact = () => {
  return (
    <>
      <section className="py-0">
        <Navbar />
      </section>
      <section
        className="relative contact h-1/3-screen"
        style={{
          backgroundImage: `linear-gradient(to bottom right, hsla(160, 50%, 20%, 0.90), rgba(14, 35, 28, 0.90) 50%), url(${contact})`,
          backgroundPosition: "center",
        }}
      >
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-montserrat text-4xl md:text-6xl font-bold text-nowrap
      `}
        >
          <h1 className="items-center text-white">
            Kon<span className="text-primary">takt</span>
          </h1>
        </div>
      </section>
      <section className="">
        <div className="container grid xl:grid-cols-2 grid-row-2 gap-20">
          <div className="xl:order-first">
            <ContactForm />
          </div>
          <div className="flex flex-col gap-4 font-montserrat text-secondary rounded-xl order-first sm:text-base text-xs">
            <div className="flex flex-col items-left">
              <p className="text-lg font-bold text-primary">Masz pytanie?</p>
              <p className="text-3xl font-bold text-secondary">
                Skontaktuj się z nami
              </p>
              <p className="mt-2">
                Masz pytania lub wątpliwości? Jesteśmy tutaj, aby Ci pomóc!
                Jeśli potrzebujesz więcej informacji o naszych usługach, chcesz
                umówić się na wizytę, czy po prostu skonsultować swoje
                dolegliwości, napisz do nas wiadomość. Nasz zespół specjalistów
                z przyjemnością odpowie na wszystkie Twoje pytania i doradzi
                najlepsze rozwiązania. Czekamy na Twój kontakt!
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-1 py-2 gap-2">
                <div className="mt-[1px]">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="sm:text-xl text-base font-bold">Email</p>
                  <p>biuro@fizjopunkt.eu</p>
                </div>
              </div>
              <div className="flex flex-1 py-2 gap-2">
                <div className="mt-[1px]">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="sm:text-xl text-base font-bold">Telefon</p>
                  <p>+48 796778502</p>
                </div>
              </div>
            </div>
            <div className="flex  justify-between">
              <div className="flex flex-1 py-2 gap-2">
                <div className="mt-[1px]">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="sm:text-xl text-base font-bold">Adres</p>
                  <p>ul. 3 Maja 7A</p>
                  <p>32-005, Niepołomice</p>
                </div>
              </div>
              <div className="flex flex-1 py-2 gap-2">
                <div className="mt-[1px]">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <p className="sm:text-xl text-base font-bold">
                    Godziny otwarcia
                  </p>
                  <div className="flex justify-between sm:gap-4">
                    <div>
                      <p>Pon - Pt</p>
                      <p>Sobota</p>
                      <p>Niedziela</p>
                    </div>
                    <div>
                      <p>8:00 - 20:00</p>
                      <p>Nieczynne</p>
                      <p>Nieczynne</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  justify-between">
              <div className="flex flex-1 py-2 gap-2">
                <div className="mt-[1px]">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="sm:text-xl text-base font-bold">Adres</p>
                  <p>ul. Brzeska 28</p>
                  <p>32-005, Niepołomice</p>
                </div>
              </div>
              <div className="flex flex-1 py-2 gap-2">
                <div className="mt-[1px]">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <p className="sm:text-xl text-base font-bold">
                    Godziny otwarcia
                  </p>
                  <div className="flex justify-between sm:gap-4">
                    <div>
                      <p>Pon - Pt</p>
                      <p>Sobota</p>
                      <p>Niedziela</p>
                    </div>
                    <div>
                      <p>8:00 - 20:00</p>
                      <p>8:00 - 14:00</p>
                      <p>Nieczynne</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-left text-secondary">
              <p className="text-lg font-bold ">Śledź nas na:</p>
              <div className="flex gap-2">
                <FaFacebook
                  size={30}
                  className="opacity-80 hover:opacity-100"
                />
                <FaInstagram
                  size={32}
                  className="opacity-80 hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0">
        <LocationMap />
      </section>

      <section className="footer pb-0">
        <Footer white={true} />
      </section>
    </>
  );
};

export default Contact;
