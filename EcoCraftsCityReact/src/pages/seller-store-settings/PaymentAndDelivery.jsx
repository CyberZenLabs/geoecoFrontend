
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import FinanceTable from "../../components/FinanceTable";
import {
  DivBackBoxSC,
  DivHistorySC,
  NavLinkSC,
} from "../../styled-components-css/styles.product-detail";

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
            <H1ContentInfoSC>Банковская карта</H1ContentInfoSC>

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
                {' '}
                На эту карту будут зачислены средства от сделок, которые оплачены онлайн
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
              <H1ContentInfoSC>Гарантированная Доставка</H1ContentInfoSC>
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
                    <SmalPlaceholder>От 180 рублей в зависимости от региогна доставки</SmalPlaceholder>
                  </H1ContentDefinSC>
                  <H1ContentDefinSC>
                    <FlexSDEKSC>
                      <EmailFieldSC label="password" />
                      <img src="/default-images/Rub.svg" />
                    </FlexSDEKSC>
                    <SmalPlaceholder> Фиксированная стоимость доставки для всех направлений</SmalPlaceholder>
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
                <H1ContentInfoSC>0 руб </H1ContentInfoSC>
              </DivContentInfoButtonSC>
            </DivContentSC>
            <DivContentSC>
              <DivContentInfoButtonSC>
                <H1ContentInfoSC>Ожидают зачисления </H1ContentInfoSC>
              </DivContentInfoButtonSC>
            </DivContentSC>
            <DivContentSC>
              <DivContentInfoButtonSC>
                <LightTextSC>Зачисление происходит автоматически</LightTextSC>
              </DivContentInfoButtonSC>
            </DivContentSC>
          </DivMainInfo3PageSC>
          <DivInfoPageSC>
            <DivContentInfoButtonSC>
              <FlexSC>
                <ContentInfoSC> Важно: </ContentInfoSC>
                <LightTextSC>Зачисление происходит автоматически после вручения посылки</LightTextSC>
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
            <H1BoldTextSC>Редактирование оплаты и доставки</H1BoldTextSC>
          </DivStoreInfoStuffSC>
          <DivPagesSC>
            <H1PageOptionSC isActive={indexSelectedButton === 0} onClick={onClickTab(0)}>
              Payment
            </H1PageOptionSC>
            <H1PageOptionSC isActive={indexSelectedButton === 1} onClick={onClickTab(1)}>
              Delivery
            </H1PageOptionSC>
            <H1PageOptionSC isActive={indexSelectedButton === 2} onClick={onClickTab(2)}>
              Финансы
            </H1PageOptionSC>
          </DivPagesSC>
          {listContent[indexSelectedButton].blocks}
        </DivStoreRightPanelSC>
      </DivStoreWrapSC>
    </>
  );
};

export default PaymentAndDelivery;
