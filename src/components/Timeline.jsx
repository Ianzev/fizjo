import { timeLine } from "./constants";
import SectionHeader from "./SectionHeader";

const Timeline = () => {
  return (
    <div className="container">
      <SectionHeader text={"Nasza"} textGreen={"historia"} />
      <div className="timeline md:m-0 mt-12 relative">
        {timeLine.map((timeEvent, index) => (
          <div
            className={`kontener relative md:w-1/2 w-full md:px-8 pl-20 pr-6 mb-12 ${
              index % 2 === 0 ? "left-0" : "md:left-1/2"
            }`}
            key={timeEvent.id}
          >
            <span
              className={`circle size-[40px] bg-primary absolute rounded-full top-8 bg-opacity-60 left-[10px] ${
                index % 2 === 0 ? "md:-right-5 md:left-auto" : "md:-left-5"
              }`}
            />

            <div
              className={`text-box relative p-4 rounded-xl bg-white shadow-md shadow-primary font-montserrat text-secondary md:mb-12`}
            >
              <h1 className="title font-semibold md:text-3xl text-2xl text-primary">
                {timeEvent.title}
              </h1>
              <p className="md:text-lg text-sm">{timeEvent.text}</p>

              <span
                className={`absolute md:-top-10 -top-[30px] left-[4px] bg-forth text-white md:w-36 md:h-8 w-28 h-6 items-center justify-center flex rounded-xl md:text-base text-sm ${
                  index % 2 === 0
                    ? "md:right-[4px] md:left-auto"
                    : "md:left-[4px]"
                }`}
              >
                {timeEvent.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
