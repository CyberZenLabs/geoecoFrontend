import React from 'react';
import {
    DivBoxButtonSC,
    DivBoxPriceSC,
    DivContentPriceSC,
    H5CustomSC
} from "../../styled-components-css/styles.product-detail";
import {ButtonCustomSC} from "../../styled-components-css/styles.custom-button";

const BoxPrice = (props) => {
    return (
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
    );
}

export default BoxPrice;