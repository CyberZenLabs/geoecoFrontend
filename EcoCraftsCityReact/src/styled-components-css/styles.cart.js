import styled from 'styled-components/macro';

const middleWidth = 920;
const minWidth = 660;

export const DivCartWrapSC = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1322px;
  width: 90vw;
`;

export const DivTitleBoxSC = styled.div`
  display: grid;
  justify-content: left;
  align-items: center;
  row-gap: 6px;
  ${({ padding }) => (padding ? 'padding: 10px 0px 40px 60px;' : null)}
  ${({ rowGap }) => (rowGap !== undefined ? `row-gap: ${rowGap}px;` : 'row-gap: 6px;')}
`;
export const H2TitleProductList = styled.h1`
  font-style: normal;
  font-weight: 700;
  ${(p) => (p.size !== undefined ? `font-size:${p.size}px;` : 'font-size: 30px;')}
  //line-height: 37px;
  width: max-content;
  color: #252525;
  /* identical to box height */
  //text-align: right;
`;

export const CustomTextBoxForCartSC = styled.h3`
  font-style: normal;
  ${(p) => (p.color !== undefined ? `color:${p.color};` : 'color: #252525;')}
  ${(p) => (p.weight !== undefined ? `font-weight:${p.weight};` : 'font-weight: 400;')}
  ${(p) => (p.size !== undefined ? `font-size:${p.size}px;` : 'font-size: 20px;')}
  ${(p) => (p.align !== undefined ? `text-align:${p.align};` : null)}
  
  line-height: 24px;
  
  /* @media (max-width: 1000px) {
    font-size: 14px;
  } */
`;

export const DivCartBoxSC = styled.div`
  display: grid;
  row-gap: 30px;
  justify-items: center;
  height: max-content;
  width: 100%;
  margin-bottom: 50px
`;

export const DivContainerProductSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 10px;
  justify-content: space-between;
  height: max-content;
  width: 100%;
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  padding: 40px 20px 60px 60px;
  /* @media (max-width: 1480px) {
    grid-template-columns: max-content;
    grid-template-rows: max-content max-content;
  } */
`;

export const DivProductItemsSC = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  height: 100%;
  width: 100%;
  /* @media (max-width: 1480px) {
    grid-template-columns: max-content;
    grid-template-rows: max-content max-content;
  } */
`;

export const DivPaySC = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  height: 100%;

  max-width: 457px;
  width: 457px;
  height: max-content;
  border-left: 1px solid rgba(0, 0, 0, 0.33);
  /* @media (max-width: 1480px) {
    grid-template-columns: max-content;
    grid-template-rows: max-content max-content;
  } */
`;

export const DivProductsBoxSC = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 130px);
  grid-gap: 60px;
  margin-top: 40px;
  //height: 100%;
  /* @media (max-width: 1480px) {
    grid-template-columns: max-content;
    grid-template-rows: max-content max-content;
  } */
`;

//-------------------------------- карточка продукта начало -------------------------------

export const DivItemListSC = styled.div`
  display: grid;
  grid-template-columns: 30px 130px 200px 194px auto;
  gap: 10px;
  height: 130px;
  justify-items: center;
  /* @media (max-width: ${middleWidth}px) {
    //grid-template-columns: 30px 110px 200px 149px auto;
    grid-template-columns: 1fr 4fr 6fr 5fr auto;
  }
  @media (max-width: ${minWidth}px) {
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr 2fr;
    background: rgba(243, 243, 243, 0.5);
    border-radius: 20px;
    height: 206px;
    padding: 15px;
    box-sizing: border-box;
    gap: 20px;
  } */
`;

export const DivImageSC = styled.div`
  background: ${(p) => `url(${p.src})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 130px;
  height: 130px;
`;

//-------------------------------- карточка продукта конец --------------------------------

//-------------------------------- Общая стоимость начало ---------------------------------

export const DivBoxTotalPriceSC = styled.div`
  width: 100%;
  height: max-content;
  padding-left: 20px;
  display: grid;
  grid-template-rows: max-content 320px 180px max-content;
  grid-gap: 30px;
`;

export const DivDeliveryInfoSC = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-rows: max-content max-content max-content;
  grid-gap: 10px;
`;

export const ButtonModalAdreeSC = styled.div`
  text-decoration: none;
  border: none;
  color: var(--green-color);
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  width: 100%;
  height: max-content;
  display: grid;
  cursor: pointer;
`;

export const DivContainerInputRadioSC = styled.div`
width: 100%;
  display: grid;
  grid-template-columns: max-content max-content;
  height: max-content;
  align-items: center;
  grid-gap: 7px;
`;

export const DivColumnsDeliverySC = styled.div`
width: 100%;
  display: grid;
  grid-template-columns: 170px 1fr;
  height: 37px;
  align-items: center;
  grid-gap: 7px;
  position: relative;
`;

export const DivColumnsTotalPriceSC = styled.div`
width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  height: 37px;
  align-items: center;
  grid-gap: 7px;
  position: relative;
`;

export const DivTotalPriceSC = styled.div`
width: 100%;
  height: max-content;
  display: grid;
  grid-template-rows: repeat(4, 40px);
  grid-gap: 5px;
`;



//-------------------------------- Общая стоимость конец ----------------------------------

//-----------------------------------------------------------------------------------------
//----------------------------------старые стили-------------------------------------------

export const DivContentCartSC = styled.div`
  display: grid;
  //grid-template-rows: max-content max-content;
  max-width: 1322px;
  width: 85vw;
  grid-gap: 56px;
  padding-bottom: 19px;
  @media (max-width: ${middleWidth}px) {
    width: 90vw;
  }
  @media (max-width: ${minWidth}px) {
    width: 100vw;
  }
`;

export const DivBoxFirstRowSC = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  grid-template-rows: fit-content();
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, 280px);
  }

  @media (max-width: ${middleWidth}px) {
    grid-template-columns: repeat(auto-fit, 300px);
  }
`;

export const DivBoxRowProductSC = styled.div`
  display: grid;
  grid-template-rows: 32px 32px 1px max-content;

  gap: 38px;
  @media (max-width: ${minWidth}px) {
    background: #ffffff;
    grid-template-rows: max-content;
    padding: 0px 15px 226px 15px;
  }
`;

export const DivBoxCheckSC = styled.div`
  padding-left: 2px;
  display: grid;
  grid-template-columns: 30px 150px auto;
  justify-items: center;
  align-items: center;
`;

export const DivBoxListSC = styled.div`
  display: grid;
  //grid-template-rows: repeat(auto-fit, 130px);
  grid-auto-rows: 130px;
  gap: 80px;
  @media (max-width: ${minWidth}px) {
    grid-auto-rows: 206px;
    gap: 16px;
  }
`;

export const DivBoxTitleSC = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  :last-child {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const SpanTitleSC = styled.span`
  font-family: var(--root-font-family);
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export const DivPriceSC = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  display: grid;
  align-items: baseline;

  @media (max-width: ${middleWidth}px) {
    font-size: 20px;
  }
`;

export const SpanPriceSC = styled.span`
  display: block;
  color: #252525;
  line-height: 31px;
  @media (max-width: ${middleWidth}px) {
    height: 20px;
    line-height: 31px;
  }
  @media (max-width: ${minWidth}px) {
    line-height: 16px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const DividerSC = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.24);
`;

export const DivFirstRowDeliverySC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  width: 824px;
  height: 347px;
`;
export const DivTextBoldSizeSC = styled.div`
  font-weight: bold;
  display: flex;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  font-size: 30px;
  flex-direction: row;
  justify-content: space-between;
`;
export const DivInfoOfDeliverySC = styled.div`
  display: flex;
  margin-top: 16px;
`;
export const DivRowDeliverySC = styled.div``;
export const DivFirstRowInfoSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  width: 400px;
  height: 139px;
`;
export const DivSecondRowInfoSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  width: 400px;
  height: 139px;
  margin-left: 24px;
`;
export const DivTextMinSizeSC = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: rgba(133, 203, 51, 0.7);
`;
export const DivTextBoldSizeInfoDeliverySC = styled.div`
  font-weight: bold;
  display: flex;
  padding-top: 30px;

  font-size: 20px;
  flex-direction: row;
  justify-content: space-around;
`;
export const DivTextMinSizeInfoDeliverySC = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: rgba(133, 203, 51, 0.7);
`;

export const DivBoxMinWidthSC = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 70px;
`;

export const DivBoxProductMinWidthSC = styled.div`
  display: grid;
  //grid-template-rows: repeat(auto-fit, 206px);
`;

export const DivCartTitleMinSC = styled.div`
  background: #f3f3f380;
  border-radius: 20px;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  row-gap: 4px;
  @media (max-width: ${minWidth}px) {
    height: 101px;
    padding: 15px;
  }
`;
export const H2CartTitleSC = styled.h2`
  align-self: self-end;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 20px;
`;
export const DivSumForPayTitleSC = styled.div`
  grid-row: 2;
  display: grid;
  grid-template-rows: 100%;
  grid-auto-columns: max-content max-content;
  gap: 5px;
  p {
    grid-row: 1;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    color: #252525b2;
  }
  span {
    grid-row: 1;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    color: #252525cc;
  }
`;

export const DivCartTitleMinCheckBoxSC = styled.div`
  padding-right: 20px;
  grid-row: 1/3;
  align-self: center;
  justify-self: right;
`;

export const DivBoxMinWidthTitleProduct = styled.div`
  display: grid;
  grid-template-rows: 30px max-content;
  //gap: 10px;
  line-height: 37px;
`;

export const SpanTitleCartSC = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  //text-align: center;

  color: #cbcbcb;
`;

export const DivBoxButtonProducttMinWidthSC = styled.div`
  display: grid;
  //grid-template-rows: repeat(auto-fit, 206px);
  grid-template-columns: 25px 96px;
  justify-content: end;
  align-items: center;
  gap: 16px;
`;

export const DivBoxButtonProducttMinWidthIconSC = styled.div`
  height: 21px;
`;

export const DivBoxStarMinWidthIconTempSC = styled.div`
  display: grid;
  grid-template-columns: 95px max-content;
  gap: 12px;
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 31px;
    text-align: center;

    color: #cbcbcb;
  }
`;
export const DivBoxStarMinWidthIconSC = styled.div`
  width: 95px;
`;
export const DivContainerTitleSC = styled.div`
  box-sizing: border-box;
  padding: 15px;
`;

export const DivButtonTempSC = styled.div`
  box-sizing: border-box;
  padding: 15px;
`;

export const DivCartMinSecondForm = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  padding: 0 15px;
  row-gap: 15px;
`;

export const DivCartAddrDelivery = styled.div`
  box-sizing: border-box;
  //border: 1px solid black;
  background: #f3f3f380;
  border-radius: 20px;
  height: 454px;
`;

export const DivCartAddrDelTitleSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  padding: 19px 19px 32px 19px;
  align-items: baseline;
  justify-content: space-between;
  h2 {
    font-weight: 700;
    font-size: 20px;
  }
`;

export const DivCartAddrDataSC = styled.div`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: max-content;
  padding: 0 19px 19px;
  p {
    font-weight: 600;
    font-size: 18px;
    color: #252525cc;
  }
`;

export const DivCartWayToPay = styled.div`
  box-sizing: border-box;
  //border: 1px solid black;
  //height: 454px;
  background: #f3f3f380;
  padding: 20px 19px 25px;
  border-radius: 20px;
`;

export const DivCartWayToPayTitleSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  padding: 19px 0 32px 0px;
  align-items: baseline;
  justify-content: space-between;

  h2 {
    font-weight: 700;
    font-size: 20px;
  }
  h3 {
    font-weight: 600;
    font-size: 15px;
    color: #85cb33b2;
  }
`;
export const DivCartWayToPayDivider1 = styled.div`
  height: 260px;
  border-bottom: 1px solid #252525b2;
`;

export const DivCartWayToPayDataSC = styled.div`
  display: grid;
  grid-template-rows: max-content max-content max-content;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  margin-top: 10px;
  row-gap: 7px;
  border-bottom: 1px solid #252525b2;
  padding-bottom: 10px;
  h1 {
    font-weight: 600;
    font-size: 16px;
    color: #252525cc;
  }
  h2 {
    font-weight: 600;
    font-size: 16px;
    color: #252525;
  }
  h3 {
    font-weight: 600;
    font-size: 14px;
    color: #cbcbcb;
  }
`;
export const DivCartWayToPayTotalSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content;
  justify-content: space-between;
  padding: 12px 0 0px;
  h1 {
    font-weight: 700;
    font-size: 20px;
    color: #252525;
  }
  h2 {
    font-weight: 600;
    font-size: 16px;
    color: #252525;
  }
`;
