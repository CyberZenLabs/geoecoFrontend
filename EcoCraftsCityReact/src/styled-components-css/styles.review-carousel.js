import styled from "styled-components/macro";

export const DivCarouselMainSC = styled.div`
  width: 1000px;
  height: 330px;
  margin-top:20px;
`;

export const DivCarouselWindowSC = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
`;
export const DivCarouselAllItemsSC = styled.div`
  transform: translateX(${(props) => props.carouselNumber * -444}px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 24px;
`;
export const DivButtonWrapSC = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: calc(100% + 35px);
  font-size: 44px;
  max-width: 1035px;
  margin-left: -18px;
`;
