
import styled from "styled-components/macro";






export const DivLogoST=styled.div`

background: #D9D9D9;
border-radius: 12px;
width: 75px;
height: 75px;
font-size:10px;
display:flex;
align-items: center;
text-align:center;
font-size:10px;


`;
export const DivInfoStoreST=styled.div`
display: grid;
  grid-template-columns: 1fr 3fr;
  font-size:15px;
    grid-column-gap: 20px;
  @media (max-width: 1100px) {
    grid-column-gap: 10px;

  }
  @media (max-width: 480px) {
    display:none;
    border:none;
    padding: 0px;
    margin: 0px;

      }
  
 

`;

export const MarginST=styled.div`
margin-top:10px;
font-size:10px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
line-height: 12px;
color: #000000;
`;
export const DivInfoST=styled.div`
display:grid;
justify-items:left;


`;
export const SecondMenuST=styled.div`

margin-top:35px;
margin-bottom:30px;
display:flex;
flex-direction: column;


@media (max-width: 480px) {
  display:none;
  border:none;
  }
`;

export const DivStoreSetingST=styled.div`

margin-top:10px;
font-weight: 500;
font-family: 'Montserrat';
font-style: normal;
font-size: 15px;
line-height: 18px;


`;
export const TextBoldSettingsCS=styled.div`
margin-top:13px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;
margin-right:10px;
color: #000000;
`;


export const SpanTextTitleShopSC = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;

color: #000000;
`;
export const SpanLogoText = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 12px;
text-align: center;

color: #000000;
`;

export const DivBorderBox = styled.div`
height:100%;

@media (max-width: 768px) {
  display:none;
  border:none;
  

    }
`;

export const DivShopSettings = styled.div`
background: rgba(243, 243, 243, 0.5);
border-radius: 20px;
width:100%;
padding: 18px;
@media (max-width: 1000px) {
  padding: 10px;

    }
`;