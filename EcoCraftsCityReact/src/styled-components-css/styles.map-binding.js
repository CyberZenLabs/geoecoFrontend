/* import image from "../img/white-card1.svg"
import image2 from "../img/white-card2.svg"
import image3 from "../img/cards-logo.svg"
import image4 from "../img/gray-rectangle.svg" */
import imageMB from '../img/Cards.svg';
import styled from 'styled-components';

export const DivMapBindingBoxSC = styled.div`
  display: grid;
  justify-items: center;
`;

export const DivContentMapBindingSC = styled.div`
  display: grid;
  //grid-template-rows: 223px 304px 416px;
  max-width: 600px;
  width: 85vw;
`;

export const DivContainerRowsMB = styled.div`
  display: grid;
  grid-template-rows: 139px 141px;
  @media (max-width: 686px) {
    width: 100%;
  }
`;
export const DivRowBoxSC = styled.div`
  max-width: 355px;
  width: 100%;
`;

export const DivBoxNumCardSC = styled.div`
  margin-top: 70px;
  margin-left: 38px;
  width: 355px;
  height: 56px;
`;

export const DivColumnsBoxSC = styled.div`
  display: grid;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '67px 6px 67px 109px')};
  @media (max-width: 686px) {
    width: 100%;
  }
`;

export const DivBoxMMSC = styled.div`
  width: 100%;
  height: 56px;
  margin-left: 38px;
`;

export const DivBoxGGSC = styled.div`
  width: 100%;
  height: 56px;
  margin-left: 76px;
`;
export const DivBoxCVVCVCSC = styled.div`
  width: 100%;
  height: 56px;
  margin-left: 335px;
  margin-top: 11px;
`;
export const DivSlashSC = styled.div`
  width: 100%;
  height: 20px;
  margin-left: 58px;
  margin-top: 17px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: rgba(37, 37, 37, 0.7);
`;

export const DivTextSC = styled.div`
  font-weight: 700;
  font-size: 32px;
  display: inline-block;
  width: fit-content;
  padding-top: 179px;
  padding-left: 24px;
  @media (max-width: 360px) {
    font-size: 28px;
  }
`;

export const DivImgBoxSC = styled.div`
  background-image: url(${imageMB});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 280px;
  @media (max-width: 730px) {
    width: 100%;
  }
`;

export const DivButtonsSC = styled.div`
  display: grid;
  /* grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '259px 259px')}; */
  grid-column-gap: 29px;
  max-width: 676px;
  width: 100%;
  padding-left: 24px;
  padding-bottom: 316px;
  padding-top: 65px;
`;
