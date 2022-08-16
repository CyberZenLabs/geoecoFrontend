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
              <DivTextPurchase1SC>Покупка: Крестовник Роули</DivTextPurchase1SC>
              <DivBoxColumnMoney1SC>
                <DivMoney1SC>5000</DivMoney1SC>
                <DivIconValute1SC>$</DivIconValute1SC>
              </DivBoxColumnMoney1SC>
              <DivTextColumnsInProgress1SC>
                <DivGreenDot1SC></DivGreenDot1SC>
                <DivTextInProgress1SC>В процессе</DivTextInProgress1SC>
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
              <DivTextPurchase1SC>Покупка: Крестовник Роули</DivTextPurchase1SC>
              <DivBoxColumnMoney1SC>
                <DivMoney1SC>5000</DivMoney1SC>
                <DivIconValute1SC>$</DivIconValute1SC>
              </DivBoxColumnMoney1SC>
              <DivTextColumnsInProgress1SC>
                <DivGreenDot1SC></DivGreenDot1SC>
                <DivTextInProgress1SC>В процессе</DivTextInProgress1SC>
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
                <DivTextPurchaseSC>Покупка: Крестовник Роули</DivTextPurchaseSC>
                <DivTextColumnsInProgressSC>
                  <DivGreenDotSC></DivGreenDotSC>
                  <DivTextInProgressSC>В процессе</DivTextInProgressSC>
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
                <DivTextPurchaseSC>Покупка: Крестовник Роули</DivTextPurchaseSC>
                <DivTextColumnsInProgressSC>
                  <DivGreenDotSC></DivGreenDotSC>
                  <DivTextInProgressSC>В процессе</DivTextInProgressSC>
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
              <DivTextPurchase1SC>Покупка: Крестовник Роули</DivTextPurchase1SC>
              <DivBoxColumnMoney1SC>
                <DivMoney1SC>5000</DivMoney1SC>
                <DivIconValute1SC>$</DivIconValute1SC>
              </DivBoxColumnMoney1SC>
              <DivTextColumnsInProgress1SC>
                <DivGreenDot1SC></DivGreenDot1SC>
                <DivTextInProgress1SC>Завершена</DivTextInProgress1SC>
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
              <DivTextPurchase1SC>Покупка: Крестовник Роули</DivTextPurchase1SC>
              <DivBoxColumnMoney1SC>
                <DivMoney1SC>5000</DivMoney1SC>
                <DivIconValute1SC>$</DivIconValute1SC>
              </DivBoxColumnMoney1SC>
              <DivTextColumnsInProgress1SC>
                <DivGreenDot1SC></DivGreenDot1SC>
                <DivTextInProgress1SC>Завершена</DivTextInProgress1SC>
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
                <DivTextPurchaseSC>Покупка: Крестовник Роули</DivTextPurchaseSC>
                <DivTextColumnsInProgressSC>
                  <DivGreenDotSC></DivGreenDotSC>
                  <DivTextInProgressSC>Завершена</DivTextInProgressSC>
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
                <DivTextPurchaseSC>Покупка: Крестовник Роули</DivTextPurchaseSC>
                <DivTextColumnsInProgressSC>
                  <DivGreenDotSC></DivGreenDotSC>
                  <DivTextInProgressSC>Завершена</DivTextInProgressSC>
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
              <DivTextPurchase1SC>Покупка: Крестовник Роули</DivTextPurchase1SC>
              <DivBoxColumnMoney1SC>
                <DivMoney1SC>5000</DivMoney1SC>
                <DivIconValute1SC>$</DivIconValute1SC>
              </DivBoxColumnMoney1SC>
              <DivTextColumnsInProgress1SC>
                <DivGreenDot1SC></DivGreenDot1SC>
                <DivTextInProgress1SC>Отклонена</DivTextInProgress1SC>
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
              <DivTextPurchase1SC>Покупка: Крестовник Роули</DivTextPurchase1SC>
              <DivBoxColumnMoney1SC>
                <DivMoney1SC>5000</DivMoney1SC>
                <DivIconValute1SC>$</DivIconValute1SC>
              </DivBoxColumnMoney1SC>
              <DivTextColumnsInProgress1SC>
                <DivGreenDot1SC></DivGreenDot1SC>
                <DivTextInProgress1SC>Отклонена</DivTextInProgress1SC>
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
                <DivTextPurchaseSC>Покупка: Крестовник Роули</DivTextPurchaseSC>
                <DivTextColumnsInProgressSC>
                  <DivGreenDotSC></DivGreenDotSC>
                  <DivTextInProgressSC>Отклонена</DivTextInProgressSC>
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
                <DivTextPurchaseSC>Покупка: Крестовник Роули</DivTextPurchaseSC>
                <DivTextColumnsInProgressSC>
                  <DivGreenDotSC></DivGreenDotSC>
                  <DivTextInProgressSC>Отклонена</DivTextInProgressSC>
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
                  Активные
                </TextActiveSC>
                <TextEnd isActive={indexSelectedButton === 1} onClick={onClickTab(1)}>
                  Завершенные
                </TextEnd>
                <TextEnd1 isActive={indexSelectedButton === 2} onClick={onClickTab(2)}>
                  Отклоненные
                </TextEnd1>
              </DivOptionsPanelPurchasesSC>
            </DivBGRecSmallSC>
            <DivBGRecBigSC>
              <DivBoxRowsPurchasesSC>
                <DivBoxItemParamsSC>
                  <DivTextSillerSC>Покупатель</DivTextSillerSC>
                  <DivTextDescriptionSC>Description</DivTextDescriptionSC>
                  <DivTextCostSC>Стоимость</DivTextCostSC>
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
