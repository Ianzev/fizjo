import { useState } from "react";
import { X } from "lucide-react";
import logo from "../assets/images/logo-fizjopunkt.png";
import { locations } from "./constants";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { Clock, Pin, Phone, Mail } from "lucide-react";

const LocationMap = () => {
  const [open, setOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const positionNiepolomice = { lat: 50.038297, lng: 20.218198 };

  const data = {
    id: 1,
    city: "Niepołomice",
    postCode: "32-005",
    street: "ul. Brzeska 28",
    position: { lat: 50.04259712466961, lng: 20.2199901558195 },
    contact: "510-045-057",
  };

  return (
    <div className="container flex relative h-[450px] space-x-8">
      <div className="flex-1">
        <APIProvider apiKey={import.meta.env.REACT_APP_GOOGLE_MAPS_API}>
          <Map defaultZoom={15} defaultCenter={positionNiepolomice}>
            {locations.map((location) => (
              <AdvancedMarker
                position={location.position}
                onClick={() => {
                  setSelectedLocation(location);
                  setOpen(true);
                }}
                key={import.meta.env.REACT_APP_GOOGLE_MAPS_MAPID}
              >
                <img src={logo} className="h-14"></img>
              </AdvancedMarker>
            ))}
          </Map>
        </APIProvider>
        {open && (
          <div className="absolute top-1/2 md:right-[10%] right-4 transform -translate-y-1/2 bg-white w-72 h-auto p-2 text-secondary font-montserrat border border-primary">
            <X
              className="absolute top-0 right-0 m-1 cursor-pointer hover:text-primary bg-white"
              onClick={() => setOpen(false)}
            />
            <img src={selectedLocation.photo} className="mb-2" />
            <p className="font-bold">{selectedLocation.street}</p>
            <p>
              {selectedLocation.city}, {selectedLocation.postCode}
            </p>
            <p>{selectedLocation.email}</p>
            <p>{selectedLocation.contact}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationMap;
