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
export const SpanTextTitleAdaptiveeSC = styled.div`
display:none;
@media (max-width:1240px) {
  display: block;
  border-radius: 20px 20px 0px 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #252525;
  width: 100%;
  padding-bottom:0;
  transition: text-align .4s 0s;
  text-align: center;
}

`;
export const DivCarouselWindowSC = styled.div`
  max-width: 955px;
  display: grid;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  margin: 0px 20px;
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
    transform: translateX(${(props) => props.carouselNumber * -424}px);
  }
  @media (max-width:1340px) {
    column-gap: 20px;
    transform: translateX(${(props) => props.carouselNumber * -374}px);

  }
  
`;
export const DivButtonWrapSC = styled.div`
  position: absolute;
  display: flex;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  font-size: 44px;
  min-width: 1025px;
  margin-left: -35px;
  transition: min-width .1s 0s;

@media (max-width:1440px) {
    min-width: 930px;
  }
  @media (max-width:1340px) {
    min-width: 820px;
  }
  @media (max-width:1240px) {
    min-width:200px;
    margin-left: 250px;

    justify-items: center;
    align-self: self-start;
  }
`;