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
  padding: 0 30px;
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
margin-left:10px;
margin-top:10px;
margin-right:10px;
`;
export const UlifnoSC=styled.ul`
display:flex;
margin-left:10px;
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
export const liInfoSC = styled.li`
font-family: 'Montserrat';
font-style: normal;
font-size: 20px;
margin-bottom:14px;
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
cursor: pointer;
`;
export const DivInfoVendorBoxSC = styled.div`
background: rgba(243, 243, 243, 0.5);
border-radius: 20px;
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
padding: 0 30px;
`;
export const DivStoreInfoStuffProfileSC = styled.div`
  // border: 2px solid blue;
  display: grid;
  grid-template-columns: 230px auto auto auto;
  width: auto;
  /* grid-gap: 1vw; */
  max-width: 1010px;
  padding-bottom: 10px;
  @media (max-width: 1470px) {
    grid-template-columns: 230px 130px auto;

  }
  @media (max-width: 990px) {
    grid-template-columns: 230px 20px auto;
  }
`;
export const DivItemsOptionsSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 760px;
  // border: 2px solid black;
  max-width: 1140px;
`;
export const DivInnerContentSC = styled.div`
  display: grid;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  height: 720px;
 // border: 2px solid black;
  grid-template-rows: 140px 210px 50px 50px 50px 50px;
  max-width: 1140px;
  gap: 20px;
`;
export const DivTwoSidesSC = styled.div`
display: grid;
grid-template-columns: 240px auto;
//border: 2px solid blue;
`;
export const H1DefinSC = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
color: #3D3D3D;
justify-self: start;
align-self: flex-start;
margin-top: 5px;
`;
export const NameNCityFieldSC = styled.input`
box-sizing: border-box;
height:30px;
/* Auto layout */
display: flex;   
  width: 100%;
  max-width: 565px;
  //min-width: 320px;
flex-direction: row;
align-items: center;
justify-self: start;
padding: 18px 0px 18px 18px;
gap: 294px;
/* Акцент 70% */
border: 1px solid rgba(0, 0, 0, 0.33);
border-radius: 12px;
::placeholder{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */
color: rgba(37, 37, 37, 0.7);
}
:hover{
    border: 1px solid  #76b42e;
}
@media (max-width:700px) {
  ::placeholder{
 
font-size: 13px;

}
}
`;
export const BirthFieldSC = styled.input`

box-sizing: border-box;
height:30px;
/* Auto layout */
display: flex;   
  width: 100%;
  max-width: 212px;
  //min-width: 320px;
flex-direction: row;
align-items: center;
justify-self: start;
padding: 18px 0px 18px 18px;
gap: 294px;
/* Акцент 70% */
border: 1px solid rgba(0, 0, 0, 0.33);
border-radius: 12px;
::placeholder{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */
color: rgba(37, 37, 37, 0.7);
}
:hover{
    border: 1px solid  #76b42e;
}
@media (max-width:700px) {
  ::placeholder{
 
font-size: 13px;
}
}
`;
export const ButtonBannerSC = styled.button`
border-radius: 12px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-align: center;
color: rgba(0, 0, 0, 0.33);
cursor: pointer;
border: 1px solid rgba(0, 0, 0, 0.33);
height: 126px;
background: none;
max-width: 670px;
`;
export const ButtonImgSC = styled.button`
border-radius: 12px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-align: center;
color: rgba(0, 0, 0, 0.33);
cursor: pointer;
border: 1px solid rgba(0, 0, 0, 0.33);
height: 193px;
background: none;
max-width:193px;
`;