import styled from 'styled-components/macro';

export const PurchasesContainerSC = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  justify-items: center;
`;

export const DivContentPurchasesSC = styled.div`
  max-width: 1420px;
  min-width: 370px;
  width: 100%;
  height: max-content;
  display: grid;
  justify-items: center;
  grid-template-columns: 25% auto;
  width: 90vw;
  margin: auto;
  color: black;
  padding-top: 60px;
  grid-gap: 20px;
  //padding-bottom: 200px;
  // border: 2px solid black;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 990px) {
    grid-template-columns: 100%;
  }
`;
export const DivBoxLeftPurchasesSC = styled.div`
  width: 100%;
  margin-top: 20px;
  //max-width: 350px;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const DivBoxRightPurchasesSC = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 12px;
`;

export const H1PurchasesTextSC = styled.div`
  width: 100%;
  max-width:max-content;
  height: 34px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  text-align: start;

  /* Вторичный */
  color: #252525;
`;

export const DivBoxTextPurchsesSC = styled.div`
  width: 100%;
  height: 58px;
`;

export const DivBGRecSmallSC = styled.div`
  width: 100%;
  max-width: 1059px;
  height: 79px;
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  display: grid;
  align-items: center;
`;

export const DivBGRecBigSC = styled.div`
  width: 100%;
  max-width: 1059px;
  height: fit-content;
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  margin-top: 24px;
  padding: 20px 18px 18px 18px;
  @media (max-width: 480px) {
    display: none;
  }
  margin-bottom: 444px;
`;

export const DivBoxRowsPurchasesSC = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: 46px 192px 192px;
  grid-row-gap: 24px;
`;

export const DivBoxItemParamsSC = styled.div`
  width: 100%;
  max-width: 1023px;
  height: 46px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 12px 64px 12px 33px;
  @media (max-width: 550px) {
    padding: 11px 20px 21px 20px;
  }
`;

export const DivBoxItemProduct1SC = styled.div`
  width: 100%;
  max-width: 1023px;
  height: 192px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 20px;
  padding: 15px 60px 21px 29px;
  @media (max-width: 550px) {
    padding: 15px 20px 21px 20px;
  }
`;

export const DivTextSillerSC = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  /* identical to box height */

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
  @media (max-width: 560px) {
    font-size: 16px;
  }
`;
export const DivTextDescriptionSC = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  /* identical to box height */

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
  @media (max-width: 560px) {
    font-size: 16px;
  }
`;
export const DivTextCostSC = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: end;

  /* identical to box height */

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
  @media (max-width: 560px) {
    font-size: 16px;
  }
`;

export const DivBoxItemProduct2SC = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: grid;
    width: 100%;
    max-width: 440px;
    height: 167px;
    border: 1px solid rgba(0, 0, 0, 0.33);
    border-radius: 20px;
    margin-top: 24px;
    padding: 10px 0px 16px 10px;
  }
`;

export const DivBoxColumnsProductSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  @media (max-width: 550px) {
    grid-template-columns: 1fr 2fr 0.8fr;
  }
`;

export const DivBoxRowsAvaAndInitialSC = styled.div`
  max-width: 112px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 112px 34px;
  grid-row-gap: 10px;
  @media (max-width: 675px) {
    grid-template-rows: 61px 85px;
  }
`;
export const DivAvatarSC = styled.div`
  width: 100%;
  height: 100%;
  background: #d9d9d9;
  border-radius: 12px;
  @media (max-width: 675px) {
    width: 60px;
    height: 60px;
  }
`;
export const DivTextsInitialSC = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 50% 50%;
  @media (max-width: 675px) {
    grid-template-rows: 25% 75%;
  }
`;

export const DivFirstNameSC = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
`;

export const DivNameSC = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
`;

export const DivBoxRowsPurchaseAndCompositionSC = styled.div`
  width: 100%;
  max-width: 265px;
  height: 100%;
  display: grid;
  grid-template-rows: 22px 22px;
  grid-row-gap: 16px;
  @media (max-width: 715px) {
    grid-row-gap: 25px;
  }
`;

export const DivTextPurchaseSC = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: rgba(37, 37, 37, 0.8);
  @media (max-width: 775px) {
    font-size: 16px;
  }
`;

export const DivTextColumnsInProgressSC = styled.div`
  width: 100%;
  max-width: 135px;
  height: 100%;
  display: grid;
  grid-template-columns: 15px 110px;
  grid-column-gap: 10px;
  align-items: center;
`;

export const DivGreenDotSC = styled.div`
  width: 15px;
  height: 15px;
  background: #85cb33;
  border-radius: 100%;
`;
export const DivTextInProgressSC = styled.div`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  /* identical to box height */

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
`;

export const DivContainerMoneySC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: end;
`;
export const DivBoxColumnMoneySC = styled.div`
  width: 100%;
  max-width: 104px;
  height: 22px;
  display: grid;
  justify-items: start;
  grid-template-columns: 53px 14px;
  grid-column-gap: 6px;
`;

export const DivMoneySC = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  /* identical to box height */

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
`;
export const DivIconValuteSC = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  /* identical to box height */

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
`;

export const DivOptionsPanelPurchasesSC = styled.div`
  width: 100%;
  max-width: 1059px;
  display: grid;
  grid-template-columns: 135px 176px 132px;
  // border: 2px solid red;
  padding: 30px 33px 30px 13px;
  @media (max-width: 1000px) {
    width: 100%;
    max-width: 1059px;
    display: grid;
    grid-template-columns: 0.8fr 1fr 1fr;
  }
  @media (max-width: 560px) {
    width: 100%;
    max-width: 1059px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 0.8fr 1fr 1fr;
    padding: 30px 0px 30px 10px;
  }
`;

export const TextActiveSC = styled.button`
  height: 100%;
  width: 100%;
  height: 22px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${(p) => (p.isActive ? '#85cb33;' : 'rgba(37, 37, 37, 0.8)')};
  cursor: pointer;
  text-align: start;
  // border: 2px solid yellow;
  border: none;
  background: none;
  @media (max-width: 570px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const TextEnd = styled.button`
  width: 100%;
  height: 22px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${(p) => (p.isActive ? '#85cb33;' : 'rgba(37, 37, 37, 0.8)')};
  // border: 2px solid green;
  text-align: start;
  cursor: pointer;
  border: none;
  background: none;
  @media (max-width: 570px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const TextEnd1 = styled.button`
  width: 100%;
  height: 22px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${(p) => (p.isActive ? '#85cb33;' : 'rgba(37, 37, 37, 0.8)')};
  // border: 2px solid green;
  cursor: pointer;
  border: none;
  background: none;
  text-align: start;
  @media (max-width: 570px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const DivContainerRowsPurchaseSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 70px 27px 27px 17px;
`;

export const DivAvatarSmallSC = styled.div`
  width: 60px;
  height: 60px;
  background: #d9d9d9;
  border-radius: 12px;
`;

export const DivTextPurchase1SC = styled.div`
  width: 206px;
  height: 17px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  /* identical to box height */

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
`;

export const DivBoxColumnMoney1SC = styled.div`
  width: 100%;
  max-width: 57px;
  height: 17px;
  display: grid;
  justify-items: start;
  grid-template-columns: 41px 11px;
  grid-column-gap: 5px;
`;

export const DivMoney1SC = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  /* identical to box height */

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
`;
export const DivIconValute1SC = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  /* identical to box height */

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
`;

export const DivTextColumnsInProgress1SC = styled.div`
  width: 100%;
  max-width: 105.56px;
  height: 100%;
  display: grid;
  grid-template-columns: 13px 86px;
  grid-column-gap: 6.56px;
  align-items: center;
`;

export const DivGreenDot1SC = styled.div`
  width: 13px;
  height: 13px;
  background: #85cb33;
  border-radius: 100%;
`;
export const DivTextInProgress1SC = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  /* identical to box height */

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
`;

export const DivTextsInitial1SC = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 50% 50%;
  @media (max-width: 675px) {
    grid-template-rows: 25% 75%;
  }
`;

export const DivFirstName1SC = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
`;

export const DivName1SC = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
`;

export const DivBoxColumnsAvaAndInitialSC = styled.div`
  width: 100%;
  max-width: 142px;
  height: 100%;
  display: grid;
  grid-template-columns: 60px 73px;
  grid-column-gap: 9px;
`;
