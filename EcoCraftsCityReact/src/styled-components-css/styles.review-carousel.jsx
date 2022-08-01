import styled from 'styled-components/macro';

export const DivCarouselMainSC = styled.div`
  width: 1322px;
  height: 320px;
  padding: 0px 0px 0px 0px;
`;

export const DivCarouselWindowSC = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
`;
export const DivCarouselAllItemsSC = styled.div`
  transform: translateX(${(props) => props.carouselNumber * -442}px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 22px;
  padding: 0px 0px 0px 10px;
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
  font-size: 30px;
  max-width: 1355px;
  margin-left: -25px;
`;

export const DivArrowBackgroundSC = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.11);
  border-radius: 30px;
  background-color: #ffffff;
`;
