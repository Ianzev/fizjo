import { whyUs } from "./constants";
import SectionHeader from "./SectionHeader";

const WhyUs2 = () => {
  return (
    <div className="container">
      <SectionHeader text={"Czemu"} textGreen={"my?"} />
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-4 lg:gap-x-20 gap-y-4 text-secondary">
        {whyUs.map((reason) => (
          <li
            key={reason.id}
            className="flex justify-center p-4 font-montserrat flex-col items-start gap-4 rounded-xl bg-[#EDF9F2] [&:nth-child(2)]:bg-[#F0F8FF] [&:nth-child(3)]:bg-[#F1EBFF]"
          >
            <div>{reason.icon}</div>
            <div className="text-4xl font-semibold">{reason.title}</div>
            <div>{reason.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyUs2;
