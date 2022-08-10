/* import React from 'react';
import {
  
  DivBoxAvaSC,
  DivAvaSC,
  DivBoxBigTextSC,
  DivTextBigSC,
  DivBoxSmallTextSC,
  DivTextSmallSC,
} from '../../styled-components-css/styles.ElasticCourusel';
import { useContext } from 'react';
import { CarouselClientsContext } from './CarouselClientsContext';

const CardCarouselShow = ({ children }) => {
  const { width } = useContext(CarouselClientsContext);
  return (
    <>
      <div
        style={{
          minWidth: `${width}px`,
          maxWidth: `${width}px`,
        }}
      >
        {children}
        <DivBoxAvaSC>
          <DivAvaSC></DivAvaSC>
        </DivBoxAvaSC>
        <DivBoxBigTextSC>
          <DivTextBigSC>
            Волшебный свитер! Безупречная работа, изумительный дизайн, всё было готово точно в договорной срок. Спасибо
            вам огромное за мастерство, тонкий вкус и позитивную энергию, которую свитер излучает. Очень-очень я вам
            благодарна.
          </DivTextBigSC>
        </DivBoxBigTextSC>
        <DivBoxSmallTextSC>
          <DivTextSmallSC>Евгения Калмакова</DivTextSmallSC>
        </DivBoxSmallTextSC>
      </div>
    </>
  );
};

export default CardCarouselShow;
 */
