import styled from "styled-components/macro";
import image from "../img/geoecologo.png";
import {Link} from "react-router-dom";

export const DivBoxFooterSC = styled.div`
  //margin-top: 10px;
  height: 300px;
  background: rgba(133, 203, 51, 0.3);
  display: grid;
  grid-template-rows: auto 50px;

`;

export const DivTopSC = styled.div`
  //outline: 1px solid #1130c1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
`;

export const DivBottomSC = styled.div`
  //outline: 1px solid #91119f;
  text-align: center;
  display: grid;
  align-items: center;
  font-family: var(--root-font-family);
`;

export const DivBoxLogoAndSocialSC = styled.div`
    //outline: 1px solid #ffffff;
  //   background-image: url(${image});
  // background-repeat: no-repeat;
  // background-position: center 10px;
  display: grid;
  align-items: center;
  justify-items: end;
`

export const DivBoxEcoCraftlSC = styled.div`
  //outline: 1px solid #1e2c75;
  font-family: var(--root-font-family);
  padding-top: 53px;
  display: grid;
  justify-items: end;
`;

export const DivBoxEcoCraftSC = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    height: 150px;
    width: 200px;
`

export const DivBoxFeaturesSC = styled.div`
  //outline: 1px solid #701313;
  font-family: var(--root-font-family);
  padding-top: 53px;
  display: grid;
  justify-items: center;
`;

export const DivBoxLogoSC = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center 10px;
  height: 116px;
  width: 80px;
  background-size: 100px;
  display: grid;
  align-items: end;
`;

export const DivBoxSocSC = styled.div`
  display: grid;
  height: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: stretch;
`;

export const CustomLinkSC = styled(Link)`
    font-size: 14px;
    text-decoration: none;
  color: var(--color-black)
`;

export const SpanTitleSC = styled.span`
    font-size: 24px;
  margin-bottom: 11px;
  font-weight: bold;
`;

export const SpanFooterSC = styled.span`
    font-size: 14px;
`;