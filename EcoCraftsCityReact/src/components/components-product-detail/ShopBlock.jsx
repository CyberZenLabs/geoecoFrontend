import React from "react";
import {DivShopBlockContainer, DivShopInfo, DivShopLogo} from "../../styled-components-css/styles.product-detail";
import StarRating from "../StarRating";

const ShopBlock = (props) => {
    const {
        Image
    } = props
    return (
        <DivShopBlockContainer>

            <DivShopLogo Image={Image}>
                {/*<img src={Image} alt=""/>*/}
            </DivShopLogo>
            <DivShopInfo>
                <h3>Название магазина и о чем он</h3>
                <p>Где находится</p>
                <StarRating/>
            </DivShopInfo>





        </DivShopBlockContainer>
    );
}

export default ShopBlock