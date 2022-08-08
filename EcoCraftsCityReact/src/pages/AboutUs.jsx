import React from 'react';
import {
  DivBoxTextReviewsMastersSC,
  DivTexReviewsMastersSC,
  DivBoxTextReviewsClientsSC,
  DivTexReviewsClientsSC,
} from '../styled-components-css/styles.AboutUs';
import CaroselAboutUs from '../components/components-aboutus/CarouselAboutUs';
import AboutUsShow from '../components/components-aboutus/AboutUsShow';

const AboutUs = () => {
  return (
    <>
      <DivBoxTextReviewsMastersSC>
        <DivTexReviewsMastersSC>Отзывы мастеров платформы</DivTexReviewsMastersSC>
      </DivBoxTextReviewsMastersSC>
      <CaroselAboutUs>
        <AboutUsShow />
        <AboutUsShow />
        <AboutUsShow />
        <AboutUsShow />
        <AboutUsShow />
        <AboutUsShow />
      </CaroselAboutUs>
      <DivBoxTextReviewsClientsSC>
        <DivTexReviewsClientsSC>Отзывы наших клиентов</DivTexReviewsClientsSC>
      </DivBoxTextReviewsClientsSC>
    </>
  );
};

export default AboutUs;
