import React from "react"
import{
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
  const SettingsShop = () =>{
    return (


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
Profile
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

    )}
    export default SettingsShop;
