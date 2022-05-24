import React from 'react';
import styled from 'styled-components/macro';
import image from '../img/logo.svg'
// import {faFacebook} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

var string = 'ECOCRAFTCIRY'

const Footer = () => {
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
                        <SpanTitleSC>EcoCraftCity</SpanTitleSC>
                        <CustomLinkSC to="/">О нас</CustomLinkSC>
                        <CustomLinkSC to="/">Отзывы</CustomLinkSC>
                        <CustomLinkSC to="/">Вакансии</CustomLinkSC>
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
        </DivBoxFooterSC>
    );
};

const DivBoxFooterSC = styled.div`
  //margin-top: 10px;
  height: 300px;
  background: rgba(133, 203, 51, 0.3);
  display: grid;
  grid-template-rows: auto 50px;
`;

const DivTopSC = styled.div`
  //outline: 1px solid #1130c1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
`;

const DivBottomSC = styled.div`
  //outline: 1px solid #91119f;
  text-align: center;
  display: grid;
  align-items: center;
`;

const DivBoxLogoAndSocialSC = styled.div`
    //outline: 1px solid #ffffff;
  //   background-image: url(${image});
  // background-repeat: no-repeat;
  // background-position: center 10px;
  display: grid;
  align-items: center;
  justify-items: end;
`

const DivBoxEcoCraftlSC = styled.div`
  //outline: 1px solid #1e2c75;
  font-family: var(--root-font-family);
  padding-top: 53px;
  display: grid;
  justify-items: end;
`;

const DivBoxEcoCraftSC = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    height: 150px;
    width: 200px;
`

const DivBoxFeaturesSC = styled.div`
  //outline: 1px solid #701313;
  font-family: var(--root-font-family);
  padding-top: 53px;
  display: grid;
  justify-items: center;
`;

const DivBoxLogoSC = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center 10px;
  height: 116px;
  width: 80px;
  background-size: 80px;
  display: grid;
  align-items: end;
`;

const DivBoxSocSC = styled.div`
  display: grid;
  height: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: stretch;
`;

const CustomLinkSC = styled(Link)`
    font-size: 14px;
    text-decoration: none;
  color: var(--color-black)
`;

const SpanTitleSC = styled.span`
    font-size: 24px;
  margin-bottom: 11px;
  font-weight: bold;
`;

const SpanFooterSC = styled.span`
    font-size: 14px;
`





export default Footer;
