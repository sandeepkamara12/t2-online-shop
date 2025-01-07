import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
const Banner = () => {
  return (
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
                      <a href="category.html" className="btn btn-outline-white">
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
                      <a href="category.html" className="btn btn-outline-white">
                        <span>SHOP NOW</span>
                        <i className="icon-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <div className="col-lg-4">
            <div className="intro-banners">
              <div className="row row-sm">
                <div className="col-md-6 col-lg-12">
                  <div className="banner banner-display">
                    <a href="#">
                      <img
                        src="/images/banner-1.jpg"
                        alt="Banner"
                      />
                    </a>

                    <div className="banner-content">
                      <h4 className="banner-subtitle text-darkwhite">
                        <a href="#">Clearence</a>
                      </h4>
                      <h3 className="banner-title text-white">
                        <a href="#">
                          Chairs &amp; Chaises <br />
                          Up to 40% off
                        </a>
                      </h3>
                      <a href="#" className="btn btn-outline-white banner-link">
                        Shop Now<i className="icon-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-12">
                  <div className="banner banner-display mb-0">
                    <a href="#">
                      <img
                        src="/images/banner-2.jpg"
                        alt="Banner"
                      />
                    </a>

                    <div className="banner-content">
                      <h4 className="banner-subtitle text-darkwhite">
                        <a href="#">New in</a>
                      </h4>
                      <h3 className="banner-title text-white">
                        <a href="#">
                          Best Lighting <br />
                          Collection
                        </a>
                      </h3>
                      <a href="#" className="btn btn-outline-white banner-link">
                        Discover Now<i className="icon-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
