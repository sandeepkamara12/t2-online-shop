import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <Swiper
          className="my-swiper-container brands-border"
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          slidesPerView={5}
        >
          <SwiperSlide>
            <a href="#" className="brand">
              <img src="/images/1-black.png" alt="Brand Name" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="brand">
              <img src="/images/2-black.png" alt="Brand Name" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="brand">
              <img src="/images/3-black.png" alt="Brand Name" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="brand">
              <img src="/images/4-black.png" alt="Brand Name" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="brand">
              <img src="/images/1-black.png" alt="Brand Name" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="brand">
              <img src="/images/2-black.png" alt="Brand Name" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
