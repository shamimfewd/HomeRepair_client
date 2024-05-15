import { MdAddHomeWork } from "react-icons/md";
import { GiWaterTank } from "react-icons/gi";
import { PiSolarRoofDuotone } from "react-icons/pi";



const OurService = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-x-4  -mt-10">
      <div className="card  bg-base-100 shadow-xl z-10">
        <div className="text-center mx-auto ">
          <MdAddHomeWork className="text-4xl mt-6 text-white rounded-full p-1 w-16 h-16 bg-[#3ACF87]" />
        </div>
        <div className="card-body text-center mx-auto">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl z-10">
        <div className="text-center mx-auto ">
          <GiWaterTank className="text-4xl mt-6 text-white rounded-full p-1 w-16 h-16 bg-[#3ACF87]" />
        </div>
        <div className="card-body text-center mx-auto">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl z-10">
        <div className="text-center mx-auto ">
          <PiSolarRoofDuotone className="text-4xl mt-6 text-white rounded-full p-1 w-16 h-16 bg-[#3ACF87]" />
        </div>
        <div className="card-body text-center mx-auto">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
