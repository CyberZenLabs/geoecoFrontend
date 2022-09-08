import React from 'react';
import {
    DivBoxOtherProductImgSC, DivBoxOtherProductSC,
    DivBoxOtherProductTextSC,
    DivImgSC
} from "../../styled-components-css/styles.product-detail";

const BoxOther = (props) => {
    return (
        <DivBoxOtherProductSC>
            <DivBoxOtherProductTextSC>
                        <span>
                        Other items in the store
                        </span>
                <a href="/">
                    Show all
                </a>
            </DivBoxOtherProductTextSC>
            <DivBoxOtherProductImgSC>
                <DivImgSC
                    src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                >

                </DivImgSC>
                <DivImgSC
                    src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                >

                </DivImgSC>
                <DivImgSC
                    src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                >

                </DivImgSC>
                <DivImgSC
                    src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                >

                </DivImgSC>
                <DivImgSC
                    src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                >

                </DivImgSC>
                <DivImgSC
                    src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                >

                </DivImgSC>
                <DivImgSC
                    src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}
                >

                </DivImgSC>
            </DivBoxOtherProductImgSC>

        </DivBoxOtherProductSC>
    );
}

export default BoxOther;