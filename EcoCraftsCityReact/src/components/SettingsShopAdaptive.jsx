import React from "react"
import{
  DivLogoST,
  DivInfoStoreST,
  MarginST,
  DivInfoST,
  SecondMenuST,
  DivStoreSetingST,
  TextBoldSettingsCS,
  SpanTextTitleShopSC,
  DivBorderBox,
  DivShopSettings
    
  
  } from "../styled-components-css/styles.settings-shop-adaptive";
  const SettingsShopAdaptive = () =>{
    return (


<DivBorderBox>

  <DivShopSettings>
  <DivInfoStoreST>
<DivLogoST>
</DivLogoST>
<DivInfoST>
<SpanTextTitleShopSC>Название магазина и о чем он</SpanTextTitleShopSC>
<MarginST>Где находится</MarginST>
</DivInfoST>

</DivInfoStoreST>


  </DivShopSettings>

</DivBorderBox>

    )}
    export default SettingsShopAdaptive;
