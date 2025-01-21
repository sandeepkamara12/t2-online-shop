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
      <SaleProducts />
      <Newsletter />
      <BestSeller />
      <RecentProducts />
    </>
  );
};

export default Home;
