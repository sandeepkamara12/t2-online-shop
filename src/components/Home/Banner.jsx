import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
const Banner = () => {
  return (
    <>
      <div className="intro-section bg-lighter">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-12">
              <Swiper
                className="my-swiper-container"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
              >
                <SwiperSlide>
                  <div className="item">
                    <div className="intro-slide">
                      <figure className="slide-image mb-0">
                        <picture className="position-relative">
                          <source
                            media="(max-width: 480px)"
                            srcSet="assets/images/slider/slide-2-480w.jpg"
                          />
                          <img src="/images/slide-2.jpg" alt="Desc" />
                        </picture>
                      </figure>
                      <div className="intro-content container">
                        <h3 className="intro-subtitle">News and Inspiration</h3>
                        <h1 className="intro-title">New Arrivals</h1>
                        <a
                          href="category.html"
                          className="btn btn-outline-white"
                        >
                          <span>SHOP NOW</span>
                          <i className="icon-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="intro-slide">
                      <figure className="slide-image mb-0">
                        <picture className="position-relative">
                          <source
                            media="(max-width: 480px)"
                            srcSet="assets/images/slider/slide-2-480w.jpg"
                          />
                          <img src="/images/slide-2.jpg" alt="Desc" />
                        </picture>
                      </figure>
                      <div className="intro-content container">
                        <h3 className="intro-subtitle">News and Inspiration</h3>
                        <h1 className="intro-title">New Arrivals</h1>
                        <a
                          href="category.html"
                          className="btn btn-outline-white"
                        >
                          <span>SHOP NOW</span>
                          <i className="icon-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
