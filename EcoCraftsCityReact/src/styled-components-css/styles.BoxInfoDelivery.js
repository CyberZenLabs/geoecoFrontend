import styled from "styled-components/macro";

const middleWidth = 920

export const DivFirstRowDeliverySC = styled.div`
background: rgba(243, 243, 243, 0.5);
border-radius: 20px;
width: 100%;
  max-width: 824px;
height: 347px;

`;
export const DivTextBoldSizeSC = styled.div`
font-weight:bold;
display:flex;
padding-left:50px;
padding-right:50px;
padding-top:50px;
font-size:30px;
flex-direction: row;
    justify-content: space-between;

`;
export const DivInfoOfDeliverySC = styled.div`
display:grid;
margin-top:16px;
  height: max-content;
  
  grid-template-columns: auto auto;
  grid-template-rows: 100%;
  grid-gap: 19px;
  max-width: 824px;

  @media (max-width: ${middleWidth}px) {
    grid-template-columns: auto auto;
    grid-template-rows: 100%;
  }

`;
export const DivRowDeliverySC = styled.div`


`;
export const DivFirstRowInfoSC = styled.div`

background: rgba(243, 243, 243, 0.5);
border-radius: 20px;
width: 100%;
height: 139px;

`;
export const DivSecondRowInfoSC = styled.div`

background: rgba(243, 243, 243, 0.5);
border-radius: 20px;
width: 100%;
height: 139px;
//margin-left:24px;
`;
export const DivTextMinSizeSC = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
text-align: center;
color: rgba(133, 203, 51, 0.7);
`;
export const DivTextBoldSizeInfoDeliverySC = styled.div`
font-weight:bold;
display:flex;
padding-top:30px;

font-size:20px;
flex-direction: row;
    justify-content: space-around;

`;
export const DivTextMinSizeInfoDeliverySC = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 24px;
text-align: center;
color: rgba(133, 203, 51, 0.7);
`;


