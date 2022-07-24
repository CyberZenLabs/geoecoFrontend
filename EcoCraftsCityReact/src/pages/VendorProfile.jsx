import { Margin } from '@mui/icons-material';
import React from 'react';
import SettingsShop from "../components/SettingsShop";
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
  UlifnoSC
    
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
                
                 <DivInfoVendorBoxSC><SpanTextTitleSC>Имя профиля  <DivButtonChangrInformSC>Изменить информацию</DivButtonChangrInformSC></SpanTextTitleSC>
                 <UlifnoSC>
                    <li>fffff</li>
                    <li>ffffff</li>
                    <li>fffffff</li>
                    <li>fffff</li>
                 </UlifnoSC>
                

                    
                
                    
               
                        
                        </DivInfoVendorBoxSC>
                 <DivInfoVendorBoxSC>FFFFFF</DivInfoVendorBoxSC>
                </DivAddProductBox>
                

        </DivBoxNewProductsST>

        </DivBoxNewProductsBigST>
        

        

    )
    
}
export default VendorProfile;