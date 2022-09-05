import styled from "styled-components/macro";
import image from "../img/geoecologo.png";
import {Link} from "react-router-dom";
import { HiOutlineArrowUp } from 'react-icons/hi';

export const DivBoxFooterSC = styled.div`
  //margin-top: 10px;
  height: 300px;
  background: rgba(133, 203, 51, 0.3);
  display: grid;
  grid-template-rows:240px 50px;
 // border:1px solid black;
  @media (max-width: 768px) {
  display: none;
}
`;

export const DivTopSC = styled.div`
  //outline: 1px solid #1130c1;
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
 max-height: 300px;
//border: 1px solid red;
@media (max-width:1500px) {
  grid-template-columns: 1fr 1fr;
}
`;

export const DivBottomSC = styled.div`
  //outline: 1px solid #91119f;
  text-align: center;
  display: grid;
  align-items: center;
  font-family: var(--root-font-family);
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */

letter-spacing: 0.2px;

/* Вторичный */

color: #252525;
`;

export const DivBoxLogoAndSocialSC = styled.div`
    //outline: 1px solid #ffffff;
  //   background-image: url(${image});
  // background-repeat: no-repeat;
  // background-position: center 10px;
  display: grid;
  align-items: center;
  justify-items: end;
  margin-left: 200px;
  transition: 1s;
  @media (max-width: 1500px) {
justify-items: start;
margin-left:10vw;
}
@media (max-width: 1000px) {
    margin-left: 0px;
justify-items: start;
}
`

export const DivBoxEcoCraftlSC = styled.div`
  //outline: 1px solid #1e2c75;
  font-family: var(--root-font-family);
  padding-top: 85px;
  display: grid;
  justify-items:end;
  margin-left: 130px;
  @media (max-width: 1500px) {
display: none;
}
`;
export const DivBoxEcoCraftThinScreenSC = styled.div`
@media (min-width: 1501px) {
display: none;
}
font-family: var(--root-font-family);
  padding-top: 85px;
  display: grid;
 // justify-items:end;
 // margin-left: 130px;
`;

export const DivBoxEcoCraftSC = styled.div`
    display: grid;
    grid-template-rows: repeat(3,max-content);
    gap: 25px;
    height:100%;
    width: max-content;
    //border:1px solid red;
`
export const DivBoxEcoCraftLeftSC = styled.div`
    display: grid;
    grid-template-rows: repeat(2,max-content) ;
    gap: 25px;
    height: 150px;
    width: max-content;
   // border:1px solid blue;
`
export const DivBoxEcoCraftThinRowSC = styled.div`
    display: grid;
    grid-template-rows: repeat(3,max-content) ;
    gap: 25px;
    height: 150px;
    width: max-content;
   // border:1px solid blue;
`
export const DivBoxEcoCraftThinColumnsSC = styled.div`
    display: grid;
    grid-template-columns: repeat(3,max-content) ;
    gap: 10px;
    //height: 150px;
    width: max-content;
   // border:1px solid blue;
   font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 100% */

letter-spacing: 0.2px;

/* Вторичный */

color: #252525;
`

export const DivBoxFeaturesSC = styled.div`
  //outline: 1px solid #701313;
  font-family: var(--root-font-family);
  padding-top: 85px;
  display: grid;
  justify-items: center;
  @media (max-width: 1500px) {
display: none;
}
`;

export const DivBoxLogoSC = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center ;
  height: 200px;
  width: 230px;
  background-size: 270px;
  display: grid;
  align-items: end;
  justify-content: end;
  padding-right:35px ;
  //border:1px solid red;
`;

export const DivBoxSocSC = styled.div`
  display: grid;
  height: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  font-size: 25px;
  color: #252525;
`;

export const CustomLinkSC = styled(Link)`
    text-decoration: none;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 24px;
/* identical to box height, or 100% */

letter-spacing: 0.2px;

/* Вторичный */

color: #252525;
:hover{
  color: black;
}
`;

export const SpanTitleSC = styled.span`
    font-size: 24px;
  margin-bottom: 11px;
  font-weight: bold;
`;

export const SpanFooterSC = styled.span`
    font-size: 14px;
`;
export const DivButtonAdaptiveSC=styled.div`
@media (max-width:1000px){
display: none;
}
`;
export const DivButtonAdaptivePhonesSC=styled.div`
display: grid;
justify-content: center;
align-items: center;
justify-items: center;
@media (min-width:1001px){
display: none;
}
`;