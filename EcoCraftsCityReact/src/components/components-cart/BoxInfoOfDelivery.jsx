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
   
}from '../../styled-components-css/styles.BoxInfoDelivery';

const BoxInfoDelivery = props => {
	return (
        <DivRowDeliverySC>
        <DivFirstRowDeliverySC>
        

           <DivTextBoldSizeSC>
               Delivery method
               <DivTextMinSizeSC>изменить</DivTextMinSizeSC>
           </DivTextBoldSizeSC>
          
        </DivFirstRowDeliverySC>
        <DivInfoOfDeliverySC>
           <DivFirstRowInfoSC> <DivTextBoldSizeInfoDeliverySC>Payment method <DivTextMinSizeInfoDeliverySC>изменить</DivTextMinSizeInfoDeliverySC> </DivTextBoldSizeInfoDeliverySC> </DivFirstRowInfoSC>
           <DivSecondRowInfoSC> <DivTextBoldSizeInfoDeliverySC> Ваши данные <DivTextMinSizeInfoDeliverySC>изменить</DivTextMinSizeInfoDeliverySC> </DivTextBoldSizeInfoDeliverySC>   </DivSecondRowInfoSC>
        </DivInfoOfDeliverySC>
        </DivRowDeliverySC>
       
	);
};
export default BoxInfoDelivery;



