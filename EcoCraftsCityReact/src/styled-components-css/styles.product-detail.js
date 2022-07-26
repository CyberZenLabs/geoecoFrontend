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


    export const DivProductInformSC = styled.div`
    display: flex;
  
    `;
    export const DivfirsrowInformSC = styled.div`
    
  
    `;
    export const DivsecondrowInformSC = styled.div`
    
  
    `;
    
   
export const DivContentProductDetailSC = styled.div`
    display: grid;
  grid-template-rows: 120px max-content 286px 100px 230px max-content ;
  max-width: 1322px;
  width: 85vw;
  grid-gap: 10px;
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
`;

export const BackButtonCustomSC = styled(ButtonBack)`
    height: 90px;
  width: 100%;
  border: 0px;
  background: none;
  :disabled{
    opacity: 0.5;
  }
`;

export const NextButtonCustomSC = styled(ButtonNext)`
  height: 90px;
  width: 100%;
  border: 0px;
  background: none;
  :disabled{
    opacity: 0.5;
  }
`;

export const DivBoxLeftCarouselSC = styled.div`
    height: 100%;
  width: 100%;
  display: grid;
  //justify-items: center;
`;

export const DivBoxOtherProductSC = styled.div`
    //outline: 1px solid green;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 216px;
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
  a {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    color: var(--green-color);
  }
`;

export const DivBoxOtherProductTextSC = styled.div`
    display: grid;
    grid-template-columns: 325px auto;
  align-items: center;
`;

export const DivBoxOtherProductImgSC = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 216px);
  grid-template-rows: 216px;
  grid-gap: 25px;
  
`;

export const DivImgSC = styled.div`
  background: url(${
   ( p) => (p.src)
  });

  background-repeat: no-repeat;
  background-size: 100%;
`;

export const DivProductDiscSC = styled.div`
    display: grid;
  grid-template-rows: 30px max-content;
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
  a {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    color: var(--green-color);
  }
  grid-gap: 10px;
`;

export const DivProductDiscTitleSC = styled.div`
    display: grid;
  align-items: center;
`;

export const DivProductDiscContentSC = styled.div`
    display: grid;
    grid-template-rows: max-content auto;
  grid-gap: 20px;
  padding-bottom: 20px;
`;

export const SpanQuestionSC = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 20px!important;
  line-height: 20px;
`;

export const DivBoxSelectionSC = styled.div`
    display: grid;
    grid-template-rows: 30px max-content;
  grid-gap: 10px;
    //height: 60px;
    
`;

export const DivBoxSelectedButtonSC = styled.div`
    display: grid;
  grid-template-columns: max-content max-content max-content auto;
  grid-gap: 50px;
`;

export const ButtonSelectedSC = styled.button`
    border: none;
    background: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: center;
  border-bottom: 2px solid ${(p) => (p.isActive ? 'var(--green-color)' : 'var(--white-color)')};
  cursor: pointer;
`;
