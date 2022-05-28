import * as React from "react";
import UilListUl from "@iconscout/react-unicons/icons/uil-list-ul";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";
import UilUser from "@iconscout/react-unicons/icons/uil-user";
import UilShoppingCart from "@iconscout/react-unicons/icons/uil-shopping-cart";
import {
  DivBoxLogoSC,
  DivBoxHeaderSC,
  DivHeaderSC,
  DivCatalogAndSearchBoxSC,
  SpanFirstSC,
  SpanSecondSC,
  DivTextBoxSC,
  DivBoxButtonAndInputSC,
  DivBoxIconHeaderSC,
  DivBoxIconSC,
  BoxContentButton,
  InputSC,
  DivInputBoxCS,
  DivIconBoxInput,
  LinkIconSC,
  DivBoxIconEndSC,
  SpanEndHeaderSC,
} from "../styled-components-css/styles.navbar";
import { ButtonCustomSC } from "../styled-components-css/styles.custom-button";

import AppContext from "../context/AppContext";
import {
  DivAccountWrapperSc,
  DivStyledProfileSc,
} from "../styled-components-css/styles.profile";
import { useAuth } from "../context/AuthContext";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [profileActive, setProfileActive] = React.useState(false);
  const { login, logout, loggedIn, setFormValues, authError } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleProfile = () => {};
  const { setShowCatalog, showCatalog } = React.useContext(AppContext);
  return (
    <DivBoxHeaderSC>
      <DivHeaderSC>
        <DivBoxLogoSC></DivBoxLogoSC>

        <DivCatalogAndSearchBoxSC>
          <DivTextBoxSC>
            <SpanFirstSC to="/">Продавайте на EcoCraftCity</SpanFirstSC>
            <SpanSecondSC to="/">Работа в EcoCraftCity</SpanSecondSC>
          </DivTextBoxSC>
          <DivBoxButtonAndInputSC>
            <ButtonCustomSC
              onClick={() => setShowCatalog(!showCatalog)}
              width={"176px"}
              padding={"8px 32px"}
            >
              <BoxContentButton>
                <UilListUl
                  size="40"
                  // color="#61DAFB"
                />
                <span>Каталог</span>
              </BoxContentButton>
            </ButtonCustomSC>

            <DivInputBoxCS>
              <InputSC
                // value={lastName}
                // onChange={onChange(getLastName)}
                type="text"
                id={"search"}
                placeholder={"Я ищу..."}
              />
              <DivIconBoxInput>
                <UilSearch size="25" color="rgba(37, 37, 37, 0.7)" />
              </DivIconBoxInput>
            </DivInputBoxCS>
          </DivBoxButtonAndInputSC>
        </DivCatalogAndSearchBoxSC>
        <DivBoxIconHeaderSC>
          <DivBoxIconSC>
            <DivAccountWrapperSc>
              {loggedIn ? (
                <div class="container">
                  <div class={profileActive ? "navigation active" : "active"}>
                    <div class="user-box">
                      <div class="image-box">
                        <img
                          src="https://i.pravatar.cc/150?img=49"
                          alt="avatar"
                        />
                      </div>
                      <p class="username">Jenifer Lopez</p>
                    </div>
                    <div class="menu-toggle" onClick={toggleProfile}></div>
                    <ul class="menu">
                      <li>
                        <a href="#">Profile</a>
                      </li>
                      <li>
                        <a href="#">Messages</a>
                      </li>
                      <li>
                        <a href="#">Notification</a>
                      </li>
                      <li>
                        <a href="#">Settings</a>
                      </li>
                      <li>
                        <a href="#">Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <LinkIconSC to="/signin">
                  <DivBoxIconEndSC>
                    <UilUser size="35" color="rgba(37, 37, 37, 0.8)" />
                  </DivBoxIconEndSC>

                  <SpanEndHeaderSC>Войти</SpanEndHeaderSC>
                </LinkIconSC>
              )}
            </DivAccountWrapperSc>

            <LinkIconSC to="/">
              <DivBoxIconEndSC>
                <UilShoppingCart size="35" color="rgba(37, 37, 37, 0.8)" />
              </DivBoxIconEndSC>

              <SpanEndHeaderSC>Корзина</SpanEndHeaderSC>
            </LinkIconSC>
          </DivBoxIconSC>
        </DivBoxIconHeaderSC>
      </DivHeaderSC>
    </DivBoxHeaderSC>
  );
};

export default ResponsiveAppBar;
