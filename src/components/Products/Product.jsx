import React from "react";

const Product = ({ swiper }) => {
  return (
    // <div class="product product-11 text-center">
    <div className={`${swiper ? "col-12" : "col-6 col-md-4 col-lg-2"}`}>
      <figure className="product-media">
        <span class="product-label label-out">Out of Stock</span>
        <a href="product.html">
          <img
            src="/images/product-1-1.jpg"
            alt="Product"
            className="product-image"
          />
        </a>

        <div class="product-action-vertical">
          <label
            class="btn-product-icon"
            title="Add to wishlist"
            for="add-to-wishlist_1"
          >
            <span>Add to wishlist</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width="18"
              height="18"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              ></path>
            </svg>
            <input
              type="checkbox"
              name="add-to-wishlist"
              id="add-to-wishlist_1"
            />
          </label>
          <a href="#" class="btn-product-icon btn-quickview" title="Quick view">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width="18"
              height="18"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>
          </a>
          <a href="#" class="btn-product-icon btn-compare" title="Compare">
            <span>Compare</span>
          </a>
        </div>
      </figure>

      <div className="product-body">
        <h3 className="product-title">
          <a href="product.html">Petite Table Lamp</a>
        </h3>
        {/* <div className="product-price">$675,00</div> */}
        <div class="product-size">
          <a title="" class="text-uppercase active">
            s
          </a>
          <a title="" class="text-uppercase active">
            m
          </a>
          <a title="" class="text-uppercase disabled">
            l
          </a>
          <a title="" class="text-uppercase disabled">
            xl
          </a>
        </div>
        <div class="product-price ">
          <span class="new-price">$2000</span>
          <span class="old-price">$5000</span>
          <span class="ml-3 d-inline-block price-percentage">60% OFF</span>
        </div>

        <div class="ratings-container">
          <div class="ratings">
            <div class="ratings-val" style={{ width: "80%" }}></div>
          </div>
          <span class="ratings-text">(18 Reviews )</span>
        </div>

        <div className="product-nav product-nav-dots">
          <a href="#" className="active" style={{ background: "#74543e" }}>
            <span className="sr-only">Color name</span>
          </a>
          <a href="#" style={{ background: "#e8e8e8" }}>
            <span className="sr-only">Color name</span>
          </a>
        </div>
      </div>
      <div className="product-action">
        <a href="#" className="btn-product btn-cart">
          <span>add to cart</span>
        </a>
      </div>
    </div>
    // </div>
  );
};

export default Product;
