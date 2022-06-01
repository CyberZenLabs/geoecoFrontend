import React from 'react';
import {CarouselProvider, ImageWithZoom, Slide, Slider} from "pure-react-carousel";

const CarouselMonoBox = (props) => {
    const {
        urlSrc
    } = props

    return (
        <CarouselProvider
            naturalSlideWidth={70}
            naturalSlideHeight={70}
            totalSlides={1}
            hasMasterSpinner={true}
            touchEnabled={true}
            infinite
            // currentSlide={}
        >
            <Slider

            >
                <Slide index={0}>
                    <ImageWithZoom
                        src={urlSrc}/>
                </Slide>
            </Slider>
            {/*<ButtonBack>Back</ButtonBack>*/}
            {/*<ButtonNext>Next</ButtonNext>*/}
            {/*<DotGroup dotNumbers={false} />*/}
        </CarouselProvider>
    );
}

export default CarouselMonoBox;