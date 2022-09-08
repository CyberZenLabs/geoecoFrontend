import React from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import SettingsShopCatalog from '../../components/components-user-store-settings/SettingsShopCatalog';
import { 
  DivMainBlockSC,
   DivBorderBlockSC,
   DivBannerShopContainerSC,
   DivGridCatalogShopSC,
   DivPageContentSC,
   SpanTitlePageSC
  } from "../../styled-components-css/styles-user-store-settings/styles.store-user";

import {
  DivBlocksContainer,
  DivBoxCatalogShopSC,
  DivDeliveryColumns,
  DivDeliveryMethods,
  DivImgDotSC,
  DivInnerWrap,
  DivLeftBlock,
  DivPaymentMethods,
  DivReturnExchange,
  DivRightBlock,
  H1TextTitle,
  PTextBlock,
  PTextDotBlock,
} from '../../styled-components-css/styled.payment-delivery-customer';
import { DivBoxNewProductsBigST } from '../../styled-components-css/styles-seller-store-settings/styles.StoreNewProduct';
import { DivBoxCatalog, DivBoxContentSC, SpanTitleCatalog, WrapShopContainerSC } from '../../styled-components-css/styles-user-store-settings/styles.StoreNoAuth';



const PaymentDelivery = () => {
  return (
    <DivMainBlockSC>
      <BreadCrumbs />

      <DivBorderBlockSC>
        <DivBannerShopContainerSC />

        <DivGridCatalogShopSC>
          <SettingsShopCatalog page={3} />

          <DivPageContentSC>
            <SpanTitlePageSC>Delivery and payment</SpanTitlePageSC>

            <DivBlocksContainer>
              <DivPaymentMethods>
                <DivInnerWrap>
                  <H1TextTitle>Payment methods</H1TextTitle>
                  <PTextDotBlock>
                    <DivImgDotSC />
                    With a card on the site
                  </PTextDotBlock>
                </DivInnerWrap>
              </DivPaymentMethods>
              <DivDeliveryMethods>
                <DivInnerWrap>
                  <H1TextTitle> Delivery methods</H1TextTitle>
                  <DivDeliveryColumns>
                    <DivLeftBlock>
                      <PTextDotBlock>
                        <DivImgDotSC />
                        Russian Post 
                      </PTextDotBlock>
                      <PTextDotBlock>
                        <DivImgDotSC />
                        CDEK
                      </PTextDotBlock>
                    </DivLeftBlock>
                    <DivRightBlock>
                      <PTextBlock>from $3</PTextBlock>
                      <PTextBlock>from $5</PTextBlock>
                    </DivRightBlock>
                  </DivDeliveryColumns>
                </DivInnerWrap>
              </DivDeliveryMethods>
              <DivReturnExchange>
                <DivInnerWrap>
                  <H1TextTitle>Return and exchange conditions</H1TextTitle>
                  <PTextBlock>Provided if the defect is due to our fault</PTextBlock>
                </DivInnerWrap>
              </DivReturnExchange>
            </DivBlocksContainer>
            
          </DivPageContentSC>
        </DivGridCatalogShopSC>
      </DivBorderBlockSC>
    </DivMainBlockSC>
  );
};

export default PaymentDelivery;
