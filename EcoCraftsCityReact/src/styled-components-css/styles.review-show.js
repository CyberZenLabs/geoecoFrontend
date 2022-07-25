import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const DivReviewShowWrapSC = styled.div`
  //width: 100%;
  display: grid;
  grid-template-rows: max-content 120px 48px;
  
  grid-gap: 10px;
  background-color: rgba(243, 243, 243, 0.2);
  width: 420px;
  //height: 272px;
  border-radius: 12px;
  padding: 24px 24px 22px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  @media (max-width: 1000px) {
    width: 288px;
    padding: 16px 16px 12px;
  }
  /* @media (max-width: 1000px) {
    height: 232px;
  } */
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
  border-radius: 30px;
  width: 50px;
  height: 50px;
  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
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
  @media (max-width: 1000px) {
    grid-gap: 4px;
  }
`;

export const DivDateReviewCreateSC = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 12px;
`;

export const TextBoxReviewSC = styled.p`
  ${(p) => (p.color !== undefined ? `color:${p.color};` : "color: black;")}
  ${(p) =>
    p.weight !== undefined ? `font-weight:${p.weight};` : "font-weight: 400;"}
  font-size: 16px;
  line-height: 22px;
  @media (max-width: 1000px) {
    font-size: 14px;
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