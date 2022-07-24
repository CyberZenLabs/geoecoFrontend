import styled from "styled-components/macro"
/* import image from "../img/white-card1.svg"
import image2 from "../img/white-card2.svg"
import image3 from "../img/cards-logo.svg"
import image4 from "../img/gray-rectangle.svg" */
import image from "../img/Cards.svg"


export const DivMapBindingBoxSC = styled.div`
display: grid;
justify-items: center;
`

export const DivContentMapBindingSC = styled.div`
display: grid;
grid-template-rows: 223px 304px 416px;
max-width: 571px;
width: 85vw;
`

 export const DivBoxNumCardSC = styled.div`
 position: absolute;
 width: 355px;
 height: 56px;
 left: 32px;
 right: 201px;
 bottom: 130px;
 top: 118px;
 padding-top: 10px;
 padding-left: 8px;
 
 `
 export const DivBoxMMSC = styled.div`
 position: absolute;
 width: 86px;
 height: 56px;
 left: 32px;
 right: 367px;
 bottom: 58px;
 top: 190px;
 padding-left: 8px;
 padding-top: 16px;
 `
 
 export const DivBoxGGSC = styled.div`
 position: absolute;
 width: 86px;
 height: 56px;
 left: 129px;
 right: 367px;
 bottom: 58px;
 top: 190px;
 padding-left: 8px;
 margin-left: 20px;
 padding-top: 16px;
 ::-webkit-input-placeholder{
  text-align:center;
}
 `
 export const DivBoxCVVCVCSC = styled.div`
 position: absolute;
 width: 109px;
 height: 56px;
 top: 227px;
 left: 422;
 bottom: 47px;
 right: 30px;
 `
export const DivSlashSC = styled.div`
position: absolute;
top: 208px;
right: 446px;
bottom: 76px;
left: 130px;
width: 6px;
height: 20px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
text-align: center;
padding-left: 4px;
padding-top: 16px;
color: rgba(37, 37, 37, 0.7);
`

export const DivTextSC = styled.div
 `font-weight: 700;
  font-size: 32px;
  display: inline-block;
  width: fit-content;
  padding-top: 179px;
  padding-left: 24px;
`
 
export const DivImgBoxSC = styled.div`
background-image: url(${image});
background-repeat: no-repeat;
background-size: 600px;
width: 559px;
height: 345px;

`

  export const DivButtonsSC = styled.div`
  display: grid;
  grid-template-columns: ${({ fullSize }) => (fullSize ? "100%" : "259px 259px")};
  grid-column-gap: 29px;
  @media (max-width: 643px) {
    display: block !important;
    width: 100%;
  } 
  padding-left: 24px;
  padding-top: 44px;
  padding-bottom: 316px;
  `

  export const DivRowBoxSC = styled.div`
  display: grid;
  grid-template-rows: 36px 21px;
  position: relative;
 
  `
 export const DivColumnsBoxSC = styled.div`
 display: grid;
 grid-template-columns: 67px 6px 67px 109px;
 `