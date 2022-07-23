import React from 'react';

import BottomMenu from './BottomMenu';
import styled from 'styled-components/macro';
import image from '../img/logo.svg'
// import {faFacebook} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
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
    SpanFooterSC
} from '../styled-components-css/styles.footer'
import Modal from "./Modal";
import EcoModal from "./Modal";
import AppContext from "../context/AppContext";
var string = 'ECOCRAFTCIRY'

const Footer = () => {
    
  const openCart = () => {
    setOpen(true);
    setModalData({
      inputs: [{ email: "Электронная почта" }],
      button: true,
    });
  };

  const { setOpen, setModalData } = React.useContext(AppContext);
    return (
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
                <div>

                </div>
                <DivBoxEcoCraftlSC>
                    <DivBoxEcoCraftSC>
                        <SpanTitleSC>geoeco</SpanTitleSC>
                        <CustomLinkSC to="/">О нас</CustomLinkSC>
                        <CustomLinkSC to="/">Отзывы</CustomLinkSC>
                        <CustomLinkSC to="/"  onClick={openCart}>Создать магазин</CustomLinkSC>
                        <CustomLinkSC to="/">Новости</CustomLinkSC>
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
                <span>Сделано digital-студией CyberZen</span>
            </DivBottomSC>
            <BottomMenu/>
        </DivBoxFooterSC>
    );
};







export default Footer;
