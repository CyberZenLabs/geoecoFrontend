import styled from 'styled-components/macro';
import Dot from '../img/Dot.svg';
export const DivBlocksContainer=styled.div`
margin-top: 25px;
   display:grid;
grid-template-rows:128px 180px fit-content;
gap: 24px;
//border: 1px solid black;
width: 100%;
margin-bottom: 300px;
`;
export const DivPaymentMethods=styled.div`
background: rgba(243, 243, 243, 0.5);
border-radius: 20px;

//border: 1px solid yellow;
width: 100%;
`;
export const DivDeliveryMethods=styled.div`
background: rgba(243, 243, 243, 0.5);
border-radius: 20px;
//border: 1px solid green;
width: 100%;
`;
export const DivDeliveryColumns=styled.div`
max-width: 550px;
   display:grid;
grid-template-columns:auto auto ;
//border: 1px solid green;
`;
export const DivReturnExchange=styled.div`
background: rgba(243, 243, 243, 0.5);
border-radius: 20px;
//border: 1px solid blue;

`;
export const H1TextTitle=styled.h1`
//border: 1px solid red;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;

/* Вторичный */

color: #252525;
@media (max-width:768px) {
    font-size: 20px;
line-height: 25px;
}
@media (max-width:360px) {
    font-size: 18px;
line-height: 22px;
}
`;
export const PTextBlock=styled.p`
//border: 1px solid orange;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;

/* Вторичный */

color: #252525;
@media (max-width:768px) {
    font-size: 18px;
line-height: 22px;
}
@media (max-width:360px) {
    font-size: 14px;
line-height: 17px;
}
`;
export const DivBoxCatalogShopSC = styled.div`
//border: 1px solid red;
margin-top:45px;
  display: grid;
  max-width: 1420px;
  width:90vw;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr ;
      }
`;

export const DivImgDotSC = styled.div`
  max-width: 8px;
  width: 100%;
  height: 100%;
  background-image: url(${Dot});
  background-size: 100%;
  background-repeat: no-repeat;
margin-top: 8px;
 
`;
export const DivLeftBlock = styled.div`
display: grid;
grid-template-rows: auto auto;
gap: 20px;
`;
export const DivRightBlock = styled.div`
display: grid;
grid-template-rows: auto auto;
gap: 20px;
`;
export const PTextDotBlock=styled.p`
//border: 1px solid orange;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
/* Вторичный */

color: #252525;
display: grid;
grid-template-columns: 20px auto;
@media (max-width:360px) {
    font-size: 18px;
line-height: 22px;
}
`;
export const DivInnerWrap=styled.div`

   display:grid;
grid-template-rows:auto auto;
//border: 1px solid blue;
width: 100%;
height: 100%;
padding: 15px 15px 15px 20px;
gap: 10px;
`;