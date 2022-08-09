import React, { useState, useEffect, Children } from 'react';
import { cloneElement } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import {
  DivArrowBackSC,
  DivVideoCarouselAllItemsSC,
  DivVideoCarouselMainSC,
  DivVideoCarouselWindowSC,
} from '../../styled-components-css/styles.video-carousel';

const VideoCarousel = ({ children }) => {
  const [items, setItems] = useState([]);
  const [carouselNumber, setCarouselNumber] = useState(0);
  useEffect(() => {
    setItems(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: '1322px',
            maxWidth: '1322px',
          },
        });
      }),
    );
  }, []);

  const handleLefttArrow = () => {
    setCarouselNumber(carouselNumber - 1);
  };

  const handleRighttArrow = () => {
    setCarouselNumber(carouselNumber + 1);
  };

  return (
    <DivVideoCarouselMainSC>
      <DivVideoCarouselWindowSC>
        <DivVideoCarouselAllItemsSC carouselNumber={carouselNumber}>{items}</DivVideoCarouselAllItemsSC>
        {carouselNumber !== 0 ? (
          <DivArrowBackSC arrow={'left'} onClick={handleLefttArrow}>
            <FiArrowLeft />
          </DivArrowBackSC>
        ) : (
          <div></div>
        )}
        {carouselNumber !== items.length - 3 ? (
          <DivArrowBackSC arrow={'right'} onClick={handleRighttArrow}>
            <FiArrowRight />
          </DivArrowBackSC>
        ) : (
          <div></div>
        )}
      </DivVideoCarouselWindowSC>
    </DivVideoCarouselMainSC>
  );
};

export default VideoCarousel;
