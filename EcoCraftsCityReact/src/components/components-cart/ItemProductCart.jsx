import React from 'react';
import {
    DivBoxTitleSC,
    DivImageSC,
    DivItemListSC,
    DivPriceSC,
    SpanTitleSC
} from "../../styled-components-css/styles.cart";
import ButtonGroup from "./ButtonGroup";
import {DivBoxInputCartSC, InputCustomSC} from "../../styled-components-css/styles.productListCart";

const ItemProductCart = (props) => {
    const {
        title,
        discr,
        src,
        price
    } = props

    return (
        <DivItemListSC>
            <DivBoxInputCartSC>
                <InputCustomSC />
            </DivBoxInputCartSC>

            <DivImageSC src={src}>
            </DivImageSC>
            <DivBoxTitleSC>
                <SpanTitleSC>
                    {title}
                </SpanTitleSC>
                <span>
                            {discr}
                        </span>
            </DivBoxTitleSC>
            <ButtonGroup>

            </ButtonGroup>
            <DivPriceSC>
                {price} &#8381;
            </DivPriceSC>
        </DivItemListSC>
    );
}

export default ItemProductCart;