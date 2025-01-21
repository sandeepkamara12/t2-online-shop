import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import ProductModal from "../common/ProductModal";
import { useEffect } from "react";
import Product from "../Products/Product";

const NewProducts = () => {
  useEffect(() => {
    // Initialize Magnific Popup with Vanilla JavaScript
    const quickViewButton = document.querySelector(".btn-quickview");
    const modalContent = document.getElementById("quick-view-modal");

    if (quickViewButton) {
      quickViewButton.addEventListener("click", (e) => {
        e.preventDefault();
        modalContent.style.display = "block";
        // Open Magnific Popup
        openQuickViewModal(modalContent);
      });
    }
  }, []);

  const openQuickViewModal = (modalContent) => {
    // Dynamically show the modal
    const magnificPopup = window.$.magnificPopup;
    magnificPopup.open({
      items: {
        src: modalContent,
        type: "inline",
      },
      mainClass: "mfp-ajax-product",
      preloader: false,
      removalDelay: 350,
      callbacks: {
        open: function () {
          document.body.style.overflowX = "visible";
        },
        close: function () {
          document.body.style.overflowX = "hidden";
        },
      },
    });
  };
  return (
    <div className="container-full pt-6 pb-6 px-5">
      <div className="heading mb-3">
        <h2 className="title-lg">New Products</h2>

        <ul className="nav nav-pills " role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="trendy-all-link"
              data-toggle="tab"
              href="#trendy-all-tab"
              role="tab"
              aria-controls="trendy-all-tab"
              aria-selected="true"
            >
              All
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="trendy-fur-link"
              data-toggle="tab"
              href="#trendy-fur-tab"
              role="tab"
              aria-controls="trendy-fur-tab"
              aria-selected="false"
            >
              Furniture
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="trendy-decor-link"
              data-toggle="tab"
              href="#trendy-decor-tab"
              role="tab"
              aria-controls="trendy-decor-tab"
              aria-selected="false"
            >
              Decor
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="trendy-light-link"
              data-toggle="tab"
              href="#trendy-light-tab"
              role="tab"
              aria-controls="trendy-light-tab"
              aria-selected="false"
            >
              Lighting
            </a>
          </li>
        </ul>
      </div>

      <div className="tab-content tab-content-carousel">
        <div
          className="tab-pane p-0 fade active show"
          id="trendy-all-tab"
          role="tabpanel"
          aria-labelledby="trendy-all-link"
        >
          <Swiper
            className="my-swiper-container"
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={0}
            slidesPerView={6}
          >
            {Array(8)
              .fill(null)
              .map((_, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="item product product-11 text-center">
                      <Product swiper={true} />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <div id="quick-view-modal" style={{ display: "none" }}>
            <ProductModal />
          </div>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="trendy-fur-tab"
          role="tabpanel"
          aria-labelledby="trendy-fur-link"
        >
          <Swiper
            className="my-swiper-container"
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={0}
            slidesPerView={6}
          >
            {Array(8)
              .fill(null)
              .map((_, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="item product product-11 text-center">
                      <Product swiper={true} />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="trendy-decor-tab"
          role="tabpanel"
          aria-labelledby="trendy-decor-link"
        >
          <Swiper
            className="my-swiper-container"
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={0}
            slidesPerView={6}
          >
            {Array(8)
              .fill(null)
              .map((_, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="item product product-11 text-center">
                      <Product swiper={true} />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="trendy-light-tab"
          role="tabpanel"
          aria-labelledby="trendy-light-link"
        >
          <Swiper
            className="my-swiper-container"
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={0}
            slidesPerView={6}
          >
            {Array(8)
              .fill(null)
              .map((_, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="item product product-11 text-center">
                      <Product swiper={true} />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
