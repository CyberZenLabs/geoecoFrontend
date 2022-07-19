import styled from "styled-components/macro";


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
margin 30px 0px 30px 20px;
`;
export const DivBoxBlockSC = styled.div`
height: 221px;
background: rgba(243, 243, 243, 0.5);
border-radius: 20px;
margin-bottom:30px;
padding: 35px;
padding-top:10px;
padding-left:0px;
`;
export const DivBoxContentSC = styled.div`

display: grid; 
grid-template-columns: 85px 1fr; 
margin-bottom:35px;
margin-right:35px;
@media (max-width: 405px) {
  margin-bottom:3px;
  }

`;
export const DivBoxUserDataSC = styled.div`


  display: grid; 
grid-template-columns: repeat(4,1fr);

@media (max-width: 730px) {
  display: flex;
}
@media (max-width: 405px) {
  display: flex;
  flex-direction: column;
  }

`;


export const DivEllipseSC = styled.div`
width: 72px; 
height: 72px;
background: #5DA271;
border-radius: 50%;
`;
export const SpanInitialsSC = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #252525;
display:flex;
justify-content: space-between;
@media (max-width: 480px) {
  font-size: 20px;
}
@media (max-width: 360px) {
  font-size: 16px;
}
`;
export const SpanConfirmAccountSC = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: #85CB33;
@media (max-width: 480px) {
  margin-top:6px;
}
`;

export const DivAddCardSC = styled.div`
margin-top:18px;
width: 210px;
height: 106px;
border: 2px solid #DBF0C2;
border-radius: 16px;
justify-content: center;
align-items: center;
@media (max-width: 480px) {
  display:none;
}
`;
export const DivAddCardSClitl = styled.div`
margin-top:18px;
width: 100;
height: 36px;
border: 2px solid #DBF0C2;
border-radius: 16px;
justify-content: center;
align-items: center;
@media (min-width: 480px) {
  display:none;
}
@media (max-width: 480px) {
  display:flex;
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
`;
export const SpanTextDataSC = styled.span`
color: #252525;
`;
export const DivAddEllipseSC = styled.div`
width: 42px; 
height: 42px;
border-radius: 50%;
border: 2px solid #85CB33;
position: relative;
margin: 19px 30px 0px 80px;
display: flex;
padding: 9px;
justify-content: center;

`;
export const SpanTextAddCardSC = styled.span`
margin-left:40px;
font-weight: 500;
`;
export const SpanTextAddCardLittleSC = styled.span`
margin-left:8px;
font-weight: 500;
`;