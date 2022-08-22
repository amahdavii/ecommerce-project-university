import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

import logoBrand from "../../assets/images/brand_logo.jpg";

import xiamoi from "../../assets/images/2994.png";
import huwai from "../../assets/images/hw.png";
import tsco from "../../assets/images/5518.png";
import anker from "../../assets/images/Anker-Logo.png"
import apple from "../../assets/images/apple.png"
import sony from "../../assets/images/sony.png"
import motorela from "../../assets/images/mot.jpg"
import nokia from "../../assets/images/nokia.jpg"
import acer from "../../assets/images/acer.png"

const Brands = () => {
  return (
    <section className="mb-6">
      <h2 className="px-3 py-2 pb-1 font-medium bg-[#377D71] text-[#fff] inline-flex rounded-lg mb-4">
        برند های ما
      </h2>
      <div className="bg-white rounded-xl overflow-hidden py-3 px-2 flex">
        <Swiper
          slidesPerView={5}
          slidesPerGroup={1}
          spaceBetween={5}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper flex items-center"
        >
          <SwiperSlide className="h-full flex justify-center items-center">
            <img src={xiamoi} alt="logo brand" />
          </SwiperSlide>
          <SwiperSlide className="h-full flex justify-center items-center">
            <img className="w-[80px] h-[80px]" src={huwai} alt="logo brand" />
          </SwiperSlide>
          <SwiperSlide className="h-full flex justify-center items-center">
            <img className="w-[120px] h-[120px]" src={tsco} alt="logo brand" />
          </SwiperSlide>
          <SwiperSlide className="h-full flex justify-center items-center">
            <img className="w-[140px] h-[100px]" src={anker} alt="logo brand" />
          </SwiperSlide>
          <SwiperSlide className="h-full flex justify-center items-center">
            <img className="w-[140px] h-[100px]" src={apple} alt="logo brand" />
          </SwiperSlide>
          <SwiperSlide className="h-full flex justify-center items-center">
            <img className="w-[140px] h-[100px]" src={sony} alt="logo brand" />
          </SwiperSlide>
          <SwiperSlide className="h-full flex justify-center items-center">
            <img
              className="w-[140px] h-[100px]"
              src={motorela}
              alt="logo brand"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full flex justify-center items-center">
            <img className="w-[140px] h-[100px]" src={nokia} alt="logo brand" />
          </SwiperSlide>
          <SwiperSlide className="h-full flex justify-center items-center">
            <img className="w-[140px] h-[100px]" src={acer} alt="logo brand" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
