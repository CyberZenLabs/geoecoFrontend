/* import styled from 'styled-components';

export const DivContainerClientsCarouselSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
`;

export const DivCarouselMainSC = styled.div`
  width: 100%;
  height: 393px;
  padding: 0px 0px 0px 0px;
  display: flex;
  align-items: center;
  @media (min-width: 780px) {
    position: relative;
  }
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
  transform: translateX(${(props) => props.carouselNumber * -768}px);
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
  @media (max-width: 1000px) {
    transform: translateX(${(props) => props.carouselNumber * -768}px);
  }
`;

export const DivArrowBackgroundSC = styled.div`
  position: absolute;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 45px;
  height: 45px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.11);
  border-radius: 30px;
  background-color: #ffffff;
  z-index: 1;
  font-size: 23px;
  ${(p) => (p.arrow === 'right' ? 'right: 0;' : null)}
  ${(p) => (p.arrow === 'left' ? 'margin-left: -15px;' : null)}
  :hover {
    color: rgb(133, 203, 51);
  }
  @media (min-width: 780px) {
    ${(p) => (p.arrow === 'right' ? 'margin-right: -22px;' : null)}
  }
`;

export const DivBoxTextReviewsMastersSC = styled.div`
  width: 100%;
  height: 124px;
  display: grid;
  justify-items: center;
  align-items: start;
`;
export const DivTexReviewsMastersSC = styled.div`
  max-width: 769px;
  width: 100%;
  height: 59px;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 59px;
  text-align: center;
  color: #252525;
`;

export const DivBoxTextReviewsClientsSC = styled.div`
  width: 100%;
  height: 124px;
  display: grid;
  justify-items: center;
  align-items: start;
`;
export const DivTexReviewsClientsSC = styled.div`
  max-width: 638px;
  width: 100%;
  height: 59px;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 59px;
  text-align: center;
  color: #252525;
`;
 */
