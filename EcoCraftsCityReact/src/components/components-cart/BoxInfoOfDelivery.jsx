import React from 'react';
import {
   
    DivFirstRowDeliverySC,
    DivTextBoldSizeSC,
    DivInfoOfDeliverySC,
    DivRowDeliverySC,
    DivFirstRowInfoSC,
    DivSecondRowInfoSC,
    DivTextMinSizeSC,
    DivTextBoldSizeInfoDeliverySC,
    DivTextMinSizeInfoDeliverySC,
   
}from '../../styled-components-css/styles.BoxInfoOfDelivery';

const BoxInfoDelivery = props => {
	return (
        <DivRowDeliverySC>
        <DivFirstRowDeliverySC>
        

           <DivTextBoldSizeSC>Способ доставки <DivTextMinSizeSC>изменить</DivTextMinSizeSC> </DivTextBoldSizeSC> 
          
        </DivFirstRowDeliverySC>
        <DivInfoOfDeliverySC>
           <DivFirstRowInfoSC> <DivTextBoldSizeInfoDeliverySC>Способ доставки <DivTextMinSizeInfoDeliverySC>изменить</DivTextMinSizeInfoDeliverySC> </DivTextBoldSizeInfoDeliverySC> </DivFirstRowInfoSC>
           <DivSecondRowInfoSC> <DivTextBoldSizeInfoDeliverySC>Способ доставки <DivTextMinSizeInfoDeliverySC>изменить</DivTextMinSizeInfoDeliverySC> </DivTextBoldSizeInfoDeliverySC>   </DivSecondRowInfoSC>
        </DivInfoOfDeliverySC>
        </DivRowDeliverySC>
       
	);
};
export default BoxInfoDelivery;



