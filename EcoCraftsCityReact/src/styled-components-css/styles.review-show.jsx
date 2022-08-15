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
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  @media (max-width: 1000px) {
    width: 288px;
    padding: 16px 16px 12px;
  }
  /* @media (max-width: 1000px) {
    height: 232px;
  } */
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

//------------------- конец (Аватрака Date время рейтинг) -------------------

export const ElipsIconSC = styled.div`
  width: 8px;
  height: 8px;
  background: rgba(0, 0, 0, 0.33);
  border-radius: 8px;
`;
export const SpanDataTextSC = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.33);
`;