import React from 'react';
import {

  DivBoxAvaSC,
  DivAvaSC,
  DivBoxBigTextSC,
  DivTextBigSC,
  DivBoxSmallTextSC,
  DivTextSmallSC, DivBoxContentSC,
} from '../../styled-components-css/styles.ElasticCourusel';

const CardCarouselShow = ({ children }) => {
  // const { width } = useContext(CarouselClientsContext);
  return (
    <>
      <DivBoxContentSC
        // style={{
        //   minWidth: `${width}px`,
        //   maxWidth: `${width}px`,
        // }}
      >
        {/*{children}*/}
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
      </DivBoxContentSC>
    </>
  );
};

export default CardCarouselShow;

