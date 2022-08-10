import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const DivReviewShowWrapSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  background:#fff;
    height: 150px;
  border-radius: 12px;
  padding: 27px 15px;
  margin-left:10px;
  width: 457px;
  
  -webkit-box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.08);
-moz-box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.08);
box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.08);
  align-content:start;
  align-items:center;
  width:457px;
  @media (max-width:1440px) {
      width: 100%;
  }
  @media (max-width:1340px) {
    transition: height .2s 0s;
    height: 150px;
  }
  @media (max-width:1240px) {
    margin-top:30px;
    
  }
`;

//------------------- Аватрака дата время рейтинг -------------------

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
  @media (max-width:1340px) {
    

  }
`;

export const LinkOnUserSC = styled(Link)`
  width: max-content;
  height: max-content;
  text-decoration: none;
  cursor: pointer;
`;

export const DivDateRatingInfoSC = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 6px;
  align-self:start;


`;

export const DivDateReviewCreateSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content;
  column-gap: 12px;
  align-items:center;

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
  font-size: 12px;
  }
`;
export const TextBoxReviewSC = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #252525;
@media (max-width:1340px) {
  font-size: 12px;

  }
`;

export const DivStarRaitingSC = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 12px;
`;

export const DivUserReviewSC = styled.div``;

//------------------- конец (Аватрака дата время рейтинг) -------------------

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
