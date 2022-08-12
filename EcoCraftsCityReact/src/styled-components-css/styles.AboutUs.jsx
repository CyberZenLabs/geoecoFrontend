import styled from 'styled-components';

/*export const DivCarouselMainSC = styled.div`
  width: 100%;
  height: 393px;
  padding: 0px 0px 0px 0px;
  display: grid;
  align-items: center;
  justify-content: center;
  @media (min-width: 1448px) {
    position: relative;
  }
`;

export const DivCarouselWindowSC = styled.div`
  position: relative;
  max-width: 1600px;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: start;
  overflow: hidden;
`;
export const DivCarouselAllItemsSC = styled.div`
  transform: translateX(${(props) => props.carouselNumber * -337}px);
  height: 393px;
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
    transform: translateX(${(props) => props.carouselNumber * -205}px);
  }
`;

export const DivArrowBackgroundSC = styled.div`
  position: absolute;
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
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
  @media (min-width: 1448px) {
    ${(p) => (p.arrow === 'right' ? 'margin-right: -15px;' : null)}
  }
`;*/

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

export const DivContainerVideoCarouselSC = styled.div`
  max-width: 1322px;
  width: 90vw;
  display: grid;
  align-items: center;
  //justify-content: center;
  margin: 0 auto;
`;

/* export const DivDot1 = styled.div`
  width: 8px;
  height: 8px;
  background: #e3e3e3;
  border-radius: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const DivDot2 = styled.div`
  width: 8px;
  height: 8px;
  background: #e3e3e3;
  border-radius: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const DivDot3 = styled.div`
  width: 8px;
  height: 8px;
  background: #e3e3e3;
  border-radius: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const DivDot4 = styled.div`
  width: 8px;
  height: 8px;
  background: #e3e3e3;
  border-radius: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const DivDot5 = styled.div`
  width: 8px;
  height: 8px;
  background: #e3e3e3;
  border-radius: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const DivDot6 = styled.div`
  width: 8px;
  height: 8px;
  background: #e3e3e3;
  border-radius: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const DivDot7 = styled.div`
  width: 8px;
  height: 8px;
  background: #e3e3e3;
  border-radius: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const DivDot8 = styled.div`
  width: 8px;
  height: 8px;
  background: #e3e3e3;
  border-radius: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const DivDot9 = styled.div`
  width: 8px;
  height: 8px;
  background: #e3e3e3;
  border-radius: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const DivDit10 = styled.div`
  width: 8px;
  height: 8px;
  background: #e3e3e3;
  border-radius: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DivBoxContainerDot = styled.div`
  max-width: 350px;
  padding-left: 45px;
  padding-right: 145px;
  width: 100%;
  height: 33px;
  display: grid;
  justify-items: start;
  align-items: end;
  grid-template-columns: ${({ fullSize }) => (fullSize ? '100%' : '10% 10% 10% 10% 10% 10% 10% 10% 10% 10%')};
  grid-column-gap: 8px;
`;

export const DiBoxBoxDot = styled.div`
  width: 100%;
  height: 33px;
  display: grid;
  justify-items: center;
`;
 */
