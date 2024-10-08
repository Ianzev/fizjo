import { whyUs } from "./constants";
import SectionHeader from "./SectionHeader";

const WhyUs = () => {
  return (
    <div className="container">
      <div className=" bg-forth rounded-2xl p-12">
        <SectionHeader text={"Czemu"} textGreen={"my?"} white={true} />
        <ul className="flex md:flex-row flex-col justify-between xl:mx-32 gap-16">
          {whyUs.map((reason) => (
            <div
              key={reason.id}
              className="flex flex-col flex-1 text-center items-center font-montserrat gap-4 text-white"
            >
              <div className="p-4 text-primary border-2 border-white rounded-full">
                {reason.icon}
              </div>
              <div className="text-2xl font-bold font-montserrat">
                {reason.title}
              </div>
              <div className="text-lg text-justify opacity-85">
                {reason.text}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyUs;
