import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const ProductModal = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [
    { id: 1, src: "/1.jpg", alt: "Slide 1" },
    { id: 2, src: "/2.jpg", alt: "Slide 2" },
    { id: 3, src: "/3.jpg", alt: "Slide 3" },
    { id: 4, src: "/4.jpg", alt: "Slide 4" },
  ];
  return (
    <div className="container quickView-container">
      <div className="quickView-content">
        <div className="row">
          <div className="col-lg-7 col-md-6">
            <div className="row">
              <div className="product-left">
              <Swiper
                  className="thumbnail-swiper"
                  modules={[Controller, Thumbs]}
                  onSwiper={setThumbsSwiper}
                  direction="vertical"
                  spaceBetween={10}
                  slidesPerView={4}
                  watchSlidesProgress
                  // centeredSlides={false}
                  slideToClickedSlide
                  style={{ width: "100px", height: "728px" }}
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        width="100"
                        style={{ cursor: "pointer", marginBottom:0 }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>
              <div className="product-right">
              <Swiper
                  className="main-swiper"
                  modules={[Navigation, Controller, Thumbs]}
                  navigation
                  spaceBetween={0}
                  thumbs={{ swiper: thumbsSwiper }}
                  slidesPerView={1}
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <img src={slide.src} alt={slide.alt} width="100%" />
                    </SwiperSlide>
                  ))}
                </Swiper>               
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <h2 className="product-title">Linen-blend dress</h2>
            <h3 className="product-price">$60.00</h3>

            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{ width: "20%" }}></div>
              </div>
              <span className="ratings-text">( 2 Reviews )</span>
            </div>

            <p className="product-txt">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue.
            </p>

            <div className="details-filter-row product-nav product-nav-thumbs">
              <label htmlFor="size">color:</label>
              <a href="#" className="active">
                <img
                  width="100"
                  height="300"
                  src="/product-1-thumb.jpg"
                  alt="product desc"
                />
              </a>
              <a href="#">
                <img
                  width="100"
                  height="300"
                  src="/product-1-2-thumb.jpg"
                  alt="product desc"
                />
              </a>
            </div>

            <div className="details-filter-row details-row-size">
              <label htmlFor="size">Size:</label>
              <div className="select-custom">
                <select name="size" id="size" className="form-control">
                  {/* <option value="#" selected="selected">Select a size</option> */}
                  <option value="s">Small</option>
                  <option value="m">Medium</option>
                  <option value="l">Large</option>
                  <option value="xl">Extra Large</option>
                </select>
              </div>
            </div>

            <div className="details-filter-row details-row-size">
              <label htmlFor="qty">Qty:</label>
              <div className="product-details-quantity">
                {/* <input type="number" id="qty" className="form-control" value="1" min="1" max="10" step="1" data-decimals="0" required="" style={{"display": "none"}} /> */}
                <div className="input-group  input-spinner">
                  <div className="input-group-prepend">
                    <button
                      style={{ minWidth: "26px" }}
                      className="btn btn-decrement btn-spinner"
                      type="button"
                    >
                      <i className="icon-minus"></i>
                    </button>
                  </div>
                  {/* <input type="text" style={{"textAlign": "center"}} className="form-control " required="" placeholder="" /> */}
                  <div className="input-group-append">
                    <button
                      style={{ minWidth: "26px" }}
                      className="btn btn-increment btn-spinner"
                      type="button"
                    >
                      <i className="icon-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-details-action">
              <div className="details-action-wrapper">
                <a
                  href="#"
                  className="btn-product btn-wishlist"
                  title="Wishlist"
                >
                  <span>Add to Wishlist</span>
                </a>
                <a href="#" className="btn-product btn-compare" title="Compare">
                  <span>Add to Compare</span>
                </a>
              </div>
              <a href="#" className="btn-product btn-cart">
                <span>add to cart</span>
              </a>
            </div>

            <div className="product-details-footer">
              <div className="product-cat">
                <span>Category:</span>
                <a href="#">Women</a>,<a href="#">Dresses</a>,
                <a href="#">Yellow</a>
              </div>

              <div className="social-icons social-icons-sm">
                <span className="social-label">Share:</span>
                <a
                  href="#"
                  className="social-icon"
                  title="Facebook"
                  target="_blank"
                >
                  <i className="icon-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  title="Twitter"
                  target="_blank"
                >
                  <i className="icon-twitter"></i>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  title="Instagram"
                  target="_blank"
                >
                  <i className="icon-instagram"></i>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  title="Pinterest"
                  target="_blank"
                >
                  <i className="icon-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button title="Close (Esc)" type="button" className="mfp-close">
        <span>×</span>
      </button>
    </div>
  );
};

export default ProductModal;
