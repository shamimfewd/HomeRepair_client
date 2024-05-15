import {  useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { SlLike } from "react-icons/sl";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaServicestack } from "react-icons/fa6";




const CounderPage = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="max-w-7xl mx-auto rounded-xl">
      <div
        className="mx-auto h-[70vh] mt-24 overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/repairman39s-tool-belt-filled-with-specialized-tools-faucet-plumbing-repair-against-kitchen-sink-backdrophighlighting-essential_38013-13925.jpg?w=826')",
        }}
      >
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 */}
          <div className="flex justify-around items-center h-[70vh]">
            <div className="bg-[#00000092] rounded-xl shadow-xl space-y-2 p-8 text-white text-center">
              <SlLike className="text-4xl text-center w-10 h-10 mx-auto bg-[#3ACF87] rounded-full p-2"/>
              <h2 className="text-4xl text-white font-bold">
                {counterOn && (
                  <CountUp start={0} end={250} duration={2} delay={0} />
                )}
                +
              </h2>
              <p className="">Happy Customers</p>
            </div>

            <div className="bg-[#00000092] rounded-xl shadow-xl space-y-2 p-8 text-white text-center">
              <MdShoppingCartCheckout className="text-4xl text-center w-10 h-10 mx-auto bg-[#3ACF87] rounded-full p-2"/>
              <h2 className="text-4xl text-white font-bold">
                {counterOn && (
                  <CountUp start={0} end={350} duration={2} delay={0} />
                )}
                +
              </h2>
              <p className="">Available Project</p>
            </div>

            <div className="bg-[#00000092] rounded-xl shadow-xl space-y-2 p-8 text-white text-center">
              <FaServicestack className="text-4xl text-center w-10 h-10 mx-auto bg-[#3ACF87] rounded-full p-2"/>
              <h2 className="text-4xl text-white font-bold">
                {counterOn && (
                  <CountUp start={0} end={560} duration={2} delay={0} />
                )}
                +
              </h2>
              <p className="">Completed Project</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default CounderPage;
