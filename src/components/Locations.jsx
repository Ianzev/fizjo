import { useState } from "react";
import { X } from "lucide-react";
import logo from "../assets/images/logo-fizjopunkt.png";
import { locations } from "./constants";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import fizjopunkt3maja from "../assets/images/locations/fizjopunkt-3maj.jpg";
import SectionHeader from "./SectionHeader";

const Locations = () => {
  const [open, setOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const positionNiepolomice = { lat: 50.038297, lng: 20.218198 };

  return (
    <div className="container">
      <SectionHeader text={"Nasze"} textGreen={"lokalizacje"} white={true} />
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="flex-1 object-cover">
          <img
            src={fizjopunkt3maja}
            className="lg:h-full w-full object-cover rounded-xl"
          ></img>
        </div>
        <div className="flex flex-col flex-1 gap-8">
          <div className="flex flex-col gap-4 font-montserrat text-[#fffcfc] p-4 divide-y-2 divide-white divide-dashed bg-[#1A3029] rounded-xl">
            <div className="flex items-center gap-2">
              <img src={logo} className="h-14 bg-white rounded-full p-1"></img>
              <p className="text-3xl font-montserrat font-bold text-white">
                Fizjopunkt
              </p>
            </div>
            <div className="flex py-2 gap-8">
              <div className="flex gap-2">
                <div className="mt-[2px]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p>ul. 3 Maja 7A</p>
                  <p>32-005, Niepołomice</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="mt-[2px]">
                  <Clock size={20} />
                </div>
                <div>
                  <p>Pon - Pt 08:00 - 20:00</p>
                </div>
              </div>
            </div>
            <div className="flex py-2 gap-8">
              <div className="flex gap-2">
                <div className="mt-[2px]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p>ul. Brzeska 28</p>
                  <p>32-005, Niepołomice</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="mt-[2px]">
                  <Clock size={20} />
                </div>
                <div>
                  <p>Pon - Pt 08:00 - 20:00</p>
                  <p>Sob&nbsp; 08:00 - 14:00</p>
                </div>
              </div>
            </div>
            <div className="flex py-2 gap-2">
              <div className="mt-[2px]">
                <Mail size={20} />
              </div>
              <div>
                <p>biuro@fizjopunkt.eu</p>
              </div>
            </div>
            <div className="flex py-2 gap-2">
              <div className="mt-[2px]">
                <Phone size={20} />
              </div>
              <div>
                <p>+48 510 045 057</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
              <Map
                defaultZoom={15}
                defaultCenter={positionNiepolomice}
                mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
              >
                {locations.map((location) => (
                  <AdvancedMarker
                    position={location.position}
                    onClick={() => {
                      setSelectedLocation(location);
                      setOpen(true);
                    }}
                    key={location.id}
                  >
                    <img
                      src={logo}
                      className="h-14 bg-white rounded-full p-1"
                    ></img>
                  </AdvancedMarker>
                ))}
              </Map>
            </APIProvider>
            {open && (
              <div className="absolute top-1/2 md:right-[5%] right-4 transform -translate-y-1/2 bg-white w-72 h-auto p-2 text-secondary font-montserrat border border-primary">
                <X
                  className="absolute top-0 right-0 m-1 cursor-pointer hover:text-primary bg-white"
                  onClick={() => setOpen(false)}
                />
                <img src={selectedLocation.photo} className="mb-2" />
                <p className="font-bold">{selectedLocation.street}</p>
                <p>
                  {selectedLocation.postCode}, {selectedLocation.city}
                </p>
                <p>{selectedLocation.email}</p>
                <p>{selectedLocation.contact}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
