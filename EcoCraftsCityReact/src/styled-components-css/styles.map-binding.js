import imageMB from '../img/Cards.svg';
import image720MB from '../img/Cards720.svg';
import image480MB from '../img/Cards480.svg';
import styled from 'styled-components';

export const DivMapBindingBoxSC = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
`;

export const DivContentMapBindingSC = styled.div`
  display: grid;
  //grid-template-rows: 223px 304px 416px;
  max-width: 600px;
  width: 100%;
`;

export const DivContainerRowsMB = styled.div`
  display: grid;
  grid-template-rows: 139px 67px;
  grid-row-gap: 16px;
  @media (max-width: 686px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    margin-bottom: 10px;
  }

  @media (max-width: 500px) {
    grid-row-gap: 9px;
  }
`;
export const DivRowBoxSC = styled.div`
  width: 100%;
  display: grid;
  align-items: end;
  justify-items: end;
  grid-template-columns: 16fr 9fr;
`;

export const DivBoxNumCardSC = styled.div`
  max-width: 355px;
  width: 100%;
  height: 56px;
`;

export const DivColumnsBoxSC = styled.div`
  display: grid;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '14.4% 7.1% 14.4% 64.1%')};
  @media (max-width: 686px) {
    width: 100%;
  }
`;

export const DivColumnMMBoxSC = styled.div`
  width: 100%;
  display: grid;
  align-items: start;
  justify-items: end;
`;

export const DivBoxMMSC = styled.div`
  align-items: center;
  max-width: 67px;
  width: 100%;
  height: 56px;
`;

export const DivColumnGGBoxSC = styled.div`
  width: 100%;
  display: grid;
  justify-items: start;
  align-items: start;
`;

export const DivBoxGGSC = styled.div`
  max-width: 67px;
  width: 100%;
  height: 56px;
`;

export const DivColumnCVVCVCBoxSC = styled.div`
  width: 100%;
  display: grid;
  align-items: end;
  justify-items: end;
  grid-template-columns: auto 16px;
  @media (max-width: 400px) {
    grid-template-columns: auto;
  }
`;

export const DivBoxCVVCVCSC = styled.div`
  max-width: 109px;
  width: 100%;
  height: 56px;
  display: grid;
`;

export const DivColumnSlashBoxSC = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 10fr 2fr;
`;

export const DivSlashSC = styled.div`
  max-width: 6px;
  width: 100%;
  height: 20px;
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
  background-position-x: 0px;
  display: grid;
  padding-left: 24px;
  @media (max-width: 730px) {
    width: 100%;
  }
  @media (max-width: 520px) {
    background-image: url(${image720MB});
    background-position: right 30px;
  }

  @media (max-width: 400px) {
    background-image: url(${image480MB});
    background-position: right 35px;
  }
`;

export const DivBox2ButtonsSC = styled.div`
  max-width: 1059px;
  width: 100%;
  height: 56px;
  display: grid;
  justify-items: center;
  padding-bottom: 467px;
  padding-top: 44px;
`;
export const DivButtonsSC = styled.div`
  display: grid;
  max-width: 504px;
  width: 100%;
  grid-column-gap: 30px;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '50% 50%')};
  @media (max-width: 686px) {
    width: 100%;
    display: grid;
    grid-column-gap: 20px;
    padding-top: 20px;
    margin-left: 30px;
    grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '43% 43%')};
  }
  @media (max-width: 500px) {
    display: grid;
    grid-column-gap: 20px;
    padding-top: 20px;
    grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '43% 43%')};
  }
`;

export const DivBoxButtonLinkSC = styled.div`
  :hover {
    background-color: #85cb33;
    color: white;
    cursor: pointer;
  }
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 10px 19px;
  color: #85cb33;
  font-size: 16px;
  height: 56px;
  font-weight: semibold;
  height: 100%;
  width: 100%;
  /* Акцент 70% */

  border: 2px solid rgba(133, 203, 51, 0.7);
  border-radius: 20px;
`;
