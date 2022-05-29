import styled from "styled-components/macro";
import {
    NavLink
} from "react-router-dom";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Image,
    DotGroup,
    ImageWithZoom
} from 'pure-react-carousel';


export const DivBoxProductDetailSC = styled.div`
    display: grid;
  justify-items: center;
    `;

export const DivContentProductDetailSC = styled.div`
    display: grid;
  grid-template-rows: 120px 659px 286px 286px 286px 286px 286px ;
  max-width: 1322px;
  width: 85vw;
`;

export const NavLinkSC = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  font-family: var(--root-font-family);
  ${(p) => (p.iscolor ? 'color:var(--green-color)' :
                  'color:var(--color-black)'  
  )}
  //color: var(--color-black)
`;

export const DivHistorySC = styled.div`
    display: grid;
  grid-template-columns: 100px 300px auto;
  align-items: center;
`;

export const DivBackBoxSC = styled.div`
    display: grid;
    grid-template-columns: 20px auto;
  
`;

export const DivContentProductSC = styled.div`
    outline: 1px solid var(--green-color);
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-template-rows: fit-content();
  grid-gap: 25px;
`;

export const DivBoxImagesSC = styled.div`
  display: grid;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  grid-template-rows: 39px 20px auto;
  grid-gap: 20px;
`;

export const H5CustomSC = styled.span`
  font-weight: 700;
  font-size: 32px;
  display: inline-block;
  width: fit-content;
`;

export const DivTreeBoxSC = styled.div`
    display: grid;
  grid-template-columns: max-content max-content max-content max-content;
  font-size: 14px;
  align-items: center;
  grid-gap: 25px;
`

export const DivBoxButtonSC = styled.div`
  //grid-column: 3 / 4;
  //grid-row: 1 / span 1;
  min-width: 250px;
  display: grid;
  grid-template-rows: 79px 70px max-content max-content;
  //align-items: center;
  grid-gap: 20px;
`;

export const DivBoxPriceSC = styled.div`
    display: grid;
  //align-items: center;
  grid-template-columns: max-content;
`;

export const DivContentPriceSC = styled.div`
    display: grid;
    grid-template-columns: max-content max-content;
  height: 32px;
  align-items: center;
  position: relative;
`;

export const DivNumberTitlePrice = styled.div`
  position: absolute;
  top: 2px;
  right: -26px;
`;

export const DivBoxCarouselSC = styled.div`
  display: grid;
    grid-template-columns: 150px auto;
    grid-gap: 20px;
    //height: 300px;
`;

export const ImageCarouselCustom = styled(Image)`
    width: auto;
  height: 100%;
  
`
export const DivBoxImageCarouselSC = styled.div`
  display: grid;
    box-sizing: border-box;
  padding: 10px;
  height: 100%;
  align-items: center;
  width: 100%;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  justify-items: center;
`