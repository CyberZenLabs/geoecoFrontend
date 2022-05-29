import React, {useState} from 'react'
import {
    DivBoxProductDetailSC,
    DivContentProductDetailSC,
    NavLinkSC,
    DivHistorySC,
    DivBackBoxSC,
    DivContentProductSC,
    DivBoxImagesSC,
    DivBoxButtonSC,
    H5CustomSC,
    DivTreeBoxSC,
    DivBoxPriceSC,
    DivContentPriceSC,
    DivNumberTitlePrice,
    DivBoxCarouselSC, ImageCarouselCustom, DivBoxImageCarouselSC
} from "../styled-components-css/styles.product-detail";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {
    NavLink
} from "react-router-dom"
import {
    FaArrowLeft,
    FaRubleSign
} from "react-icons/fa";
import StarRating from "../components/StarRating";
import {BoxContentButton} from "../styled-components-css/styles.navbar";
import UilListUl from "@iconscout/react-unicons/icons/uil-list-ul";
import {ButtonCustomSC} from "../styled-components-css/styles.custom-button";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Image,
    DotGroup,
    ImageWithZoom
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const CustomPropsBreadcrumb = ({ someProp }) => (
    <span>{someProp}</span>
);

const routes = [
    { path: '/custom-props', breadcrumb: CustomPropsBreadcrumb, props: { someProp: 'Hi' }},
];


const ProductDetail = () => {
    const breadcrumbs = useBreadcrumbs(routes);
    const [urlSrc, getUrlSrc] = useState('https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg')

    const eventLogger = (ev) => {
        // eslint-disable-next-line no-console
        if (ev.nativeEvent.srcElement.localName !== 'div') {
            getUrlSrc(ev.nativeEvent.srcElement.currentSrc)
        }

        // console.log('>>>>>>>>>>',ev.nativeEvent.srcElement);
    }

    return (
        <DivBoxProductDetailSC>
            <DivContentProductDetailSC>
                <DivHistorySC>
                    <DivBackBoxSC>
                        <FaArrowLeft
                            color={"#85CB33"}
                            size={15}
                        />
                        <NavLinkSC
                            iscolor={true}
                            to={'/'}
                        >Назад</NavLinkSC>
                    </DivBackBoxSC>
                    <div>
                        {breadcrumbs.map(({
                                              match,
                                              breadcrumb
                                          }) => (
                            <span key={match.pathname}>
                            <NavLinkSC to={match.pathname}>{breadcrumb} / </NavLinkSC>
                        </span>
                        ))}
                    </div>

                </DivHistorySC>
                <DivContentProductSC>
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
                            <CarouselProvider
                                naturalSlideWidth={30}
                                naturalSlideHeight={20}
                                totalSlides={5}
                                hasMasterSpinner={true}
                                touchEnabled={true}
                                visibleSlides={3}
                                // infinite
                                orientation={'vertical'}
                                lockOnWindowScroll
                                // visibleSlides={3}
                                // isIntrinsicHeight={true}
                            >
                                <Slider

                                    trayProps={{
                                        // clipboard events? Sure why not.
                                        // onCopy: eventLogger,
                                        // onCut: eventLogger,
                                        // onPaste: eventLogger,

                                        // composition events
                                        // onCompositionEnd: eventLogger,
                                        // onCompositionStart: eventLogger,
                                        // onCompositionUpdate: eventLogger,

                                        // keyboard events
                                        // onKeyDown: eventLogger,
                                        // onKeyPress: eventLogger,
                                        // onKeyUp: eventLogger,

                                        // focus events,
                                        // onFocus: eventLogger,
                                        // onBlur: eventLogger,

                                        // form events,
                                        // onChange: eventLogger,
                                        // onInput: eventLogger,
                                        // onInvalid: eventLogger,
                                        // onSubmit: eventLogger,

                                        // mouse events
                                        onClick: eventLogger,
                                        // onContextMenu: eventLogger,
                                        // onDoubleClick: eventLogger,
                                        // onDrag: eventLogger,
                                        // onDragEnd: eventLogger,
                                        // onDragEnter: eventLogger,
                                        // onDragExit: eventLogger,
                                        // onDragLeave: eventLogger,
                                        // onDragOver: eventLogger,
                                        // onDragStart: eventLogger,
                                        // onDrop: eventLogger,
                                        // onMouseDown: eventLogger,
                                        // onMouseEnter: eventLogger,
                                        // onMouseLeave: eventLogger,
                                        // onMouseMove: eventLogger,
                                        // onMouseOut: eventLogger,
                                        // onMouseOver: eventLogger,
                                        // onMouseUp: eventLogger,

                                        // touch events
                                        // onTouchCancel: eventLogger,
                                        // onTouchEnd: eventLogger,
                                        // onTouchMove: eventLogger,
                                        onTouchStart: eventLogger,

                                        // pointer events
                                        // onPointerDown: eventLogger,
                                        // onPointerMove: eventLogger,
                                        // onPointerUp: eventLogger,
                                        // onPointerCancel: eventLogger,
                                        // onGotPointerCapture: eventLogger,
                                        // onLostPointerCapture: eventLogger,
                                        // onPointerEnter: eventLogger,
                                        // onPointerLeave: eventLogger,
                                        // onPointerOver: eventLogger,
                                        // onPointerOut: eventLogger,

                                        draggable: true,
                                    }}
                                >
                                    <Slide index={0}>
                                        <DivBoxImageCarouselSC>
                                            <ImageCarouselCustom
                                                src={'https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg'}/>
                                        </DivBoxImageCarouselSC>

                                    </Slide>
                                    <Slide index={1}>
                                        <DivBoxImageCarouselSC>
                                            <ImageCarouselCustom src={'https://static.insales-cdn.com/files/1/6751/19995231/original/ss22_new.jpg'}/>
                                        </DivBoxImageCarouselSC>

                                    </Slide>
                                    <Slide index={2}>
                                        <DivBoxImageCarouselSC>
                                            <ImageCarouselCustom src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}/>
                                        </DivBoxImageCarouselSC>

                                    </Slide>
                                    <Slide index={3}>
                                        <DivBoxImageCarouselSC>
                                            <ImageCarouselCustom src={'https://static.insales-cdn.com/files/1/6751/19995231/original/ss22_new.jpg'}/>
                                        </DivBoxImageCarouselSC>

                                    </Slide>
                                    <Slide index={4}>
                                        <DivBoxImageCarouselSC>
                                            <ImageCarouselCustom
                                                src={'https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg'}/>
                                        </DivBoxImageCarouselSC>

                                    </Slide>
                                </Slider>
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </CarouselProvider>
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
                        </DivBoxCarouselSC>

                    </DivBoxImagesSC>
                    <DivBoxButtonSC>
                        <div>

                        </div>
                        <DivBoxPriceSC>
                            <DivContentPriceSC>
                                <div>
                                    <H5CustomSC>26 001 </H5CustomSC>
                                </div>

                                <DivNumberTitlePrice>
                                    <FaRubleSign
                                        color={"#000"}
                                        size={27}
                                    />
                                </DivNumberTitlePrice>

                            </DivContentPriceSC>

                        </DivBoxPriceSC>

                        <div>
                            <ButtonCustomSC
                                width={'250px'}
                                padding={'8px 32px'}
                                primary
                            >
                                Добавить в корзину
                            </ButtonCustomSC>
                        </div>
                        <div>
                            <ButtonCustomSC
                                width={'250px'}
                                padding={'8px 32px'}
                            >
                                Купить сейчас
                            </ButtonCustomSC>
                        </div>

                    </DivBoxButtonSC>
                </DivContentProductSC>
                ProductDetail
            </DivContentProductDetailSC>

        </DivBoxProductDetailSC>
    )
}

export default ProductDetail