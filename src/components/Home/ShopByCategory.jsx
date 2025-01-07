import React from "react";

const ShopByCategory = () => {
  return (
    <div className="container pt-6">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="banner banner-cat">
            <a href="#">
              <img src="/images/banner-4.jpg" alt="Banner" />
            </a>

            <div className="banner-content banner-content-overlay text-center">
              <h3 className="banner-title">Women</h3>
              <h4 className="banner-subtitle">18 Products</h4>
              <a href="#" className="banner-link">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="banner banner-cat">
            <a href="#">
              <img src="/images/banner-5.jpg" alt="Banner" />
            </a>

            <div className="banner-content banner-content-overlay text-center">
              <h3 className="banner-title">Men</h3>
              <h4 className="banner-subtitle">12 Products</h4>
              <a href="#" className="banner-link">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="banner banner-cat">
            <a href="#">
              <img src="/images/banner-6.jpg" alt="Banner" />
            </a>

            <div className="banner-content banner-content-overlay text-center">
              <h3 className="banner-title">Accessories</h3>
              <h4 className="banner-subtitle">8 Products</h4>
              <a href="#" className="banner-link">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
