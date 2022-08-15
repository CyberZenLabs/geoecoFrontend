import React, { useState, useEffect, Children } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cloneElement } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ShowItemCarouselReview from './ShowItemCarouselReview';

import {
  DivButtonWrapSC,
  DivCarouselAllItemsSC,
  DivCarouselMainSC,
  DivCarouselWindowSC,
  SpanTextTitleAdaptiveeSC,
  

} from "../styled-components-css/styles.vendor-carousel-review";

const VenderCarouselReview = ({props}) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1920 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 720 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 720, min: 360 },
      items: 1
    },
  };
  var settings = {
    
  }
  return (
    <>
    
      <Carousel 
      responsive={responsive}>

  <ShowItemCarouselReview></ShowItemCarouselReview>
    <ShowItemCarouselReview></ShowItemCarouselReview>
    <ShowItemCarouselReview></ShowItemCarouselReview>
    <ShowItemCarouselReview></ShowItemCarouselReview>

</Carousel>
    </>
  );
};

export default VenderCarouselReview;
