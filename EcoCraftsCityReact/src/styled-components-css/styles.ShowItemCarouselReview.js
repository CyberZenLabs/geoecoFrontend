import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const DivReviewShowWrapSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  grid-gap: 10px;
  background:#fff;
    height: 150px;
  border-radius: 12px;
  padding: 15px 15px;
  margin: 2% 3%;
  
  
  -webkit-box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.08);
-moz-box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.08);
box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.08);
  align-content:center;
  align-items:center;

  @media (max-width:1440px) {
    padding: 12px 12px;

  transition: height .1s 0s;
  height: 130px;
  }
  @media (max-width:1240px) {
    padding: 12px 12px;

  transition: height .1s 0s;
  height: 110px;
  }
  @media (max-width:1140px) {
    padding: 10px 10px;
  transition: height .1s 0s;
  height: 100px;
  grid-gap: 5px;
  } 
  @media (max-width:1040px) {
  height: 90px;
  }
  @media (max-width:990px) {
  height: 140px;
  grid-gap: 10px;
  padding: 12px 12px;
  }
  @media (max-width:840px) {
  height: 110px;
  }
  @media (max-width:720px) {
  height: 150px;
  margin: 2% 3%;
  }
  @media (max-width:640px) {
  height: 120px;
  }
  @media (max-width:480px) {
    height: 100px;
  }
`;

//------------------- Аватрака Date время рейтинг -------------------

export const DivAvatarDateRatingInfoSC = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 16px;
  @media (max-width: 1000px) {
    grid-gap: 12px;
  }
`;

export const ImgUserAvatarSC = styled.img`

  border-radius: 12px;
  width: 93px;
  height: 93px;


  @media (max-width:1440px) {
  width: 83px;
  height: 83px;
  transition: height .1s 0s;
  transition: width .1s 0s;
  }
  @media (max-width:1140px) {
  width: 65px;
  height: 65px;
  transition: height .1s 0s;
  transition: width .1s 0s;
  }
  @media (max-width:1040px) {
  width: 55px;
  height: 55px;
  }
  @media (max-width:990px) {
    width: 93px;
  height: 93px;
  }
  @media (max-width:940px) {
    width: 83px;
  height: 83px;
  }
  @media (max-width:840px) {
    width: 65px;
  height: 65px;
  }
  @media (max-width:720px) {
    width: 120px;
  height: 120px;
  }
  @media (max-width:640px) {
    width: 100px;
  height: 100px;
  }
  @media (max-width:480px) {
    width: 65px;
  height: 65px;
  }
`;

export const LinkOnUserSC = styled(Link)`
  width: max-content;
  height: max-content;
  text-decoration: none;
  cursor: pointer;
  display: grid;
`;

export const DivDateRatingInfoSC = styled.div`
  display: grid;
  grid-template-rows: 20px 20px;
  row-gap: 6px;
  align-self:start;

  @media (max-width:1340px) {
    grid-template-rows:20px;
    grid-template-rows: 15px 15px;
  }
  @media (max-width:1240px) {
    grid-template-rows:20px;
    grid-template-rows: 13px 13px;

  }
  @media (max-width:990px) {
    grid-template-rows: 20px 20px;
  }
  @media (max-width:840px) {
    grid-template-rows: 13px 13px;
  }
  @media (max-width:720px) {
    grid-template-rows: 20px 20px;
  }
  @media (max-width:640px) {
    grid-template-rows: 18px 18px;
  }
  @media (max-width:480px) {
    grid-template-rows:13px 13px;
  }
`;

export const DivDateReviewCreateSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content;
  column-gap: 12px;
  align-items:center;
  @media (max-width:1240px) {
    column-gap: 8px;

  }
  @media (max-width:1140px) {
    column-gap: 4px;
  }

`;
export const ElipsIconSC = styled.div`
width: 8px;
height: 8px;
background: rgba(0, 0, 0, 0.33);
border-radius:8px
`;
export const SpanDataTextSC = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
color: rgba(0, 0, 0, 0.33);
@media (max-width:1340px) {
  font-size: 14px;
  }
  @media (max-width:1240px) {
  font-size: 12px;
  }
  @media (max-width:1140px) {
  font-size: 10px;
  }
  @media (max-width:990px) {
    font-size: 14px;
  }
  @media (max-width:940px) {
    font-size: 12px;
  }
  @media (max-width:840px) {
    font-size: 10px;
  }
  @media (max-width:720px) {
    font-size: 16px;
  }
  @media (max-width:640px) {
    font-size: 12px;
  }
  @media (max-width:540px) {
    font-size: 12px;
  }
  @media (max-width:480px) {
    font-size: 11px;
  }
  @media (max-width:400px) {
    font-size: 10px;
  }
`;
export const TextBoxReviewSC = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #252525;
@media (max-width:1340px) {
  font-size: 14px;
  }
  @media (max-width:1240px) {
  font-size: 12px;
  }
  @media (max-width:1140px) {
  font-size: 10px;
  }
  @media (max-width:990px) {
    font-size: 14px;
  }
  @media (max-width:940px) {
    font-size: 12px;
  }
  @media (max-width:840px) {
    font-size: 10px;
  }
  @media (max-width:720px) {
    font-size: 16px;
  }
  @media (max-width:640px) {
    font-size: 14px;
  }
  @media (max-width:540px) {
    font-size: 12px;
  }
  @media (max-width:480px) {
    font-size: 11px;
  }
  @media (max-width:400px) {
    font-size: 10px;
  }
`;

export const DivStarRaitingSC = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 12px;
@media (max-width:1340px) {
  display: none;
  }
  @media (max-width:990px) {
  display: grid;
  }
  @media (max-width:840px) {
    display: none;
  }
  @media (max-width:720px) {
    display: grid;
  }
  @media (max-width:480px) {
    display: none;
  }
`;
export const DivStarRaitingAdaptiveSC = styled.div`
display: none;
@media (max-width:1340px) {
  display: grid;
  grid-template-columns: auto;
  }
  @media (max-width:990px) {
    display: none;
  }
  @media (max-width:840px) {
    display: grid;
  }
  @media (max-width:720px) {
    display: none;
  }
  @media (max-width:480px) {
    display: grid;
  }
`;
export const DivUserReviewSC = styled.div``;

//------------------- конец (Аватрака Date время рейтинг) -------------------

// export const DivContentWrapSC = styled.div`
//   margin-top: 10px;
//   //border: 1px solid blue;
//   display: grid;
//   grid-template-rows: auto auto auto auto auto;
//   gap: 5px;
// `;
// export const DivDateWrapSC = styled.div`
//   //border: 1px solid green;
// `;
// export const DateTextSC = styled.h1`
//   margin-top: 10px;
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 500;
//   font-size: 15px;
//   line-height: 18px;
//   //border: 1px solid blue;
//   color: #000000;
//   height: 20px;
// `;
// export const H1СustomerNameSC = styled.h1`
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 600;
//   font-size: 15px;
//   line-height: 18px;
//   //border: 1px solid blue;
//   color: #000000;
//   height: 20px;
// `;
// export const ButtonFilterSC = styled.button`
//   background: none;
//   border: none;
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 17px;
//   /* identical to box height */
//   color: #000000;
//   //border: 1px solid blue;
//   justify-self: flex-start;
//   height: 20px;
//   cursor: pointer;
// `;
// export const PReviewTextSC = styled.p`
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 17px;
//   /* identical to box height */
//   color: #000000;
//   //border: 1px solid blue;
//   justify-self: flex-start;
//   height: max-content;
//   margin-bottom: 10px;
// `;
