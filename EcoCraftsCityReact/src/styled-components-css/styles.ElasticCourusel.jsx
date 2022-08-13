import styled from 'styled-components/macro';
import RectangleCarousel from '../img/RectangleCarousel.svg';

export const CardCarousel = styled.div`
  width: 746px;
  height: 100%;
  background-image: url(${RectangleCarousel});
  display: grid;
  grid-template-rows: ${({ fullSize }) => (fullSize ? '100%' : '30.3% 49.9% 13.8%')};
  justify-items: center;
  align-items: center;
`;

export const DivBoxAvaSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: end;
`;

export const DivAvaSC = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 100%;
  background-color: #5da271;
`;

export const DivBoxBigTextSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-content: end;
`;

export const DivTextBigSC = styled.div`
  max-width: 698px;
  width: 100%;
  //height: 174px;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #252525;
`;

export const DivBoxSmallTextSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-content: center;
`;

export const DivTextSmallSC = styled.div`
  width: 100%;
  max-width: 253px;
  height: 29px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #252525;
`;

export const DivBoxContentSC = styled.div`
  width: 750px;
  height: 100%;
  display: grid;
  grid-template-rows: 96px max-content 50px;
  margin: auto;
`;
