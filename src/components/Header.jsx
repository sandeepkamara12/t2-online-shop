import React, { useState } from "react";
import { Link } from "react-router-dom";
// import useScript from '../hooks/useScript';
import CountryDropdown from "./CountryDropdown";
import { useContext } from "react";
import { myContext } from "../App";
const Header = () => {
  const context = useContext(myContext);
  // useScript('../assets/scripts/bootstrap.bundle.min.js')
  // useScript('../assets/scripts/main.js')
  return (
    <header className="header">
      <div className="header-top">
        <div className="container-fluid px-5">
          <div className="header-right">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#countryList"
            >
              {context.selectedCountry
                ? context.selectedCountry
                : "Select Country"}
            </button>
            <CountryDropdown />
            <ul className="top-menu">
              <li>
                <Link to="#">Links</Link>
                <ul>
                  <li>
                    <Link to="tel:#">
                      <i className="icon-phone"></i>+917986 680 517
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="custom-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#333333"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        fill="none"
                        width="20"
                        height="20"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                      <span className="wishlist-count text-white">
                        {/* {wishlistCount} */}
                      </span>
                    </Link>
                  </li>
                  <li>
                    {/* {userId == null ? ( */}
                    <Link
                      to="#"
                      // onClick={openModalFn}
                    >
                      <i className="icon-user"></i>Login
                    </Link>
                    {/* ) : ( */}
                    <Link
                      to="#"
                      // onClick={logout}
                    >
                      <i className="icon-user"></i>Logout
                    </Link>
                    {/* )} */}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-middle sticky-header">
        <div className="container-fluid px-5">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars"></i>
            </button>

            <Link to="index.html" className="logo">
              <img
                src="/images/logo.png"
                alt="Panda Logo"
                width="105"
                height="25"
              />
            </Link>

            <nav className="main-nav">
              <ul className="menu">
                <li>
                  <Link to="/">Shop</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-right">
            <div className="header-search">
              <Link
                to="#"
                className="search-toggle"
                role="button"
                title="Search"
              >
                <i className="icon-search"></i>
              </Link>
              <form action="#" method="get">
                <div className="header-search-wrapper">
                  <label htmlFor="q" className="sr-only">
                    Search
                  </label>
                  <input
                    type="search"
                    className="form-control"
                    name="q"
                    id="q"
                    placeholder="Search in..."
                    required
                  />
                </div>
              </form>
            </div>
            <div className="dropdown compare-dropdown">
              <Link
                to="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
                title="Compare Products"
                aria-label="Compare Products"
              >
                <i className="icon-random"></i>
              </Link>

              <div className="dropdown-menu dropdown-menu-right">
                <ul className="compare-products">
                  <li className="compare-product">
                    <Link to="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close"></i>
                    </Link>
                    <h4 className="compare-product-title">
                      <Link to="product.html">Blue Night Dress</Link>
                    </h4>
                  </li>
                  <li className="compare-product">
                    <Link to="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close"></i>
                    </Link>
                    <h4 className="compare-product-title">
                      <Link to="product.html">White Long Skirt</Link>
                    </h4>
                  </li>
                </ul>

                <div className="compare-actions">
                  <Link to="#" className="action-link">
                    Clear All
                  </Link>
                  <Link to="#" className="btn btn-outline-primary-2">
                    <span>Compare</span>
                    <i className="icon-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="dropdown cart-dropdown custom-icon">
              <Link
                to="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#333333"
                  strokeWidth={2}
                  width="20"
                  height="20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                {/* <i className="icon-shopping-cart"></i> */}
                <span className="cart-count">
                  {/* {cartCount ? cartCount : 0} */}
                </span>
              </Link>
              {/* {
                userCartProducts?.length > 0 && */}
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                  {/* {userCartProducts?.length > 0 &&
                        userCartProducts.map((cart) => { */}
                  {/* return ( */}
                  <div
                    className="product"
                    //   data-id={cart?.id} key={`cart_${cart?.id}`}
                  >
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <Link to="product.html">{/* {cart?.name} */}</Link>
                      </h4>

                      <span className="cart-product-info">
                        <span className="cart-product-qty">
                          {/* {cart?.quantity} */}
                        </span>
                        x $
                        {/* {cart?.salePrice ? cart?.salePrice : cart?.price} */}
                      </span>
                    </div>

                    <figure className="product-image-container">
                      <Link to="product.html" className="product-image">
                        <img
                          //   src={`/${cart?.image}`}
                          width="100"
                          height="100"
                          alt="product"
                        />
                      </Link>
                    </figure>
                    <Link
                      //   onClick={()=>removeItemFromCarts(cart?.id)}
                      className="btn-remove"
                      title="Remove Product"
                    >
                      <i className="icon-close"></i>
                    </Link>
                  </div>
                  {/* ); */}
                  {/* })} */}
                </div>

                <div className="dropdown-cart-total">
                  <span>Total</span>

                  <span className="cart-total-price">$160.00</span>
                </div>

                <div className="dropdown-cart-action">
                  <Link to="/cart" className="btn btn-primary">
                    View Cart
                  </Link>
                  <Link
                    to="checkout.html"
                    className="btn btn-outline-primary-2"
                  >
                    <span>Checkout</span>
                    <i className="icon-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
              {/* } */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
