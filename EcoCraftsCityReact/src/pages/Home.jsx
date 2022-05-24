import React from "react";

import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import StarRating from "../components/StarRating";
import { SliderData } from "../utils/sliderData";
const Home = () => {
  return (
    <>
      <Carousel slides={SliderData} />
      <ProductCard />
    </>
  );
};

export default Home;
