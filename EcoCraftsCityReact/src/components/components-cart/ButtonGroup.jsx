import React from 'react';
import {DivBoxCountProductSC, DivBoxCountProductTempSC} from "../../styled-components-css/styles.productListCart";

const  ButtonGroup = (props) => {
    return (
        <DivBoxCountProductSC>
            <DivBoxCountProductTempSC>
                <button>&#8722;</button>
                <span>1</span>
                <button>+</button>
            </DivBoxCountProductTempSC>

        </DivBoxCountProductSC>
    );
}

export default ButtonGroup;