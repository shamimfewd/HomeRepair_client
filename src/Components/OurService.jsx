import { MdAddHomeWork } from "react-icons/md";
import { GiWaterTank } from "react-icons/gi";
import { PiSolarRoofDuotone } from "react-icons/pi";

const OurService = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-x-4  -mt-10">
      <div className="card  bg-base-100 shadow-xl z-10 mb-4 mx-2">
        <div className="text-center mx-auto ">
          <MdAddHomeWork className="text-4xl mt-6 text-white rounded-full p-1 w-16 h-16 bg-[#3ACF87]" />
        </div>
        <div className="card-body ">
          <h2 className="card-title text-[#000000d4]">HomeFix</h2>
          <p>
            Expert home repair: reliable, skilled, timely service for all your
            household needs, ensuring lasting satisfaction.
          </p>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl z-10 mb-4 mx-2">
        <div className="text-center mx-auto ">
          <GiWaterTank className="text-4xl mt-6 text-white rounded-full p-1 w-16 h-16 bg-[#3ACF87]" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-[#000000d4]">Water Line Fix</h2>
          <p>
            Swift solutions for leaks, bursts, and repairs, ensuring
            uninterrupted water supply and peace of mind
          </p>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl z-10 mb-4 mx-2">
        <div className="text-center mx-auto ">
          <PiSolarRoofDuotone className="text-4xl mt-6 text-white rounded-full p-1 w-16 h-16 bg-[#3ACF87]" />
        </div>
        <div className="card-body ">
          <h2 className="card-title text-[#000000d4]">Roof Fix</h2>
          <p>
            Expert repairs for leaks, damages, and maintenance, safeguarding
            your home from weather woes with precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
