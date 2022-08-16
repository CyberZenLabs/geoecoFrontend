import { Link } from "react-router-dom";

import styled from "styled-components/macro";


export const ImgBannerShopSC = styled.img`
    display:grid;
    justify-self: center;
    width:100%;
    
`;
export const DivBoxContentSC = styled.div`
margin-top:45px;
padding: 0 20px;
  display: grid;
  justify-self: center;
  max-width: 1420px;
  //border: 1px solid red;
`;
export const DivBoxNewProductsBigST = styled.div`
width: 100%;
display: grid;
margin-bottom:30px;

`;
export const WrapShopContainerSC = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  //border: 2px solid grey;
  height: 356px;
  width: 100%;
  margin: auto;
  max-width: 1420px;
  //margin-top: 50px;
  background: #dbf0c2;
  border-radius: 20px;
  @media (max-width: 440px) {
    height: 262px;
  }
  @media (max-width: 800px) {
    grid-template-columns: auto;
  }
`;
export const DivBoxCatalogShopSC = styled.div`
//border: 1px solid red;
margin-top:45px;
  display: grid;
  max-width: 1420px;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px;
  @media (max-width: 768px) {
    
    grid-template-columns: 1fr;
  
      }
`;

export const DivBoxCatalog = styled.div`
//border:1px solid pink;
`;
export const DivGridItems = styled.div`

display: grid;
grid-template-columns: repeat(3,1fr);
grid-column-gap:25px;

@media (max-width: 1000px) {
  grid-template-columns: repeat(2,1fr);

  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2,1fr);
  
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(2,1fr);
    
      }
  @media (max-width: 1420px) {
    grid-column-gap:20px;

    }
`;
export const SpanTitleCatalog = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 46px;


  @media (max-width: 768px) {
    display:none;
  }
color: #252525;
`;
export const SpanTitleCatalogAdaptive = styled.span`
margin-top: 20px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 35px;
  font-size: 22px;
  

  @media (min-width: 768px) {
  }
color: #252525;
`;
export const DivNextItems = styled.div`
margin-top:20px;
display:grid;
border-radius: 20px;
width:100%;
background: rgba(243, 243, 243, 0.5);
`;

export const DivNextGrid = styled.div`
padding:20px;
display: grid;
grid-template-columns: repeat(10,1fr);
@media (max-width: 480px) {
  grid-template-columns: repeat(5,1fr);
  }
grid-column-gap: 23px;
`;
export const DivCountPage = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-column-gap: 12px;
`;
export const DivButtonNext = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-family: "Montserrat";
font-style: normal;
font-weight: 600;
font-size: 15px;
background: #85cb33;
border-radius: 10px;
color: #fff;
width:100px;
height:30px;
cursor: pointer;
`;
export const DivNextPage = styled.div`
&:hover {
  background: #fff;
  color: rgba(0, 0, 0, 0.54);
  border: 2px solid #85CB33;
}
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-family: "Montserrat";
font-style: normal;
font-weight: 600;
font-size: 15px;
background: #85cb33;
border-radius: 10px;
color: #fff;
width:30px;
height:30px;
cursor: pointer;`;