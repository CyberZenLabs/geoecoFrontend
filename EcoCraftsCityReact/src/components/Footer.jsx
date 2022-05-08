import React from 'react';
import styled from 'styled-components/macro';
import image from '../img/logo.svg'

const Footer = () => {
    return (
        <DivBoxFooterSC>
            <DivTopSC>
                <DivBoxLogoAndSocialSC>
                    <DivBoxLogoSC>

                    </DivBoxLogoSC>
                </DivBoxLogoAndSocialSC>
                <DivBoxEcoCraftlSC>

                </DivBoxEcoCraftlSC>
                <DivBoxFeaturesSC>

                </DivBoxFeaturesSC>
            </DivTopSC>
            <DivBottomSC></DivBottomSC>
        </DivBoxFooterSC>
    );
};

const DivBoxFooterSC = styled.div`
  //margin-top: 10px;
  height: 414px;
  background: rgba(133, 203, 51, 0.3);
  display: grid;
  grid-template-rows: auto 50px;
`;

const DivTopSC = styled.div`
  //outline: 1px solid #1130c1;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
`;

const DivBottomSC = styled.div`
  //outline: 1px solid #91119f;
`;

const DivBoxLogoAndSocialSC = styled.div`
    outline: 1px solid #ffffff;
  //   background-image: url(${image});
  // background-repeat: no-repeat;
  // background-position: center 10px;
  display: grid;
  align-items: center;
  justify-items: center;
`

const DivBoxEcoCraftlSC = styled.div`
  outline: 1px solid #1e2c75;
`

const DivBoxFeaturesSC = styled.div`
  outline: 1px solid #701313;
`;

const DivBoxLogoSC = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center 10px;
  height: 200px;
  width: 200px;
  background-size: 80px;
`



export default Footer;
