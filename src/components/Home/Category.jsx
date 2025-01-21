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
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-12">
            <div class="heading mb-3">
              <h2 class="title-lg">Shop By Category</h2>
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
                  <div className="banner mb-0 banner-cat">
                    <a href="#">
                      <img src="/images/cat-1.jpg" alt="Banner" />
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
                  <div className="banner mb-0 banner-cat">
                    <a href="#">
                      <img src="/images/cat-1.jpg" alt="Banner" />
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
                  <div className="banner mb-0 banner-cat">
                    <a href="#">
                      <img src="/images/cat-2.jpg" alt="Banner" />
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
                  <div className="banner mb-0 banner-cat">
                    <a href="#">
                      <img src="/images/cat-3.jpg" alt="Banner" />
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
                  <div className="banner mb-0 banner-cat">
                    <a href="#">
                      <img src="/images/cat-4.jpg" alt="Banner" />
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
                  <div className="banner mb-0 banner-cat">
                    <a href="#">
                      <img src="/images/cat-1.jpg" alt="Banner" />
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
                  <div className="banner mb-0 banner-cat">
                    <a href="#">
                      <img src="/images/cat-4.jpg" alt="Banner" />
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
                  <div className="banner mb-0 banner-cat">
                    <a href="#">
                      <img src="/images/cat-1.jpg" alt="Banner" />
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
