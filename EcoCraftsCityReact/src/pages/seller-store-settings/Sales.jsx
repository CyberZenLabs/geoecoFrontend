import React, { useState } from 'react';
import VendorNavMenu from '../../components/VendorNavMenu';
import {
  PurchasesContainerSC,
  DivContentPurchasesSC,
  DivBoxLeftPurchasesSC,
  DivBoxRightPurchasesSC,
  H1PurchasesTextSC,
  DivBoxTextPurchsesSC,
  DivBGRecSmallSC,
  DivBGRecBigSC,
  DivBoxRowsPurchasesSC,
  DivBoxItemParamsSC,
  DivBoxItemProduct1SC,
  DivTextSillerSC,
  DivTextDescriptionSC,
  DivTextCostSC,
  DivBoxItemProduct2SC,
  DivBoxColumnsProductSC,
  DivBoxRowsAvaAndInitialSC,
  DivAvatarSC,
  DivTextsInitialSC,
  DivFirstNameSC,
  DivNameSC,
  DivBoxRowsPurchaseAndCompositionSC,
  DivTextPurchaseSC,
  DivTextColumnsInProgressSC,
  DivGreenDotSC,
  DivTextInProgressSC,
  DivContainerMoneySC,
  DivBoxColumnMoneySC,
  DivMoneySC,
  DivIconValuteSC,
  DivOptionsPanelPurchasesSC,
  TextActiveSC,
  TextEnd,
  TextEnd1,
  DivContainerRowsPurchaseSC,
  DivAvatarSmallSC,
  DivTextPurchase1SC,
  DivBoxColumnMoney1SC,
  DivMoney1SC,
  DivIconValute1SC,
  DivTextColumnsInProgress1SC,
  DivGreenDot1SC,
  DivTextInProgress1SC,
  DivTextsInitial1SC,
  DivFirstName1SC,
  DivName1SC,
  DivBoxColumnsAvaAndInitialSC,
} from '../../styled-components-css/styles-seller-store-settings/styles.purchases-active';
import { BreadCrumbs } from '../../components/BreadCrumbs';

const Sales = () => {
  const listContent = [
    {
      itemSmall: (
        <>
          <DivBoxItemProduct2SC>
            <DivContainerRowsPurchaseSC>
              <DivBoxColumnsAvaAndInitialSC>
                <DivAvatarSmallSC></DivAvatarSmallSC>
                <DivTextsInitial1SC>
                  <DivFirstName1SC>Surname</DivFirstName1SC>
                  <DivName1SC>Name</DivName1SC>
                </DivTextsInitial1SC>
              </DivBoxColumnsAvaAndInitialSC>
              <DivTextPurchase1SC>Item: Rawley's ragwort</DivTextPurchase1SC>
              <DivBoxColumnMoney1SC>
                <DivMoney1SC>5000</DivMoney1SC>
                <DivIconValute1SC>$</DivIconValute1SC>
              </DivBoxColumnMoney1SC>
              <DivTextColumnsInProgress1SC>
                <DivGreenDot1SC></DivGreenDot1SC>
                <DivTextInProgress1SC>In process</DivTextInProgress1SC>
              </DivTextColumnsInProgress1SC>
            </DivContainerRowsPurchaseSC>
          </DivBoxItemProduct2SC>
          <DivBoxItemProduct2SC>
            <DivContainerRowsPurchaseSC>
              <DivBoxColumnsAvaAndInitialSC>
                <DivAvatarSmallSC></DivAvatarSmallSC>
                <DivTextsInitial1SC>
                  <DivFirstName1SC>Surname</DivFirstName1SC>
                  <DivName1SC>Name</DivName1SC>
                </DivTextsInitial1SC>
              </DivBoxColumnsAvaAndInitialSC>
              <DivTextPurchase1SC>Item: Rawley's ragwort</DivTextPurchase1SC>
              <DivBoxColumnMoney1SC>
                <DivMoney1SC>5000</DivMoney1SC>
                <DivIconValute1SC>$</DivIconValute1SC>
              </DivBoxColumnMoney1SC>
              <DivTextColumnsInProgress1SC>
                <DivGreenDot1SC></DivGreenDot1SC>
                <DivTextInProgress1SC>In process</DivTextInProgress1SC>
              </DivTextColumnsInProgress1SC>
            </DivContainerRowsPurchaseSC>
          </DivBoxItemProduct2SC>
        </>
      ),
      item: (
        <>
          <DivBoxItemProduct1SC>
            <DivBoxColumnsProductSC>
              <DivBoxRowsAvaAndInitialSC>
                <DivAvatarSC></DivAvatarSC>
                <DivTextsInitialSC>
                  <DivFirstNameSC>Surname</DivFirstNameSC>
                  <DivNameSC>Name</DivNameSC>
                </DivTextsInitialSC>
              </DivBoxRowsAvaAndInitialSC>
              <DivBoxRowsPurchaseAndCompositionSC>
                <DivTextPurchaseSC>Item: Rawley's ragwort</DivTextPurchaseSC>
                <DivTextColumnsInProgressSC>
                  <DivGreenDotSC></DivGreenDotSC>
                  <DivTextInProgressSC>In process</DivTextInProgressSC>
                </DivTextColumnsInProgressSC>
              </DivBoxRowsPurchaseAndCompositionSC>
              <DivContainerMoneySC>
                <DivBoxColumnMoneySC>
                  <DivMoneySC>5000</DivMoneySC>
                  <DivIconValuteSC>$</DivIconValuteSC>
                </DivBoxColumnMoneySC>
              </DivContainerMoneySC>
            </DivBoxColumnsProductSC>
          </DivBoxItemProduct1SC>

          <DivBoxItemProduct1SC>
            <DivBoxColumnsProductSC>
              <DivBoxRowsAvaAndInitialSC>
                <DivAvatarSC></DivAvatarSC>
                <DivTextsInitialSC>
                  <DivFirstNameSC>Surname</DivFirstNameSC>
                  <DivNameSC>Name</DivNameSC>
                </DivTextsInitialSC>
              </DivBoxRowsAvaAndInitialSC>
              <DivBoxRowsPurchaseAndCompositionSC>
                <DivTextPurchaseSC>Item: Rawley's ragwort</DivTextPurchaseSC>
                <DivTextColumnsInProgressSC>
                  <DivGreenDotSC></DivGreenDotSC>
                  <DivTextInProgressSC>In process</DivTextInProgressSC>
                </DivTextColumnsInProgressSC>
              </DivBoxRowsPurchaseAndCompositionSC>
              <DivContainerMoneySC>
                <DivBoxColumnMoneySC>
                  <DivMoneySC>5000</DivMoneySC>
                  <DivIconValuteSC>$</DivIconValuteSC>
                </DivBoxColumnMoneySC>
              </DivContainerMoneySC>
            </DivBoxColumnsProductSC>
          </DivBoxItemProduct1SC>
        </>
      ),
    },
    {
      itemSmall: (
        <>
          <DivBoxItemProduct2SC>
            <DivContainerRowsPurchaseSC>
              <DivBoxColumnsAvaAndInitialSC>
                <DivAvatarSmallSC></DivAvatarSmallSC>
                <DivTextsInitial1SC>
                  <DivFirstName1SC>Surname</DivFirstName1SC>
                  <DivName1SC>Name</DivName1SC>
                </DivTextsInitial1SC>
              </DivBoxColumnsAvaAndInitialSC>
              <DivTextPurchase1SC>Item: Rawley's ragwort</DivTextPurchase1SC>
              <DivBoxColumnMoney1SC>
                <DivMoney1SC>5000</DivMoney1SC>
                <DivIconValute1SC>$</DivIconValute1SC>
              </DivBoxColumnMoney1SC>
              <DivTextColumnsInProgress1SC>
                <DivGreenDot1SC></DivGreenDot1SC>
                <DivTextInProgress1SC>Completed</DivTextInProgress1SC>
              </DivTextColumnsInProgress1SC>
            </DivContainerRowsPurchaseSC>
          </DivBoxItemProduct2SC>
          <DivBoxItemProduct2SC>
            <DivContainerRowsPurchaseSC>
              <DivBoxColumnsAvaAndInitialSC>
                <DivAvatarSmallSC></DivAvatarSmallSC>
                <DivTextsInitial1SC>
                  <DivFirstName1SC>Surname</DivFirstName1SC>
                  <DivName1SC>Name</DivName1SC>
                </DivTextsInitial1SC>
              </DivBoxColumnsAvaAndInitialSC>
              <DivTextPurchase1SC>Item: Rawley's ragwort</DivTextPurchase1SC>
              <DivBoxColumnMoney1SC>
                <DivMoney1SC>5000</DivMoney1SC>
                <DivIconValute1SC>$</DivIconValute1SC>
              </DivBoxColumnMoney1SC>
              <DivTextColumnsInProgress1SC>
                <DivGreenDot1SC></DivGreenDot1SC>
                <DivTextInProgress1SC>Completed</DivTextInProgress1SC>
              </DivTextColumnsInProgress1SC>
            </DivContainerRowsPurchaseSC>
          </DivBoxItemProduct2SC>
        </>
      ),
      item: (
        <>
          <DivBoxItemProduct1SC>
            <DivBoxColumnsProductSC>
              <DivBoxRowsAvaAndInitialSC>
                <DivAvatarSC></DivAvatarSC>
                <DivTextsInitialSC>
                  <DivFirstNameSC>Surname</DivFirstNameSC>
                  <DivNameSC>Name</DivNameSC>
                </DivTextsInitialSC>
              </DivBoxRowsAvaAndInitialSC>
              <DivBoxRowsPurchaseAndCompositionSC>
                <DivTextPurchaseSC>Item: Rawley's ragwort</DivTextPurchaseSC>
                <DivTextColumnsInProgressSC>
                  <DivGreenDotSC></DivGreenDotSC>
                  <DivTextInProgressSC>Completed</DivTextInProgressSC>
                </DivTextColumnsInProgressSC>
              </DivBoxRowsPurchaseAndCompositionSC>
              <DivContainerMoneySC>
                <DivBoxColumnMoneySC>
                  <DivMoneySC>5000</DivMoneySC>
                  <DivIconValuteSC>$</DivIconValuteSC>
                </DivBoxColumnMoneySC>
              </DivContainerMoneySC>
            </DivBoxColumnsProductSC>
          </DivBoxItemProduct1SC>

          <DivBoxItemProduct1SC>
            <DivBoxColumnsProductSC>
              <DivBoxRowsAvaAndInitialSC>
                <DivAvatarSC></DivAvatarSC>
                <DivTextsInitialSC>
                  <DivFirstNameSC>Surname</DivFirstNameSC>
                  <DivNameSC>Name</DivNameSC>
                </DivTextsInitialSC>
              </DivBoxRowsAvaAndInitialSC>
              <DivBoxRowsPurchaseAndCompositionSC>
                <DivTextPurchaseSC>Item: Rawley's ragwort</DivTextPurchaseSC>
                <DivTextColumnsInProgressSC>
                  <DivGreenDotSC></DivGreenDotSC>
                  <DivTextInProgressSC>Completed</DivTextInProgressSC>
                </DivTextColumnsInProgressSC>
              </DivBoxRowsPurchaseAndCompositionSC>
              <DivContainerMoneySC>
                <DivBoxColumnMoneySC>
                  <DivMoneySC>5000</DivMoneySC>
                  <DivIconValuteSC>$</DivIconValuteSC>
                </DivBoxColumnMoneySC>
              </DivContainerMoneySC>
            </DivBoxColumnsProductSC>
          </DivBoxItemProduct1SC>
        </>
      ),
    },
    {
      itemSmall: (
        <>
          <DivBoxItemProduct2SC>
            <DivContainerRowsPurchaseSC>
              <DivBoxColumnsAvaAndInitialSC>
                <DivAvatarSmallSC></DivAvatarSmallSC>
                <DivTextsInitial1SC>
                  <DivFirstName1SC>Surname</DivFirstName1SC>
                  <DivName1SC>Name</DivName1SC>
                </DivTextsInitial1SC>
              </DivBoxColumnsAvaAndInitialSC>
              <DivTextPurchase1SC>Item: Rawley's ragwort</DivTextPurchase1SC>
              <DivBoxColumnMoney1SC>
                <DivMoney1SC>5000</DivMoney1SC>
                <DivIconValute1SC>$</DivIconValute1SC>
              </DivBoxColumnMoney1SC>
              <DivTextColumnsInProgress1SC>
                <DivGreenDot1SC></DivGreenDot1SC>
                <DivTextInProgress1SC>Rejected</DivTextInProgress1SC>
              </DivTextColumnsInProgress1SC>
            </DivContainerRowsPurchaseSC>
          </DivBoxItemProduct2SC>
          <DivBoxItemProduct2SC>
            <DivContainerRowsPurchaseSC>
              <DivBoxColumnsAvaAndInitialSC>
                <DivAvatarSmallSC></DivAvatarSmallSC>
                <DivTextsInitial1SC>
                  <DivFirstName1SC>Surname</DivFirstName1SC>
                  <DivName1SC>Name</DivName1SC>
                </DivTextsInitial1SC>
              </DivBoxColumnsAvaAndInitialSC>
              <DivTextPurchase1SC>Item: Rawley's ragwort</DivTextPurchase1SC>
              <DivBoxColumnMoney1SC>
                <DivMoney1SC>5000</DivMoney1SC>
                <DivIconValute1SC>$</DivIconValute1SC>
              </DivBoxColumnMoney1SC>
              <DivTextColumnsInProgress1SC>
                <DivGreenDot1SC></DivGreenDot1SC>
                <DivTextInProgress1SC>Rejected</DivTextInProgress1SC>
              </DivTextColumnsInProgress1SC>
            </DivContainerRowsPurchaseSC>
          </DivBoxItemProduct2SC>
        </>
      ),
      item: (
        <>
          <DivBoxItemProduct1SC>
            <DivBoxColumnsProductSC>
              <DivBoxRowsAvaAndInitialSC>
                <DivAvatarSC></DivAvatarSC>
                <DivTextsInitialSC>
                  <DivFirstNameSC>Surname</DivFirstNameSC>
                  <DivNameSC>Name</DivNameSC>
                </DivTextsInitialSC>
              </DivBoxRowsAvaAndInitialSC>
              <DivBoxRowsPurchaseAndCompositionSC>
                <DivTextPurchaseSC>Item: Rawley's ragwort</DivTextPurchaseSC>
                <DivTextColumnsInProgressSC>
                  <DivGreenDotSC></DivGreenDotSC>
                  <DivTextInProgressSC>Rejected</DivTextInProgressSC>
                </DivTextColumnsInProgressSC>
              </DivBoxRowsPurchaseAndCompositionSC>
              <DivContainerMoneySC>
                <DivBoxColumnMoneySC>
                  <DivMoneySC>5000</DivMoneySC>
                  <DivIconValuteSC>$</DivIconValuteSC>
                </DivBoxColumnMoneySC>
              </DivContainerMoneySC>
            </DivBoxColumnsProductSC>
          </DivBoxItemProduct1SC>

          <DivBoxItemProduct1SC>
            <DivBoxColumnsProductSC>
              <DivBoxRowsAvaAndInitialSC>
                <DivAvatarSC></DivAvatarSC>
                <DivTextsInitialSC>
                  <DivFirstNameSC>Surname</DivFirstNameSC>
                  <DivNameSC>Name</DivNameSC>
                </DivTextsInitialSC>
              </DivBoxRowsAvaAndInitialSC>
              <DivBoxRowsPurchaseAndCompositionSC>
                <DivTextPurchaseSC>Item: Rawley's ragwort</DivTextPurchaseSC>
                <DivTextColumnsInProgressSC>
                  <DivGreenDotSC></DivGreenDotSC>
                  <DivTextInProgressSC>Rejected</DivTextInProgressSC>
                </DivTextColumnsInProgressSC>
              </DivBoxRowsPurchaseAndCompositionSC>
              <DivContainerMoneySC>
                <DivBoxColumnMoneySC>
                  <DivMoneySC>5000</DivMoneySC>
                  <DivIconValuteSC>$</DivIconValuteSC>
                </DivBoxColumnMoneySC>
              </DivContainerMoneySC>
            </DivBoxColumnsProductSC>
          </DivBoxItemProduct1SC>
        </>
      ),
    },
  ];
  const [indexSelectedButton, getIndexButton] = useState(0);
  const onClickTab = (index) => (e) => {
    getIndexButton(index);
  };
  return (
    <>

      <BreadCrumbs />
      <PurchasesContainerSC>
        <DivContentPurchasesSC>
          <DivBoxLeftPurchasesSC>
            <VendorNavMenu page={5} />
          </DivBoxLeftPurchasesSC>
          <DivBoxRightPurchasesSC>
            <DivBoxTextPurchsesSC>
              <H1PurchasesTextSC>Sales</H1PurchasesTextSC>
            </DivBoxTextPurchsesSC>
            <DivBGRecSmallSC>
              <DivOptionsPanelPurchasesSC>
                <TextActiveSC isActive={indexSelectedButton === 0} onClick={onClickTab(0)}>
                  Active
                </TextActiveSC>
                <TextEnd isActive={indexSelectedButton === 1} onClick={onClickTab(1)}>
                  Completed
                </TextEnd>
                <TextEnd1 isActive={indexSelectedButton === 2} onClick={onClickTab(2)}>
                  Rejected
                </TextEnd1>
              </DivOptionsPanelPurchasesSC>
            </DivBGRecSmallSC>
            <DivBGRecBigSC>
              <DivBoxRowsPurchasesSC>
                <DivBoxItemParamsSC>
                  <DivTextSillerSC>Customer</DivTextSillerSC>
                  <DivTextDescriptionSC>Description</DivTextDescriptionSC>
                  <DivTextCostSC>Price</DivTextCostSC>
                </DivBoxItemParamsSC>
                {listContent[indexSelectedButton].item}
              </DivBoxRowsPurchasesSC>
            </DivBGRecBigSC>
            {listContent[indexSelectedButton].itemSmall}
          </DivBoxRightPurchasesSC>
        </DivContentPurchasesSC>
      </PurchasesContainerSC>
    </>
  );
};

export default Sales;
