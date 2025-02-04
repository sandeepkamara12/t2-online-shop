import React from "react";
import Banner from "../components/Home/Banner";
import NewProducts from "../components/Home/NewProducts";
import RecentProducts from "../components/Home/RecentProducts";
import ShopByCategory from "../components/Home/ShopByCategory";
import Newsletter from "../components/common/Newsletter";
import BestSeller from "../components/Home/BestSeller";
import SaleProducts from "../components/Home/SaleProducts";
import Brands from "../components/Brands";
import Category from "../components/Home/Category";

const Home = () => {
  return (
    <>
      <Category />
      <Banner />
      <Brands />
      <NewProducts />
      <div
        className="video-banner video-banner-bg bg-image text-center"
        style={{ backgroundImage: "url(/bg-1.jpg)" }}
      >
        <div className="container">
          <h3 className="video-banner-title h1 text-white">
            <span>New Video</span>
            <strong>Womens New Arrivals</strong>
          </h3>
          <a
            href="https://www.youtube.com/watch?v=vBPgmASQ1A0"
            className="btn-video btn-iframe"
          >
            <i className="icon-play"></i>
          </a>
        </div>
      </div>
      <SaleProducts />
      <Newsletter />
      <BestSeller />
      <RecentProducts />
    </>
  );
};

export default Home;
