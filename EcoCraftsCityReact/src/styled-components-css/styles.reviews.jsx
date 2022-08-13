import { Link } from "react-router-dom";
import styled from "styled-components/macro"; 

export const ReviewContainerSC = styled.div`
  display: grid;
  //grid-template-rows: 120px auto auto;
  row-gap: 50px;
`;

export const WrapShopContainerSC = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  //border: 2px solid grey;
  height: 356px;
  width: 90vw;
  max-width: 1400px;
  margin: auto;
  //margin-top: 50px;
  background: #dbf0c2;
  border-radius: 20px;
  @media (max-width: 440px) {
    height: 262px;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const DivRowContentSC = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: repeat(5, max-content);
  column-gap: 24px;
  row-gap: 24px;
  //border: 2px solid grey;
  //justify-content: center;
  //align-content: center;
  height: 100vh;
  width: 90vw;
  max-width: 1400px;
  margin: auto;
  //margin-top: 50px;
  margin-bottom: 30px;
 
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0px;
  }
`;

export const DivShopContainerSC = styled.div`
  display: grid;
  //border: 2px solid black;
  width: 100%;
  //height: 261px;
  background-color: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  padding: 20px;
  grid-row-gap: 30px;
  @media (max-width: 768px) {
    grid-column: 1 / 3;
    padding: 20px 15px 0px 15px;
    grid-row-gap: 70px;
  }
  @media (max-width: 440px) {
    padding: 10px 10px 0px 10px;
    grid-row-gap: 50px;
  }
`;

export const DivShopInfoSC = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  grid-column-gap: 20px;
`;

export const ImgShopInfoSC = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 12px;
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    border-radius: 10px;
  }
  @media (max-width: 440px) {
    width: 88px;
    height: 88px;
  }
`;

export const DivTitleShopInfoSC = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  //border: 2px solid green;
  font-size: 15px;
  font-weight: 600;
  grid-gap: 7px;
`;

export const TitleShopInfoSC = styled.h1`
  font-size: 15px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 440px) {
    font-size: 18px;
  }
`;

export const LocationShopInfoSC = styled.h1`
  font-weight: 500;
  font-size: 12px;
  @media (max-width: 440px) {
    font-size: 10px;
  }
`;

export const DivStarHideSC = styled.div`
  @media (min-width: 801px) {
    display: none;
  }
`;

export const DivLinksInfoSC = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  row-gap: 14px;
  width: 100%;
  //border: 2px solid green;
  height: max-content;
  //margin-top: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivLinksAdaptiveSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  /* align-items: center;
  justify-items: center; */
  height: 40px;
  border-top: 2px solid rgba(37, 37, 37, 0.1);
  margin: 0px -15px 0px -15px;
  @media (min-width: 801px) {
    display: none;
  }
  @media (max-width: 440px) {
    margin: 0px -10px 0px -10px;
  }
`;

export const LinkShopInfoSC = styled(Link)`
  font-weight: ${(p) => (p.isActive ? '700;' : '500')};
  font-size: 15px;
  line-height: 18px;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: var(--color-black);

  @media (max-width: 768px) {
    border-right: 2px solid rgba(37, 37, 37, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 440px) {
    font-size: 12px;
  }
`;

export const ButtonDropDownSC = styled.button`
  display: grid;
  /* align-items: center;
  justify-content: center; */
  font-weight: 600;
  font-size: 50px;
  line-height: 12px;
  letter-spacing: 5px;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: var(--color-black);
  border: none;
  background-color: initial;
  cursor: pointer;
  @media (max-width: 440px) {
    font-size: 40px;
    line-height: 15px;
    letter-spacing: 4px;
  }
`;

export const DivLinkReviewRaitingSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 10px;
  align-items: center;
  align-content: center;
`;

export const DivCardReviewsBoxSC = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-column: 2 / 3;
  grid-gap: 30px;
  //border: 2px solid black;
  width: 100%;
  height: max-content;
  margin-top: -100px;
  @media (max-width: 1390px) {
    grid-column: 1 / 3;
    margin-top: 0px;
  }
`;

export const DivTextButtonBoxSC = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  grid-row-gap: 35px;
  //border: 2px solid green;
  width: 100%;
  height: max-content;
  @media (max-width: 650px) {
    grid-column: 1 / 3;
  }
  @media (max-width: 768px) {
    grid-row-gap: 15px;
    font-size: 32px;
  }
`;

export const DivButtonBoxSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 20px;
  @media (max-width: 440px) {
    grid-gap: 10px;
  }
`;

export const ReviewBoxNameSC = styled.h1`
  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
  @media (max-width: 750px) {
    font-size: 32px;
  }
`;

// export const ButtonReviewPageSC = styled(Link)`
//   display: flex;
//   text-decoration: none;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   grid-gap: 10px;
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 20px;
//   text-align: center;
//   color: #ffffff;
//   background-color: #85cb33;
//   border-radius: 20px;
//   width: 149px;
//   height: 40px;
//   justify-self: center;
//   border-radius: 14px;
//   border: none;
// `;

export const DivModesBoxSC = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  grid-column: 1 / 3;
  border-radius: 20px;
  height: 50px;
  width: 100%;
  background-color: rgba(243, 243, 243, 0.5);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const DivModeSC = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`;

export const DivReviewsBoxSC = styled.div`
  display: grid;
`;

export const DivPagenationBoxSC = styled.div`
  display: flex;
  grid-gap: 5px;
  align-items: center;
  //grid-template-columns: 100%;
  height: 70px;
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  background-color: rgba(243, 243, 243, 0.5);
`;

export const ButtonPageBoxSC = styled.button`
color: rgb(115, 115, 115);
  font-weight: 600;
  font-size: 15px;
  //height: 30px;
  width: auto;
  padding: 1px 10px 1px 10px;
  /* min-width: 30px;
  min-height: 30px; */
  border-radius: 10px;
  border: 2.5px solid #85cb33;
  background-color: initial;
  cursor: pointer;
  :hover {
    background-color: #85cb33;
    color: #ffffff;
  }
  /* :active {
    background-color: rgb(114, 170, 46);
    color: #e5e5e5;
    border: 2.5px rgb(114, 170, 46);
    //padding: 1px 10px 1px 10px;
  } */
`;
