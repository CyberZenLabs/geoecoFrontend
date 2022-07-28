import styled from 'styled-components';
import BigGrayRectangle from '../img/RectangleBigGray.svg';
import RectangleGrayRules from '../img/RectangleRules.svg';
import RectangleGrayPrice from '../img/RectangleGrayPrice.svg';

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
  height: 87px;
  align-items: end;
  max-width: 1420px;
  padding: 0 30px;
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
  padding: 0 30px;
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
  max-width: 1420px;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '74.6% 25.4%')};
  grid-column-gap: 24px;
  padding-top: 28px;
`;

export const DivBoxBigGrayRectangleSC = styled.div`
  max-width: 1059px;
  background-image: url(${BigGrayRectangle});
  width: 100%;
  height: 706px;
`;

export const DivBoxGrayRectangleRulesSC = styled.div`
  max-width: 337px;
  background-image: url(${RectangleGrayRules});
  width: 100%;
  height: 587px;
`;

export const DivBoxRowsNameProductSC = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 619px;
  display: grid;
  grid-template-rows: ${({ fullSize }) => (fullSize ? '100%' : '6.8% 43.3% 34.5% 15.4%')};
  padding-left: 18px;
`;

export const DivBoxTextNameProductSC = styled.div`
  max-width: 1041px;
  width: 100%;
  height: 42px;
  display: grid;
  align-items: end;
  padding-left: 26px;
`;

export const DivTextNameProduct = styled.div`
  max-width: 345px;
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #3d3d3d;
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
  justify-items: end;
  align-items: start;
  padding-left: 26px;
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
  justify-items: end;
  align-items: start;
`;

export const DivBoxFoto3SC = styled.div`
  width: 100%;
  display: grid;
  justify-items: end;
  align-items: start;
`;

export const DivBoxFoto4SC = styled.div`
  width: 100%;
  display: grid;
  justify-items: end;
  align-items: start;
`;

export const DivBoxColumnAboutYourselfSC = styled.div`
  display: grid;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '15.2% 84.8%')};
  padding-top: 74px;
`;

export const InputAboutYourself = styled.input`
  max-width: 602px;
  width: 100%;
  height: 140px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  padding-bottom: 106px;
  padding-left: 10px;
`;

export const DivTextSC = styled.div`
  max-width: 69px;
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

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
  height: 50px;
  display: grid;
  justify-items: start;
  align-items: start;
  padding-left: 26px;
`;

export const DivBoxColumnProductNameSC = styled.div`
  display: grid;
  max-width: 813px;
  width: 100%;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '25.9% 74.1%')};
  padding-top: 63px;
  padding-left: 26px;
`;

export const DivBoxInputProductName = styled.div`
  width: 100%;
  height: 41px;
`;

export const InputProductName = styled.input`
  max-width: 602px;
  width: 100%;
  height: 41px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  padding-left: 10px;
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
  text-align: center;

  color: #3d3d3d;
`;

export const DivImgGrayRectanglePriceSC = styled.div`
  max-width: 1059px;
  width: 100%;
  height: 194px;
  background-image: url(${RectangleGrayPrice});
  padding-left: 44px;
  padding-top: 18px;
`;
export const DivBoxImgGrayRectanglePriceSC = styled.div`
  display: grid;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '76.3% 13.7%')};
  width: 100%;
  justify-items: start;
  height: 194px;
  align-items: end;
  max-width: 1420px;
  padding-right: 30px;
  padding-top: 24px;
  margin-bottom: 24px;
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
  height: 176px;
  display: grid;
  grid-template-rows: ${({ fullSize }) => (fullSize ? '100%' : '32.4% 26.7% 40.9%')};
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
  text-align: center;

  color: #3d3d3d;
`;
