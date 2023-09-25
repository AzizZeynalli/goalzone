import image from "./assets/test.png";
import unchecked from "./assets/unchecked.svg";
import checked from "./assets/checked.svg";

const Hero = () => {
  return (
    <section className="h-[60vh]">
      <div className="flex justify-between items-center ml-10 mr-10 mt-36 gap-[50px]">
        <div className="ml-16 w-100">
          <img src={image} height={600} width={600} className="drop-shadow-2xl" alt="Test" />
        </div>
        <div className="w-150 p-36">
          <h1 className="text-[2.6rem] font-bold font-nunitoSans text-[black]">
            <div className="flex items-center mb-2">
              <img src={unchecked} alt="Unchecked" className="mr-2" />
              Unite with friends
            </div>
            <div className="flex items-center mb-2">
              <img src={checked} alt="Checked" className="mr-2" />
              <span className="text-[#008000]">Book a stadium</span>
            </div>
            <div className="flex items-center">
              <img src={unchecked} alt="Unchecked" className="mr-2" />
              Score goals
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;