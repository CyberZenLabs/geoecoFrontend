import styled from 'styled-components/macro';
import Modal from 'react-modal';
export const DivPagesSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  margin-bottom: 20px;
  height: 72px;
  // border: 2px solid black;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1140px;
`;

export const SmalPlaceholder = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;

  color: rgba(0, 0, 0, 0.33);
  @media (max-width: 390px) {
    font-size: 8px;
  }
`;
export const PaymentsSC = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-left: 20px;
`;
export const GridPayment = styled.div`
  padding: 10px 0px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 14px;
  display: grid;
  grid-template-columns: repeat(1, 60% 40%);
  width: 100%;
`;
export const LightTextSC = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 360px) {
    font-size: 12px;
  }
  color: rgba(0, 0, 0, 0.33);
`;
export const FlexSC = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 4px;
`;
export const MarginLeftSC = styled.div`
  margin-left: 7px;
`;
export const DivStoreInfoStuffSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-columns: auto;
  width: auto;
  /* grid-gap: 1vw; */
  max-width: 1010px;
  padding-bottom: 10px;
  @media (max-width: 540px) {
    padding-bottom: 0px;
  }
`;
export const DivInfoCard = styled.div`
  display: grid;
  grid-template-columns: 87px 20fr 1fr;
  align-items: center;
  @media (max-width: 550px) {
    grid-template-columns: 60px 20fr 1fr;
  }
`;

export const DivMainInfoSC = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;

  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  margin-bottom: 20px;
  height: 250px;
  // border: 2px solid black;
  grid-template-rows: 15% 70%;
  max-width: 1140px;
  @media (max-width: 480px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
export const DivMainInfo2PageSC = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;

  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  margin-bottom: 20px;
  height: auto;
  // border: 2px solid black;
  grid-template-rows: auto;
  max-width: 1140px;
  @media (max-width: 570px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (max-width: 390px) {
    padding-left: 0px;
  }
`;
export const DivMainInfo3PageSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  grid-template-rows: repeat(1, 50px 70px 40px);
  border-radius: 20px;
  margin-bottom: 20px;
  height: auto;
  // border: 2px solid black;

  max-width: 1140px;
  justify-content: center;
  justify-items: center;
`;
export const DivInfoPageSC = styled.div`
  gap: 7px;
  align-items: center;
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  grid-template-rows: repeat(1, 50px auto);
  border-radius: 20px;
  margin-bottom: 20px;
  height: auto;
  // border: 2px solid black;

  max-width: 1140px;
  justify-content: center;
  justify-items: center;
`;
export const DivBankCardSC = styled.div`
  padding: 15px 20px 20px 20px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 40px;
  max-width: 469px;
  width: 100%;
  height: 54px;
  /* @media (max-width:570px) {
  width: 300px;
}
@media (max-width:420px) {
  width: 270px;
} */
`;
export const DivTextOpisanitSC = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  @media (max-width: 550px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const DivImgMirSC = styled.img`
  @media (max-width: 550px) {
    width: 55px;
  }
`;
export const NumberCardSC = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 17px;
  }
  @media (max-width: 540px) {
    font-size: 15px;
  }
`;

export const H1ContentInfoSC = styled.h1`
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: start;
  justify-self: flex-start;
  align-self: flex-start;
  color: #3d3d3d;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
export const ContentInfoSC = styled.div`
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: start;
  justify-self: flex-start;
  align-self: flex-start;
  color: #3d3d3d;
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 360px) {
    font-size: 12px;
  }
`;

export const PContentInfoSC = styled.p`
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 34px;
  text-align: start;
  justify-self: flex-start;
  align-self: flex-start;
  color: #3d3d3d;
  @media (max-width: 630px) {
    font-size: 15px;
    line-height: 24px;
  }
`;
export const BoldSC = styled.b`
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: start;
  justify-self: flex-start;
  align-self: flex-start;
  color: #3d3d3d;
`;

export const H1ContentNameSC = styled.label`
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: start;
  justify-self: flex-start;
  color: #3d3d3d;
  max-width: 750px;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const H1ContentNameMailSC = styled.h1`
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: start;
  justify-self: flex-start;
  color: #3d3d3d;
  max-width: 300px;
`;
export const H1ContentDefinSC = styled.h1`
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #3d3d3d;
`;
export const ButtonContentEditSC = styled.button`
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: end;
  justify-self: flex-end;
  align-self: flex-start;
  background: none;
  //border: 2px solid blue;
  border: none;
  color: #85cb33;
`;
export const EmailFieldSC = styled.input`
  height: 30px;
  width: 100%;
  min-width: 155px;
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
export const DivContentSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  //grid-template-columns: 25% 75%;

  //min-width: 702px;
  width: auto;
`;
export const DivPaymentContentSC = styled.div`
  display: grid;

  width: 100%;
`;

export const DivContentDivisionSC = styled.div`
  //border: 2px solid red;
  display: grid;
  grid-template-columns: 190px auto;
  width: 60vw;
  max-width: 900px;
  min-width: 280px;
  padding-top: 20px;
  @media (max-width: 480px) {
    grid-template-columns: 145px auto;
  }
`;
export const DivFirstColumnSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-columns: 30% 30% 10%;
`;
export const DivContent2SC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-rows: auto auto auto;
`;
export const DivContentRowsSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-rows: auto auto;
  width: 100%;
  max-width: 469px;
`;
export const DivContentRows2Page2SC = styled.div`
  //border: 2px solid blue;
  display: grid;
  gap: 10px;
  grid-template-rows: auto auto auto auto;
  min-width: 165px;
  width: auto;

  max-width: 500px;
`;
export const PaddingSC = styled.div`
  padding-bottom: 12px;
  padding-top: 5px;
  @media (max-width: 360px) {
    padding-bottom: 25px;
  }
`;
export const DivContentRows2PageSC = styled.div`
  //border: 2px solid blue;
  height: 111px;
  display: grid;
  grid-template-rows: auto auto;
  gap: 10px;
  align-items: start;
  //  align-content: space-between;
`;
export const DivContentInfoButtonSC = styled.div``;
export const H1PageOptionSC = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${(p) => (p.isActive ? ' #85CB33;' : '#3D3D3D;')};
  align-self: center;

  justify-self: center;
  cursor: pointer;
  @media (max-width: 606px) {
    font-size: 14px;
  }
`;
export const H1PageOptionHidesSC = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${(p) => (p.isActive ? ' #85CB33;' : '#3D3D3D;')};
  align-self: center;
  justify-self: center;
  cursor: pointer;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const BlockModal = styled(Modal)`
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
`;
export const DivWrapModal = styled.div`
  display: grid;
  width: 90vw;
  max-width: 650px;
  height: 300px;
  background: #ffffff;
  border-radius: 20px;
  justify-content: center;
  align-content: center;
  // border: 1px solid red;
`;

export const DivContentWrapModal = styled.div`
  display: grid;
  grid-template-rows: 20% 60% 20%;
  justify-content: center;
  align-content: center;
  height: 200px;
  margin-left: 50px;
  margin-right: 50px;
  //border: 1px solid red;
  @media (max-width: 630px) {
    height: 170px;
  }
`;
export const ButtonContinueModal = styled.button`
  width: 250px;
  max-width: 250px;
  min-width: 250px;
  height: 41px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-self: center;
  gap: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* margin-left: 32vw;
margin-top: 15px; */
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  /* Акцент */
  text-decoration: none;
  border-radius: 20px;
  //position: absolute;
  border: none;
  /* Акцент */
  background: #85cb33;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    background-color: #76b42e;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
`;
export const ButtonSave = styled.button`
  width: 243px;
  max-width: 243px;
  min-width: 243px;
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-self: center;
  gap: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-left: 445px;
  margin-top: 15px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  /* Акцент */
  text-decoration: none;
  border-radius: 20px;
  //position: absolute;
  border: none;
  /* Акцент */
  background: #85cb33;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    background-color: #76b42e;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
`;
export const FlexSDEKSC = styled.div`
  width: 100%;
  max-width: 608;
  display: grid;
  grid-template-columns: 1fr 33px;
`;
