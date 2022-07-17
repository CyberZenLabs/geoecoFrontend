import styled from "styled-components/macro";


export const ImgBannerShopSC = styled.img`
    display:grid;
    justify-self: center;
    width:100%;
`;
export const DivBoxContentSC = styled.div`
margin-top:45px;
padding 0 30px;
  display: grid;
  justify-self: center;
  max-width: 1420px;

`;

export const DivBoxCatalogShopSC = styled.div`
margin-top:45px;
  display: grid;
  max-width: 1420px;
  grid-template-columns: 1fr 3fr;

`;

export const DivBoxCatalog = styled.div`
  margin-left:24px;
`;
export const DivGridItems = styled.div`

display: grid;
grid-template-columns: repeat(3,1fr);
grid-column-gap:25px;
`;
export const SpanTitleCatalog = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 38px;
line-height: 46px;

color: #252525;
`;