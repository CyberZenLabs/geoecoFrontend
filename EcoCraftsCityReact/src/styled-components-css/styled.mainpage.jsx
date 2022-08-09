import styled from "styled-components/macro";
import DivPhoto from "../img/MainPagePhotos.svg"
import DivMasters from "../img/MainPagePeople.svg"
import { Link } from "react-router-dom";
export const DivMainPageWrapSC = styled.div`
display: grid;
grid-template-rows: 800px auto auto auto auto;
row-gap: 100px;
//border: 2px solid red;
height: fit-content;
width: 100%;
@media(max-width:1000px){
  grid-template-rows: 670px auto auto auto;
  row-gap: 50px;
}
`;
export const DivLogoBlockSC =styled.div`
display: grid;
grid-template-columns: 0px 100%;
overflow: hidden;
transition: .6s .7s;
@media(max-width:1000px){
    grid-template-columns: 0px 100%;
    transition: 0s;
    border-radius: 32px;
}
`;
export const DivLogoTextBlockSC =styled.div`
z-index: 1;
width: 100%;
background:#FAFAFA;
box-shadow: 30px 0px 1500px 500px #FAFAFA ;
transition: 1s;
@media(max-width:1000px){
    box-shadow: none ;
    transition: 1s ;
}
`;
export const DivInfoBlockSC =styled.div`
background: ${({ Color }) => (Color ? `${Color}` : 'none')};
${({LeftTop}) => (LeftTop && `border-top-left-radius: 32px;`)};
${({LeftBottom}) => (LeftBottom && `border-bottom-left-radius: 32px;`)};
${({RightTop}) => (RightTop && `border-top-right-radius: 32px;`)};
    ${({RightBottom}) => (RightBottom && `border-bottom-right-radius: 32px;`)};
display: grid;
grid-template-columns: 50% 50%;
`;
export const ImgInfoBlockSC =styled.div`
z-index: 0;
background-image: ${({ Photo }) => (Photo && `url(${Photo})`)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${({RightTop}) => (RightTop && `border-top-right-radius: 32px;`)};
    ${({RightBottom}) => (RightBottom && `border-bottom-right-radius: 32px;`)};
width: 100%;
height: 100%;

`;
export const PlayButton =styled.button`
border-radius: 32px;
z-index: 0;
background: none;
border: none;
background-image: ${({ Photo }) => (Photo && `url(${Photo})`)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
width: 55px;
height: 55px;
align-self: center;
cursor: pointer;
`;
export const ImgSocialIcons =styled(Link)`
//border: 2px solid red;
z-index: 0;
background-image: ${({ Photo }) => (Photo && `url(${Photo})`)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
width: 85px;
height: 85px;
`;
export const ImgMastersBlockSC =styled.div`
//border: 1px solid red;
z-index: 0;
background-image: ${({ Photo }) => (Photo && `url(${Photo})`)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-size: 100%;
  width: 710px;
  height: 540px;
  justify-self:center;
  align-self: end;
  @media(max-width:1000px){

  width: 670px;
  height: 500px;
 }
`;
export const DivInfoTextBlockSC =styled.div`
//border: 1px solid red;
display: grid;
grid-template-rows: auto auto;
row-gap: 10px;
justify-self: center;
align-self: center;
width: 470px;
height: fit-content;
@media(max-width:1000px){
  width: auto;
margin-left:${({ MarginL }) => (MarginL && `${MarginL}`)};
margin-right: ${({ MarginR }) => (MarginR && `${MarginR}`)};
}
`;
export const DivTextBlockLogo =styled.div`
z-index: 1;
//border: 1px solid red;
display: grid;
grid-template-rows: auto auto auto;
gap: 30px;
width: 580px;
height: fit-content;

@media(max-width:1000px){
    margin-left: 20px;
}
`;
export const DivPlug=styled.div`
@media(max-width:1000px){
   display: none;
}
`;
export const DivWrapTextLogoSC =styled.div`
z-index: 1;
//border: 1px solid yellow;
display: grid;
grid-template-columns: 15vw 580px;
margin-top: 250px;
width: auto;

@media(max-width:1000px){
    grid-template-columns: 0px 580px;  margin-top: 150px;
  
  
}
`;
export const DivInfoWrapSC =styled.div`
//border: 2px solid blue;
display: grid;
grid-template-rows: repeat(3, 800px);
@media(max-width:1000px){
    grid-template-rows: repeat(3, 420px);
}
`;
export const DivMastersBlockSC =styled.div`
//border: 2px solid blue;
display: grid;
grid-template-rows: auto auto;
height: 780px;
background: #FAFAFA;
border-radius: 32px;
@media(max-width:1000px){
  height: 740px;
 }
`;
export const DivSocialsBlockSC =styled.div`
//border: 2px solid blue;
display: grid;
grid-template-rows: auto auto;
gap:65px;
//height: 300px;
background:none;
margin-bottom: 200px;
@media(max-width:1000px){
  //height: 250px;
 }
`;
export const DivSocialsIconsBlock =styled.div`
//border: 2px solid blue;
display: grid;
grid-template-columns: auto auto auto;
gap:75px;
background:none;
justify-content: center;
align-content: center;
@media(max-width:1000px){
 // height: 250px;
 }
`;
export const H1InfoTitleSC =styled.h1`
pointer-events: none;
//border: 2px solid blue;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 44px;
/* Вторичный */
color: #252525;
@media(max-width:1000px){
font-size: 24px;
line-height: 29px;

 }
`;
export const H1MasterTitleSC =styled.h1`
//border: 2px solid blue;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 49px;
/* identical to box height */
text-align: center;
justify-self: center;
/* Вторичный */
color: #252525;
margin-top: 75px;
width:550px;
@media(max-width:1000px){
  font-size: 36px;
  width:496px;
 }
`;
export const H1SocialsTitleSC =styled.h1`
//border: 2px solid blue;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 49px;
/* identical to box height */
text-align: center;
/* Вторичный */
color: #252525;
/* identical to box height */
text-align: center;
justify-self: center;
/* Вторичный */
margin-top: 75px;
width:600px;
@media(max-width:1000px){
  font-size: 40px;
line-height: 49px;
 }
`;
export const H1InfoTitleLogoSC =styled.h1`
pointer-events: none;
//border: 2px solid blue;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 96px;
line-height: 117px;
/* identical to box height */
/* Вторичный */
color: #252525;
transition: 1s;
@media(max-width:1000px){
    box-shadow: none ;
    color: #FFFFFF;
}
`;

export const PInfoTextSC =styled.p`
pointer-events: none;
//border: 2px solid blue;
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 28px;
line-height: 34px;
/* Вторичный */
color: #252525;

@media(max-width:1000px){
font-size: 20px;
line-height: 24px;
 }
`;
export const PInfoTextLogoSC =styled.p`
pointer-events: none;
//border: 2px solid blue;
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 32px;
line-height: 39px;

/* Вторичный */
transition: 1s;
color: #252525;
@media(max-width:1000px){
  color: #FFFFFF;
 }
`;
export const DivTwoColumns =styled.p`
width: 300px;
display: grid;
//border:1px solid red;
gap: 25px;
grid-template-columns: auto auto;
align-content: center;
`;
export const ProductCardButtonSC = styled(Link)`
  /* Кнопка (первичная) */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
 
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  /* Акцент */
  text-decoration: none;
  background: #85cb33;
  border-radius: 20px;
  width: 230px;
  height: 60px;
  justify-self: start;
  border-radius: 20px;
  border: none;
  :hover{
    background-color:#76b42e;
  }
`;