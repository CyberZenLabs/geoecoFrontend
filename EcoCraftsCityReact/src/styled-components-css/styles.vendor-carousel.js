import styled from "styled-components/macro";

export const DivCarouselMainSC = styled.div`
  width: 1027px;
  height: 180px;
  margin: 25px 50px;
`;

export const DivCarouselWindowSC = styled.div`
  width: 100%;
  height: 175px;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  padding-left:10px;
`;
export const DivCarouselAllItemsSC = styled.div`
  transform: translateX(${(props) => props.carouselNumber * -514}px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 24px;
  transition: translate;
  transition-property: transform;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
`;
export const DivButtonWrapSC = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: calc(100% + 35px);
  font-size: 44px;
  max-width: 1119px;
  margin-left: -57px;

`;