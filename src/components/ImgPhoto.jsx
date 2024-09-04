import photo1 from "../assets/images/aboutUs/Fizjopunkt.jpg";
import photo2 from "../assets/images/aboutUs/Fizjopunkt1.jpg";
import photo3 from "../assets/images/aboutUs/Fizjopunkt2.jpg";
import photo4 from "../assets/images/aboutUs/Fizjopunkt3.jpg";

const ImgPhoto = () => {
  return (
    <div className="container text-center mb-8 text-secondary font-montserrat">
      <div className="text-center font-montserrat mb-6 md:mb-12">
        <h1 className="text-4xl md:text-6xl mb-4 md:mb-8 font-bold">
          Wzmacniamy Twoje Zdrowie i{" "}
          <span className="text-primary">Samopoczucie</span>
        </h1>
        <p className="text-2xl font-semibold">
          Pomagamy Ci odzyskać siły, zregenerować się i osiągnąć pełny potencjał
        </p>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 w-full justify-center items-center gap-4">
        <div className="relative rounded-xl shadow-lg h-[400px] w-full overflow-hidden">
          <img
            src={photo2}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="relative rounded-xl shadow-lg h-[450px] w-full overflow-hidden">
          <img
            src={photo3}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="relative rounded-xl shadow-lg h-[400px] w-full overflow-hidden lg:order-3 order-4">
          <img
            src={photo1}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="relative rounded-xl shadow-lg h-[450px] w-full overflow-hidden lg:order-4 order-3">
          <img
            src={photo4}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ImgPhoto;
