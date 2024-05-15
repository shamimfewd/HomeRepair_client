import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../Styles/style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import hero2 from "../../assets/hero_2.png";
import hero3 from "../../assets/hero_3.png";

const Hero = () => {
  return (
    <div className="bg-[#FFFFFF] ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 px-16 bg-[#F2EBE1] h-[50vh] md:h-[60vh] lg:h-[100vh]">
            <div className="text-left flex  items-center">
              <div className="">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Transform Your House into a Dream Home
                  <span className="text-[#3ACF87]">!!</span>
                </h1>
                <p className="mt-4">
                  From repairs to renovations, let us elevate your home with
                  expert craftsmanship and care.
                </p>
                <Link to={"/services"} className="mt-4">
                  <button className="btn mt-4 bg-[#3ACF87]">
                    Show Services
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block md:hidden ">
              <div>
                <img
                  className="lg:h-[35rem]  "
                  src="https://assets.setmore.com/website/v2/images/industry-pages/home-repair/home-repair-professional.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-16 bg-[#F2EBE1] h-[50vh] md:h-[60vh] lg:h-[100vh]">
            <div className="text-left flex  items-center">
              <div className="">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Trustworthy Solutions for Every Home Issue
                </h1>
                <p>
                  Count on us for reliable solutions to all your home repair
                  needs, no matter the problem.
                </p>
                <Link to={"/services"}>
                  <button className="btn mt-4 bg-[#3ACF87]">
                    Show Services
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block md:hidden">
              <div>
                <img className=" lg:h-[35rem] " src={hero2} />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-16 bg-[#F2EBE1] h-[50vh] md:h-[60vh] lg:h-[100vh]">
            <div className="text-left flex  items-center">
              <div className="">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Expert Home Repairs When You Need Them
                </h1>
                <p>
                  Skilled professionals ready to fix your home issues promptly
                  and efficiently. Your reliable repair partner.
                </p>
                <Link to={"/services"}>
                  <button className="btn mt-4 bg-[#3ACF87]">
                    Show Services
                  </button>
                </Link>
              </div>
            </div>
            <div className="">
              <div className="hidden lg:block md:hidden">
                <div>
                  <img className="lg:h-[35rem]" src={hero3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
