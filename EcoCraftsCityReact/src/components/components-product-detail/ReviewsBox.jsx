import React from 'react';
import {
    ButtonSelectedSC,
    DivBoxSelectedButtonSC,
    DivBoxSelectionSC
} from "../../styled-components-css/styles.product-detail";

const ReviewsBox = (props) => {
    const {
        indexSelectedButton,
        onClickTab,
        listContent
    } = props;


    return (
        <DivBoxSelectionSC>
            <DivBoxSelectedButtonSC>
                <ButtonSelectedSC
                    isActive={indexSelectedButton === 0}
                    onClick={onClickTab(0)}
                >
                  General information
                </ButtonSelectedSC>
                <ButtonSelectedSC
                    isActive={indexSelectedButton === 1}
                    onClick={onClickTab(1)}
                >
                    Care instructions
                </ButtonSelectedSC>
                <ButtonSelectedSC
                    isActive={indexSelectedButton === 2}
                    onClick={onClickTab(2)}
                >
                    Additionally
                </ButtonSelectedSC>

            </DivBoxSelectedButtonSC>
            <div>
                {
                    listContent[indexSelectedButton].text
                }
            </div>
        </DivBoxSelectionSC>
    );
}

export default ReviewsBox;