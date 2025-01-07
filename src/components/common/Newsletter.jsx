import React from "react";

const Newsletter = () => {
  return (
    <div
      className="cta bg-image bg-dark pt-6 pb-7"
      style={{ backgroundImage: "url(/images/bg-1.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-6">
            <div className="cta-heading text-center">
              <h3 className="cta-title text-white">Join Our Newsletter</h3>
              <p className="cta-desc text-light">
                Lorem ipsum dolor sit amet adipiscing.
              </p>
            </div>

            <form action="#">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email Address"
                  aria-label="Email Adress"
                  required=""
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    <span>Subscribe</span>
                    <i className="icon-long-arrow-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
