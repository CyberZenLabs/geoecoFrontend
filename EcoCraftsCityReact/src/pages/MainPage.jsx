import React from 'react';
import {
  DivInfoBlockSC,
  DivInfoTextBlockSC,
  DivInfoWrapSC,
  DivLogoBlockSC,
  DivLogoTextBlockSC,
  DivLogoTextBlockShowSC,
  DivMainPageWrapSC,
  DivMastersBlockSC,
  DivPlug,
  DivSocialsBlockSC,
  DivSocialsIconsBlock,
  DivTextBlockLogo,
  DivTextBlockLogoShow,
  DivTwoColumns,
  DivVideoPosterSC,
  DivWidthSetSC,
  DivWrapTextLogoSC,
  H1InfoTitleLogoSC,
  H1InfoTitleSC,
  H1InfoTitleShowSC,
  H1MasterTitleSC,
  H1SocialsTitleSC,
  ImgInfoBlockLogoSC,
  ImgInfoBlockSC,
  ImgInfoBlockShowSC,
  ImgMastersBlockSC,
  ImgSocialIcons,
  PInfoTextLogoSC,
  PInfoTextSC,
  PlayButton,
  ProductCardButtonSC,
  VideoPosterSC,
} from '../styled-components-css/styled.mainpage';

import DivPhoto from '../img/MainPagePhotos.svg';
import DivMasters from '../img/MainPagePeople.svg';
import Twit from '../img/FacebookIcon.svg';
import Insta from '../img/InstaIcon.svg';
import Face from '../img/TwitIcon.svg';
import AboutUs from './AboutUs';
import PlayButtonMainPage from '../img/PlayButton.svg';
import BackVideo from '../video/opacity-video-mainpage.mp4';
import PosterVideo from '../video/poster-for-video.jpg';

const MainPage = () => {
  return (
    <>
      <DivMainPageWrapSC>
        <DivLogoBlockSC>
          <DivVideoPosterSC>
            <VideoPosterSC src={BackVideo} poster={PosterVideo} autoPlay muted loop></VideoPosterSC>
            <DivLogoTextBlockShowSC>
              <DivWidthSetSC>
                <DivTextBlockLogoShow>
                  <H1InfoTitleShowSC>geoeco</H1InfoTitleShowSC>
                  <PInfoTextLogoSC>
                  The world's only exclusive store for the distribution of sustainably created goods internationally, all goods are verified to be hand made with love for people and the planet.
                  </PInfoTextLogoSC>
                  <DivTwoColumns>
                    <ProductCardButtonSC to="home">View Products</ProductCardButtonSC>
                  </DivTwoColumns>
                </DivTextBlockLogoShow>
              </DivWidthSetSC>
            </DivLogoTextBlockShowSC>
          </DivVideoPosterSC>
        </DivLogoBlockSC>

        <DivInfoWrapSC>
          <DivInfoBlockSC Color="#DCFAB9;" LeftTop={true} RightTop={true}>
            <DivInfoTextBlockSC MarginL="20px" MarginR="30px">
              <H1InfoTitleSC>Только экологичные товары</H1InfoTitleSC>
              <PInfoTextSC>
                Все образцы товаров обязательно проходят проверку на экологичность, а также на соответствие нашим
                требованиям и стандартам качества
              </PInfoTextSC>
            </DivInfoTextBlockSC>
            <ImgInfoBlockSC RightTop={true} Photo={'https://cdn.discordapp.com/attachments/983598550380322827/1008682274637750312/image1.png'} />
          </DivInfoBlockSC>

          <ImgInfoBlockShowSC Photo={'https://cdn.discordapp.com/attachments/983598550380322827/1008682274637750312/image1.png'} />

          <DivInfoBlockSC Color="#FAF3B9;">
            <ImgInfoBlockSC Photo={'https://cdn.discordapp.com/attachments/983598550380322827/1008682620214849596/image2.png'} />
            <DivInfoTextBlockSC MarginL="30px" MarginR="20px" Right={true}>
              <H1InfoTitleSC>Развиваем социальное предпринимательство</H1InfoTitleSC>
              <PInfoTextSC>
                Мы помогаем людям приобрести товары сделанные руками лучших мастеров
                <br />
                <br />
                Мы помогаем мастерам в продвижении и реализации их товаров
              </PInfoTextSC>
            </DivInfoTextBlockSC>
          </DivInfoBlockSC>

          <ImgInfoBlockShowSC Photo={'https://cdn.discordapp.com/attachments/983598550380322827/1008682620214849596/image2.png'} />

          <DivInfoBlockSC Color="#FFCEE0;" LeftBottom={true} RightBottom={true}>
            <DivInfoTextBlockSC MarginL="20px" MarginR="30px">
              <H1InfoTitleSC>Занимаемся благотворительностью</H1InfoTitleSC>
              <PInfoTextSC>
                Часть заработанных средств мы отдаем на улучшение инфраструктуры и развитие волонтерского экологического
                движения
              </PInfoTextSC>
            </DivInfoTextBlockSC>
            <ImgInfoBlockSC RightBottom={true} Photo={'https://cdn.discordapp.com/attachments/983598550380322827/1008683181647605871/image3.png'} />
          </DivInfoBlockSC>

          <ImgInfoBlockShowSC RightBottom={true} LeftBottom={true} Photo={'https://cdn.discordapp.com/attachments/983598550380322827/1008683181647605871/image3.png'} />
        </DivInfoWrapSC>

        <DivMastersBlockSC>
          <H1MasterTitleSC>Работы лучших мастеров в одном месте</H1MasterTitleSC>
          <ImgMastersBlockSC Photo={DivMasters} />
        </DivMastersBlockSC>
        {/*<AboutUs/>*/}
        <DivSocialsBlockSC>
          <H1SocialsTitleSC>Следите за нами в соцсетях</H1SocialsTitleSC>
          <DivSocialsIconsBlock>
            <ImgSocialIcons to="#" Photo={Twit} />
            <ImgSocialIcons to="#" Photo={Insta} />
            <ImgSocialIcons to="#" Photo={Face} />
          </DivSocialsIconsBlock>
        </DivSocialsBlockSC>
      </DivMainPageWrapSC>
    </>
  );
};

export default MainPage;
