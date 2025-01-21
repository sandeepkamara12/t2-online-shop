import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid px-5">
        <hr />
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="icon-box icon-box-card text-center">
              <span className="icon-box-icon">
                <i className="icon-rocket"></i>
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Payment &amp; Delivery</h3>
                <p>Free shipping for orders over $50</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="icon-box icon-box-card text-center">
              <span className="icon-box-icon">
                <i className="icon-rotate-left"></i>
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Return &amp; Refund</h3>
                <p>Free 100% money back guarantee</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="icon-box icon-box-card text-center">
              <span className="icon-box-icon">
                <i className="icon-life-ring"></i>
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Quality Support</h3>
                <p>Alway online feedback 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-2"></div>
      </div>
      <div
        className="cta cta-display bg-image pt-6 pb-6"
        style={{ backgroundImage: "url(/images/bg-6.jpg)" }}
      >
        <div className="container-fluid px-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9 col-xl-6">
              <div className="row no-gutters flex-column flex-sm-row align-items-sm-center">
                <div className="col">
                  <h3 className="cta-title text-white">
                    Sign Up &amp; Get 10% Off
                  </h3>
                  <p className="cta-desc text-white">
                    Molla presents the best in interior design
                  </p>
                </div>

                <div className="col-auto">
                  <a href="login.html" className="btn btn-outline-white">
                    <span>SIGN UP</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-dark bg-dark">
        <div className="footer-middle">
          <div className="container-fluid px-5">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="widget widget-about">
                  <img
                    src="/images/logo-white.png"
                    className="footer-logo"
                    alt="Footer Logo"
                    width="105"
                    height="25"
                  />
                  <p>
                    Praesent dapibus, neque id cursus ucibus, tortor neque
                    egestas augue, eu vulputate magna eros eu erat.
                  </p>

                  <div className="social-icons">
                    <a
                      href="#"
                      className="social-icon"
                      target="_blank"
                      title="Facebook"
                    >
                      <i className="icon-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon"
                      target="_blank"
                      title="Twitter"
                    >
                      <i className="icon-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon"
                      target="_blank"
                      title="Instagram"
                    >
                      <i className="icon-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon"
                      target="_blank"
                      title="Youtube"
                    >
                      <i className="icon-youtube"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon"
                      target="_blank"
                      title="Pinterest"
                    >
                      <i className="icon-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-2">
                <div className="widget">
                  <h4 className="widget-title">We are</h4>

                  <ul className="widget-list">
                    <li>
                      <a href="about.html">Contact Panda</a>
                    </li>
                    <li>
                      <a href="#">About Panda</a>
                    </li>
                    <li>
                      <a href="about.html">Carrer</a>
                    </li>
                    <li>
                      <a href="#">Story</a>
                    </li>
                    <li>
                      <a href="#">Press</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-lg-2">
                <div className="widget">
                  <h4 className="widget-title">Need Help</h4>

                  <ul className="widget-list">
                    <li>
                      <a href="about.html">Payment Methods</a>
                    </li>
                    <li>
                      <a href="#">Shipping</a>
                    </li>
                    <li>
                      <a href="#">Cancellation & Returns</a>
                    </li>
                    <li>
                      <a href="contact.html">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-lg-2">
                <div className="widget">
                  <h4 className="widget-title">Customer Policy</h4>

                  <ul className="widget-list">
                    <li>
                      <a href="#">Cancellation & Returns</a>
                    </li>
                    <li>
                      <a href="#">Terms and conditions</a>
                    </li>
                    <li>
                      <a href="#">Security</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-lg-2">
                <div className="widget">
                  <h4 className="widget-title">My Account</h4>

                  <ul className="widget-list">
                    <li>
                      <a href="#">Sign In</a>
                    </li>
                    <li>
                      <a href="cart.html">View Cart</a>
                    </li>
                    <li>
                      <a href="#">My Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Track My Order</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container-fluid px-5">
            <p className="footer-copyright">
              Copyright © 2019 Panda Store. All Rights Reserved.
            </p>
            <figure className="footer-payments">
              <img
                src="/payments.png"
                alt="Payment methods"
                width="272"
                height="20"
              />
            </figure>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
