import React from 'react';
import {
    DivBoxButtonSC,
    DivBoxPriceSC,
    DivContentPriceSC,
    H5CustomSC
} from "../../styled-components-css/styles.product-detail";
import {ButtonCustomSC} from "../../styled-components-css/styles.custom-button";
import { BsFillCartPlusFill } from 'react-icons/bs';
import { BiRun } from 'react-icons/bi';
import {DivBoxButtonContentSC} from "../../styled-components-css/styles.product-detail";

const BoxPrice = (props) => {
    const {price} = props
    return (
        <DivBoxButtonSC>
            <div>

            </div>
            <DivBoxPriceSC>
                <DivContentPriceSC>
                    <div>
                        <H5CustomSC>{price} $</H5CustomSC>
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
                    primary>

                    <DivBoxButtonContentSC>
                        <span>Add to cart</span>
                        <BsFillCartPlusFill size={'20px'} />
                    </DivBoxButtonContentSC>
                </ButtonCustomSC>
            </div>

            <div>
                <ButtonCustomSC
                    width={'250px'}
                    padding={'8px 32px'}
                >
                    <DivBoxButtonContentSC>
                        <span>Buy now</span>
                        <BiRun size={'20px'} />
                    </DivBoxButtonContentSC>
                </ButtonCustomSC>
            </div>
        </DivBoxButtonSC>
    );
}

export default BoxPrice;