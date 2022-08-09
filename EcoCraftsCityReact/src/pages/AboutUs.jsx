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
import {
  DivDot1,
  DivDot2,
  DivDot3,
  DivDot4,
  DivDot5,
  DivDot6,
  DivDot7,
  DivDot8,
  DivDot9,
  DivDit10,
  DivBoxContainerDot,
  DiBoxBoxDot,
} from '../styled-components-css/styles.AboutUs';
import CardCarouselShow from '../components/components-aboutus/CardCarouselShow';
import CarouselClients from '../components/components-aboutus/CarouselClients';

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

      <DivBoxTextReviewsMastersSC>
        <DivTexReviewsMastersSC>Отзывы мастеров платформы</DivTexReviewsMastersSC>
      </DivBoxTextReviewsMastersSC>
      <DivBoxTextReviewsClientsSC>
        <DivTexReviewsClientsSC>Отзывы наших клиентов</DivTexReviewsClientsSC>
      </DivBoxTextReviewsClientsSC>
      <CarouselClients>
        <CardCarouselShow />
        <CardCarouselShow />
        <CardCarouselShow />
        <CardCarouselShow />
        <CardCarouselShow />
        <CardCarouselShow />
        <CardCarouselShow />
        <CardCarouselShow />
        <CardCarouselShow />
      </CarouselClients>
      <DiBoxBoxDot>
        <DivBoxContainerDot>
          <DivDot1></DivDot1>
          <DivDot2></DivDot2>
          <DivDot3></DivDot3>
          <DivDot4></DivDot4>
          <DivDot5></DivDot5>
          <DivDot6></DivDot6>
          <DivDot7></DivDot7>
          <DivDot8></DivDot8>
          <DivDot9></DivDot9>
          <DivDit10></DivDit10>
        </DivBoxContainerDot>
      </DiBoxBoxDot>
    </>
  );
};

export default AboutUs;
