import React from "react";

import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import StarRating from "../components/StarRating";
import {
  ProductGrid,
  HomeContainer,
} from "../styled-components-css/styles.product-card";
import { SliderData } from "../utils/sliderData";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Carousel slides={SliderData} />
       
          {[...Array(15)].map((product) => {
            return <ProductCard />;
          })}
     
      </HomeContainer>
    </>
  );
};

export default Home;
