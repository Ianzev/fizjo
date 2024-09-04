import { timeLine } from "./constants";
import SectionHeader from "./SectionHeader";

const Timeline = () => {
  return (
    <div className="container w-full">
      <SectionHeader text={"Nasza"} textGreen={"historia"} />
      <ul className={`flex flex-col w-full relative pt-8`}>
        {timeLine.map((timeEvent, index) => (
          <div
            className={`flex w-full ${
              index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            } justify-end`}
            key={timeEvent.id}
          >
            <li
              className={`relative lg:w-[48%] w-[96%] h-auto p-4 bg-white shadow-xl rounded-xl mb-12 font-montserrat text-secondary`}
            >
              <h1 className="title font-semibold text-3xl text-primary">
                {timeEvent.title}
              </h1>
              <p className="text-lg">{timeEvent.text}</p>
              <span
                className={`circle size-8 bg-primary bg-opacity-40 absolute top-0 rounded-full ${
                  index % 2 === 0
                    ? "transform -translate-x-1/2 2xl:-right-[62px] xl:-right-[57px] lg:-right-[52px] md:right-[704px] right-[576px]"
                    : "transform translate-x-1/2 2xl:-left-[62px] xl:-left-[56px] lg:-left-[51px] md:-left-[61px] -left-[56px]"
                }`}
              ></span>

              <span className="absolute top-[-2.5rem] left-[4px] bg-forth text-white w-36 h-8 items-center justify-center flex rounded-xl">
                {timeEvent.date}
              </span>
            </li>
          </div>
        ))}
        <span className="w-1 absolute bg-primary h-full top-0 lg:left-1/2 transform -translate-x-1/2 -z-10"></span>
      </ul>
    </div>
  );
};

export default Timeline;
