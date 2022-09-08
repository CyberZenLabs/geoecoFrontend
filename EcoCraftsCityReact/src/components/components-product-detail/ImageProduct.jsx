import React, {useState, useEffect} from 'react';
import {
    BackButtonCustomSC,
    DivBoxCarouselSC,
    DivBoxImageCarouselSC,
    DivBoxImagesSC,
    DivBoxLeftCarouselSC,
    DivTreeBoxSC,
    H5CustomSC,
    ImageCarouselCustom,
    NextButtonCustomSC
} from "../../styled-components-css/styles.product-detail";
import StarRating from "../StarRating";
import {CarouselProvider, ImageWithZoom, Slide, Slider} from "pure-react-carousel";
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";
import CarouselMultiBox from "./CarouselMultiBox";
import CarouselMonoBox from "./CarouselMonoBox";

const ImageProduct = (props) => {
    const {
        images,
        urlCover,
        title,
        rating
    } = props;
    const [urlSrc, getUrlSrc] = useState('https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg')


    useEffect(() => {
        getUrlSrc(urlCover)
    }, []);


    return (
        <DivBoxImagesSC>
            <H5CustomSC>{title}</H5CustomSC>
            <DivTreeBoxSC>
                <span>Article: 34553202</span>
                <StarRating
                value={rating}
                    product={false}
                    fixed={true}
                />
                <span>
                                415 Reviews
                            </span>
                <span>
                                Bought over 1000 times
                            </span>
            </DivTreeBoxSC>
            <DivBoxCarouselSC>
                <CarouselMultiBox
                    images={images}
                    getUrlSrc={getUrlSrc}
                />


                <CarouselMonoBox
                    urlSrc={urlSrc}
                />
            </DivBoxCarouselSC>

        </DivBoxImagesSC>
    );
}

export default ImageProduct;