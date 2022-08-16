import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';

export const DivWrapLinkSC = styled.div`
  max-width: 1420px;
  margin: auto;
  margin-top: 50px;
  // border: 2px solid black;
  padding-left: 20px;
  padding-right: 20px;
  width: 90vw;
  min-width: 600px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const DivStoreWrapSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 90vw;
  max-width: 1420px;
  margin: auto;
  color: black;
  padding-top: 80px;
  grid-gap: 24px;
  padding-bottom: 200px;
  // border: 2px solid black;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 360px;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;
export const DivStoreLeftPanelSC = styled.div`
width:100%;
  //  border: 2px solid green;
  //max-width: 350px;
  
`;
export const DivStoreRightPanelSC = styled.div`
  //border: 2px solid red;
  //max-width: 1000px;
  //width: 100%;
`;
export const DivStoreInfoSC = styled.div`
  display: grid;
  grid-template-columns: 70px 159px;
  // border: 2px solid red;
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  margin-bottom: 20px;
`;
export const DivStoreInfoImageSC = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 12px;
  //border: 2px solid blue;
  margin: 15px;
  @media (max-width: 1450px) {
    margin-top: 1vw;
    margin-left: 1vw;
  }
`;
export const DivStoreInfoDataSC = styled.div`
  display: grid;
  grid-template-rows: 36px 10px;
  height: 100%;
  width: 11vw;
  max-width: 220px;
  //border: 2px solid green;
  padding-top: 17px;
  margin-left: 40px;
  @media (max-width: 1450px) {
    margin-left: 2vw;
  }
`;
export const StoreInfoSubHeaderSC = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  //border: 2px solid pink;
`;
export const StoreInfoHeaderSC = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  //border: 2px solid pink;
  color: #000000;
`;
export const DivStoreOptionsSC = styled.div`
  height: 249px;
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  // border: 2px solid yellow;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const DivStarsPanelSC = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  width: 250px;
  //border: 2px solid red;
`;
export const DivStoreOptionsLeftPanelSC = styled.div`
  // border: 2px solid yellow;
  width: 110px;
`;
export const DivStoreOptionsRightPanelSC = styled.div`
  //border: 2px solid yellow;
  justify-self: start;
  width: 160px;
  padding-top: 2px;
`;
export const DivStoreOptionsLinkSC = styled(Link)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${(p) => (p.isActive ? '700;' : '500')};
  font-size: 15px;
  line-height: 25px;
  margin: 12px;
  color: black;
  text-decoration: none;
  //border: 2px solid gold;
`;

export const HrLinkSC = styled.hr`
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.171);
`;
export const HrLineSC = styled.hr`
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.171);
  margin-top: 100px;
`;
export const DivStoreInfoStuffSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-columns: 160px auto auto auto;
  width: auto;
  /* grid-gap: 1vw; */
  max-width: 1010px;
  padding-bottom: 10px;
  @media (max-width: 1470px) {
    grid-template-columns: 150px 130px auto;
    padding-bottom: 0px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 150px 20px auto;
  }
`;
export const DivStoreInfoStuffButtonSC = styled.div`
  @media (max-width: 1470px) {
    //   border: 2px solid blue;
    display: grid;
    grid-template-columns: 100%;
    max-width: 1010px;
    padding-bottom: 10px;
  }
`;
export const H1BoldTextSC = styled.h1`
  font-family: 'Montserrat';
  font-size: 30px;
  font-weight: 700;
  line-height: 37px;
  color: #252525;
  // border: 2px solid green;
  padding-top: 12px;
`;
export const StoreItemsNumSC = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 12px;
  color: #000000cc;
  //border: 2px solid gold;
  padding-top: 28px;
  justify-self: start;
  margin-left: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const StoreItemsNumBotSC = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 20px;
  /* identical to box height */

  /* Вторичный 80% */

  color: rgba(37, 37, 37, 0.8);
  //border: 2px solid gold;
  margin-bottom: 10px;
  justify-self: start;

  @media (min-width: 991px) {
    display: none;
  }
`;
export const StoreViewLinkDotsSC = styled(Link)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 12px;
  padding-top: 18px;
  color: #85cb33;
  text-decoration: none;
  // border: 2px solid gold;
  justify-items: end;
  width: 450px;
  display: grid;
  justify-self: end;
  @media (max-width: 1470px) {
    margin-right: 20px;
    width: auto;
  }
  @media (min-width: 1101px) {
    display: none;
  }
`;
export const StoreViewLinkSC = styled(Link)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 12px;
  padding-top: 28px;
  color: #85cb33;
  text-decoration: none;
  // border: 2px solid gold;
  justify-items: end;
  width: 450px;
  display: grid;
  justify-self: end;
  @media (max-width: 1470px) {
    font-size: 14px;
    padding-left: 0px;
    width: auto;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;
export const ProductCardButtonSC = styled(Link)`
  /* Кнопка (первичная) */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  max-width: 200px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  /* Акцент */
  text-decoration: none;
  background: #85cb33;
  border-radius: 20px;
  width: 16vw;
  height: 50px;
  justify-self: end;
  border-radius: 20px;
  border: none;
  @media (max-width: 1470px) {
    display: none;
  }
  :hover {
    background-color: #76b42e;
  }
`;
export const ProductCardButtonAfterSC = styled(Link)`
  /* Кнопка (первичная) */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  /* Акцент */
  text-decoration: none;
  background: #85cb33;
  border-radius: 20px;
  width: auto;
  height: 50px;
  border-radius: 20px;
  border: none;
  @media (min-width: 1471px) {
    display: none;
  }
  :hover {
    background-color: #76b42e;
  }
`;
export const DivItemsOptionsSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  margin-bottom: 20px;
  height: 200px;
  // border: 2px solid black;
  grid-template-rows: 0px 0px;
  max-width: 1140px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const DivOptionsPanelSC = styled.div`
  display: grid;
  // gap: 1vw;
  grid-template-columns: 175px 205px auto;
  // border: 2px solid red;
  height: 100px;
`;
export const ProductsNumSC = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: ${(p) => (p.isActive ? '#85cb33;' : 'rgba(37, 37, 37, 0.8)')};
  margin-top: 30px;
  cursor: pointer;

  // border: 2px solid yellow;
  justify-self: left;
  height: 40px;
  margin-left: 25px;
  border: none;
  background: none;
  @media (max-width: 750px) {
    margin-left: 15px;
  }
`;
export const StoreSalesAndAccountLinkSC = styled.button`
  text-decoration: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: ${(p) => (p.isActive ? '#85cb33;' : 'rgba(37, 37, 37, 0.8)')};
  margin-top: 30px;
  // border: 2px solid green;
  height: 40px;
  width: auto;
  justify-self: left;
  cursor: pointer;
  border: none;
  background: none;
`;
export const InputSC = styled.input`
  padding: 18px 0px 18px 10px;
  width: 56px;
  height: 56px;
  top: calc(50% - 56px / 2 - 140px);
  border: 2px solid var(--main-color);
  box-sizing: border-box;
  border-radius: 30px;
  outline: none;
  transition: 0.5s;
  color: #85cb33;
  background: initial;
  max-width: 30vw;
  @media (max-width: 1215px) {
    max-width: 20vw;
  }

  :hover {
    width: 350px;
    border-radius: 10px;
    background: white;
  }
`;
export const StoreSalesAndAccountLinkSearchSC = styled.div`
  text-decoration: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #85cb33;
  margin-top: 20px;
  // border: 2px solid blue;
  margin-right: 35px;
  justify-self: right;
  transform: translate(0%, 0%);
  height: 60px;
`;
export const DivOptionsPanel2SC = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  //border: 2px solid black;
  margin-top: 100px;
  height: 100px;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: flex-start;
  column-gap: 1vw;
  /* @media (max-width:768px) {
   justify-content: space-between;
   margin-left: 10px; 
  margin-right: 10px; 
  } */
`;
export const DropDownOptionsSC = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: rgba(37, 37, 37, 0.8);
  margin-top: 30px;
  //border: 2px solid blue;
  height: 30px;
  display: grid;
  cursor: pointer;
  grid-template-columns: auto auto;
  @media (max-width: 1470px) {
    font-size: 15px;
  }
`;
export const DivItemsSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  margin-bottom: 7px;
  height: 200px;
  // border: 2px solid black;
  grid-template-columns: 200px auto;
  grid-template-rows: 0px;
  width: auto;
  max-width: 1140px;
`;
export const DivItems2pageSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  margin-bottom: 7px;
  height: 200px;
  //border: 2px solid black;
  grid-template-columns: 200px auto;
  grid-template-rows: 0px;
  width: auto;
  max-width: 722px;
`;
export const DivItemsImageSC = styled.img`
  z-index: 1;
  display: grid;
  width: 200px;
  height: 196px;
  margin-top: -43px;
  border-radius: 20px;
  //border: 2px solid blue;
`;
export const DivItemsInfoSC = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 110px auto auto 70px;
  grid-template-areas:
    'title title title title'
    'time instock instock instock'
    'price price price price'
    'edit edit edit option';
  height: 200px;
  max-width: 793px;
  /* border: 2px solid black; */
  margin-left: 20px;
`;
export const DivItemsInfo2PageSC = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;

  grid-template-areas:
    'title title title'
    'time time time'
    'price price price ';

  height: 200px;
  max-width: 780px;
  // border: 2px solid black;
  margin-left: 20px;
`;
export const ItemTitleSC = styled.h1`
  grid-area: title;
  // border: 2px solid pink;
  font-family: 'Montserrat';
  font-style: normal;

  font-weight: 600;

  line-height: 30px;
  font-size: 25px;
  /* Вторичный */
  margin-top: 10px;
  color: #252525;
  max-width: auto;
  @media (max-width: 1100px) {
    font-size: 18px;
  }
`;
export const ItemTimeSC = styled.p`
  grid-area: time;
  //border: 2px solid black;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;

  line-height: 20px;
  width: 100%;
  /* identical to box height */
  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
`;
export const ItemInStockSC = styled.p`
  grid-area: instock;
  width: 100%;
  // border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  /* identical to box height */

  /* Вторичный 80% */

  color: rgba(37, 37, 37, 0.8);
`;
export const ItemPriceSC = styled.p`
  grid-area: price;
  // border: 2px solid red;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: auto;
  width: 100%;
  max-width: auto;
  /* identical to box height */

  /* Вторичный */

  color: #252525;
`;
export const ToEditSC = styled(Link)`
  grid-area: edit;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: auto;
  text-decoration: none;
  /* Акцент */
  width: 100%;
  /* margin-left: 40vw; */
  color: #85cb33;
  // border: 2px solid YELLOW;
  text-align: end;
  padding-top: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ItemOptionsDropDownSC = styled.button`
  z-index: 1;
  grid-area: option;
  text-decoration: none;
  background: none;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 2px;
  color: #85cb33;
  width: 100%;
  cursor: pointer;
  border: 2px solid green;
  text-align: center;
  height: 10px;
  margin-top: 30px;
  padding-bottom: 20px;
  transition: 1s;
  @media (max-width: 768px) {
    padding-bottom: 15px;
  }
`;
export const BottomPanelSC = styled.div`
  z-index: 1;
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  max-width: 1040px;
  height: 80px;
  margin-top: 20px;
  //border: 2px solid black;
  grid-template-columns: auto auto 17vw auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 768px) {
    grid-template-columns: 50% 50%;
  }
`;
export const BottomPanel2PageSC = styled.div`
  z-index: 1;
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  max-width: 1040px;
  height: 80px;
  //border: 2px solid black;
  grid-template-columns: 163px 113px auto auto;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 20px;
  @media (max-width: 1100px) {
    grid-template-columns: 163px 113px auto;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const BottomPanelChoiceSC = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 17px;
  /* identical to box height */
  text-decoration: none;
  padding-top: 7px;
  /* Акцент */
  color: #85cb33;
  //border: 2px solid red;
  height: 45px;
  width: auto;
  justify-self: start;
  align-self: center;
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 1470px) {
    font-size: 18px;
  }
`;
export const BottomPanelChoice2SC = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  /* identical to box height */
  text-decoration: none;
  padding-top: 7px;
  /* Акцент */
  color: #85cb33;
  //border: 2px solid red;
  height: 45px;
  width: auto;
  justify-self: start;
  align-self: center;
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 1470px) {
    font-size: 18px;
  }
`;
export const BottomPanelTextSC = styled(Link)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 17px;
  /* identical to box height */
  text-decoration: none;
  /* Акцент */
  color: #85cb33;
  // border: 2px solid green;
  height: 50px;
  align-self: center;
  justify-self: start;
  min-width: 160px;
  display: grid;
  padding-top: 15px;
  grid-template-columns: 30px auto;
  @media (max-width: 1470px) {
    font-size: 18px;
    grid-template-columns: 25px auto;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const DivBottomAddItemNumSC = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 20px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 200;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  height: 40px;
  width: 113px;
  color: #000000;
  //border: 2px solid green;
  @media (max-width: 1470px) {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const DivBottomAddItemNumItemSC = styled.div`
  margin-top: -20px;
  display: grid;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 200;
  font-size: 35px;
  line-height: 20px;
  text-align: center;
  grid-template-columns: auto auto auto;
  height: 20px;
  width: 160px;
  color: #000000;
  //border: 2px solid green;
  @media (max-width: 1470px) {
    font-size: 35px;
  }
`;
export const PlusMinusButtonsItemCS = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 200;
  font-size: 48px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 10px;
  text-align: center;
  margin-top: 5px;
  color: #000000;
  //border: 2px solid green;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  box-sizing: border-box;
  background: rgba(217, 217, 217, 0.28);
  border: 1px solid rgba(0, 0, 0, 0.33);

  transition: 0.3s;
  :hover {
    background: rgba(117, 116, 116, 0.26);
  }
`;
export const PlusMinusButtonsCS = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 200;
  font-size: 35px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 10px;
  text-align: center;
  margin-top: 5px;
  color: #000000;
  //border: 2px solid red;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  background: rgba(217, 217, 217, 0.28);
  border: 1px solid rgba(0, 0, 0, 0.33);
  @media (max-width: 768px) {
    display: none;
  }
  transition: 0.3s;
  :hover {
    background: rgba(117, 116, 116, 0.26);
  }
`;
export const DivCountSC = styled.div`
  //border: 2px solid red;

  margin-top: 6px;
`;
export const DivCount1SC = styled.div`
  //border: 2px solid red;

  margin-top: 20px;
`;
export const BottomPanelSelectSC = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 20px;
  width: 200px;
  height: 40px;
  border: none;
  background: #ffffff;
  border-radius: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: rgba(37, 37, 37, 0.8);

  @media (max-width: 768px) {
    display: none;
  }
`;
export const BottomPanelSelectItemSC = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  text-align: center;
  text-decoration: none;
  border-radius: 20px;
  width: 290px;
  height: 40px;
  border: none;
  background: #ffffff;
  border-radius: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: rgba(37, 37, 37, 0.8);
`;
export const BottomPanelTextDraftSC = styled(Link)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 17px;
  /* identical to box height */
  text-decoration: none;
  /* Акцент */
  color: #85cb33;
  padding-top: 5px;
  //border: 2px solid green;
  height: 30px;
  align-self: center;
  justify-self: start;
  min-width: 160px;

  @media (max-width: 1470px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const BottomPanelMoreSC = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 17px;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  /* identical to box height */
  /* Акцент */
  color: #85cb33;
  //border: 2px solid black;
  padding-bottom: 20px;
  width: 60px;
  height: 10px;
  justify-self: end;
  align-self: center;
  text-align: end;

  @media (max-width: 1470px) {
    font-size: 18px;
  }
`;
export const IoMarginCS = styled.div`
  margin-top: 4px;
  //border: 2px solid green;
`;

export const FaMarginCS = styled.div`
  margin-top: -5px;
  @media (max-width: 1470px) {
    padding-top: 4px;
  }
  //border: 2px solid green;
`;
export const UlDropdown1CS = styled.ul`
  //border: 2px solid black;
  transition: 1s;
  width: 100px;
  display: grid;
  height: 100px;
  margin-top: 25px;
  margin-left: -17px;
  background: #d9d9d9;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 10px;
  cursor: default;
`;
export const UlDropdownCS = styled.ul`
  //border: 2px solid black;
  cursor: default;
  width: 100px;
  display: grid;
  height: max-content;
  margin-left: -25px;
  margin-top: 14px;
  background: #d9d9d9;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 10px;
`;
export const LiDropdownCS = styled.li`
  //border: 2px solid black;
  justify-self: flex-start;
  margin-left: 10px;
`;
export const LiDropdownHideCS = styled.li`
  border: 2px solid black;
  justify-self: flex-start;
  margin-left: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const LiDropdownLinkCS = styled(Link)`
  //border: 2px solid black;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 10px;
  /* identical to box height */
  text-decoration: none;
  cursor: pointer;
  color: #76b42e;
  :hover {
    color: rgba(0, 0, 0, 0.33);
  }
`;

export const DivTwoButtonsSC = styled.div`
  @media (max-width: 768px) {
    display: grid;
    border-radius: 20px;
    margin-bottom: 20px;
    height: 54px;
    //border: 2px solid black;
    grid-template-columns: AUTO AUTO;
    max-width: 1140px;
    grid-gap: 20px;
  }
  @media (min-width: 991px) {
    display: none;
  }
`;
export const LeftButtonCS = styled.h1`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */
    text-align: center;
    color: rgba(37, 37, 37, 0.8);
    /* Акцент */
    text-decoration: none;
    background: rgba(243, 243, 243, 0.5);
    border-radius: 20px;
    width: auto;
    height: 50px;
    border-radius: 20px;
    cursor: pointer;
    border-radius: 20px;
    height: auto;
    // border: 2px solid black;
    max-width: auto;
  }
  @media (min-width: 991px) {
    display: none;
  }
`;
export const RightButtonCS = styled.h1`
  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */
    text-align: center;
    color: rgba(37, 37, 37, 0.8);
    /* Акцент */
    text-decoration: none;
    background: rgba(243, 243, 243, 0.5);
    border-radius: 20px;
    height: 50px;
    border-radius: 20px;
    border-radius: 20px;
    height: auto;
    //border: 2px solid black;
    max-width: auto;
  }
  @media (min-width: 991px) {
    display: none;
  }
`;
export const UilSearchSC = styled(UilSearch)`
  /* user-select: none; */
  display: block;
  pointer-events: none;
`;
export const UilSearchHeadSC = styled(UilSearch)`
  /* user-select: none; */

  margin-top: 22px;
  @media (min-width: 991px) {
    display: none;
  }
`;
export const DivIconBoxInput = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  pointer-events: none;
`;
export const InputCheckbox = styled.input`
  position: relative;
  width: 30px;
  height: 30px;
  color: black;
  border: 2px solid #85cb33;
  border-radius: 9px;
  appearance: none;
  outline: 0;
  cursor: pointer;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  &::before {
    position: absolute;
    content: '';
    display: block;
    top: 3px;
    left: 9px;
    width: 7px;
    height: 14px;
    border-style: solid;
    border-color: white;
    border-radius: 2px;
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    color: white;
    border-color: #85cb33;
    background: #85cb33;

    &::before {
      opacity: 1;
    }
  }
`;
export const InputCheckboxItem = styled.input`
  display: grid;
  z-index: 2;
  margin-left: 15px;
  margin-top: 15px;
  position: relative;
  width: 30px;
  height: 30px;
  color: black;
  border: 2px solid #85cb33;
  border-radius: 9px;
  appearance: none;
  outline: 0;
  cursor: pointer;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  &::before {
    position: absolute;
    content: '';
    display: block;
    top: 3px;
    left: 9px;
    width: 7px;
    height: 14px;
    border-style: solid;
    border-color: white;
    border-radius: 2px;
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    color: white;
    border-color: #85cb33;
    background: #85cb33;

    &::before {
      opacity: 1;
    }
  }
`;
export const Labelfor = styled.label`
  position: relative;
  cursor: pointer;
  padding: 0 0.25em 0;
  margin-top: 7px;
  //border: 2px solid blue;
`;
export const DivSalePinSC = styled.div`
  display: grid;
  z-index: 10;
  width: 50px;
  height: 25px;
  margin-top: -35px;
  position: relative;
  background: #ff3d3d;
  margin-left: 15px;
  border-radius: 73px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  padding-top: 3px;
  pointer-events: none;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
`;
export const SaveButtonSC = styled.button`
  /* Кнопка (первичная) */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  justify-self: end;
  margin-right: -15px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  /* Акцент */
  text-decoration: none;
  background: #85cb33;
  border-radius: 20px;
  width: 15vw;
  max-width: 200px;
  height: 50px;
  border-radius: 20px;
  border: none;
  @media (max-width: 1100px) {
    display: none;
  }

  :hover {
    background-color: #76b42e;
  }
`;
export const SaveButtonPanelSC = styled.button`
  /* Кнопка (первичная) */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-top: 20px;
  cursor: pointer;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  /* Акцент */
  text-decoration: none;
  background: #85cb33;
  border-radius: 20px;
  width: auto;
  height: 50px;
  border-radius: 20px;
  border: none;
  @media (min-width: 1101px) {
    display: none;
  }
  :hover {
    background-color: #76b42e;
  }
`;
export const DivButtonBottomSaveSC = styled.div`
  @media (max-width: 1100px) {
    // border: 2px solid blue;
    display: grid;
    grid-template-columns: 100%;
    max-width: 1010px;
  }
`;
//start
export const DivMainBlockSC = styled.div`
width: 100%;
display: grid;
margin-bottom:30px;
`;

export const DivBorderBlockSC = styled.div`
margin-top:45px;
padding: 0 20px;
  display: grid;
  justify-self: center;
  max-width: 1420px;
  width: 100%;
  //border: 1px solid red;
`;
export const DivBannerShopContainerSC = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  //border: 2px solid grey;
  height: 356px;
  width: 100%;
  margin: auto;
  max-width: 1420px;
  //margin-top: 50px;
  background: #dbf0c2;
  border-radius: 20px;
  @media (max-width: 440px) {
    height: 262px;
  }
  @media (max-width: 800px) {
    grid-template-columns: auto;
  }
`;
export const DivGridCatalogShopSC = styled.div`
//border: 1px solid red;
margin-top:45px;
  display: grid;
  max-width: 1420px;
  width:100%;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px;
  @media (max-width: 768px) {
    
    grid-template-columns: 1fr;
  
      }
`;

export const DivPageContentSC = styled.div`
  width: 100%;
`;
export const SpanTitlePageSC = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 46px;
color: #252525;

  @media (max-width: 768px) {
    display:none;
  }
`;