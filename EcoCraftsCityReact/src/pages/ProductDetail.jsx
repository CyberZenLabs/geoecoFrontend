import React, {useState, useEffect} from 'react';

import {
    DivBoxProductDetailSC,
    DivContentProductDetailSC,
    DivContentProductSC,
    DivProductDiscSC,
    DivProductDiscTitleSC,
    DivProductDiscContentSC,
    SpanQuestionSC,
    DivfirsrowInformSC,
    DivsecondrowInformSC,
    DivProductInformSC,
    DivProductReviewsSC,
    DivProductRatingSC,
    H1ProductBoxSC,
    DivCarouselReviewSC,
    DivButtonBoxSC, DivShopLogo, DivDescStatsContainerSC, DivDescBlockSC,
} from "../styled-components-css/styles.product-detail";
import {ButtonCustomSC} from "../styled-components-css/styles.custom-button";
import "pure-react-carousel/dist/react-carousel.es.css";
import ImageProduct from "../components/components-product-detail/ImageProduct";
import BoxPrice from "../components/components-product-detail/BoxPrice";
import BoxOther from "../components/components-product-detail/BoxOther";
import ReviewsBox from "../components/components-product-detail/ReviewsBox";
import StarRating from "../components/StarRating";
import ReviewShow from "../components/components-product-detail/ReviewShow";
import ReviewCarousel from "../components/components-product-detail/ReviewCarousel";
import ShopBlock from "../components/components-product-detail/ShopBlock";
import Image from '../img/logo.svg'
import AppContext from "../context/AppContext";
import { useParams} from 'react-router-dom';
import { BreadCrumbs } from '../components/BreadCrumbs';
const listContent = [
    {
        text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nesciunt perferendis quos voluptatibus? Beatae cum cumque dolore eveniet expedita, fugiat inventore laborum minus modi, placeat ratione reiciendis sapiente tempora ullam.\n' +
            '                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet atque deserunt dignissimos error, in iste maiores nemo odio odit officia omnis placeat possimus quae quaerat quidem, recusandae tempora ut?',
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
        text: 'lorem',
    },
];

const ProductDetail = () => {


    const [urlSrc, getUrlSrc] = useState(
        'https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg',
    );
    const {productList} = React.useContext(AppContext);
    const [productItem, setProductItem] = useState(null);
    const [listImages, setListImages] = useState([]);
    const params = useParams();
    const [indexSelectedButton, getIndexButton] = useState(0);

    const onClickTab = (index) => (e) => {
        getIndexButton(index);
    };

    useEffect(() => {
        if (productList[+params.id]) {
            let _list = []
            setProductItem(productList[+params.id])
            _list = productList[+params.id].images
            _list.push(productList[+params.id].imageCover)
            setListImages(_list)
            getUrlSrc(productList[+params.id].imageCover)
        }

    }, [productList]);


    console.log(productItem)

    return (
        <DivBoxProductDetailSC>
    <BreadCrumbs margin={true}/>
            {productItem ?
                <DivContentProductDetailSC>
                   
                    <DivContentProductSC>
                        <ImageProduct
                            images={listImages}
                            urlCover={urlSrc}
                            title={productItem.name}
                            rating={productItem.ratingsAverage}
                        />
                        <BoxPrice
                            price={productItem.price}
                        />
                        <ShopBlock
                            Image={Image}
                        />
                    </DivContentProductSC>

                    <DivDescStatsContainerSC>
                        <DivDescBlockSC>
                            <h2>Description</h2>
                            <p>{productItem.summary}</p>
                        </DivDescBlockSC>
                        <DivDescBlockSC>
                            <h2>Characteristics</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non elementum feugiat in venenatis
                                in. Tempus netus et at laoreet. Est nulla eget nisl lobortis tellus. Tempor ut id aenean
                                dignissim consectetur malesuada volutpat ipsum leo. Urna vitae aliquam ullamcorper faucibus
                                vel et dolor vel. Pulvinar aenean odio arcu tempor molestie. Ipsum.</p>
                        </DivDescBlockSC>
                    </DivDescStatsContainerSC>

                    <BoxOther/>

                    {/*<DivProductDiscSC>*/}
                    {/*  <DivProductDiscContentSC>*/}
                    {/*    <ReviewsBox*/}
                    {/*      indexSelectedButton={indexSelectedButton}*/}
                    {/*      onClickTab={onClickTab}*/}
                    {/*      listContent={listContent}*/}
                    {/*    />*/}
                    {/*  </DivProductDiscContentSC>*/}
                    {/*</DivProductDiscSC>*/}


                    <DivProductDiscSC>

                        <DivProductDiscContentSC>
                            <ReviewsBox indexSelectedButton={indexSelectedButton} onClickTab={onClickTab}
                                        listContent={listContent}/>
                        </DivProductDiscContentSC>
                    </DivProductDiscSC>
                    <DivProductDiscSC>

                        <DivProductDiscTitleSC>
                            <SpanQuestionSC>Feedback and questions</SpanQuestionSC>
                        </DivProductDiscTitleSC>
                        <DivProductReviewsSC>
                            <DivProductRatingSC>
                                <H1ProductBoxSC>{productItem.ratingsAverage.toFixed(1)}</H1ProductBoxSC>
                                <StarRating value={productItem.ratingsAverage} fixed={true}/>
                            </DivProductRatingSC>

                            <DivCarouselReviewSC>
                                <ReviewCarousel>
                                    <ReviewShow/>
                                    <ReviewShow/>
                                    <ReviewShow/>
                                    <ReviewShow/>
                                    <ReviewShow/>
                                    <ReviewShow/>
                                </ReviewCarousel>
                            </DivCarouselReviewSC>

                            <DivButtonBoxSC>
                                <ButtonCustomSC width={'338px'} padding={'8px 32px'} primary>
                                    Write a Review
                                </ButtonCustomSC>
                            </DivButtonBoxSC>
                        </DivProductReviewsSC>
                    </DivProductDiscSC>

                </DivContentProductDetailSC>
                :
                null
            }

        </DivBoxProductDetailSC>
    );
};

export default ProductDetail;