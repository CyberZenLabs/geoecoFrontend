import React from 'react';
import {
  CardCarousel,
  DivBoxAvaSC,
  DivAvaSC,
  DivBoxBigTextSC,
  DivTextBigSC,
  DivBoxSmallTextSC,
  DivTextSmallSC,
} from '../../styled-components-css/styles.ElasticCourusel';

const CardCarouselShow = () => {
  return (
    <>
      <CardCarousel>
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
      </CardCarousel>
    </>
  );
};

export default CardCarouselShow;
