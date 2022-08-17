import styled from 'styled-components/macro';

import { MdOutlinePhotoCamera } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';

export const OlifnoSC = styled.ol`
  margin-left: 10px;

  list-style: inside;
  padding: 0;
  margin-left: 10px;
  font-weight: 600;
  padding: 18px;
`;
export const DivDisplayFlexSC = styled.div`
  display: flex;
`;

export const LiInfoGreenSC = styled.li`
  color: #3d3d3d;
  margin-bottom: 14px;
  font-size: 20px;
  color: #85cb33;
  margin-right: 1px;
`;
export const DivTextTitleSC = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #252525;
  display: flex;
  justify-content: space-between;
  padding: 18px;
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
  margin-left: 8px;
`;
export const DivBoxNewProductsST = styled.div`
  display: grid;
  justify-self: center;
  max-width: 1420px;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const DivLogoST = styled.div`
  background: #d9d9d9;
  border-radius: 12px;
  width: 102px;
  height: 75px;
  font-size: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 10px;
`;
export const DivInfoStoreST = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 15px;
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  padding: 20px;
  @media (max-width: 1100px) {
    width: 270px;
  }
  @media (max-width: 480px) {
    display: none;
    border: none;
    padding: 0px;
    margin: 0px;
  }
`;

export const MarginST = styled.div`
  margin-top: 10px;
  font-size: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  color: #000000;
`;
export const DivInfoST = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SecondMenuST = styled.div`
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  margin-top: 10px;
  width: 323px;
  height: 230px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    width: 270px;
  }
  @media (max-width: 480px) {
    display: none;
    border: none;
  }
`;
export const DivStoreSetingST = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  font-weight: 500;
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 15px;
  line-height: 18px;
`;
export const TextBold = styled.div`
  font-weight: bold;
`;
export const Margin5pxST = styled.div`
  margin-top: 10px;
`;
export const SpanTextTitleSC = styled.span`
  border-radius: 20px 20px 0px 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #252525;
  display: flex;
  justify-content: space-between;
  padding: 18px;
  padding-bottom: 0;
  @media (max-width: 720px) {
    font-size: 25px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
export const SpanTextTitleAdaptiveSC = styled.div`
  border-radius: 20px 20px 0px 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #252525;
  width: 100%;
  padding-bottom: 0;
  @media (max-width: 1240px) {
    text-align: center;
  }

  @media (max-width: 720px) {
    font-size: 25px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
export const SpanTextTitleCarouselSC = styled.span`
  border-radius: 20px 20px 0px 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #252525;
  display: flex;
  justify-content: space-between;
  padding: 18px;
  padding-bottom: 0;
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
  display: grid;
  justify-self: center;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  margin-top: 180px;
  width: 100%;
  @media (max-width: 1000px) {
    margin-top: 100px;
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
export const LiInfoSC = styled.li`
  color: #3d3d3d;
  margin-bottom: 14px;
  font-size: 20px;
  display: flex;
  @media (max-width: 720px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const ButtonAddProductSC = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  background: #85cb33;
  padding: 18px 74px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 45px;
`;
export const DivAddProductBox = styled.div`
  display: grid;
`;
export const DivButtonChangrInformSC = styled.div`
  display: flex;
  background: #85cb33;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const DivButtonChangrInformBottomSC = styled.div`
  @media (min-width: 991px) {
    display: none;
  }
  cursor: pointer;
  display: flex;
  background: #85cb33;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  color: #ffffff;
  font-size: 16px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const DivInfoVendorBoxSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  margin-bottom: 24px;
  transition: width 0.2s 0s;
  max-width: 1045px;
  display: grid;
`;
export const DivInfoVendorBoxAdaptiveSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  border-radius: 20px;
  margin-bottom: 24px;
  max-width: 1045px;
  transition: width 0.2s 0s;
  padding: 18px;
  display: grid;
`;
export const DivBorderBox = styled.div`
  @media (max-width: 480px) {
    display: none;
    border: none;
    padding: 0px;
    margin: 0px;
  }
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
  //height: 100%;
  // border: 2px solid black;
  max-width: 1140px;
`;

export const DivInputsDisplayNoneSC = styled.div`
  display: none;
`;

export const DivInnerContentSC = styled.div`
  display: grid;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: fit-content;
  //border: 2px solid black;
  //grid-template-rows: 140px 210px 50px 50px;
  max-width: 1140px;
  gap: 20px;
`;
export const DivTwoSidesSC = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  // border: 2px solid blue;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    gap: 20px;
  }
`;
export const DivInnerPhotoInputSC = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  //border: 2px solid blue;
`;
export const H1DefinSC = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #3d3d3d;
  justify-self: start;
  align-self: flex-start;
  margin-top: 5px;
`;
export const NameNCityFieldSC = styled.input`
  box-sizing: border-box;
  height: 30px;
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
  ::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    color: rgba(37, 37, 37, 0.7);
  }
  :hover {
    border: 1px solid #76b42e;
  }
  @media (max-width: 700px) {
    ::placeholder {
      font-size: 13px;
    }
  }
`;
export const BirthFieldSC = styled.input`
  box-sizing: border-box;
  height: 30px;
  /* Auto layout */
  display: flex;
  width: 100%;
  max-width: 212px;
  //min-width: 320px;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  justify-self: start;
  padding: 18px 0px 18px 18px;
  gap: 294px;
  /* Акцент 70% */
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  ::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    color: rgba(37, 37, 37, 0.7);
  }
  :hover {
    border: 1px solid #76b42e;
  }
  @media (max-width: 700px) {
    ::placeholder {
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
  /* border: 1px solid rgba(0, 0, 0, 0.33); */
  border: ${(p) =>
    p.photoUrl && p.photoUrl !== 'http://localhost:5767/stores/defaultStore.svg'
      ? 'none'
      : '1px solid rgba(0, 0, 0, 0.33)'};
  height: 126px;
  background: none;
  background-image: ${({ photoUrl }) => (photoUrl ? `url(${photoUrl})` : 'none')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 670px;
  position: relative;
`;

export const ButtonImgSC = styled.div`
  position: relative;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.33);
  height: 193px;
  background: none;
  background-image: ${({ photoUrl }) => (photoUrl ? `url(${photoUrl})` : 'none')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 193px;
  height: 193px;
  max-width: 193px;
  display: grid;
  justify-content: center;
  align-content: center;
`;
export const IconImgImgSC = styled(MdOutlinePhotoCamera)`
  display: grid;
  font-size: 50px;
  justify-self: center;
  color: rgba(0, 0, 0, 0.33);
`;

export const DeleteIconSC = styled(TiDeleteOutline)`
  font-size: 30px;
  color: white;
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const H1SC = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: rgba(0, 0, 0, 0.33);
  //border: 2px solid blue;
`;
//import BGimage from '../img/RectangleGray.svg';

export const DivAboutYourselfSC = styled.div`
  //justify-items: end;
  width: 100%;
  //grid-template-columns: auto 250px;
  // border: 2px solid blue;
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  margin-top: 20px;
  max-width: 1140px;
  //border: 2px solid red;
`;

export const DivBGImageSC = styled.div`
  // border: 2px solid blue;
  max-width: 1059px;

  // height: 500px;

  //margin-left: 20px;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 25px;
`;

export const DivBoxColumnAboutYourselfSC = styled.div`
  display: grid;
  grid-template-columns: 130px auto;
  height: 202px;
  //border: 2px solid blue;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: 45px auto;
    gap: 0px;
    height: fit-content;
    margin-bottom: 25px;
  }
`;

export const InputAboutYourself = styled.textarea`
  max-width: 885px;
  width: 100%;
  height: 125px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  background: none;
  margin-right: 20px;
`;

export const DivTextSC = styled.div`
  max-width: 103px;
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
  height: 152px;
  display: grid;
  justify-items: end;
  align-items: end;
  margin-left: 20px;
  margin-right: 20px;
  // border: 2px solid blue;
`;

export const DivBoxText = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  padding-left: 0px;
  //border: 2px solid blue;
  min-width: 110px;
  margin-top: 28px;
`;

export const DivBoxRowsAboutCreativity = styled.div`
  display: grid;

  grid-row-gap: 6px;
  //border: 1px solid red;
  height: fit-content;
`;
export const DivText2SC = styled.div`
  max-width: max-content;
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #3d3d3d;
`;

export const DivBoxText2 = styled.div`
  width: 100%;
  display: grid;
  justify-items: start;
  align-items: start;

  //border: 1px solid black;
`;

export const DivText3 = styled.div`
  max-width: 607px;
  width: 100%;
  //height: 17px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: start;

  color: #3d3d3d;
`;

export const DivBoxText3 = styled.div`
  width: 100%;
  display: grid;
  justify-items: start;
  align-items: start;

  // border: 1px solid green;
  // height: fit-content;
`;

export const DivBoxColumnsFotosSC = styled.div`
  //max-width: 868px;
  width: 100%;
  height: fit-content;
  display: grid;
  /* grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '25% 25% 25% 25%')}; */
  grid-template-columns: repeat(auto-fill, 193px);
  grid-template-rows: repeat(auto-fill, 206px);
  column-gap: 10px;
  margin-top: 28px;
  //border: 2px solid blue;
  //margin-left: 25px;
  //align-items: center;
  justify-content: start;
  @media (max-width: 1370px) {
    justify-content: space-around;
  }
`;

export const DivBoxFoto1SC = styled.div`
  width: 100%;
  display: grid;
  // justify-items: end;
  // align-items: end;
  // padding-left: 26px;
`;

export const DivFoto1SC = styled.img`
  max-width: 193px;
  width: 100%;
  height: 193px;
`;

export const DivFoto2SC = styled.div`
  max-width: 193px;
  width: 100%;
  height: 193px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
`;

export const DivFoto3SC = styled.div`
  max-width: 193px;
  width: 100%;
  height: 193px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
`;

export const DivFoto4SC = styled.div`
  max-width: 193px;
  width: 193px;
  height: 193px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 12px;
`;

export const DivBoxShowPhotoSC = styled.div`
  width: 193px;
  height: 193px;
  display: grid;
  background: none;
  background-image: ${({ photoUrl }) => (photoUrl ? `url(${photoUrl})` : 'none')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  position: relative;
`;

export const DivBoxFoto4SC = styled.div`
  width: 193px;
  display: grid;
`;

export const DivDeletePhotoSC = styled.div`
  width: 193px;
  display: grid;
`;

export const SaveButtonPanelVendSC = styled.button`
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
  margin-top: 20px;
  cursor: pointer;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  /* Акцент */
  text-decoration: none;
  background: #85cb33;
  border-radius: 20px;
  width: auto;
  height: 50px;
  border-radius: 20px;
  border: none;
  :hover {
    background-color: #76b42e;
  }
`;
export const DivButtonBottomSaveVendSC = styled.div`
  // border: 2px solid blue;
  display: grid;

  grid-template-columns: 100%;
  max-width: 1010px;
`;

export const OverlayProfileImageTextSC = styled.p`
  color: white;
  visibility: hidden;
`;

export const OverlayProfileImgSC = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  visiblity: hidden;
  transition: 0.2s;
  transition-timing-function: linear;
  &:hover {
    background: rgba(131, 131, 131, 0.697);

    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.33);
    text-indent: 0%;
    display: grid;
    justify-content: center;
    align-content: center;
  }
  &:hover ${OverlayProfileImageTextSC} {
    visibility: visible !important;
  }
`;
export const OverlayBannerImageTextSC = styled.p`
  color: white;
  visibility: hidden;
`;

export const OverlayBannerImgSC = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  visiblity: hidden;
  transition: 0.2s;
  transition-timing-function: linear;
  top: 0px;
  left: 0;
  right: 0;
  &:hover {
    background: rgba(131, 131, 131, 0.697);

    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.33);
    text-indent: 0%;
    display: grid;
    justify-content: center;
    align-content: center;
    top: 0px;
    left: 0;
    right: 0;
  }
  &:hover ${OverlayBannerImageTextSC} {
    visibility: visible !important;
  }
`;

export const DivCarouselPhotosSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
