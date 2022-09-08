import React from 'react';
import {
  DivBoxTextReviewsMastersSC,
  DivTexReviewsMastersSC,
  DivBoxTextReviewsClientsSC,
  DivTexReviewsClientsSC,
  DivContainerVideoCarouselSC,
} from '../styled-components-css/styles.AboutUs';
/* import CarouselCompound from './'; */
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
import CarouselKirdro from "../components/components-aboutus/CarouselKirdro";
/* import CarouselCompound from '../../components/components-aboutus/'; */

const AboutUs = () => {
  return (
    <>
      {/*<DivContainerVideoCarouselSC>*/}
      {/*  <VideoCarousel>*/}
      {/*    <VideoItem />*/}
      {/*    <VideoItem />*/}
      {/*    <VideoItem />*/}
      {/*    <VideoItem />*/}
      {/*    <VideoItem />*/}
      {/*    <VideoItem />*/}
      {/*  </VideoCarousel>*/}
      {/*</DivContainerVideoCarouselSC>*/}



      <DivBoxTextReviewsMastersSC>
        <DivTexReviewsMastersSC>Feedback from craftsmen</DivTexReviewsMastersSC>
      </DivBoxTextReviewsMastersSC>
      <DivBoxTextReviewsClientsSC>
        <DivTexReviewsClientsSC>Feedback from our customers</DivTexReviewsClientsSC>
      </DivBoxTextReviewsClientsSC>
      <CarouselKirdro/>
          </>
  );
};

export default AboutUs;
