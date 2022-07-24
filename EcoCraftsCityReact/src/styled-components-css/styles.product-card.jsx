import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 308px);
  grid-template-rows: fit-content auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  grid-gap: 30px;
  justify-content: space-evenly;
  width: 85vw;
  max-width: 1322px;
  margin: auto;
  position: relative;
  padding-top: 380px;
  @media (max-width: 1560px) {
    padding-top: 24.5%;
  } ;
`;
export const StarAlign = styled.div`
  width: 50%;
  margin-left: 24px;
`;
<<<<<<< HEAD
export const DivGridPriceCartIcon = styled.div`
margin-top:35%;
display: grid;
grid-template-columns: 2fr 1fr;

    @media (max-width: 480px) {
    align-items:center;
    justify-content: center;
      }
`;
export const DivCart = styled.div`
display:none;
@media (max-width: 480px) {
  display:block;
  padding:10px;
background: #85CB33;
border-radius: 12px;
width: 40px;
height: 40px;
cursor: pointer;
justify-self:right;
  }

`;
export const ProductCardPrice = styled.h3`
font-family: "Montserrat";
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
grid-row-gap:10px;
background: rgba(243, 243, 243, 0.5);
border-radius: 20px;
margin-top:20px;
padding:27px;

@media (max-width: 1000px) {
  padding:18px;

  }
@media (max-width: 480px) {
  padding:15px;
  }
@media (max-width: 360px) {
    padding:10px;
    }
`;


export const ProductCardImage = styled.img`
width:100%;
height:150%;
`;

export const ProductCardName = styled.h4`
font-family: "Montserrat";
font-style: normal;
font-weight: 600;
font-size: 20px;
/* identical to box height */
text-align: center;
justify-self: start;
/* Вторичный 80% */
color: rgba(37, 37, 37, 0.8);
=======

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 307px);
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ProductCardContainer = styled.div`
  width: 307px;
  height: 597px;
  display: grid;
  grid-template-rows: 329px 37px 35px 38px 69px 63px;
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
`;

export const ProductCardImage = styled.img`
  width: 283px;
  height: 283px;
  padding-top: 26px;
  justify-self: center;
`;

export const ProductCardPrice = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  /* identical to box height */
  padding: 0 27px;
  text-align: center;
  justify-self: start;
  /* Вторичный */

  color: #252525;
`;

export const ProductCardName = styled.h4`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  /* identical to box height */
  padding: 0 27px;
  text-align: center;
  justify-self: start;
  /* Вторичный 80% */

  color: rgba(37, 37, 37, 0.8);
>>>>>>> main
`;

export const ProductCardStoreName = styled.h5`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  padding: 0 27px;
  color: #cbcbcb;
  justify-self: start;
`;
export const ProductCardButton = styled(Link)`
<<<<<<< HEAD
/* Кнопка (первичная) */
/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
font-family: "Montserrat";
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
margin-top:12%;
text-decoration:none;

@media (max-width: 480px) {
  display:none;
  }
`;


=======
  /* Кнопка (первичная) */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10px;

  font-family: "Montserrat";
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
  width: 283px;
  justify-self: center;
  border-radius: 15px;
  border: none;
`;
>>>>>>> main
