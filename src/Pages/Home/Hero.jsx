import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../Styles/style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
          <div
            className="bg-cover lg:p-52 md:p-24 p-4 object-cover  w-full bg-no-repeat bg-center bg-gradient-to-r from-sky-600 to-indigo-600"
            style={{
              backgroundImage:
                "url('https://st.depositphotos.com/1010613/2860/i/450/depositphotos_28608021-stock-photo-young-plumber-fixing-a-sink.jpg')",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="space-y-4">
                <h1 className="lg:text-6xl md:text-5xl text-4xl text-white">
                  Creating value in real estate.
                </h1>
                <p className="lg:w-2/3 md:w-2/3  mx-auto text-white">
                  When you join Hines, you are joining a private, family led
                  firm with a rich history of transformative work in our
                  communities
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover lg:p-52 md:p-24 p-4 object-cover w-full bg-no-repeat bg-center bg-gradient-to-r from-sky-500 to-indigo-500"
            style={{
              backgroundImage:
                "url('https://st4.depositphotos.com/20363444/29000/i/450/depositphotos_290002052-stock-photo-selective-focus-handsome-handyman-repairing.jpg')",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="space-y-4">
                <h1 className="lg:text-6xl md:text-5xl text-4xl text-white ">
                  Creating value in real estate.
                </h1>
                <p className="lg:w-2/3 md:w-2/3  mx-auto text-white">
                  When you join Hines, you are joining a private, family led
                  firm with a rich history of transformative work in our
                  communities
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-cover lg:p-52 md:p-24 p-4 object-cover  w-full bg-no-repeat bg-center bg-gradient-to-r from-cyan-500 to-blue-500"
            style={{
              backgroundImage:
                "url('https://t4.ftcdn.net/jpg/03/62/37/01/360_F_362370127_S1e6Da4AcOSVTMCOSb3UnI2bZKZkXm8q.jpg')",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="space-y-4">
                <h1 className="lg:text-6xl md:text-5xl text-4xl text-white ">
                  Creating value in real estate.
                </h1>
                <p className="lg:w-2/3 md:w-2/3 mx-auto text-white">
                  When you join Hines, you are joining a private, family led
                  firm with a rich history of transformative work in our
                  communities
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
