import React from "react";
import {
    DivBoxButtonContentSC,
    DivShopBlockContainer, DivShopBlockWrapper,
    DivShopInfo,
    DivShopLogo
} from "../../styled-components-css/styles.product-detail";
import StarRating from "../StarRating";
import {ButtonCustomSC} from "../../styled-components-css/styles.custom-button";
import {BsPencilSquare} from "react-icons/bs";

const ShopBlock = (props) => {
    return (
        <DivShopBlockWrapper>
            <DivShopBlockContainer>
                <DivShopLogo></DivShopLogo>
                <DivShopInfo>
                    <a href='#'>Store name and what it's about</a>
                    <p>Location</p>
                    <StarRating/>
                </DivShopInfo>
            </DivShopBlockContainer>

            <div>
                <ButtonCustomSC
                    width={'250px'}
                    padding={'8px 32px'}
                    primary>

                    <DivBoxButtonContentSC>
                        <span>Write</span>
                        <BsPencilSquare size={'20px'} />
                    </DivBoxButtonContentSC>
                </ButtonCustomSC>
            </div>

        </DivShopBlockWrapper>



    );
}

export default ShopBlock