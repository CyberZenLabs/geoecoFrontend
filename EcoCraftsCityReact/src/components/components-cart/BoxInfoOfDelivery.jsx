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
               <DivTextMinSizeSC>Edit</DivTextMinSizeSC>
           </DivTextBoldSizeSC>
          
        </DivFirstRowDeliverySC>
        <DivInfoOfDeliverySC>
           <DivFirstRowInfoSC> <DivTextBoldSizeInfoDeliverySC>Payment method <DivTextMinSizeInfoDeliverySC>Edit</DivTextMinSizeInfoDeliverySC> </DivTextBoldSizeInfoDeliverySC> </DivFirstRowInfoSC>
           <DivSecondRowInfoSC> <DivTextBoldSizeInfoDeliverySC> Your details <DivTextMinSizeInfoDeliverySC>Edit</DivTextMinSizeInfoDeliverySC> </DivTextBoldSizeInfoDeliverySC>   </DivSecondRowInfoSC>
        </DivInfoOfDeliverySC>
        </DivRowDeliverySC>
       
	);
};
export default BoxInfoDelivery;



