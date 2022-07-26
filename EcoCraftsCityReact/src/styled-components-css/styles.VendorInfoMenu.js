
import styled from "styled-components/macro";


export const MenuProductST = styled.div`
display:flex;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
align-self: left;
color: #3D3D3D;
margin-top: 40px;

  @media (max-width: 480px) {
    display:none;

    }
`;
export const GreenST = styled.div`
color: #85CB33;
margin-right:1px;
`;
export const DivBoxNewProductsST = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin-top: 80px;
  justify-self: center;
  max-width: 1420px;
  padding 0 30px;
  grid-column-gap: 40px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    width: 100%;
    }
`;
export const DivBoxNewProductsBigST = styled.div`
width: 100%;
display: grid;
margin-bottom:30px;

`;

export const DivLogoST=styled.div`

background: #D9D9D9;
border-radius: 12px;
width: 102px;
height: 75px;
font-size:10px;
display:flex;
align-items: center;
text-align:center;
font-size:10px;


`;
export const DivInfoStoreST=styled.div`
display: grid;
  grid-template-columns: 1fr 1fr;

  font-size:15px;

  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  padding: 20px;
  @media (max-width: 1100px) {
    width: 270px;
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
display:flex;
flex-direction: column;



`;
export const SecondMenuST=styled.div`

background: rgba(243, 243, 243, 0.5);
border-radius: 20px;
margin-top:10px;
width: 323px;
height: 230px;
margin-bottom:30px;
display:flex;
flex-direction: column;

@media (max-width: 1100px) {
  width: 270px;

}
@media (max-width: 480px) {
  display:none;
  border:none;
  }
`;

export const DivStoreSetingST=styled.div`

margin-left:20px;
margin-top:10px;
font-weight: 500;
font-family: 'Montserrat';
font-style: normal;
font-size: 15px;
line-height: 18px;


`;
export const TextBold=styled.div`

font-weight:bold;


`;
export const Margin5pxST=styled.div`

margin-top:10px;


`;
export const SpanTextTitleSC = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 37px;
color: #252525;
display:flex;
justify-content: space-between;
margin:10px;
@media (max-width: 1000px) {
  font-size: 26px;
}

`;
export const OlifnoSC=styled.ol`

margin-left:10px;

list-style: inside;
padding: 0; 
margin-left: 10px;
font-weight: bold;
@media (max-width: 1000px) {
  font-size: 18px;
}


`;
export const DivDisplayFlexSC=styled.div`

display:flex;

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
export const DivAddProduct = styled.div`
display:grid;
    justify-self: center;

    justify-content:center;
    align-self: center;
    align-items: center;
    text-align: center;
    margin-top:180px;
    
    width:100%;

    @media (max-width: 1000px) {
      margin-top:100px;

      }
`;
export const SpanTextAddProdctSC = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
color: #000000;
position: relative;

`;


export const ButtonAddProductSC = styled.button`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
background: #85CB33;
padding: 18px 74px;
border-radius: 20px;
border:none;
cursor: pointer;
margin-top:45px;
`;

export const DivAddProductBox = styled.div`
display:flex;
flex-direction: column;
justify-content: space-around;
`;
export const DivButtonChangrInformSC = styled.div`
@media (max-width: 1000px) {
  display:none;
  
    }
display:flex;
background: #85CB33;
border-radius: 20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 2px 10px;
color: #FFFFFF;
font-size:16px;
`;
export const DivButtonChangrInformBottomSC = styled.div`
@media (min-width: 1000px) {
  display:none;
  
    }
    
        height: 34px;
display:flex;
background: #85CB33;
border-radius: 20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 2px 10px;
color: #FFFFFF;
font-size:16px;
margin-left:18px;
margin-right:19px;
margin-bottom:7px;
margin-top 20px;
`;
export const DivInfoVendorBoxSC = styled.div`
background: rgba(243, 243, 243, 0.5);
border-radius: 20px;
margin-bottom:10px;

`;
export const DivBorderBox = styled.div`

@media (max-width: 480px) {
  display:none;
  border:none;
  padding: 0px;
  margin: 0px;

    }
`;

export const DivBoxItemsSC = styled.div`
display: grid;
width:100%;
  justify-self: center;
  max-width: 1420px;
padding 0 30px;

`;
export const LiInfoSC = styled.li`
color: #3D3D3D;
margin-bottom:14px;
font-size: 20px;
display:flex;
@media (max-width: 1000px) {
  font-size: 16px;
}
@media (max-width: 766px) {
  font-size: 13px;
}
@media (max-width: 480px) {
  font-size: 12px;
}
`;
