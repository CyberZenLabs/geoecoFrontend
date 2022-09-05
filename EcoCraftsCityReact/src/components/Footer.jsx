import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import { HiOutlineArrowUp } from 'react-icons/hi';
import BottomMenu from './BottomMenu';
// import {faFacebook} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  DivButtonAdaptiveSC,
  DivButtonAdaptivePhonesSC,
  DivBoxEcoCraftLeftSC,
  DivBoxEcoCraftThinScreenSC,
  DivBoxEcoCraftThinRowSC,
  DivBoxEcoCraftThinColumnsSC,
} from '../styled-components-css/styles.footer';
const Footer = () => {
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

      

          <DivBoxEcoCraftlSC>
            <DivBoxEcoCraftSC>
              <CustomLinkSC to="/">About us</CustomLinkSC>
              <CustomLinkSC to="/">Contact us</CustomLinkSC>
              <CustomLinkSC to="/">Frequently Asked Questions</CustomLinkSC>
            </DivBoxEcoCraftSC>
          </DivBoxEcoCraftlSC>

          <DivBoxFeaturesSC>
            <DivBoxEcoCraftLeftSC>
              <CustomLinkSC to="/">Privacy Policy</CustomLinkSC>
              <CustomLinkSC to="/">User Agreement Terms</CustomLinkSC>
            </DivBoxEcoCraftLeftSC>
          </DivBoxFeaturesSC>

          <DivBoxEcoCraftThinScreenSC>
          <DivBoxEcoCraftThinRowSC>
              <DivBoxEcoCraftThinColumnsSC><CustomLinkSC to="/">FAQ</CustomLinkSC>|<CustomLinkSC to="/">Get in touch with us</CustomLinkSC></DivBoxEcoCraftThinColumnsSC>
              <DivBoxEcoCraftThinColumnsSC><CustomLinkSC to="/">About us</CustomLinkSC> | <CustomLinkSC to="/">Privacy Policy</CustomLinkSC></DivBoxEcoCraftThinColumnsSC>
              <DivBoxEcoCraftThinColumnsSC><CustomLinkSC to="/">Terms of the user agreement</CustomLinkSC></DivBoxEcoCraftThinColumnsSC>
            </DivBoxEcoCraftThinRowSC>
          </DivBoxEcoCraftThinScreenSC>

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
          }}
        >
          <HiOutlineArrowUp color="#85CB33" />
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
            bottom: '25vw',
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
          }}
        >
          <HiOutlineArrowUp color="#85CB33" />
        </ScrollUpButton>
      </DivButtonAdaptivePhonesSC>
    </div>
  );
};

export default Footer;
