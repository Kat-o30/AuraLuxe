import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../../Components/header/index";
import BrandsDeals from "../../Components/brandsDeals/index";

const Home = () => {
  return (
    <>
      <Header />
      <BrandsDeals />
    </>
  );
};

export default Home;