import React from 'react';
import {
    DivInfoBlockSC,
    DivInfoTextBlockSC,
    DivInfoWrapSC,
    DivLogoBlockSC,
    DivLogoTextBlockSC,
    DivMainPageWrapSC,
    DivMastersBlockSC,
    DivPlug,
    DivSocialsBlockSC,
    DivSocialsIconsBlock,
    DivTextBlockLogo,
    DivTwoColumns,
    DivWrapTextLogoSC,
    H1InfoTitleLogoSC,
    H1InfoTitleSC,
    H1MasterTitleSC,
    H1SocialsTitleSC,
    ImgInfoBlockSC,
    ImgMastersBlockSC,
    ImgSocialIcons,
    PInfoTextLogoSC,
    PInfoTextSC,
    PlayButton,
    ProductCardButtonSC,
} from '../styled-components-css/styled.mainpage';
import ScrollUpButton, {CircleArrow} from "react-scroll-up-button";
import DivPhoto from '../img/MainPagePhotos.svg';
import DivMasters from '../img/MainPagePeople.svg';
import Twit from '../img/FacebookIcon.svg';
import Insta from '../img/InstaIcon.svg';
import Face from '../img/TwitIcon.svg';
import AboutUs from './AboutUs';
import PlayButtonMainPage from '../img/PlayButton.svg';

const MainPage = () => {
    return (
        <>
            <DivMainPageWrapSC>
                <DivLogoBlockSC>
                    <DivLogoTextBlockSC>
                        <DivWrapTextLogoSC>
                            <DivPlug/>
                            <DivTextBlockLogo>
                                <H1InfoTitleLogoSC>geoeco</H1InfoTitleLogoSC>
                                <PInfoTextLogoSC>
                                    Лучшая торговая площадка для приобретения и реализации товаров сделанных с любовью
                                    для людей
                                </PInfoTextLogoSC>
                                <DivTwoColumns>
                                    <ProductCardButtonSC to="home">Перейти в магазин</ProductCardButtonSC>
                                    <PlayButton Photo={PlayButtonMainPage}/>
                                </DivTwoColumns>
                            </DivTextBlockLogo>
                        </DivWrapTextLogoSC>
                    </DivLogoTextBlockSC>
                    <ImgInfoBlockSC Photo={DivPhoto}/>
                </DivLogoBlockSC>

                <DivInfoWrapSC>
                    <DivInfoBlockSC Color="#DCFAB9;" LeftTop={true} RightTop={true}>
                        <DivInfoTextBlockSC MarginL="20px" MarginR="30px">
                            <H1InfoTitleSC>Только экологичные товары</H1InfoTitleSC>
                            <PInfoTextSC>
                                Все образцы товаров обязательно проходят проверку на экологичность, а также на
                                соответствие нашим
                                требованиям и стандартам качества
                            </PInfoTextSC>
                        </DivInfoTextBlockSC>
                        <ImgInfoBlockSC RightTop={true} Photo={DivPhoto}/>
                    </DivInfoBlockSC>

                    <DivInfoBlockSC Color="#FAF3B9;">
                        <ImgInfoBlockSC Photo={DivPhoto}/>
                        <DivInfoTextBlockSC MarginL="30px" MarginR="20px" End={true}>
                            <H1InfoTitleSC>Развиваем социальное предпринимательство</H1InfoTitleSC>
                            <PInfoTextSC>
                                Мы помогаем людям приобрести товары сделанные руками лучших мастеров
                                <br/>
                                <br/>
                                Мы помогаем мастерам в продвижении и реализации их товаров
                            </PInfoTextSC>
                        </DivInfoTextBlockSC>
                    </DivInfoBlockSC>

                    <DivInfoBlockSC Color="#FFCEE0;" LeftBottom={true} RightBottom={true}>
                        <DivInfoTextBlockSC MarginL="20px" MarginR="30px">
                            <H1InfoTitleSC>Занимаемся благотворительностью</H1InfoTitleSC>
                            <PInfoTextSC>
                                Часть заработанных средств мы отдаем на улучшение инфраструктуры и развитие
                                волонтерского экологического
                                движения
                            </PInfoTextSC>
                        </DivInfoTextBlockSC>
                        <ImgInfoBlockSC RightBottom={true} Photo={DivPhoto}/>
                    </DivInfoBlockSC>
                </DivInfoWrapSC>

                <DivMastersBlockSC>
                    <H1MasterTitleSC>Работы лучших мастеров в одном месте</H1MasterTitleSC>
                    <ImgMastersBlockSC Photo={DivMasters}/>
                </DivMastersBlockSC>
                <AboutUs/>
                <DivSocialsBlockSC>
                    <H1SocialsTitleSC>Следите за нами в соцсетях</H1SocialsTitleSC>
                    <DivSocialsIconsBlock>
                        <ImgSocialIcons to="#" Photo={Twit}/>
                        <ImgSocialIcons to="#" Photo={Insta}/>
                        <ImgSocialIcons to="#" Photo={Face}/>
                    </DivSocialsIconsBlock>
                </DivSocialsBlockSC>
            </DivMainPageWrapSC>

            {/*<CircleArrow*/}
            {/*    StopPosition={0}*/}
            {/*    ShowAtPosition={150}*/}
            {/*    EasingType="easeOutCubic"*/}
            {/*    AnimationDuration={500}*/}
            {/*    ContainerClassName="ScrollUpButton__Container"*/}
            {/*    TransitionClassName="ScrollUpButton__Toggled"*/}
            {/*    ToggledStyle={{}}*/}
            {/*    style={{*/}
            {/*        backgroundColor: '#FAFAFA',*/}
            {/*        borderRadius: '50%',*/}
            {/*        border: 'none',*/}
            {/*        height: 70,*/}
            {/*        position: 'fixed',*/}
            {/*        bottom: 40,*/}
            {/*        width: 70,*/}
            {/*        WebkitTransition: 'all 0.5s ease-in-out',*/}
            {/*        transition: 'all 0.5s ease-in-out',*/}
            {/*        transitionProperty: 'opacity, right',*/}
            {/*        cursor: 'pointer',*/}
            {/*        opacity: 0,*/}
            {/*        right: -75*/}
            {/*    }}*/}
            {/*/>*/}
            <ScrollUpButton
                StopPosition={0}
                ShowAtPosition={150}
                EasingType="easeOutCubic"
                AnimationDuration={500}
                ContainerClassName="ScrollUpButton__Container"
                TransitionClassName="ScrollUpButton__Toggled"
                ToggledStyle={{
                    right: 40,
                    opacity: 1,
                    WebkitTransition: 'all 0.5s ease-in-out',
                    transition: 'all 0.5s ease-in-out',
                    transitionProperty: 'opacity, right, boxShadow',
                }}
                style={{
                    // backgroundColor: '#000',
                    borderRadius: '50%',
                    border: 'none',
                    height: 70,
                    position: 'fixed',
                    bottom: 40,
                    width: 70,
                    WebkitTransition: 'all 0.5s ease-in-out',
                    transition: 'all 0.5s ease-in-out',
                    transitionProperty: 'opacity, right, boxShadow',
                    cursor: 'pointer',
                    opacity: 0,
                    right: -75,
                    boxShadow: '10px 10px 10px #000'
                }}
            >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#FAFAFA"/>
                    <path d="M53.3251 38.3433L41.6584 26.6766C41.4365 26.4642 41.1748 26.2977 40.8884 26.1866C40.3203 25.9533 39.6831 25.9533 39.1151 26.1866C38.8286 26.2977 38.567 26.4642 38.3451 26.6766L26.6784 38.3433C26.4608 38.5609 26.2883 38.8191 26.1705 39.1034C26.0528 39.3876 25.9922 39.6923 25.9922 40C25.9922 40.6213 26.239 41.2173 26.6784 41.6566C27.1178 42.096 27.7137 42.3428 28.3351 42.3428C28.9564 42.3428 29.5524 42.096 29.9917 41.6566L37.6684 33.9566V51.6666C37.6684 52.2855 37.9142 52.879 38.3518 53.3165C38.7894 53.7541 39.3829 54 40.0017 54C40.6206 54 41.2141 53.7541 41.6516 53.3165C42.0892 52.879 42.3351 52.2855 42.3351 51.6666V33.9566L50.0117 41.6566C50.2286 41.8753 50.4867 42.0489 50.7711 42.1674C51.0554 42.2858 51.3604 42.3468 51.6684 42.3468C51.9764 42.3468 52.2814 42.2858 52.5657 42.1674C52.8501 42.0489 53.1082 41.8753 53.3251 41.6566C53.5438 41.4397 53.7174 41.1816 53.8358 40.8973C53.9543 40.613 54.0153 40.308 54.0153 40C54.0153 39.6919 53.9543 39.387 53.8358 39.1026C53.7174 38.8183 53.5438 38.5602 53.3251 38.3433Z" fill="#85CB33"/>
                </svg>
            </ScrollUpButton>
        </>
    );
};

export default MainPage;
