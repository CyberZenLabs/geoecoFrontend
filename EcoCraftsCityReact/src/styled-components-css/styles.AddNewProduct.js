import styled from 'styled-components';
import BigGrayRectangle from '../img/RectangleBigGray.svg';
import RectangleGrayRules from '../img/RectangleRules.svg';
import RectangleGrayPrice from '../img/RectangleGrayPrice.svg';
import RectangleGrayDescription from '../img/RectangleGrayDescription.svg';
import RectangleGrayDelivery from '../img/RectangleGrayDelivery.svg';
import Dot from '../img/Dot.svg';
import { Link } from 'react-router-dom';

export const DivBoxAddNewProductSC = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
`;

/* export const DivBoxRowsRectamgleSC = styled.div`
  max-width: 1789px;
  width: 100%;
  display: grid;
  grid-template-rows: ${({ fullSize }) => (fullSize ? '100%' : '48.4% 13.3% 21.7% 16.6%')};
`; */

export const DivBoxTextNewProductSC = styled.div`
  display: grid;
  width: 100%;
  justify-items: start;
  height: auto;
  align-items: end;
  max-width: 1420px;
`;
export const InputImageSC = styled.input`
  display: none;
`;

export const DivTextNewProductSC = styled.div`
  max-width: 211px;
  width: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #252525;
`;

export const DivBoxItemsSC = styled.div`
  display: grid;
  width: 100%;
  justify-self: center;
  max-width: 1420px;
`;

export const MenuProductST = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  align-self: left;
  color: #3d3d3d;
  margin-top: 40px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const GreenST = styled.div`
  color: #85cb33;
  margin-right: 1px;
`;

export const DivBoxColumnsRectangleSC = styled.div`
  border: 2px solid green;
  max-width: 1420px;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '74.6% 25.4%')};
  grid-column-gap: 24px;
  padding-top: 28px;
`;

export const DivBoxBigGrayRectangleSC = styled.div`
  max-width: 1059px;
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  width: 100%;
  height: fit-content;
  margin-bottom: 25px;
  padding-right: 15px;
`;

export const DivBoxGrayRectangleRulesSC = styled.div`
  margin-top: 40px;
  max-width: 337px;
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  width: 100%;
  height: 587px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const DivBoxRowsNameProductSC = styled.div`
  max-width: 1000px;
  width: 100%;
  height: fit-content;
  display: grid;
  /* grid-template-rows: ${({ fullSize }) => (fullSize ? '100%' : '6.8% 43.3% 34.5% 15.4%')}; */
  padding-left: 18px;
`;

export const DivBoxTextNameProductSC = styled.div`
  max-width: 1041px;
  width: 100%;
  height: 42px;
  display: grid;
  align-items: end;
`;

export const DivTextNameProduct = styled.div`
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: start;
  color: #3d3d3d;
  @media (max-width: 480px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const DivBoxColumnsFotosSC = styled.div`
  max-width: 1000px;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '25% 25% 25% 25%')};
  padding-top: 33px;
`;

export const DivBoxFoto1SC = styled.div`
  width: 100%;
  display: grid;
  justify-items: start;
  align-items: start;
`;

export const DivButtonFoto1SC = styled.button`
  max-width: 235px;
  width: 100%;
  height: 235px;
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
  background: none;
`;

export const DivContainerButtonSC = styled.div`
  max-width: 235px;
  width: 100%;
  height: 79px;
  display: grid;
  grid-template-rows: ${({ fullSize }) => (fullSize ? '100%' : '55px 24px')};
  justify-items: center;
`;

export const DivFoto2SC = styled.div`
  max-width: 235px;
  width: 100%;
  height: 235px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
`;

export const DivFoto3SC = styled.div`
  max-width: 235px;
  width: 100%;
  height: 235px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
`;

export const DivFoto4SC = styled.div`
  max-width: 235px;
  width: 100%;
  height: 235px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
`;

export const DivBoxFoto2SC = styled.div`
  width: 100%;
  display: grid;
  justify-items: start;
  align-items: start;
`;

export const DivBoxFoto3SC = styled.div`
  width: 100%;
  display: grid;
  justify-items: start;
  align-items: start;
`;

export const DivBoxFoto4SC = styled.div`
  width: 100%;
  display: grid;
  justify-items: start;
  align-items: start;
`;

export const DivBoxColumnAboutYourselfSC = styled.div`
  display: grid;
  grid-template-rows: ${({ fullSize }) => (fullSize ? '100%' : '20% auto')};
  padding-top: 25px;
`;

export const InputVideoSC = styled.textarea`
  max-width: 602px;
  width: 100%;
  height: 140px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  padding: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  resize: none;
  color: rgba(0, 0, 0, 0.33);
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 360px) {
    font-size: 10px;
  }
`;

export const DivTextSC = styled.div`
  max-width: 69px;
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #3d3d3d;
`;

export const DivBoxInputAboutYourself = styled.div`
  width: 100%;
  height: 140px;
  display: grid;
  justify-items: start;
  align-items: end;
`;

export const DivBoxText = styled.div`
  width: 100%;
  display: grid;
  justify-items: start;
  align-items: start;
`;

export const DivBoxColumnProductNameSC = styled.div`
  display: grid;
  max-width: 813px;
  width: 100%;
  grid-template-rows: ${({ fullSize }) => (fullSize ? '100%' : '25.9% 74.1%')};
  padding-top: 33px;
  grid-gap: 9px;
`;

export const DivBoxInputProductName = styled.div`
  width: 100%;
  height: 41px;
`;

export const InputProductName = styled.textarea`
  max-width: 602px;
  width: 100%;
  height: 41px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  padding-left: 10px;
  padding-top: 6px;
  padding-right: 10px;
  padding-bottom: 6px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  resize: none;
  color: rgba(0, 0, 0, 0.33);
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 360px) {
    font-size: 10px;
  }
`;

export const DivBoxText1 = styled.div`
  width: 100%;
  height: 50px;
`;

export const DivText1SC = styled.div`
  max-width: 183px;
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #3d3d3d;
`;

export const DivImgGrayRectanglePriceSC = styled.div`
  max-width: 1059px;
  width: 100%;
  height: 261px;
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  padding-left: 18px;
`;
export const DivBoxImgGrayRectanglePriceSC = styled.div`
  display: grid;
  /* grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '76.3% 13.7%')}; */
  width: 100%;
  justify-items: start;
  height: 261px;
  align-items: end;
  max-width: 1420px;
  //padding-right: 30px;
  //padding-top: 24px;
  margin-bottom: 25px;
`;

export const DivTextDovnloadFotoSC = styled.div`
  max-width: 162px;
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: rgba(0, 0, 0, 0.33);
`;

export const DivImgFotoSC = styled.img`
  max-width: 55px;
  width: 100%;
  height: 55px;
`;

export const DivBoxRowsPriceSC = styled.div`
  max-width: 261px;
  width: 100%;
  height: 261px;
  display: grid;
  padding-top: 18px;
  grid-template-rows: ${({ fullSize }) => (fullSize ? '100%' : '23.4% 19.3% 28% 29.2%')};
`;

export const DivBoxTextPriceAndNumberSC = styled.div`
  max-width: 218px;
  width: 100%;
  height: 57px;
`;

export const DivTextPriceAndNumberSC = styled.div`
  width: 218px;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #3d3d3d;
`;

export const DivBoxColumnsPriceSC = styled.div`
  max-width: 250px;
  width: 100%;
  height: 47px;
  display: grid;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '31.6% 59.7% 8.7%')};
`;

export const DivBoxTextPriceSC = styled.div`
  width: 100%;
  height: 47px;
`;

export const DivTextPriceSC = styled.div`
  max-width: 55px;
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #3d3d3d;
`;

export const DivBoxInputPrice = styled.div`
  display: grid;
  justify-items: end;
  width: 100%;
  height: 41px;
`;

export const InputPrice = styled.input`
  max-width: 127px;
  width: 100%;
  height: 41px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 9.5px 10px 7px 10px;
  resize: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: rgba(0, 0, 0, 0.33);
`;

export const DivImgRubSC = styled.div`
  width: 20px;
  height: 30px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  text-align: center;

  color: #3d3d3d;
`;

export const DivBoxColumnsNumberSC = styled.div`
  max-width: 261px;
  width: 100%;
  height: 68px;
  display: grid;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '39% 61%')}; ;;
`;

export const DivBoxTextNumberSC = styled.div`
  width: 100%;
  height: 68px;
  padding-top: 13px;
`;

export const DivTextNumberSC = styled.div`
  //border:1px solid red;
  max-width: 140px;
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  //text-align: center;

  color: #3d3d3d;
`;

export const DivBoxColumnsDiscountSC = styled.div`
  max-width: 250px;
  width: 100%;
  height: 47px;
  display: grid;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '31.6% 59.7% 8.7%')};
`;

export const DivBoxTextDiscountSC = styled.div`
  width: 100%;
  height: 47px;
`;

export const DivTextDiscountSC = styled.div`
  max-width: 55px;
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #3d3d3d;
`;

export const DivBoxInputDiscount = styled.div`
  display: grid;
  justify-items: end;
  width: 100%;
  height: 41px;
`;

export const InputDiscount = styled.input`
  max-width: 127px;
  width: 100%;
  height: 41px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 9.5px 10px 7px 10px;
  resize: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: rgba(0, 0, 0, 0.33);
`;

export const DivImgRub2SC = styled.div`
  width: 20px;
  height: 30px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  text-align: center;

  color: #3d3d3d;
`;

export const DivBoxImgGrayRectangleDescriptionSC = styled.div`
  display: grid;
  /* grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '76.3% 13.7%')}; */
  width: 100%;
  justify-items: start;
  height: 491px;
  align-items: end;
  max-width: 1420px;
  margin-bottom: 25px;
`;

export const DivImgGrayRectangleDescriptionSC = styled.div`
  max-width: 1059px;
  width: 100%;
  height: 491px;

  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  padding-left: 18px;
  padding-top: 17px;
  padding-right: 15px;
`;

export const DivBoxImgGrayRectangleDeliverySC = styled.div`
  width: 100%;

  display: grid;
  justify-items: start;
  height: 240px;
  align-items: end;
  max-width: 1420px;
  margin-bottom: 25px;
`;

export const DivImgGrayRectangleDeliverySC = styled.div`
  max-width: 1059px;
  width: 100%;
  height: 240px;

  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  padding-left: 18px;
  padding-top: 17px;
  padding-right: 18px;
`;
export const DivBoxRowsDesctriptionSC = styled.div`
  max-width: 1018px;
  width: 100%;
  height: 441px;
  display: grid;
  grid-template-rows: ${({ fullSize }) => (fullSize ? '100%' : '37.2% 37.2% 25.6%')};
`;

export const DivContainerDescriptionSC = styled.div`
  max-width: 1018px;
  width: 100%;
  height: 164px;
`;

export const DivBoxTextDescriptionSC = styled.div`
  width: 100%;
  height: 27px;
`;

export const DivTextDescriptionSC = styled.div`
  max-width: 109px;
  width: 100%;
  height: 24px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #3d3d3d;
`;

export const DivBoxInputDescriptonSC = styled.div`
  width: 100%;
  height: 137px;
`;

export const InputDescription = styled.textarea`
  max-width: 1018px;
  width: 100%;
  height: 113px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: rgba(0, 0, 0, 0.33);
  padding: 10px 10px 70px 10px;
  resize: none;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 360px) {
    font-size: 10px;
  }
`;

export const DivContainerCharacteristicsSC = styled.div`
  max-width: 1018px;
  width: 100%;
  height: 164px;
`;

export const DivBoxTextCharacteristicsSC = styled.div`
  width: 100%;
  height: 27px;
`;

export const DivTextCharacteristicsSC = styled.div`
  max-width: 176px;
  width: 100%;
  height: 24px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #3d3d3d;
`;

export const DivBoxInputCharacteristicsSC = styled.div`
  width: 100%;
  height: 137px;
`;

export const InputCharacteristics = styled.textarea`
  max-width: 1018px;
  width: 100%;
  height: 113px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  padding: 10px 10px 70px 10px;
  resize: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: rgba(0, 0, 0, 0.33);
`;

export const DivContainerKeywordsSC = styled.div`
  max-width: 1018px;
  width: 100%;
  height: 113px;
`;

export const DivBoxTextKeywordsSC = styled.div`
  width: 100%;
  height: 27px;
`;

export const DivTextKeywordsSC = styled.div`
  max-width: 180px;
  width: 100%;
  height: 24px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #3d3d3d;
`;

export const DivBoxInputKeywordsSC = styled.div`
  width: 100%;
  height: 86px;
`;

export const InputKeywords = styled.textarea`
  max-width: 1018px;
  width: 100%;
  height: 86px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  padding: 10px 10px 45px 10px;
  resize: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: rgba(0, 0, 0, 0.33);
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 360px) {
    font-size: 10px;
  }
`;

export const DivContainerDeliverySC = styled.div`
  max-width: 1018px;
  width: 100%;
  height: 152px;
`;

export const DivBoxTextDeliverySC = styled.div`
  width: 100%;
  height: 50px;
`;

export const DivTextDeliverySC = styled.div`
  max-width: 220px;
  width: 100%;
  height: 24px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #3d3d3d;
`;

export const DivBoxItemDeliverySC = styled.div`
  max-width: 1041px;
  width: 100%;
  height: 102px;
`;

export const DivItemDeliverySC = styled.div`
  max-width: 800px;
  width: 100%;
  height: 102px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  padding-top: 21px;
  //padding-left: 30px;
  //padding-right: 30px;
`;
export const DivContainerColumnsPostSC = styled.div`
  width: 100%;
  height: 24px;
  display: grid;
  /*  grid-template-rows: ${({ fullSize }) => (fullSize ? '100%' : '50% 50%')}; */
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '7% 56% 37%')};
`;

export const DivBoxImgDotSC = styled.div`
  max-width: 52px;
  width: 100%;
  height: 22px;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const DivImgDotSC = styled.div`
  max-width: 8px;
  width: 100%;
  height: 8px;
  background-image: url(${Dot});
`;

export const DivBoxTextRussianPostSC = styled.div`
  /* max-width: 511px; */
  width: 100%;
  height: 38px;
`;

export const DivTextRussianPostSC = styled.div`
  max-width: 148px;
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  //text-align: center;

  color: #3d3d3d;
  @media (max-width: 420px) {
    font-size: 115%;
  }
`;

export const DivBoxTextFromThePriceSC = styled.div`
  width: 100%;
  height: 24px;
  display: grid;
  justify-items: end;
`;

export const DivTextFromThePriceSC = styled.div`
  width: 100%;
  max-width: 107px;
  height: 24px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 110%;
  line-height: 24px;
  text-align: center;

  color: #3d3d3d;
  @media (max-width: 420px) {
    font-size: 100%;
  }
`;

export const DivContainerColumnsSDEKSC = styled.div`
  width: 100%;
  height: 24px;
  display: grid;
  /*  grid-template-rows: ${({ fullSize }) => (fullSize ? '100%' : '50% 50%')}; */
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '7% 65% 28%')};
`;

export const DivBoxImgDot1SC = styled.div`
  width: 100%;
  height: 30px;
  max-width: 52px;
  display: grid;
  align-items: end;
  justify-items: center;
`;

export const DivImgDot1SC = styled.div`
  max-width: 8px;
  width: 100%;
  height: 8px;
  background-image: url(${Dot}); ;
`;

export const DivBoxTextSDEKSC = styled.div`
  /* max-width: 511px; */
  width: 100%;
  height: 38px;
  display: grid;
  justify-items: start;
  align-items: end;
`;

export const DivTextSDEKSC = styled.div`
  max-width: 148px;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #3d3d3d;
  @media (max-width: 420px) {
    font-size: 115%;
  }
`;
export const DivTextFromThePrice1SC = styled.div`
  max-width: 83px;
  width: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 110%;
  line-height: 24px;
  text-align: center;

  color: #3d3d3d;
  @media (max-width: 420px) {
    font-size: 100%;
  }
`;

export const DivBoxTextFromThePrice1SC = styled.div`
  width: 100%;
  height: 38px;
  display: grid;
  justify-items: end;
  align-items: end;
`;

export const DivBoxColumnButtonsPMSC = styled.div`
  max-width: 98px;
  width: 100%;
  height: 55px;
  display: grid;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '44.5% 25.3% 32.2%')};
`;

export const DivBoxButtonMinusSC = styled.div`
  width: 100%;
  height: 46px;
  display: grid;
  align-items: end;
`;

export const ButtonMinusSC = styled.button`
  max-width: 31px;
  width: 100%;
  height: 31px;
  background: rgba(217, 217, 217, 0.28);
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 100%;
`;

export const DivBoxNum1SC = styled.div`
  width: 100%;
  height: 41px;
  display: grid;
  align-items: end;
`;
export const DivNum1SC = styled.div`
  width: 12px;
  height: 40px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 200;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #252525;
`;

export const DivBoxButtonPlusSC = styled.div`
  width: 100%;
  height: 46px;
  display: grid;
  align-items: end;
`;

export const ButtonPlusSC = styled.button`
  width: 31px;
  height: 31px;
  background: rgba(217, 217, 217, 0.28);
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 100%;
`;
export const DivBoxButtonsSC = styled.div`
  max-width: 1420px;
  width: 100%;
  height: 56px;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const DivBox2ButtonsSC = styled.div`
  max-width: 1059px;
  width: 100%;
  height: 56px;
  display: grid;
  justify-items: center;
`;

export const DivButtonsSC = styled.div`
  display: grid;
  max-width: 504px;
  width: 100%;
  grid-column-gap: 30px;
  grid-template-columns: 50% 50%;
  @media (max-width: 686px) {
    width: 100%;
    display: grid;
    grid-column-gap: 20px;

    padding-left: 50px;
    grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '43% 43%')};
  }
  @media (max-width: 500px) {
    display: grid;
    grid-column-gap: 20px;
    padding-left: 15px;
    grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '43% 43%')};
  }
`;

export const DivBoxTextRulesSC = styled.div`
  max-width: 337px;
  width: 100%;
  height: 37px;
  margin-top: 18px;
  padding-left: 18px;
`;
export const DivTextRulesSC = styled.div`
  width: 100%;
  height: 37px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #252525;
`;

export const PlaceButtonSC = styled(Link)`
  /* Кнопка (первичная) */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  max-width: 200px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  /* Акцент */
  text-decoration: none;
  background: #85cb33;
  border-radius: 20px;
  max-width: 256px;
  width: 100%;
  height: 56px;
  justify-self: end;
  border-radius: 20px;
  border: none;
`;
export const DivNewProductWrapSC = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 30px;
  width: 90vw;
  max-width: 1420px;
  min-width: 370px;
  // margin: auto;
  color: black;
  padding-top: 30px;
  margin-bottom: 200px;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: 100%;
  }
`;
