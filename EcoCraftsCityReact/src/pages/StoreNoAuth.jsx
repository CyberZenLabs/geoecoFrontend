import { Margin } from '@mui/icons-material';
import React from 'react';
import {
    DivLogoST,
  DivInfoStoreST,
  MarginST,
  DivInfoST,
  SecondMenuST,
  DivStoreSetingST,
  TextBold,
  SpanLogoText,
  SpanTextTitleShopSC,
  DivBorderBox,
} from "../styled-components-css/styles.SettingsShop";
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
  
  import{
    ImgBannerShopSC,
    DivBoxContentSC,
    DivBoxCatalogShopSC,
    DivBoxCatalog,
    SpanTitleCatalog
  } from "../styled-components-css/styles.StoreNoAuth";
const StoreNoAuth = () =>{
    return (
        <DivBoxNewProductsBigST>
            <DivBoxItemsSC>
            <MenuProductST> <GreenST>Назад</GreenST> <img src="/default-images/arrowGreen.svg"  /> Название магазина</MenuProductST>
            </DivBoxItemsSC>
            <DivBoxContentSC>
            <ImgBannerShopSC src="/banner-images/ShopBanner.jpg"></ImgBannerShopSC>
            
            <DivBoxCatalogShopSC>

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
            </DivBoxCatalogShopSC>
            
            <DivBoxCatalog>
                <SpanTitleCatalog>Название магазина, что производят</SpanTitleCatalog>
            </DivBoxCatalog>
            </DivBoxContentSC>

        </DivBoxNewProductsBigST>
        

        

    )
    
}
export default StoreNoAuth;