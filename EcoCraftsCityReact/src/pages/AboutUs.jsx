import React from 'react';
import {
  DivBoxTextReviewsMastersSC,
  DivTexReviewsMastersSC,
  DivBoxTextReviewsClientsSC,
  DivTexReviewsClientsSC,
  DivContainerVideoCarouselSC,
} from '../styled-components-css/styles.AboutUs';

import VideoCarousel from '../components/components-aboutus/VideoCarousel';
import VideoItem from '../components/components-aboutus/VideoItem';

const AboutUs = () => {
  return (
    <>
      <DivContainerVideoCarouselSC>
        <VideoCarousel>
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </VideoCarousel>
      </DivContainerVideoCarouselSC>

      {/* <DivBoxTextReviewsMastersSC>
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
      </DivBoxTextReviewsClientsSC> */}
    </>
  );
};

export default AboutUs;
