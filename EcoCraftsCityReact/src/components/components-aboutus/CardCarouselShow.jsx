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
          Awesome sweater! Impeccable work, amazing design, everything was ready exactly on time. Thank you very much for the craftsmanship, delicate taste and positive energy that the sweater radiates. I am very grateful to you.
          </DivTextBigSC>
        </DivBoxBigTextSC>
        <DivBoxSmallTextSC>
          <DivTextSmallSC>Eugene Brown</DivTextSmallSC>
        </DivBoxSmallTextSC>
      </DivBoxContentSC>
    </>
  );
};

export default CardCarouselShow;

