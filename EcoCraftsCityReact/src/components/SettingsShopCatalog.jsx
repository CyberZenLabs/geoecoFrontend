import React from "react"
import{
  DivLogoST,
  DivInfoStoreST,
  MarginST,
  DivInfoST,
  SecondMenuST,
  DivStoreSetingST,
  TextBoldSettingsCS,
  SpanLogoText,
  SpanTextTitleShopSC,
  DivBorderBox,
  DivShopSettings
    
  
  } from "../styled-components-css/styles.SettingsShopCatalog";
  const SettingsShopCatalog = () =>{
    return (


<DivBorderBox>

  <DivShopSettings>
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
<TextBoldSettingsCS>
Профиль
</TextBoldSettingsCS>

<TextBoldSettingsCS>
Магазин 50  
</TextBoldSettingsCS>

<TextBoldSettingsCS>
Отзывы 30  <img src="/default-images/raiting.svg"  />
</TextBoldSettingsCS>

<TextBoldSettingsCS>
Оплата и доставка
</TextBoldSettingsCS>

<TextBoldSettingsCS>
Персональный заказ
</TextBoldSettingsCS>

</SecondMenuST>
  </DivShopSettings>

</DivBorderBox>

    )}
    export default SettingsShopCatalog;
