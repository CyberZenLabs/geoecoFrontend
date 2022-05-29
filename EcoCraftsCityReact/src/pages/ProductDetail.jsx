import React from 'react'
import {
    DivBoxProductDetailSC,
    DivContentProductDetailSC,
    NavLinkSC,
    DivHistorySC,
    DivBackBoxSC,
    DivContentProductSC,
    DivBoxImagesSC,
    DivBoxButtonSC,
    H5CustomSC, DivTreeBoxSC, DivBoxPriceSC, DivContentPriceSC, DivNumberTitlePrice
} from "../styled-components-css/styles.product-detail";
// import useBreadcrumbs from 'use-react-router-breadcrumbs';
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

const CustomPropsBreadcrumb = ({ someProp }) => (
    <span>{someProp}</span>
);

const routes = [
    { path: '/custom-props', breadcrumb: CustomPropsBreadcrumb, props: { someProp: 'Hi' }},
];

const ProductDetail = () => {
    // const breadcrumbs = useBreadcrumbs(routes);


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
                        {/*{breadcrumbs.map(({*/}
                        {/*                      match,*/}
                        {/*                      breadcrumb*/}
                        {/*                  }) => (*/}
                        {/*    <span key={match.pathname}>*/}
                        {/*    <NavLinkSC to={match.pathname}>{breadcrumb} / </NavLinkSC>*/}
                        {/*</span>*/}
                        {/*))}*/}
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
                    </DivBoxImagesSC>
                    <DivBoxButtonSC>
                        <div></div>
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