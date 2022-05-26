import styled from "styled-components/macro";
import image2 from "../img/wood.svg";
import image from "../img/backgroundwood.svg";
import { Link } from "react-router-dom";
export const H4Title = styled.h4`
  //position: absolute;
  //width: 338px;
  //height: 59px;
  //left: 703px;
  //top: 212px;

  font-family: var(--root-font-family);
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 59px;
  margin: 35px 0;
  /* identical to box height */
  margin-top: 16px;
  color: #252525;
  //text-align: center;
`;

export const LabelSC = styled.label`
  //position: absolute;
  display: inline-block;
  width: 100%;
  height: 24px;
  left: 0px;
  top: calc(50% - 24px / 2 - 192px);

  font-family: var(--root-font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: rgba(37, 37, 37, 0.8);
  margin-bottom: 10px;
`;

export const DivBoxSC = styled.div`
  //position: absolute;
  width: 100%;
  height: 92px;
  left: 0px;
  top: 119px;
`;

export const DivBoxRowsSC = styled.div`
  display: grid;
  grid-template-rows: 85px 85px 85px 85px 85px;
  @media (max-width: 643px) {
    display: flex;
    flex-direction: column;
  }
`;
export const DivBoxColumnsSC = styled.div`
  display: grid;
  grid-template-columns: ${({ full }) => (full ? "100%" : "50% 50%")};
  @media (max-width: 643px) {
    display: block !important;
    width: 100%;
  }
`;

export const InputSC = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;

  //position: absolute;
  width: 100%;
  height: 56px;
  left: 0px;
  top: calc(50% - 56px / 2 - 140px);

  border: 2px solid var(--main-color);
  box-sizing: border-box;
  border-radius: 20px;
  @media (max-width: 643px) {
    width: 100%;
  }
`;

export const DivBoxRowSC = styled.div`
  width: 100%;
  justify-content: space-evenly;
`;

export const InputFullWidthSC = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 0px 18px 18px;

  //position: absolute;

  height: 56px;
  left: 0px;
  top: calc(50% - 56px / 2 - 140px);
  width: 100%;
  border: 2px solid var(--main-color);
  box-sizing: border-box;
  border-radius: 20px;
  @media (max-width: 643px) {
    width: 100%;
    height: 56px;
    margin-bottom: 35px;
    max-width: none;
  }
`;

export const ButtonSC = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;

  //position: absolute;
  width: 100%;
  max-width: 93%;
  height: 56px;
  left: calc(50% - 514px / 2);
  top: calc(50% - 56px / 2 + 213px);

  background: var(--green-color);
  border-radius: 20px;
  border: none;
  color: var(--white-color);
  margin-top: 20px;
  text-transform: capitalize;
  font-family: var(--root-font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  opacity: ${(p) => (p.statusOpasity ? 0.5 : 1)};
`;

export const DivBoxTextSC = styled.div`
  margin-top: 35px;
`;

export const SpanQuSC = styled.span`
  color: rgba(37, 37, 37, 0.7);
  font-family: var(--root-font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const LinkSC = styled(Link)`
  color: var(--green-color);
  font-family: var(--root-font-family);
  text-decoration: none;
  font-weight: bold;
`;

export const DivBoxFormSC = styled.div`
  width: 100%;
  max-width: 552px;
  //height: 680px;
`;

export const DivBoxBoxFormSC = styled.div`
  padding: 50px;
  justify-self: center;
  border-radius: 30px;
  height: fit-content;
  display: grid;
  grid-template-columns: 522px auto;
  position: relative;
  max-width: 1470px;
  width: 80%;
  margin: auto;
  background-color: var(--white-color);
  background-position: right 50px bottom;
  background-size: 620px;

  @media (max-width: 943px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
`;

export const DivBackgroundFormSC = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  justify-items: center;
  //overflow: auto;
`;

export const SpanSC = styled.span`
  margin-bottom: 20px;
  display: inline-block;
`;
export const DivRegSC = styled.div`
  //height: calc(100% - 64px);
  //overflow: auto;
  background: url(${image});
  display: grid;
  align-items: center;
  //padding: 0 150px 0px 200px;
  padding-bottom: 20px;
  padding-top: 20px;
  min-height: 750px;
  @media (max-width: 642px) {
    min-height: 0 !important;
  }
`;

export const DivBackgroundPeopleSC = styled.div`
  //position: absolute;
  //background: url(${image2});
`;
