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
  DivBoxItemsSC
    
  } from "../styled-components-css/styles.StoreNewProduct";
const StoreNewProduct = () =>{
    return (
        <DivBoxNewProductsBigST>
            <DivBoxItemsSC>
            <MenuProductST> <GreenST>Главная</GreenST> <img src="/default-images/arrowGreen.svg"  /> Магазин<img src="/default-images/arrow.svg"  />Новый товар </MenuProductST>
            </DivBoxItemsSC>
            <DivBoxNewProductsST>
               
            <SettingsShop/>
            
               
                <DivAddProductBox>
                <SpanTextTitleSC>Магазин</SpanTextTitleSC>
                    <DivAddProduct>
                    <SpanTextAddProdctSC>Добавьте свой первый товар</SpanTextAddProdctSC>
                    <ButtonAddProductSC>Добавить товар</ButtonAddProductSC>
                    </DivAddProduct>
                </DivAddProductBox>

        </DivBoxNewProductsST>

        </DivBoxNewProductsBigST>
        

        

    )
    
}
export default StoreNewProduct;