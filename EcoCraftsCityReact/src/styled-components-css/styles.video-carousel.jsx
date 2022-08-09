import styled from 'styled-components';

//--------------------- start carousel --------------------------------

export const DivVideoCarouselMainSC = styled.div`
  width: 1322px;
  //height: 320px;
  padding: 0px 0px 0px 0px;
  
  display: flex;
  align-items: center;
  @media (min-width: 1415px) {
    position: relative;
  }
`;

export const DivVideoCarouselWindowSC = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
`;
export const DivVideoCarouselAllItemsSC = styled.div`
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
  @media (max-width: 1000px) {
    transform: translateX(${(props) => props.carouselNumber * -310}px);
  }
`;

export const DivArrowBackSC = styled.div`
position: absolute;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.11);
  border-radius: 30px;
  background-color: #ffffff;
  z-index: 1;
  font-size: 23px;
  ${(p) => (p.arrow === 'right' ? 'right: 0;' : null) }
  
  ${(p) => (p.arrow === 'left' ? 'margin-left: -22px;' : null) }
  :hover {
    color: rgb(133, 203, 51);
  }
  @media (min-width: 1415px) {
    ${(p) => (p.arrow === 'right' ? 'margin-right: -22px;' : null) }
  }

`;

//--------------------- end carousel --------------------------------
