import { Margin } from '@mui/icons-material';
import React from 'react'
import{
    DivBoxNewProductsST,
    MenuProductST,
  GreenST,
  DivBoxNewProductsBigST,
  DivLogoST,
  DivInfoStoreST,
  MarginST,
  DivInfoST,
  SecondMenuST,
  DivStoreSetingST,
  TextBold,
  Margin5pxST,
  SpanTextTitleSC,
  DivAddProduct,
  SpanTextAddProdctSC,
  ButtonAddProductSC,
  DivAddProductBox,
  SpanLogoText,
  SpanTextTitleShopSC,
  DivBorderBox,
  DivBoxItemsSC
    
  
  } from "../styled-components-css/styles.new-product";
const StoreNewProduct = () =>{
    return (
        <DivBoxNewProductsBigST>
            <DivBoxItemsSC>
            <MenuProductST> <GreenST>Главная</GreenST> <img src="/default-images/arrowGreen.svg"  /> Магазин<img src="/default-images/arrow.svg"  />Новый товар </MenuProductST>
            </DivBoxItemsSC>
            <DivBoxNewProductsST>
               
            <DivBorderBox>
                <DivInfoStoreST>
            <DivLogoST>
                <SpanLogoText>Логотип Магазина</SpanLogoText>
            </DivLogoST>
            <DivInfoST>
            <SpanTextTitleShopSC>Название магазина и о чем он</SpanTextTitleShopSC>
            <MarginST>Где находится</MarginST>
            </DivInfoST>
           
            </DivInfoStoreST>
           <SecondMenuST>
            <DivStoreSetingST>
            Профиль
            </DivStoreSetingST>
            <DivStoreSetingST>
            Настойки
            </DivStoreSetingST>
            <hr class="razdel" />
            <DivStoreSetingST>
                <TextBold>
                Магазин 50  
                </TextBold>
          
            </DivStoreSetingST>
            <DivStoreSetingST>
            Оплата и доставка
            </DivStoreSetingST>
            <hr class="razdel" />
            <DivStoreSetingST>
            Покупки
            </DivStoreSetingST>
            <DivStoreSetingST>
            Продажи
            </DivStoreSetingST>
            <DivStoreSetingST>
                
                Отзывы 30  <img src="/default-images/raiting.svg"  />
                
            
            </DivStoreSetingST>
          
           </SecondMenuST>
            </DivBorderBox>
                  
               
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