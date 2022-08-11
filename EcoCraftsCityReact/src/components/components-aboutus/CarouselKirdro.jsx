import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
    ButtonCarouselSC,
    DivBoxCarouselSC,
    DivContentCarouselSC
} from "../../styled-components-css/styled.carousel";
import CardCarouselShow from "./CardCarouselShow";
import Slider from "react-slick";
import '../../page-css/style.carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const CarouselKirdro = (props) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
        // fade: true,
        customPaging: i => <ButtonCarouselSC>{i + 1}</ButtonCarouselSC>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };




    return (
        <DivBoxCarouselSC>
            {/*<div>*/}
            {/*    kirdro*/}
            {/*</div>*/}
            <DivContentCarouselSC>
                <Slider {...settings}>
                    <CardCarouselShow/>
                    <CardCarouselShow/>
                    <CardCarouselShow/>
                    <CardCarouselShow/>
                    <CardCarouselShow/>
                    <CardCarouselShow/>
                    <CardCarouselShow/>
                </Slider>

            </DivContentCarouselSC>

        </DivBoxCarouselSC>
    );
}

export default CarouselKirdro;