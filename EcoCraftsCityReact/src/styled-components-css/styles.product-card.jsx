import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 308px);
  grid-template-rows: fit-content auto;
  grid-gap: 30px;
  justify-content: ${({ isLoading }) => (isLoading ? ' center' : 'left')};
  width: 85vw;
  max-width: 1322px;
  margin: auto;
  position: relative;
  padding-top: 380px;
  margin-bottom: 80px;
  
  @media (max-width: 1560px) {
    padding-top: 24.5%;
  } ;
  @media (max-width: 759px) {
  justify-content: center;
  margin-bottom: 200px;

  } ;
`;
export const StarAlign = styled.div`
  width: 50%;
`;
export const DivGridPriceCartIcon = styled.div`
  margin-top: 11%;
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 480px) {
    align-items: center;
    justify-content: center;
  }
`;
export const DivCart = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: block;
    padding: 10px;
    background: #85cb33;
    border-radius: 12px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    justify-self: right;
  }
`;
export const ProductCardPrice = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  /* identical to box height */
  text-align: center;
  justify-self: start;
  /* Вторичный */
  color: #252525;
`;
export const ProductCardContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 10px;
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  margin-top: 20px;
  padding: 27px;

  @media (max-width: 1000px) {
    padding: 18px;
  }
  @media (max-width: 480px) {
    padding: 15px;
  }
  @media (max-width: 360px) {
    padding: 10px;
  }
`;

export const ProductCardImage = styled.img`
  width: 255px;
  height: 255px;
  justify-self: center;
`;

export const ProductCardName = styled.h4`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  /* identical to box height */
  text-align: left;
  justify-self: start;
  /* Вторичный 80% */
  color: rgba(37, 37, 37, 0.8);
`;

export const ProductCardStoreName = styled.h5`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #cbcbcb;
  justify-self: start;
`;
export const ProductCardButton = styled(Link)`
  /* Кнопка (первичная) */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  /* Акцент */
  background: #85cb33;
  border-radius: 20px;
  width: 100%;
  justify-self: center;
  border-radius: 15px;
  border: none;
  padding: 5%;
  margin-top: 12%;
  text-decoration: none;

  @media (max-width: 480px) {
    display: none;
  }
`;
