import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/modules";

const Category = () => {
  return (
    <div className="category pt-6 pb-4">
      <div className="container px-5">
        <div className="row">
          <div className="col-12">
            <div className="heading mb-3">
              <h2 className="title-lg">Shop By Category</h2>
              <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h6>
            </div>
            <Swiper
              className="my-swiper-container"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={8}
            >
              <SwiperSlide>
                <div className="item">
                  <div className="banner mb-0 banner-cat bg-transparent">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                      {/* <img src="/images/cat-1.jpg" alt="Banner" /> */}
                    </a>

                    <div className="banner-content banner-content-static text-center">
                      <h3 className="banner-title">Cell Phone</h3>
                      <h4 className="banner-subtitle">18 Products</h4>
                      <a href="#" className="banner-link">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="banner mb-0 banner-cat bg-transparent">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>
                      {/* <img src="/images/cat-1.jpg" alt="Banner" /> */}
                    </a>

                    <div className="banner-content banner-content-static text-center">
                      <h3 className="banner-title">TV & Appliance</h3>
                      <h4 className="banner-subtitle">18 Products</h4>
                      <a href="#" className="banner-link">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <div className="banner mb-0 banner-cat bg-transparent">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>
                    </a>

                    <div className="banner-content banner-content-static text-center">
                      <h3 className="banner-title">Electronics</h3>
                      <h4 className="banner-subtitle">12 Products</h4>
                      <a href="#" className="banner-link">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="banner mb-0 banner-cat bg-transparent">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>
                    </a>

                    <div className="banner-content banner-content-static text-center">
                      <h3 className="banner-title">Fasion</h3>
                      <h4 className="banner-subtitle">15 Products</h4>
                      <a href="#" className="banner-link">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="banner mb-0 banner-cat bg-transparent">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>
                    </a>

                    <div className="banner-content banner-content-static text-center">
                      <h3 className="banner-title">Beauty</h3>
                      <h4 className="banner-subtitle">8 Products</h4>
                      <a href="#" className="banner-link">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="banner mb-0 banner-cat bg-transparent">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>
                    </a>

                    <div className="banner-content banner-content-static text-center">
                      <h3 className="banner-title">Women</h3>
                      <h4 className="banner-subtitle">18 Products</h4>
                      <a href="#" className="banner-link">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="banner mb-0 banner-cat bg-transparent">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>
                    </a>

                    <div className="banner-content banner-content-static text-center">
                      <h3 className="banner-title">Accessories</h3>
                      <h4 className="banner-subtitle">8 Products</h4>
                      <a href="#" className="banner-link">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <div className="banner mb-0 banner-cat bg-transparent">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>
                    </a>

                    <div className="banner-content banner-content-static text-center">
                      <h3 className="banner-title">Women</h3>
                      <h4 className="banner-subtitle">18 Products</h4>
                      <a href="#" className="banner-link">
                        Shop Now
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
  );
};

export default Category;
