import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import firstSlide from "../../assets/images/1.jpg";
import secondtSlide from "../../assets/images/2.jpg";
import thirdSlide from "../../assets/images/3.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-3xl mb-5"
      >
        <SwiperSlide>
          <img src={firstSlide} className="rounded-3xl" alt="first slid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={secondtSlide} className="rounded-3xl" alt="second slid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thirdSlide} className="rounded-3xl" alt="third slid" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
