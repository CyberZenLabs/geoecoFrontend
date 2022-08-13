import React, { useState, useEffect, Children } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cloneElement } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ShowItemCarouselPhoto from './ShowItemCarouselPhoto';

import {
  DivButtonWrapSC,
  DivCarouselAllItemsSC,
  DivCarouselMainSC,
  DivCarouselWindowSC,
  SpanTextTitleAdaptiveeSC,
  

} from "../styled-components-css/styles.vendor-carousel-photo";

const VenderCarouselPhoto = ({props}) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1000, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 360 },
      items: 2
    },
  };
  var settings = {
    
  }
  return (
    <>
    
      <Carousel 
      responsive={responsive}>

  <ShowItemCarouselPhoto></ShowItemCarouselPhoto>
  <ShowItemCarouselPhoto></ShowItemCarouselPhoto>
  <ShowItemCarouselPhoto></ShowItemCarouselPhoto>
  <ShowItemCarouselPhoto></ShowItemCarouselPhoto>
  <ShowItemCarouselPhoto></ShowItemCarouselPhoto>

</Carousel>
    </>
  );
};

export default VenderCarouselPhoto;
