import React from 'react';
import {
    DivBoxTitleSC,
    DivImageSC,
    DivItemListSC,
    DivPriceSC,
    SpanTitleSC,
    SpanPriceSC,
    DivBoxMinWidthTitleProduct,
    DivBoxButtonProducttMinWidthSC,
    DivBoxButtonProducttMinWidthIconSC,
    DivBoxStarMinWidthIconSC, DivBoxStarMinWidthIconTempSC, SpanTitleCartSC,
} from '../../styled-components-css/styles.cart';
import ButtonGroup from './ButtonGroup';
import { DivBoxInputCartSC } from '../../styled-components-css/styles.productListCart';
import CustomInputCheckBox from '../CustomInputCheckBox/CustomInputCheckBox';
import {ButtonCustomSC} from "../../styled-components-css/styles.custom-button";

import {FaRegTrashAlt} from 'react-icons/fa'
import {FiArrowRight} from "react-icons/fi";
import StarRating from "../StarRating";
import {StarAlign} from "../../styled-components-css/styles.product-card";

const ItemProductCartMin = props => {
    const { title, discr, src, price, isSelected } = props;

    function testOnClick() {

    }

    return (
        <DivItemListSC>

            <DivImageSC src={src}></DivImageSC>
            <DivBoxMinWidthTitleProduct>
                <DivPriceSC>
                    <SpanPriceSC>{price} $</SpanPriceSC>
                </DivPriceSC>
                <DivBoxTitleSC>

                    <SpanTitleSC>{title}</SpanTitleSC>
                </DivBoxTitleSC>
                <DivBoxStarMinWidthIconTempSC>
                    <DivBoxStarMinWidthIconSC>
                        <StarRating product={true} />
                    </DivBoxStarMinWidthIconSC>
                    <span>
                        5 000
                    </span>
                </DivBoxStarMinWidthIconTempSC>

                <SpanTitleCartSC>Store</SpanTitleCartSC>
            </DivBoxMinWidthTitleProduct>

            <ButtonGroup></ButtonGroup>
            <DivBoxButtonProducttMinWidthSC>

                <DivBoxButtonProducttMinWidthIconSC>
                    <FaRegTrashAlt size={'21px'} color={'red'} />
                </DivBoxButtonProducttMinWidthIconSC>

                <ButtonCustomSC
                    // onClick={() => setShowCatalog(!showCatalog)}
                    width={'96px'}
                    height={'30px'}
                    // padding={'8px 32px'}
                    primary={true}

                >
                    <span>Purchase</span>
                </ButtonCustomSC>
            </DivBoxButtonProducttMinWidthSC>

        </DivItemListSC>
    );
};

export default ItemProductCartMin;
