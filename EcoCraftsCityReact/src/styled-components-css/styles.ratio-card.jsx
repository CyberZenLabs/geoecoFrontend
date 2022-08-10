import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import ratingCard from "../img/rating-card.svg";

export const DivContainerSC = styled.div`
  //border: 2px solid black;
  width: 100%;
  height: 230px;
  background-color: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  padding: 20px 30px 20px 30px;
  @media (max-width: 750px) {
    padding: 20px 20px 20px 20px;
    border-radius: 0px;
  }
  @media (max-width: 505px) {
    padding: 0;
    background-color: initial;
  }
`;

export const DivContentBoxSC = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-gap: 42px;
  //border: 1px solid black;
  width: 100%;
  //height: 230px;
  @media (max-width: 950px) {
    grid-template-rows: repeat(3, max-content);
    grid-gap: 15px;
  }
`;

// export const TextBoxSC = styled.h1`
//   font-weight: 500;
//   font-size: 15px;
// `;

export const DivStatRatingSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  width: max-content;
  grid-gap: 20px;
  @media (max-width: 950px) {
    grid-template-columns: max-content;
  }
`;

export const DivRatioCardSC = styled.div`
  display: grid;
  background-image: url(${ratingCard});
  background-repeat: no-repeat;
  background-position: center;
  height: 121px;
  width: 185px;
  background-size: 185px;
  align-items: center;
  //justify-content: center;
  padding: 15px 0px 15px 30px;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const DivAlignBoxSC = styled.div`
  width: max-content;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  align-items: center;
  grid-gap: 10px;
`;

export const DivRatioCardSlimSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 5px;
  align-items: center;
  //justify-content: center;
  //padding: 15px 0px 15px 30px;
  @media (min-width: 951px) {
    display: none;
  }
`;

export const ValueRatingSC = styled.h1`
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 32px;
  //padding-left: 29px;
  @media (max-width: 950px) {
    font-weight: 500;
    font-size: 20px;
  }
`;

export const DivColumnBoxSC = styled.div`
  display: grid;
  //grid-template-rows: repeat(5, max-content);
  grid-template-columns: repeat(4, max-content);
  grid-column-gap: 20px;
  @media (max-width: 750px) {
    grid-column-gap: 14px;
  }
`;

export const DivStarRatingSC = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
`;

export const DivPercentSC = styled.div`
  display: grid;
  grid-template-rows: repeat(5, max-content);
  grid-row-gap: 9px;

  padding-top: 3px;
  @media (max-width: 950px) {
    grid-row-gap: 8px;
    padding-top: 3px;
  }
  @media (max-width: 750px) {
    grid-row-gap: 10px;
    padding-top: 3px;
  }
  @media (max-width: 440px) {
    grid-row-gap: 12.3px;
    padding-top: 6.3px;
  }
`;

export const TextBoxSC = styled.h1`
  width: max-content;
  font-weight: 500;
  font-size: 15px;
  @media (max-width: 750px) {
    font-size: 13px;
  }
  @media (max-width: 440px) {
    font-size: 10px;
  }
`;

export const DivProgressBoxSC = styled.div`
  display: grid;
  grid-template-rows: repeat(5, max-content);
  grid-row-gap: 20px;
  padding-top: 9px;
  @media (max-width: 950px) {
    grid-row-gap: 19px;
    padding-top: 8px;
  }
  @media (max-width: 750px) {
    grid-row-gap: 19px;
    padding-top: 8px;
  }
  @media (max-width: 440px) {
    grid-row-gap: 18.4px;
    padding-top: 10px;
  }
`;

export const DivNumberReviewsSC = styled.div`
  display: grid;
  grid-template-rows: repeat(5, max-content);
  grid-row-gap: 9px;
  padding-top: 3px;
  @media (max-width: 950px) {
    grid-row-gap: 8px;
    padding-top: 3px;
  }
  @media (max-width: 750px) {
    grid-row-gap: 10px;
    padding-top: 3px;
  }
  @media (max-width: 440px) {
    grid-row-gap: 12.3px;
    padding-top: 6.3px;
  }
`;
