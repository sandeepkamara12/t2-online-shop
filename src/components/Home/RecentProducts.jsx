import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Product from "../Products/Product";

const RecentProducts = () => {
  return (
    <div className="container pt-6 pb-6 px-5">
      <div className="heading mb-3">
        <h2 className="title-lg">Recent Arrival</h2>
        <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h6>
      </div>
      <div className="products">
        <div className="product product-11 text-center">
          <div className="row justify-content-center">
            {Array(12)
              .fill(null)
              .map((_, index) => {
                return <Product key={index} swiper={false} />;
              })}
          </div>
        </div>
      </div>
      <div className="more-container text-center mb-0 mt-6">
        <a href="#" className="btn btn-outline-darker btn-more">
          <span>Load more products</span>
          <i className="icon-long-arrow-down"></i>
        </a>
      </div>
    </div>
  );
};

export default RecentProducts;
