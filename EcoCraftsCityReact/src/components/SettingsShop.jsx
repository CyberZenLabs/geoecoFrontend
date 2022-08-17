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
<SpanLogoText>Store logo</SpanLogoText>
</DivLogoST>
<DivInfoST>
<SpanTextTitleShopSC>Store name and description</SpanTextTitleShopSC>
<MarginST>Store location</MarginST>
</DivInfoST>

</DivInfoStoreST>
<SecondMenuST>
<DivStoreSetingST>
Profile
</DivStoreSetingST>
<DivStoreSetingST>
Settings
</DivStoreSetingST>
<hr class="razdel" />
<DivStoreSetingST>
<TextBold>
Store 50  
</TextBold>

</DivStoreSetingST>
<DivStoreSetingST>
Delivery and payment
</DivStoreSetingST>
<hr class="razdel" />
<DivStoreSetingST>
Purchases
</DivStoreSetingST>
<DivStoreSetingST>
Sales
</DivStoreSetingST>
<DivStoreSetingST>

Reviews 30  <img src="/default-images/raiting.svg"  />


</DivStoreSetingST>

</SecondMenuST>
</DivBorderBox>

    )}
    export default SettingsShop;
