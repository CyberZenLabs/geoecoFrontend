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
          {/*<DivLogoTextBlockSC>*/}
          {/*  <DivWrapTextLogoSC>*/}
          {/*    <DivPlug />*/}
          {/*    <DivTextBlockLogo>*/}
          {/*      <H1InfoTitleLogoSC>geoeco</H1InfoTitleLogoSC>*/}
          {/*      <PInfoTextLogoSC>*/}
          {/*        Лучшая торговая площадка для приобретения и реализации товаров сделанных с любовью для людей*/}
          {/*      </PInfoTextLogoSC>*/}
          {/*      <DivTwoColumns>*/}
          {/*        <ProductCardButtonSC to="home">Перейти в магазин</ProductCardButtonSC>*/}
          {/*        <PlayButton Photo={PlayButtonMainPage} />*/}
          {/*      </DivTwoColumns>*/}
          {/*    </DivTextBlockLogo>*/}
          {/*  </DivWrapTextLogoSC>*/}
          {/*</DivLogoTextBlockSC>*/}
          <DivVideoPosterSC>
            <VideoPosterSC src={BackVideo} poster={PosterVideo} autoPlay muted loop>

            </VideoPosterSC>
            <DivLogoTextBlockShowSC>
              <DivTextBlockLogoShow>
                <H1InfoTitleShowSC>geoeco</H1InfoTitleShowSC>
                <PInfoTextLogoSC>
                  Лучшая торговая площадка для приобретения и реализации товаров сделанных с любовью для людей
                </PInfoTextLogoSC>
                <DivTwoColumns>
                  <ProductCardButtonSC to="home">Перейти в магазин</ProductCardButtonSC>
                </DivTwoColumns>
              </DivTextBlockLogoShow>
            </DivLogoTextBlockShowSC>
          </DivVideoPosterSC>
        {/* <DivLogoBlockSC>
          <DivLogoTextBlockSC>
            <DivWrapTextLogoSC>
              <DivPlug />
              <DivTextBlockLogo>
                <H1InfoTitleLogoSC>geoeco</H1InfoTitleLogoSC>
                <PInfoTextLogoSC>
                  Лучшая торговая площадка для приобретения и реализации товаров сделанных с любовью для людей
                </PInfoTextLogoSC>
                <DivTwoColumns>
                  <ProductCardButtonSC to="home">Перейти в магазин</ProductCardButtonSC>
                  <PlayButton Photo={PlayButtonMainPage} />
                </DivTwoColumns>
              </DivTextBlockLogo>
            </DivWrapTextLogoSC>
          </DivLogoTextBlockSC>
          <DivVideoPosterSC>
            <VideoPosterSC src={BackVideo} poster={PosterVideo} autoPlay muted loop>
              <DivLogoTextBlockShowSC>
                <DivTextBlockLogoShow>
                  <H1InfoTitleShowSC>geoeco</H1InfoTitleShowSC>
                  <PInfoTextLogoSC>
                    Лучшая торговая площадка для приобретения и реализации товаров сделанных с любовью для людей
                  </PInfoTextLogoSC>
                  <DivTwoColumns>
                    <ProductCardButtonSC to="home">Перейти в магазин</ProductCardButtonSC>
                  </DivTwoColumns>
                </DivTextBlockLogoShow>
              </DivLogoTextBlockShowSC>
            </VideoPosterSC>
          </DivVideoPosterSC> */}
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
            <ImgInfoBlockSC RightTop={true} Photo={DivPhoto} />
          </DivInfoBlockSC>

          <ImgInfoBlockShowSC Photo={DivPhoto} />

          <DivInfoBlockSC Color="#FAF3B9;">
            <ImgInfoBlockSC Photo={DivPhoto} />
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

          <ImgInfoBlockShowSC Photo={DivPhoto} />

          <DivInfoBlockSC Color="#FFCEE0;" LeftBottom={true} RightBottom={true}>
            <DivInfoTextBlockSC MarginL="20px" MarginR="30px">
              <H1InfoTitleSC>Занимаемся благотворительностью</H1InfoTitleSC>
              <PInfoTextSC>
                Часть заработанных средств мы отдаем на улучшение инфраструктуры и развитие волонтерского экологического
                движения
              </PInfoTextSC>
            </DivInfoTextBlockSC>
            <ImgInfoBlockSC RightBottom={true} Photo={DivPhoto} />
          </DivInfoBlockSC>

          <ImgInfoBlockShowSC RightBottom={true} LeftBottom={true} Photo={DivPhoto} />
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
