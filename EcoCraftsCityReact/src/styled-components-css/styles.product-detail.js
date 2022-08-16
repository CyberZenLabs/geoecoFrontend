import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  DotGroup,
  ImageWithZoom,
} from 'pure-react-carousel';

export const DivBoxProductDetailSC = styled.div`
  display: grid;
  justify-items: center;
`;

export const DivProductInformSC = styled.div`
  display: flex;
`;
export const DivfirsrowInformSC = styled.div``;
export const DivsecondrowInformSC = styled.div``;

export const DivContentProductDetailSC = styled.div`
  display: grid;
  grid-template-rows: 120px max-content max-content minmax(auto, auto) minmax(auto, auto);
  max-width: 1322px;
  width: 85vw;
  grid-gap: 10px;
  row-gap: 63px;
`;

export const NavLinkSC = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  font-family: var(--root-font-family);
  ${(p) => (p.iscolor ? 'color:var(--green-color)' : 'color:var(--color-black)')}//color: var(--color-black)
`;

export const DivHistorySC = styled.div`
  display: grid;
  grid-template-columns: 100px 300px auto;
  align-items: center;
  width: 100%;
  @media (max-width: 420px) {
    grid-template-columns: 75px 300px auto;
  }
`;

export const DivBackBoxSC = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 20px auto;
  @media (max-width: 420px) {
    grid-template-columns: 20px 40px;
  }
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
`;

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
`;
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
  :disabled {
    opacity: 0.5;
  }
`;

export const NextButtonCustomSC = styled(ButtonNext)`
  height: 90px;
  width: 100%;
  border: 0px;
  background: none;
  :disabled {
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
  background: url(${(p) => p.src});

  background-repeat: no-repeat;
  background-size: 100%;
`;

export const DivProductDiscSC = styled.div`
  display: grid;
  grid-template-rows: auto max-content;

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

export const DivProductDiscTitleSC = styled.div`
  display: grid;
  align-items: start;
`;

export const DivProductDiscContentSC = styled.div`
  display: grid;
  grid-template-rows: max-content auto;
`;

export const SpanQuestionSC = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 20px !important;
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

//-------------------- Блок с отзывами и рейтингом ----------------------

export const DivProductReviewsSC = styled.div`
  display: grid;
  grid-template-rows: max-content max-content max-content;
  grid-gap: 30px;
  padding: 30px 0px 50px 0px;
`;

export const DivProductRatingSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 10px;
  align-items: self-end;
`;

export const H1ProductBoxSC = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export const DivCarouselReviewSC = styled.div`
  display: grid;
  align-items: center;
`;

export const DivProductReviewBoxSC = styled.div`
  background-color: rgba(243, 243, 243, 0.2);
  width: 420px;
  border-radius: 12px;
  padding: 24px 24px 22px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  @media (max-width: 1000px) {
    width: 288px;
    padding: 16px 16px 12px;
  }
`;

export const DivButtonBoxSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 50px;
`;

export const DivBoxButtonContentSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  grid-gap: 5px;
`;

// ShopBlock SC

export const DivShopBlockWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: max-content max-content;
  row-gap: 49px;
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
`;

export const DivShopBlockContainer = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content;
  column-gap: 15px;
`;

export const DivShopLogo = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 10px;
  background: #d9d9d9;
`;
export const DivShopInfo = styled.div`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: 2fr 1fr 1fr;
  row-gap: 4px;
  max-height: 88px;
  a {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    color: #252525;
    //:hover{
    //  text-decoration: underline;
    //}
  }

  p {
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 500;
  }
`;

// description and stats block (txt)

export const DivDescStatsContainerSC = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: max-content max-content;
  row-gap: 43px;
  max-width: 700px;
  margin-top: 400px;
`;

export const DivDescBlockSC = styled.div`
  h2 {
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 600;
    color: #252525;
    margin-bottom: 20px;
  }
  p {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 400;
    color: #252525;
  }
`;
