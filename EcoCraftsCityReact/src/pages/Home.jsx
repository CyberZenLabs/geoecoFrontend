import React from "react";

import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import StarRating from "../components/StarRating";
import { ProductGrid } from "../styled-components-css/styles.product-card";
import { SliderData } from "../utils/sliderData";
const Home = () => {
  return (
    <>
      <Carousel slides={SliderData} />
      <ProductGrid>
        {[...Array(15)].map((product) => {
          return <ProductCard />;
        })}
      </ProductGrid>
    </>
  );
};

export default Home;
