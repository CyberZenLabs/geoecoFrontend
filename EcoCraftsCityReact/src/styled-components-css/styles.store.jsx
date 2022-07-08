import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";

export const DivWrapLinkSC = styled.div`
  max-width: 1420px;
  margin: auto;
  margin-top: 50px;
  // border: 2px solid black;
  padding-left: 20px;
  padding-right: 20px;
  width: 90vw;
  min-width: 600px;
`;
export const DivStoreWrapSC = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  width: 90vw;
  max-width: 1420px;
  margin: auto;
  color: black;
  padding-top: 30px;
  grid-gap: 20px;
  padding-bottom: 30px;
  // border: 2px solid black;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 600px;
  @media (max-width: 990px) {
    grid-template-columns: 100%;
  }
`;
export const DivStoreLeftPanelSC = styled.div`
  //  border: 2px solid green;
  margin-top: 20px;
  //max-width: 350px;
  @media (max-width: 990px) {
    display: none;
  }
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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  //border: 2px solid pink;
`;
export const StoreInfoHeaderSC = styled.h3`
  font-family: "Montserrat";
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
  grid-template-columns: 80px auto;
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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  margin: 20px;
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
  // border: 2px solid blue;
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
`;
export const DivStoreInfoStuffButtonSC = styled.div`
  @media (max-width: 1470px) {
    //border: 2px solid blue;
    display: grid;
    grid-template-columns: 100%;
    max-width: 1010px;
    padding-bottom: 10px;
  }
`;
export const H1BoldTextSC = styled.h1`
  font-family: "Montserrat";
  font-size: 30px;
  font-weight: 700;
  line-height: 37px;
  color: #252525;
  // border: 2px solid green;
  padding-top: 12px;
`;
export const StoreItemsNumSC = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 12px;
  color: #000000cc;
  //border: 2px solid gold;
  padding-top: 28px;
  justify-self: start;
  margin-left: 5px;
`;
export const StoreViewLinkSC = styled(Link)`
  font-family: "Montserrat";
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
`;
export const ProductCardButtonSC = styled(Link)`
  /* Кнопка (первичная) */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "Montserrat";
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
`;
export const ProductCardButtonAfterSC = styled(Link)`
  /* Кнопка (первичная) */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "Montserrat";
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
  @media (max-width: 990px) {
    display: none;
  }
`;
export const DivOptionsPanelSC = styled.div`
  display: grid;
  // gap: 1vw;
  grid-template-columns: 175px 205px auto auto;
  // border: 2px solid red;
  height: 100px;
  @media (max-width: 750px) {
    grid-template-columns: 150px 180px auto auto;
  }
`;
export const ProductsNumSC = styled.button`
  font-family: "Montserrat";
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
  font-family: "Montserrat";
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
  @media (max-width: 1270px) {
    max-width: 15vw;
  }
  @media (max-width: 1070px) {
    max-width: 10vw;
  }
  :hover {
    width: 350px;
    border-radius: 10px;
    background: white;
  }
`;
export const StoreSalesAndAccountLinkSearchSC = styled.div`
  text-decoration: none;
  font-family: "Montserrat";
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
  @media (max-width: 750px) {
    margin-right: 15px;
  }
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
  /* @media (max-width:990px) {
   justify-content: space-between;
   margin-left: 10px; 
  margin-right: 10px; 
  } */
`;
export const DropDownOptionsSC = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: rgba(37, 37, 37, 0.8);
  margin-top: 30px;
  //border: 2px solid blue;
  height: 30px;
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 1470px) {
    font-size: 15px;
  }
`;
export const DivItemsSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  margin-bottom: 2px;
  height: 200px;
  //border: 2px solid black;
  grid-template-rows: 0px;
  width: auto;
  max-width: 1140px;
`;
export const DivItemsImageSC = styled.img`
  width: 200px;
  height: 196px;
  border-radius: 20px;
  //border: 2px solid blue;
`;
export const DivItemsInfoSC = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 110px auto auto 70px;
  grid-template-areas:
    "title title title title"
    "time instock instock instock"
    "price price price price"
    "edit edit edit option";
  height: 200px;
  max-width: 780px;
  // border: 2px solid black;
  margin-left: 220px;
`;
export const ItemTitleSC = styled.h1`
  grid-area: title;
  // border: 2px solid pink;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;

  /* Вторичный */
  margin-top: 10px;
  color: #252525;
  max-width: auto;
`;
export const ItemTimeSC = styled.p`
  grid-area: time;
  //border: 2px solid black;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
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
  font-family: "Montserrat";
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
  font-family: "Montserrat";
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
  font-family: "Montserrat";
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
  @media (max-width: 990px) {
    display: none;
  }
`;
export const ItemOptionsDropDownSC = styled.p`
  grid-area: option;
  text-decoration: none;

  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 2px;
  color: #85cb33;
  width: 100%;
  // border: 2px solid green;
  text-align: center;
  padding-top: 30px;
  @media (max-width: 990px) {
    padding-bottom: 15px;
  }
`;
export const BottomPanelSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  max-width: 1040px;
  height: 80px;
   //border: 2px solid black;
  grid-template-columns: auto auto 17vw auto;
  padding-left: 15px;
  padding-right: 25px;
  @media (max-width: 990px) {
    grid-template-columns: 50% 50%;
  }
`;
export const BottomPanelChoiceSC = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 17px;
  /* identical to box height */
  text-decoration: none;
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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 17px;
  /* identical to box height */
  text-decoration: none;
  /* Акцент */
  color: #85cb33;
  //border: 2px solid green;
  height: 50px;
  align-self: center;
  justify-self: start;
  min-width: 160px;
  display: grid;
  padding-top: 10px;
  grid-template-columns: 30px auto;
  @media (max-width: 1470px) {
    font-size: 18px;
    grid-template-columns: 25px auto;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;
export const BottomPanelTextDraftSC = styled(Link)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 17px;
  /* identical to box height */
  text-decoration: none;
  /* Акцент */
  color: #85cb33;
  //border: 2px solid green;
  height: 30px;
  align-self: center;
  justify-self: start;
  min-width: 160px;
  
  @media (max-width: 1470px) {
    font-size: 18px;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;
export const BottomPanelMoreSC = styled(Link)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 17px;
  text-decoration: none;
  /* identical to box height */
  /* Акцент */
  color: #85cb33;
 // border: 2px solid black;
  height: 30px;
  justify-self: end;
  align-self: center;
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
export const DivTwoButtonsSC = styled.div`
  @media (max-width: 990px) {
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
  @media (max-width: 990px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: "Montserrat";
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
  @media (max-width: 990px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: "Montserrat";
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
export const DivIconBoxInput = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  pointer-events: none;
`;
export const InputCheckbox=styled.input`

 position: relative;
  width: 30px;
  height:30px;
  color: black;
  border: 1px solid #85cb33;
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
    left: 10px;
    width: 7px;
    height: 14px;
    border-style: solid;
     border-color: white;
     border-radius:2px;
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    color:white;
    border-color:#85cb33;
    background:#85cb33;
   
    &::before {
      opacity: 1;
     
    }
  }
`;
export const Labelfor=styled.label`
 position: relative;
 cursor: pointer;
 padding: 0 0.25em 0 ;
margin-top: 7px;
  //border: 2px solid blue;
`;
