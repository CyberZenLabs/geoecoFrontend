import styled from "styled-components/macro";

export const DivProgressBarSC = styled.div`
  display: grid;
  background-color: #e3e3e3;
  width: 250px;
  height: 4px;
  border-radius: 14px;
  @media (max-width: 750px) {
    width: 118px;
  }
  @media (max-width: 440px) {
    width: 90px;
  }
`;

export const DivProgressLineSC = styled.div`
  display: grid;
  background-color: #85CB33;
  border-radius: 14px;
  height: 100%;
`;
