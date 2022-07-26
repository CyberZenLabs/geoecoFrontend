import { Margin } from '@mui/icons-material';
import React from 'react';

import SettingsShop from "../components/SettingsShop";
import ReviewShow from '../components/ShowItemCarousel';
import ReviewCarousel from '../components/VenderCarousel';
import VendorInfoMenu from '../components/VendorInfoMenu';
import{
    DivBoxNewProductsST,
    MenuProductST,
  GreenST,
  DivBoxNewProductsBigST,
  SpanTextTitleSC,
  DivAddProduct,
  SpanTextAddProdctSC,
  ButtonAddProductSC,
  DivAddProductBox,
  DivBoxItemsSC,
  DivInfoVendorBoxSC,
  DivButtonChangrInformSC,
  OlifnoSC,
  LiInfoSC,
  DivDisplayFlexSC,
  SpanTitleSC
 
    
  } from "../styled-components-css/styles.VendorProfile";
const VendorProfile = () =>{
    return (
        <DivBoxNewProductsBigST>
            <DivBoxItemsSC>
            <MenuProductST> <GreenST>Главная</GreenST> <img src="/default-images/arrowGreen.svg"  /> Профиль </MenuProductST>
            </DivBoxItemsSC>
            <DivBoxNewProductsST>
               
            <SettingsShop/>
            
               
                <DivAddProductBox>
                
               <VendorInfoMenu/>

               
                 <DivInfoVendorBoxSC>
                  <SpanTitleSC>
                  Отзывы
                  </SpanTitleSC>
               <ReviewCarousel>
                <ReviewShow></ReviewShow>
                <ReviewShow></ReviewShow>
                <ReviewShow></ReviewShow>
                <ReviewShow></ReviewShow>
                <ReviewShow></ReviewShow>
                <ReviewShow></ReviewShow>

               </ReviewCarousel>
                 </DivInfoVendorBoxSC>
                </DivAddProductBox>
                

        </DivBoxNewProductsST>

        </DivBoxNewProductsBigST>
        

        

    )
    
}
export default VendorProfile;