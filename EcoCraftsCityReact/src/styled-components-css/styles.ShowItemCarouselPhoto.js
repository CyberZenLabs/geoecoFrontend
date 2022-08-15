import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const DivPhotoShowWrapSC = styled.div`

  display:grid;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap:5px;
`;
export const DivPhotoSC = styled.div`

display: grid;
  background: none;
  background-image: url(https://mobimg.b-cdn.net/v3/fetch/c4/c464d02f38c71b08e0df12d9eb36c2ce.jpeg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 12px;
  position: relative;
  aspect-ratio: 1/1;
  margin: 5px;
`;

export const TextDecriptionPhotoSC = styled.div`

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
/* identical to box height */

justify-self: center;
/* Вторичный */
color: #252525;
@media (max-width: 1240px) {
  font-size: 12px;
}
@media (max-width: 1000px) {
  font-size: 14px;
}
@media (max-width: 1000px) {
  font-size: 12px;
}
`;
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
