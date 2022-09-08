import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import {
  DivBackBoxSC,
  DivHistorySC,
  NavLinkSC,
} from "../../styled-components-css/styles.product-detail";
import {
  DivStoreLeftPanelSC,
  DivStoreRightPanelSC,
  DivStoreWrapSC,
  DivWrapLinkSC,
  H1BoldTextSC,
} from "../../styled-components-css/styles-seller-store-settings/styles.store";
import AppContext from "../../context/AppContext";
import {
  ButtonContentEditSC,
  ButtonSave,
  DivContent1PageSC,
  DivContent2SC,
  DivContentDivisionSC,
  DivContentInfoButtonSC,
  DivContentRows2Page2SC,
  DivContentRows2PageSC,
  DivContentRowsSC,
  DivContentSC,
  DivFirstColumnSC,
  DivMainInfo2PageSC,
  DivMainInfoSC,
  DivPagesSC,
  DivStoreInfoStuffSC,
  EmailFieldSC,
  H1ContentDefinSC,
  H1ContentInfoSC,
  H1ContentNameMailSC,
  H1ContentNameSC,
  H1PageOptionHidesSC,
  H1PageOptionSC,
  DivMainInfoAdressSC,
  DivContentRows3PageSC,
  DivContentRows2Page4SC,
  H1ContentDefinEmailSC,
  H1ContentNameEmailSC,
} from "../../styled-components-css/styles-seller-store-settings/styles.settingsSeller";
import VendorNavMenu from "../../components/VendorNavMenu";
import { BreadCrumbs } from "../../components/BreadCrumbs";

const SellerSettings = ({ product }) => {
  const { setPass, setMail } = React.useContext(AppContext);
  const openPass = () => {
    setPass(true);
  };
  const openMail = () => {
    setMail(true);
  };

  const [indexSelectedButton, getIndexButton] = useState(0);
  const onClickTab = (index) => (e) => {
    getIndexButton(index);
  };
  const listContent = [
    {
      blocks: (
        <>
          <DivMainInfoSC>
            <DivContentInfoButtonSC>
              <H1ContentInfoSC>Phone, email and password</H1ContentInfoSC>
              <ButtonContentEditSC onClick={onClickTab(1)}>Edit</ButtonContentEditSC>
            </DivContentInfoButtonSC>
            <DivContent1PageSC>
              <DivContentRowsSC>
                <H1ContentNameSC>Phone</H1ContentNameSC>
                <H1ContentNameSC>Password</H1ContentNameSC>
                <H1ContentNameSC>Email</H1ContentNameSC>
              </DivContentRowsSC>
              <DivContentRowsSC>
                <H1ContentDefinSC>+70000000000</H1ContentDefinSC>
                <H1ContentDefinSC>*********</H1ContentDefinSC>
                <H1ContentDefinSC>lisaraklova@gmail.com</H1ContentDefinSC>
              </DivContentRowsSC>
            </DivContent1PageSC>
          </DivMainInfoSC>

          <DivMainInfoAdressSC>
            <H1ContentInfoSC>Address</H1ContentInfoSC>
            <DivContent2SC>
              <DivFirstColumnSC>
                <H1ContentNameSC>Current address</H1ContentNameSC>
                <H1ContentNameMailSC>https://</H1ContentNameMailSC>
                <ButtonContentEditSC onClick={openMail}>Edit</ButtonContentEditSC>
              </DivFirstColumnSC>
              <H1ContentNameSC>The address can only be changed once</H1ContentNameSC>
              <H1ContentNameSC>
              Important: the store address is the login that is used to log into the account along with the email. The login will also be changed.
              </H1ContentNameSC>
            </DivContent2SC>
          </DivMainInfoAdressSC>
        </>
      ),
    },
    {
      blocks: (
        <>
          <DivMainInfo2PageSC>
            <DivContentInfoButtonSC>
              <H1ContentInfoSC>Phone, email and password</H1ContentInfoSC>
            </DivContentInfoButtonSC>
            <DivContentSC>
              <DivContentDivisionSC>
                <DivContentRows3PageSC>
                  <H1ContentNameSC>Phone</H1ContentNameSC>
                  <H1ContentNameSC>New phone number</H1ContentNameSC>
                  <H1ContentNameSC>Password</H1ContentNameSC>
                </DivContentRows3PageSC>
                <DivContentRows2PageSC>
                  <H1ContentDefinSC>+70000000000</H1ContentDefinSC>
                  <H1ContentDefinSC>
                    <EmailFieldSC label="phone" type="phone" placeholder="Enter your phone number" />
                  </H1ContentDefinSC>
                  <H1ContentDefinSC>
                    <EmailFieldSC label="password" type="password" placeholder="Enter password" />
                  </H1ContentDefinSC>
                  <ButtonSave onClick={onClickTab(0)}>Save</ButtonSave>
                </DivContentRows2PageSC>
              </DivContentDivisionSC>

              <DivContentDivisionSC>
                <DivContentRows2Page4SC>
                  <H1ContentNameSC>Password</H1ContentNameSC>
                  <H1ContentNameEmailSC>Email</H1ContentNameEmailSC>
                  <H1ContentNameSC>New email </H1ContentNameSC>
                  <H1ContentNameSC>Password</H1ContentNameSC>
                </DivContentRows2Page4SC>
                <DivContentRows2Page2SC>
                  <DivContentInfoButtonSC>
                    <H1ContentDefinSC>*********</H1ContentDefinSC>
                    <ButtonContentEditSC onClick={openPass}>Edit</ButtonContentEditSC>
                  </DivContentInfoButtonSC>
                  <H1ContentDefinEmailSC>lisaraklova@gmail.com</H1ContentDefinEmailSC>
                  <H1ContentDefinSC>
                    <EmailFieldSC label="email" type="email" placeholder="Enter email" />
                  </H1ContentDefinSC>
                  <H1ContentDefinSC>
                    <EmailFieldSC label="password" type="password" placeholder="Enter password" />
                  </H1ContentDefinSC>
                  <ButtonSave onClick={onClickTab(0)}>Save</ButtonSave>
                </DivContentRows2Page2SC>
              </DivContentDivisionSC>
            </DivContentSC>
          </DivMainInfo2PageSC>

          <DivMainInfoAdressSC>
            <H1ContentInfoSC>Address</H1ContentInfoSC>
            <DivContent2SC>
              <DivFirstColumnSC>
                <H1ContentNameSC>Current address</H1ContentNameSC>
                <H1ContentNameMailSC>https://</H1ContentNameMailSC>
                <ButtonContentEditSC onClick={openMail}>Edit</ButtonContentEditSC>
              </DivFirstColumnSC>
              <H1ContentNameSC>The address can only be changed once</H1ContentNameSC>
              <H1ContentNameSC>
              Important: the store address is the login that is used to log into the account along with the email. The login will also be changed.
              </H1ContentNameSC>
            </DivContent2SC>
          </DivMainInfoAdressSC>
        </>
      ),
    },
    {
      blocks: <></>,
    },
  ];

  return (
    <>
      <BreadCrumbs />
      <DivStoreWrapSC>
        <DivStoreLeftPanelSC>
          <VendorNavMenu page={1} />
        </DivStoreLeftPanelSC>
        <DivStoreRightPanelSC>
          <DivStoreInfoStuffSC>
            <H1BoldTextSC>Settings</H1BoldTextSC>
          </DivStoreInfoStuffSC>
          <DivPagesSC>
            <H1PageOptionSC isActive={indexSelectedButton === 0} onClick={onClickTab(0)}>
              General
            </H1PageOptionSC>
            <H1PageOptionHidesSC isActive={indexSelectedButton === 2} onClick={onClickTab(2)}>
              Notifications
            </H1PageOptionHidesSC>
          </DivPagesSC>
          {listContent[indexSelectedButton].blocks}
        </DivStoreRightPanelSC>
      </DivStoreWrapSC>
    </>
  );
};

export default SellerSettings;
