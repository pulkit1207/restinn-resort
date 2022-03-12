import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import PropertyTypeList from "../components/PropertyTypeList";
import BestSellerList from "../components/BestSellerList";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <PropertyTypeList />
      <BestSellerList />
      <Footer />
    </>
  );
};

export default HomePage;
