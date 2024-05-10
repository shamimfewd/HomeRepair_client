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
            className="bg-cover lg:p-52 md:p-24 p-4   w-full bg-repeat bg-center bg-gradient-to-r from-sky-600 to-indigo-600"
            style={{
              backgroundImage:
                "url('https://media.gettyimages.com/id/1308375457/photo/cleaning-air-conditioner.jpg?s=612x612&w=gi&k=20&c=8C65cIF1LH9y89J0ktpbbWhPNtmJTusuY9WZvVZNs3Q=')",
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
            className="bg-cover lg:p-52 md:p-24 p-4  w-full bg-repeat bg-center bg-gradient-to-r from-sky-500 to-indigo-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
            className="bg-cover lg:p-52 md:p-24 p-4  w-full bg-repeat bg-center bg-gradient-to-r from-cyan-500 to-blue-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
