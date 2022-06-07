import * as React from "react";
import { Link } from "react-router-dom";
import image from "../img/logo.svg";
import styled from "styled-components/macro";
import UilListUl from "@iconscout/react-unicons/icons/uil-list-ul";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";
import UilUser from "@iconscout/react-unicons/icons/uil-user";
import UilShoppingCart from "@iconscout/react-unicons/icons/uil-shopping-cart";
import { GoPackage, GoCreditCard } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
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
  ButtonSC,
  BoxContentButton,
  InputSC,
  DivInputBoxCS,
  DivIconBoxInput,
  LinkIconSC,
  DivBoxIconEndSC,
  SpanEndHeaderSC,
  LinkIconHideSC,
} from "../styled-components-css/styles.navbar";
import { ButtonCustomSC } from "../styled-components-css/styles.custom-button";
import { OverlayDivSc } from "../styled-components-css/styles.catalog";
import AppContext from "../context/AppContext";
import { useAuth } from "../context/AuthContext";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const { login, logout, loggedIn, setFormValues, authError } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [profileActive, setProfileActive] = React.useState(null);
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
  const toggleProfile = () => {
    setProfileActive(!profileActive);
  };

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
        {loggedIn ? (
          <div class="container">
            <div class={profileActive ? "navigation active" : "navigation"}>
              <div class="user-box">
                <div class="image-box">
                  <img src="https://i.pravatar.cc/150?img=49" alt="avatar" />
                </div>
                <p class="username">Jenifer Lopez</p>
              </div>
              <div class="profileMenu-toggle" onClick={toggleProfile}></div>
              <ul class="profileMenu">
                <li>
                  <a href="#">
                    <CgProfile />
                    Мой Профиль
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GoPackage />
                    Заказы
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GoCreditCard />
                    Мой Карты
                  </a>
                </li>
                <hr></hr>
                <li>
                  <a href="#">Баланс и история операций</a>
                </li>
                <li>
                  <a href="#">Отзывы и вопросы</a>
                </li>
                <li>
                  <a href="#">Выйти</a>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
        <DivBoxIconHeaderSC>
          <DivBoxIconSC>
            <LinkIconSC to="/signin">
              <DivBoxIconEndSC>
                <UilUser size="35" color="rgba(37, 37, 37, 0.8)" />
              </DivBoxIconEndSC>

              <SpanEndHeaderSC>Войти</SpanEndHeaderSC>
            </LinkIconSC>
            <LinkIconHideSC to="/">
              <DivBoxIconEndSC>
                <UilShoppingCart  size="35" color="rgba(37, 37, 37, 0.8)" />
              </DivBoxIconEndSC>

              <SpanEndHeaderSC>Корзина</SpanEndHeaderSC>
            </LinkIconHideSC>
          </DivBoxIconSC>
        </DivBoxIconHeaderSC>
      </DivHeaderSC>
    </DivBoxHeaderSC>
  );
};

export default ResponsiveAppBar;
