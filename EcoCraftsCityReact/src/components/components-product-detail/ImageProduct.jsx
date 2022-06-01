import React, {useState} from 'react';
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
    const [urlSrc, getUrlSrc] = useState('https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg')


    return (
        <DivBoxImagesSC>
            <H5CustomSC>Крестовник роули</H5CustomSC>
            <DivTreeBoxSC>
                <span>Артикул: 34553202</span>
                <StarRating
                    product={false}
                    fixed={true}
                />
                <span>
                                415 отзывов
                            </span>
                <span>
                                Купили более 1000 раз
                            </span>
            </DivTreeBoxSC>
            <DivBoxCarouselSC>
                <CarouselMultiBox
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