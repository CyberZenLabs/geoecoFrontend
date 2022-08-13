import styled from "styled-components/macro";

export const DivCarouselMainSC = styled.div`
  height:100%;
  width: 100%;
  margin-bottom: 40px;
  @media (max-width:1340px) {
    transition: margin-bottom .2s 0s;
    margin-bottom: 20px;

  }
`;
export const CustomRightArrow = styled.div`
  background:#000;
  width:10px;
  height: 10px;
  border-radius: 10px;
`;
export const SpanTextTitleAdaptiveeSC = styled.div`
display:none;
@media (max-width:1240px) {
  align-self: center;
  display: block;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #252525;
  width: 100%;
  padding-bottom:0;
  transition: text-align .2s 0s;
  text-align: center;
  @media (max-width:1140px) {
  display: block;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 37px;
  color: #252525;
  width: 100%;
  transition: text-align .2s 0s;
  text-align: center;
}
}

`;
export const DivCarouselWindowSC = styled.div`
  max-width: 950px;
  display: grid;
  justify-content: left;
  align-items: center;
  align-content: center;
  flex-direction: row;
  overflow: hidden;
  margin: 0px 20px;
  @media (max-width:1340px) {
  }
  @media (max-width:1240px) {
    transition: margin .2s 0s;

  }
`;
export const DivCarouselAllItemsSC = styled.div`
  transform: translateX(${(props) => props.carouselNumber * -477}px);
  height: 100%;
  width: 100%;
  margin: 20px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 10px;
  transition: translate;
  transition-property: transform;
  transition-duration: 200ms;

  transition-timing-function: ease-in-out;
  @media (max-width:1440px) {
    transform: translateX(${(props) => props.carouselNumber * -426}px);
  }
  @media (max-width:1340px) {
    column-gap: 20px;
    transform: translateX(${(props) => props.carouselNumber * -366}px);
    margin-bottom: 10px;
    margin-top: 10px;

  }
  @media (max-width:1240px) {
    column-gap: 10px;
    transform: translateX(${(props) => props.carouselNumber * -338}px);

  }
  @media (max-width:1140px) {
    column-gap: 5px;
    transform: translateX(${(props) => props.carouselNumber * -273}px);

  }
`;
export const DivButtonWrapSC = styled.div`
  position: absolute;
  display: flex;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  font-size: 44px;
  min-width: 1025px;
  margin-left: -39px;
  transition: min-width .1s 0s;

@media (max-width:1440px) {
    min-width: 925px;
  }
  @media (max-width:1340px) {
    min-width: 790px;
  }
  @media (max-width:1240px) {
    min-width:200px;
    margin-left: 250px;
    align-self: self-start;


    justify-items: center;
  }
  @media (max-width:1140px) {
    min-width:100px;
    margin-left: 200px;

  }
`;