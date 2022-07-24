import styled from "styled-components/macro";

export const DivReviewWrapSC = styled.div`
  //background: #ffffff;
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 80px auto 80px;
`;
export const DivImgWrapSC = styled.div`
  //border: 1px solid red;
`;
export const ImgReviewerSC = styled.img`
  border-radius: 30px;
  width: 60px;
  height: 60px;
`;
export const DivContentWrapSC = styled.div`
  margin-top: 10px;
  //border: 1px solid blue;
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  gap: 5px;
`;
export const DivDateWrapSC = styled.div`
  //border: 1px solid green;
`;
export const DateTextSC = styled.h1`
  margin-top: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  //border: 1px solid blue;
  color: #000000;
  height: 20px;
`;
export const H1СustomerNameSC = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  //border: 1px solid blue;
  color: #000000;
  height: 20px;
`;
export const ButtonFilterSC = styled.button`
  background: none;
  border: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #000000;
  //border: 1px solid blue;
  justify-self: flex-start;
  height: 20px;
  cursor: pointer;
`;
export const PReviewTextSC = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #000000;
  //border: 1px solid blue;
  justify-self: flex-start;
  height: max-content;
  margin-bottom: 10px;
`;
