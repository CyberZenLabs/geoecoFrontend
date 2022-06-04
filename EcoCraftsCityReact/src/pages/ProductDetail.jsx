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
    DivBoxCarouselSC,
    ImageCarouselCustom,
    DivBoxImageCarouselSC,
    BackButtonCustomSC,
    NextButtonCustomSC,
    DivBoxLeftCarouselSC,
    DivBoxOtherProductSC,
    DivBoxOtherProductTextSC,
    DivBoxOtherProductImgSC,
    DivImgSC,
    DivProductDiscSC,
    DivProductDiscTitleSC,
    DivProductDiscContentSC, SpanQuestionSC, DivBoxSelectionSC, DivBoxSelectedButtonSC, ButtonSelectedSC
} from "../styled-components-css/styles.product-detail";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {
    NavLink
} from "react-router-dom"
import {
    FaArrowLeft,
    FaRubleSign
} from "react-icons/fa";
import {
    AiOutlineArrowDown,
    AiOutlineArrowUp
} from 'react-icons/ai'
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

const listContent = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nesciunt perferendis quos voluptatibus? Beatae cum cumque dolore eveniet expedita, fugiat inventore laborum minus modi, placeat ratione reiciendis sapiente tempora ullam.\n' +
            '                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet atque deserunt dignissimos error, in iste maiores nemo odio odit officia omnis placeat possimus quae quaerat quidem, recusandae tempora ut?'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        text: 'lorem'
    }
]


const ProductDetail = () => {
 
    const breadcrumbs = useBreadcrumbs(routes);
    const [urlSrc, getUrlSrc] = useState('https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg')
    const [indexSelectedButton, getIndexButton] = useState(0)

    const eventLogger = (ev) => {
        // eslint-disable-next-line no-console
        if (ev.nativeEvent.srcElement.localName !== 'div') {
            getUrlSrc(ev.nativeEvent.srcElement.currentSrc)
        }

        // console.log('>>>>>>>>>>',ev.nativeEvent.srcElement);
    }

    const onClickTab = (index) => (e) => {
        getIndexButton(index)
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
                            <DivBoxLeftCarouselSC>
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
                                    <BackButtonCustomSC>
                                        <AiOutlineArrowUp
                                            color={"#3D3D3D"}
                                            size={25}
                                        />
                                    </BackButtonCustomSC>
                                    <Slider

                                        trayProps={{
                                            onClick: eventLogger,

                                            onTouchStart: eventLogger,



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
                                    <NextButtonCustomSC>
                                        <AiOutlineArrowDown
                                            color={"#3D3D3D"}
                                            size={25}
                                        />
                                    </NextButtonCustomSC>
                                </CarouselProvider>
                            </DivBoxLeftCarouselSC>

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
                                    <H5CustomSC>26 001 &#8381;</H5CustomSC>
                                </div>

                                {/*<DivNumberTitlePrice>*/}
                                {/*    <FaRubleSign*/}
                                {/*        color={"#000"}*/}
                                {/*        size={27}*/}
                                {/*    />*/}
                                {/*</DivNumberTitlePrice>*/}

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
                <DivBoxOtherProductSC>
                    <DivBoxOtherProductTextSC>
                        <span>
                            Другие товары магазина
                        </span>
                        <a href="/">
                            Смотреть все
                        </a>
                    </DivBoxOtherProductTextSC>
                    <DivBoxOtherProductImgSC>
                        <DivImgSC
                            src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                        >

                        </DivImgSC>
                        <DivImgSC
                            src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                        >

                        </DivImgSC>
                        <DivImgSC
                            src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                        >

                        </DivImgSC>
                        <DivImgSC
                            src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                        >

                        </DivImgSC>
                        <DivImgSC
                            src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                        >

                        </DivImgSC>
                        <DivImgSC
                            src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                        >

                        </DivImgSC>
                        <DivImgSC
                            src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                        >

                        </DivImgSC>
                    </DivBoxOtherProductImgSC>

                </DivBoxOtherProductSC>
                <DivProductDiscSC>
                    <DivProductDiscTitleSC>
                        <span>
                            Описание растения
                        </span>
                    </DivProductDiscTitleSC>
                    <DivProductDiscContentSC>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nesciunt perferendis quos voluptatibus? Beatae cum cumque dolore eveniet expedita, fugiat inventore laborum minus modi, placeat ratione reiciendis sapiente tempora ullam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet atque deserunt dignissimos error, in iste maiores nemo odio odit officia omnis placeat possimus quae quaerat quidem, recusandae tempora ut?
                        </p>
                        <a>
                            Развернуть описание
                        </a>
                    </DivProductDiscContentSC>

                </DivProductDiscSC>
                <DivProductDiscSC>
                    <DivProductDiscTitleSC>
                        <span>
                            Общие характеристики
                        </span>
                    </DivProductDiscTitleSC>
                    <DivProductDiscContentSC>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nesciunt perferendis quos voluptatibus? Beatae cum cumque dolore eveniet expedita, fugiat inventore laborum minus modi, placeat ratione reiciendis sapiente tempora ullam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet atque deserunt dignissimos error, in iste maiores nemo odio odit officia omnis placeat possimus quae quaerat quidem, recusandae tempora ut?
                        </p>
                    </DivProductDiscContentSC>
                </DivProductDiscSC>
                <DivProductDiscSC>
                    <DivProductDiscTitleSC>
                        <span>
                            Дополнительная информация
                        </span>
                    </DivProductDiscTitleSC>
                    <DivProductDiscContentSC>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nesciunt perferendis quos voluptatibus? Beatae cum cumque dolore eveniet expedita, fugiat inventore laborum minus modi, placeat ratione reiciendis sapiente tempora ullam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet atque deserunt dignissimos error, in iste maiores nemo odio odit officia omnis placeat possimus quae quaerat quidem, recusandae tempora ut?
                        </p>
                        <a >
                            Развернуть  характеристики
                        </a>
                    </DivProductDiscContentSC>
                </DivProductDiscSC>
                <DivProductDiscSC>
                    <DivProductDiscTitleSC>
                        <SpanQuestionSC>
                            Отзывы и вопросы
                        </SpanQuestionSC>
                    </DivProductDiscTitleSC>
                    <DivProductDiscContentSC>
                        <DivBoxSelectionSC>
                            <DivBoxSelectedButtonSC>
                                <ButtonSelectedSC
                                    isActive={indexSelectedButton === 0}
                                    onClick={onClickTab(0)}
                                >
                                    Отзывы 415
                                </ButtonSelectedSC>
                                <ButtonSelectedSC
                                    isActive={indexSelectedButton === 1}
                                    onClick={onClickTab(1)}
                                >
                                    Вопросы 5
                                </ButtonSelectedSC>
                                <ButtonSelectedSC
                                    isActive={indexSelectedButton === 2}
                                    onClick={onClickTab(2)}
                                >
                                    Статьи 1
                                </ButtonSelectedSC>

                            </DivBoxSelectedButtonSC>
                            <div>
                                {
                                    listContent[indexSelectedButton].text
                                }
                            </div>
                        </DivBoxSelectionSC>
                        <ButtonCustomSC
                            width={'338px'}
                            padding={'8px 32px'}
                            primary
                        >
                            Написать отзыв
                        </ButtonCustomSC>
                    </DivProductDiscContentSC>
                </DivProductDiscSC>

            </DivContentProductDetailSC>

        </DivBoxProductDetailSC>
    )
}

export default ProductDetail