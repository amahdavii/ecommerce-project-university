import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";

import slide1 from "../../../assets/images/airpod-photo.jpg";
import slide2 from "../../../assets/images/tablet-photo.jpg";


const MobileSlider = () => {
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
        modules={[Autoplay, Pagination]}
        className="mySwiper rounded-3xl mb-5"
      >
        <SwiperSlide>
          <img src={slide1} className="rounded-3xl" alt="first slid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="rounded-3xl" alt="second slid" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MobileSlider;
