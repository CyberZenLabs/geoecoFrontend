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
                <H2CartTitleSC>Корзина (4)</H2CartTitleSC>
                <DivSumForPayTitleSC><p>К оплате:</p><span>80000 р.</span></DivSumForPayTitleSC>
                <DivCartTitleMinCheckBoxSC>
                    <CustomInputCheckBox/>
                </DivCartTitleMinCheckBoxSC>
            </DivCartTitleMinSC>
        </DivContainerTitleSC>

    );
}

export default CartTitleMinWidth;