import styled from 'styled-components/macro';
import Modal from 'react-modal';
export const DivPagesSC = styled.div`
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  margin-bottom: 20px;
  height: 100px;
  // border: 2px solid black;
  grid-template-columns: 50% 50%;
  max-width: 1140px;
  @media (max-width: 480px) {
    grid-template-columns: 100%;
  }
`;

export const DivStoreInfoStuffSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-columns: 150px;
  width: auto;
  /* grid-gap: 1vw; */
  max-width: 1010px;
  padding-bottom: 10px;
`;

export const DivMainInfoSC = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  margin-bottom: 20px;
  height: fit-content;
  min-height: 246px;
  // border: 2px solid black;
  grid-template-rows: 30% 70%;
  max-width: 1140px;
`;
export const DivMainInfo2PageSC = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 200px;

  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  margin-bottom: 20px;
  height: 700px;
  // border: 2px solid black;
  grid-template-rows: 15% 90%;
  max-width: 1140px;
  @media (max-width: 480px) {
    padding-left: 18px;
    padding-right: 18px;
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
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
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

export const H1ContentNameSC = styled.h1`
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
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 501px) {
    font-size: 14px;
  }
  @media (max-width: 452px) {
    font-size: 12px;
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
  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;
export const H1ContentDefinSC = styled.h1`
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #3d3d3d;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 451px) {
    font-size: 12px;
  }
`;
export const ButtonContentEditSC = styled.button`
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: start;
  justify-self: flex-start;
  align-self: flex-start;
  background: none;
  //border: 2px solid blue;
  border: none;
  color: #85cb33;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const EmailFieldSC = styled.input`
  box-sizing: border-box;
  height: 30px;
  /* Auto layout */
  display: flex;
  width: 100%;
  max-width: 500px;
  //min-width: 320px;
  flex-direction: row;
  align-items: center;
  justify-self: center;
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
  @media (max-width: 570px) {
    ::placeholder {
      font-size: 10px;
    }
    padding: 18px 0px 18px 7px;
  }
`;
export const DivContentSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  //grid-template-columns: 25% 75%;
  grid-template-rows: 50% 50%;
  //min-width: 702px;
  width: auto;
`;
export const DivContent1PageSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-columns: 40% 60%;
  //grid-template-rows: 50% 50%;
  //min-width: 702px;
  width: auto;
`;
export const DivContentDivisionSC = styled.div`
  //border: 2px solid red;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: auto auto;
  width: 100%;
  max-width: 900px;
  //min-width: 350px;
`;
export const DivFirstColumnSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-columns: 45% 30% 15%;
  @media (max-width: 1000px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    margin-bottom: 24px;
  }
`;
export const DivContent2SC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-rows: auto auto auto;
`;
export const DivContentRowsSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-rows: auto auto auto;
`;
export const DivContentRows2Page2SC = styled.div`
  //border: 2px solid blue;
  display: grid;
  gap: 10px;
  grid-template-rows: auto auto auto auto auto;
  //min-width: 165px;
  width: auto;

  max-width: 500px;
  margin-top: 15px;
`;
export const DivContentRows2PageSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 10px;
  //min-width: 179px;
`;
export const DivContentInfoButtonSC = styled.div`
  //border: 2px solid blue;
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 480px) {
    grid-template-columns: none;
    grid-template-rows: 35% 65%;
  }
  padding-bottom: 10px;
`;
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
  @media (max-width: 760px) {
    font-size: 18px;
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
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
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
  width: 100%;
  max-width: 250px;
  //min-width: 250px;
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
  width: 100%;
  max-width: 266px;
  min-width: 175px;
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-self: start;
  gap: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
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

export const DivMainInfoAdressSC = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  background: rgba(243, 243, 243, 0.5);
  display: grid;
  border-radius: 20px;
  margin-bottom: 20px;
  height: fit-content;
  min-height: 268px;
  // border: 2px solid black;
  grid-template-rows: 30% 70%;
  max-width: 1140px;
`;

export const DivContentRows3PageSC = styled.div`
  display: grid;
  grid-template-rows: 18% 18% 18% 18%;
  gap: 10px;
  //min-width: 179px;
`;

export const DivContentRows2Page4SC = styled.div`
  display: grid;
  grid-template-rows: 18% 18% 18% 18% 18%;
  //min-width: 165px;
  width: auto;

  max-width: 500px;
  margin-top: 15px;
  @media (max-width: 480px) {
    grid-template-rows: repeat(5, 21%);
  }
`;

export const H1ContentDefinEmailSC = styled.h1`
  //border: 2px solid blue;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #3d3d3d;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 451px) {
    font-size: 12px;
  }
`;

export const H1ContentNameEmailSC = styled.h1`
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
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 501px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    padding-top: 13px;
  }
  @media (max-width: 452px) {
    font-size: 12px;
  }
`;
