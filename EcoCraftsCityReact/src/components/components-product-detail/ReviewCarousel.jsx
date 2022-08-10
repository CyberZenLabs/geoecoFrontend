import React, { useState, useEffect, Children } from 'react';
import { cloneElement } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import {
  DivArrowBackgroundSC,
  DivCarouselAllItemsSC,
  DivCarouselMainSC,
  DivCarouselWindowSC,
} from '../../styled-components-css/styles.review-carousel';

const ReviewCarousel = ({ children }) => {
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
    <>
      <DivCarouselMainSC>
        <DivCarouselWindowSC>
          <DivCarouselAllItemsSC carouselNumber={carouselNumber}>{items}</DivCarouselAllItemsSC>
        </DivCarouselWindowSC>
          {carouselNumber !== 0 ? (
            <DivArrowBackgroundSC arrow={'left'} onClick={handleLefttArrow}>
              <FiArrowLeft />
            </DivArrowBackgroundSC>
          ) : (
            <div></div>
          )}
          {carouselNumber !== items.length - 3 ? (
            <DivArrowBackgroundSC arrow={'right'} onClick={handleRighttArrow}>
              <FiArrowRight />
            </DivArrowBackgroundSC>
          ) : (
            <div></div>
          )}
      </DivCarouselMainSC>
    </>
  );
};

export default ReviewCarousel;
