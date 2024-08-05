import { locations } from "./constants";

const Locations = () => {
  return (
    <div className="container flex text-secondary font-montserrat">
      {locations.map((location) => (
        <div
          key={location.id}
          className="flex-1 flex flex-col justify-center items-center"
        >
          <div className="">
            <img src={location.photo} className="mb-2 object-cover h-[400px]" />
            <p className="font-bold">{location.street}</p>
            <p>
              {location.city}, {location.postCode}
            </p>
            <p>{location.contact}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Locations;
