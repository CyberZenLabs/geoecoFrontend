import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel from 'react-multi-carousel';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import 'react-multi-carousel/lib/styles.css';
import {
  ButtonCarouselSC,
  DivBoxCarouselSC,
  DivContentCarouselSC,
  DivPageButtonSC,
} from '../../styled-components-css/styled.carousel';
import CardCarouselShow from './CardCarouselShow';
import Slider from 'react-slick';
import '../../page-css/style.carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        style={{
          ...style,
          width: 'max-content',
          height: 'max-content',
        }}
        className={className}
        onClick={onClick}
      >
        <DivPageButtonSC>
          <FiArrowRight />
        </DivPageButtonSC>
      </div>
      {/* <div
        className={className}
        style={{
          ...style,
          display: 'grid',
          background: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          color: 'black',
        }}
        onClick={onClick}
      >
        <FiArrowRight/>
      </div> */}
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        style={{
          ...style,
          width: 'max-content',
          height: 'max-content',
        }}
        className={className}
        onClick={onClick}
      >
        <DivPageButtonSC>
          <FiArrowLeft />
        </DivPageButtonSC>
      </div>
    </>
  );
}

const CarouselKirdro = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    // fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <DivBoxCarouselSC>
      {/*<div>*/}
      {/*    kirdro*/}
      {/*</div>*/}
      <DivContentCarouselSC>
        <Slider {...settings}>
          <CardCarouselShow />
          <CardCarouselShow />
          <CardCarouselShow />
          <CardCarouselShow />
          <CardCarouselShow />
          <CardCarouselShow />
          <CardCarouselShow />
        </Slider>
      </DivContentCarouselSC>
    </DivBoxCarouselSC>
  );
};

export default CarouselKirdro;
