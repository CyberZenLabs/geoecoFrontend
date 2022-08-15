import React from 'react';

import ScrollUpButton, { CircleArrow } from 'react-scroll-up-button';
import { HiOutlineArrowUp } from 'react-icons/hi';
import BottomMenu from './BottomMenu';
import styled from 'styled-components/macro';
import image from '../img/logo.svg';
// import {faFacebook} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  DivBoxFooterSC,
  DivTopSC,
  DivBottomSC,
  DivBoxLogoAndSocialSC,
  DivBoxEcoCraftlSC,
  DivBoxEcoCraftSC,
  DivBoxFeaturesSC,
  DivBoxLogoSC,
  DivBoxSocSC,
  CustomLinkSC,
  SpanTitleSC,
  SpanFooterSC,
  ButtonHiOutlineArrowUpSC,
  DivButtonAdaptiveSC,
  DivButtonAdaptivePhonesSC,
} from '../styled-components-css/styles.footer';
import Modal from './Modal';
import EcoModal from './Modal';
import AppContext from '../context/AppContext';
var string = 'ECOCRAFTCIRY';

const Footer = () => {
  const openCart = () => {
    setOpen(true);
    setModalData({
      inputs: [{ email: 'Email' }],
      button: true,
    });
  };

  const { setOpen, setModalData } = React.useContext(AppContext);
  return (
    <div>
      <DivBoxFooterSC>
        <DivTopSC>
          <DivBoxLogoAndSocialSC>
            <DivBoxLogoSC>
              <DivBoxSocSC>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </DivBoxSocSC>
            </DivBoxLogoSC>
          </DivBoxLogoAndSocialSC>
          <div></div>
          <DivBoxEcoCraftlSC>
            <DivBoxEcoCraftSC>
              <SpanTitleSC>geoeco</SpanTitleSC>
              <CustomLinkSC to="/">About us</CustomLinkSC>
              <CustomLinkSC to="/">Reviews</CustomLinkSC>
              <CustomLinkSC to="/" onClick={openCart}>
                Create store
              </CustomLinkSC>
              <CustomLinkSC to="/">News</CustomLinkSC>
            </DivBoxEcoCraftSC>
          </DivBoxEcoCraftlSC>
          <DivBoxFeaturesSC>
            <DivBoxEcoCraftSC>
              <SpanTitleSC>Features</SpanTitleSC>
              <CustomLinkSC to="/">Business Marketing</CustomLinkSC>
              <CustomLinkSC to="/">User Analytics</CustomLinkSC>
              <CustomLinkSC to="/">Live Chat</CustomLinkSC>
              <CustomLinkSC to="/">Unlimited Support</CustomLinkSC>
            </DivBoxEcoCraftSC>
          </DivBoxFeaturesSC>
        </DivTopSC>
        <DivBottomSC>
          <span>Made by digital-studio CyberZen</span>
        </DivBottomSC>
      </DivBoxFooterSC>
      <BottomMenu />
      <DivButtonAdaptiveSC>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={650}
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
          backgroundColor: '#fff',
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
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '35px',
        }}>
        <HiOutlineArrowUp color="#85CB33"/>
      </ScrollUpButton>
      </DivButtonAdaptiveSC>
      <DivButtonAdaptivePhonesSC>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={450}
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
          backgroundColor: '#fff',
          borderRadius: '50%',
          border: 'none',
          height: 50,
          position: 'fixed',
          bottom: "25vw",
          width: 50,
          WebkitTransition: 'all 0.5s ease-in-out',
          transition: 'all 0.5s ease-in-out',
          transitionProperty: 'opacity, right, boxShadow',
          cursor: 'pointer',
          opacity: 0,
          right: -75,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '35px',
        }}>
        <HiOutlineArrowUp color="#85CB33"/>
      </ScrollUpButton>
      </DivButtonAdaptivePhonesSC>
    </div>
  );
};

export default Footer;
