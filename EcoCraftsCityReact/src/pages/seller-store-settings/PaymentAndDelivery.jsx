import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import FinanceTable from '../../components/FinanceTable';
import { DivBackBoxSC, DivHistorySC, NavLinkSC } from '../../styled-components-css/styles.product-detail';

import { BreadCrumbs } from '../../components/BreadCrumbs';

import {
  DivStoreLeftPanelSC,
  DivStoreRightPanelSC,
  DivStoreWrapSC,
  DivWrapLinkSC,
  H1BoldTextSC,
} from '../../styled-components-css/styles-seller-store-settings/styles.store';
import AppContext from '../../context/AppContext';
import SettingsShopCatalog from '../../components/components-user-store-settings/SettingsShopCatalog';

import {
  ButtonContentEditSC,
  ButtonSave,
  DivContent1PageSC,
  DivContent2SC,
  DivContentDivisionSC,
  DivContentInfoButtonSC,
  DivContentRows2Page2SC,
  DivContentRows2PageSC,
  DivContentRowsSC,
  DivContentSC,
  DivFirstColumnSC,
  DivMainInfo2PageSC,
  DivMainInfoSC,
  DivPagesSC,
  DivStoreInfoStuffSC,
  EmailFieldSC,
  H1ContentDefinSC,
  H1ContentInfoSC,
  H1ContentNameMailSC,
  H1ContentNameSC,
  H1PageOptionHidesSC,
  H1PageOptionSC,
  DivBankCardSC,
  DivInfoCard,
  NumberCardSC,
  DivTextOpisanitSC,
  SmalPlaceholder,
  FlexSC,
  MarginLeftSC,
  DivMainInfo3PageSC,
  LightTextSC,
  ContentInfoSC,
  GridPayment,
  DivInfoPageSC,
  DivPaymentContentSC,
  PaymentsSC,
  DivImgMirSC,
  PaddingSC,
  FlexSDEKSC,
} from '../../styled-components-css/styles-seller-store-settings/styles.PaymentAndDelivery';
import VendorNavMenu from '../../components/VendorNavMenu';
import CustomInputCheckBox from '../../components/CustomInputCheckBox/CustomInputCheckBox';
const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
const routes = [
  {
    path: '/custom-props',
    breadcrumb: CustomPropsBreadcrumb,
    props: { someProp: 'Hi' },
  },
];
const PaymentAndDelivery = ({ product }) => {
  const { setPass, setMail } = React.useContext(AppContext);
  const openPass = () => {
    setPass(true);
  };
  const openMail = () => {
    setMail(true);
  };

  const [indexSelectedButton, getIndexButton] = useState(0);
  const onClickTab = (index) => (e) => {
    getIndexButton(index);
  };
  const listContent = [
    {
      blocks: (
        <>
          <DivMainInfoSC>
            <H1ContentInfoSC>Bank card</H1ContentInfoSC>

            <DivContentRowsSC>
              <DivBankCardSC>
                <DivInfoCard>
                  <DivImgMirSC src="/default-images/MIR.svg"></DivImgMirSC>
                  <NumberCardSC>220220******5839</NumberCardSC>
                  <div>
                    <img src="/default-images/pencil.svg" />
                  </div>
                </DivInfoCard>
              </DivBankCardSC>
              <DivTextOpisanitSC>
              This card will be credited with funds from transactions that are paid online
              </DivTextOpisanitSC>
            </DivContentRowsSC>
          </DivMainInfoSC>
        </>
      ),
    },
    {
      blocks: (
        <>
          <DivMainInfo2PageSC>
            <DivContentInfoButtonSC>
              <H1ContentInfoSC>Guaranteed Delivery</H1ContentInfoSC>
            </DivContentInfoButtonSC>
            <DivContentSC>
              <DivContentDivisionSC>
                <PaddingSC>
                  <DivContentRows2PageSC>
                    <H1ContentNameSC>
                      <CustomInputCheckBox />
                      <MarginLeftSC /> Russian Post 
                    </H1ContentNameSC>
                    <H1ContentNameSC>
                      <CustomInputCheckBox />
                      <MarginLeftSC /> CDEK
                    </H1ContentNameSC>
                  </DivContentRows2PageSC>
                </PaddingSC>
                <DivContentRows2PageSC>
                  <H1ContentDefinSC>
                    <FlexSDEKSC>
                      <EmailFieldSC label="phone" type="phone" />
                    </FlexSDEKSC>
                    <SmalPlaceholder>From $3, depending on the delivery region</SmalPlaceholder>
                  </H1ContentDefinSC>
                  <H1ContentDefinSC>
                    <FlexSDEKSC>
                      <EmailFieldSC label="password" />
                      <img src="/default-images/Rub.svg" />
                    </FlexSDEKSC>
                    <SmalPlaceholder> Fixed shipping cost for all destinations</SmalPlaceholder>
                  </H1ContentDefinSC>
                </DivContentRows2PageSC>
              </DivContentDivisionSC>
            </DivContentSC>
          </DivMainInfo2PageSC>
        </>
      ),
    },
    {
      blocks: (
        <>
          <DivMainInfo3PageSC>
            <DivContentSC>
              <DivContentInfoButtonSC>
                <H1ContentInfoSC> $0 </H1ContentInfoSC>
              </DivContentInfoButtonSC>
            </DivContentSC>
            <DivContentSC>
              <DivContentInfoButtonSC>
                <H1ContentInfoSC>Awaiting deposit</H1ContentInfoSC>
              </DivContentInfoButtonSC>
            </DivContentSC>
            <DivContentSC>
              <DivContentInfoButtonSC>
                <LightTextSC>Money is credited automatically</LightTextSC>
              </DivContentInfoButtonSC>
            </DivContentSC>
          </DivMainInfo3PageSC>
          <DivInfoPageSC>
            <DivContentInfoButtonSC>
              <FlexSC>
                <ContentInfoSC> Important: </ContentInfoSC>
                <LightTextSC>Money is credited automatically after delivery of the parcel.</LightTextSC>
              </FlexSC>
            </DivContentInfoButtonSC>
            <FinanceTable />
          </DivInfoPageSC>
        </>
      ),
    },
  ];

  return (
    <>
      <BreadCrumbs />

      <DivStoreWrapSC>
        <DivStoreLeftPanelSC>
          <VendorNavMenu page={3} />
        </DivStoreLeftPanelSC>
        <DivStoreRightPanelSC>
          <DivStoreInfoStuffSC>
            <H1BoldTextSC>Edit payment and delivery</H1BoldTextSC>
          </DivStoreInfoStuffSC>
          <DivPagesSC>
            <H1PageOptionSC isActive={indexSelectedButton === 0} onClick={onClickTab(0)}>
              Payment
            </H1PageOptionSC>
            <H1PageOptionSC isActive={indexSelectedButton === 1} onClick={onClickTab(1)}>
              Delivery
            </H1PageOptionSC>
            <H1PageOptionSC isActive={indexSelectedButton === 2} onClick={onClickTab(2)}>
            Finances
            </H1PageOptionSC>
          </DivPagesSC>
          {listContent[indexSelectedButton].blocks}
        </DivStoreRightPanelSC>
      </DivStoreWrapSC>
    </>
  );
};

export default PaymentAndDelivery;
