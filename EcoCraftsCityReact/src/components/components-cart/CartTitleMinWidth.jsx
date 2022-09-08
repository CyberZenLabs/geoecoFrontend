import React from 'react';
import {
    DivCartTitleMinSC,
    H2CartTitleSC,
    DivSumForPayTitleSC,
    DivCartTitleMinCheckBoxSC, DivContainerTitleSC
} from "../../styled-components-css/styles.cart";
import CustomInputCheckBox from "../CustomInputCheckBox/CustomInputCheckBox";

const CartTitleMinWidth = (props) => {
    return (
        <DivContainerTitleSC>
            <DivCartTitleMinSC>
                <H2CartTitleSC>Cart (4)</H2CartTitleSC>
                <DivSumForPayTitleSC><p>To pay:</p><span>$1300</span></DivSumForPayTitleSC>
                <DivCartTitleMinCheckBoxSC>
                    <CustomInputCheckBox/>
                </DivCartTitleMinCheckBoxSC>
            </DivCartTitleMinSC>
        </DivContainerTitleSC>

    );
}

export default CartTitleMinWidth;