import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const DivBoxPersonalDataSC = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  margin-top: 10px;
`;
export const DivPersonalDataSC = styled.div`
  max-width: 1420px;
  width: inherit;
  height: 100%;

  padding: 0 10px;
  box-sizing: border-box;
  display: grid;
`;
export const SpanPersonalDataSC = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  font-size: 20px;
  margin: 30px 0px 30px 20px;
`;
export const DivBoxBlockSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  margin-bottom: 30px;
  padding: 35px;
  transition: padding .2s 0s;
  display:grid;
  grid-column-gap: 20px;
  @media (max-width: 768px) {
    padding: 25px;
  }
  @media (max-width: 480px) {
    padding: 20px;
  }
`;
export const DivBoxContentSC = styled.div`
  display: grid;
  grid-template-columns: 85px 1fr;
  margin-bottom: 35px;
  margin-right: 15px;
  @media (max-width: 405px) {
    margin-bottom: 3px;
  }
`;
export const DivBoxUserDataSC = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 80px;
  transition: grid-template-columns .2s 0s;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-column-gap: 20px;

  }
`;

export const DivEllipseSC = styled.div`
  width: 72px;
  height: 72px;
  background: #5da271;
  border-radius: 50%;
`;
export const SpanInitialsSC = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #252525;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
  @media (max-width: 360px) {
    font-size: 16px;
  }
`;
export const SpanConfirmAccountSC = styled.span`
  max-width: 100%;
  height: 40px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #85cb33;
  @media (max-width: 480px) {
    margin-top: 6px;
    font-size: 12px;

  }
`;

export const ButtonAddCardSC = styled(Link)`
  display: grid;
  justify-items: center;
  margin-top: 20px;
  width: 210px;
  height: 106px;
  border: 2px solid #dbf0c2;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  @media (max-width: 480px) {
    display: none;
  }
`;
export const ButtonAddCardSClitl = styled(Link)`
  margin-top: 10px;
  width: 100;
  height: 36px;
  border: 2px solid #dbf0c2;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  @media (min-width: 480px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
export const SpanTitleDataSC = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: rgba(37, 37, 37, 0.7);
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const SpanTextDataSC = styled.span`
  color: #252525;
`;
export const DivAddEllipseSC = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid #85cb33;
  position: relative;
  margin-top: 10px;
  display: flex;
  padding: 9px;
  justify-content: center;
`;
export const SpanTextAddCardSC = styled.span`
  font-weight: 500;
`;
export const SpanTextAddCardLittleSC = styled.span`
  margin-left: 8px;
  font-weight: 500;
`;
