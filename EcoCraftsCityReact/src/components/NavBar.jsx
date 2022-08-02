import * as React from 'react';
import { Link } from 'react-router-dom';
import image from '../img/logo.svg';
import styled from 'styled-components/macro';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilShoppingCart from '@iconscout/react-unicons/icons/uil-shopping-cart';
import { GoPackage, GoCreditCard } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
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
  LinkLogoSC,
  DivBoxButtonCreateStoreSC,
  LinkProfileBoxSC,
  SpanTextCatalogSC
} from '../styled-components-css/styles.navbar';
import { ButtonCustomSC } from '../styled-components-css/styles.custom-button';
import { OverlayDivSc } from '../styled-components-css/styles.catalog';
import AppContext from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import useAxiosFunction from '../hooks/useAxiosFunction';
import { useCookies } from 'react-cookie';
import Modal from './Modal';
import EcoModal from './Modal';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const { login, logout, loggedIn, setFormValues, authError } = useAuth();
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const [profileActive, setProfileActive] = React.useState(null);
  const { setShowCatalog, showCatalog, setOpen, setModalData } = React.useContext(AppContext);
  const toggleProfile = () => {
    setProfileActive(!profileActive);
  };
  const showToast = (type, text) => {
    if (type === 'error') {
      toast.error(text ? text : error, {
        toastId: 'error',
      });
    } else if (type === 'success') {
      toast.success(text ? text : response, {
        toastId: 'success',
      });
    }
  };

  const handleLogout = () => {
    logout();
    showToast('success', 'Вы вышли из системы');
    setCookie('token', response.token);
  };

  const openCart = () => {
    setOpen(true);
    setModalData({
      inputs: [{ email: 'Электронная почта' }],
      button: true,
    });
  };

  return (
    <DivBoxHeaderSC>
      <DivHeaderSC>
        <LinkLogoSC to="/">
          <DivBoxLogoSC></DivBoxLogoSC>
        </LinkLogoSC>

        <DivCatalogAndSearchBoxSC>
          {/* <DivTextBoxSC>
            <SpanSecondSC to="#"></SpanSecondSC>
            <SpanFirstSC to="#" onClick={openCart}>
              Создать магазин
            </SpanFirstSC>
            <SpanSecondSC to="#"></SpanSecondSC>
          </DivTextBoxSC> */}

          <DivBoxButtonAndInputSC>
            <ButtonCustomSC
              onClick={() => setShowCatalog(!showCatalog)}
              width={'176px'}
              padding={'8px 32px'}
              primary={true}
            >
              <BoxContentButton>
                <UilListUl
                  size="40"
                  // color="#61DAFB"
                />
                <SpanTextCatalogSC>Каталог</SpanTextCatalogSC>
              </BoxContentButton>
            </ButtonCustomSC>

            <DivInputBoxCS>
              <InputSC
                // value={lastName}
                // onChange={onChange(getLastName)}
                type="text"
                id={'search'}
                placeholder={'Я ищу...'}
              />
              <DivIconBoxInput>
                <UilSearch size="25" color="rgba(37, 37, 37, 0.7)" />
              </DivIconBoxInput>
            </DivInputBoxCS>
          </DivBoxButtonAndInputSC>
        </DivCatalogAndSearchBoxSC>
        {loggedIn ? (
          <div class={profileActive ? 'navigation active' : 'navigation'}>
            <div class={profileActive ? 'user-box active' : 'user-box'}>
              <div class={profileActive ? 'image-box active' : 'image-box'}>
                <img src="https://i.pravatar.cc/150?img=49" alt="avatar" />
              </div>

              <p class="username">
                Jenifer Lopez
                <a href="#">Мой Профиль</a>
              </p>
            </div>

            <div class="profileMenu-toggle" onClick={toggleProfile}></div>

            <ul class="profileMenu">
              <li>
                <LinkProfileBoxSC to="#">
                  <GoPackage />
                  Заказы
                </LinkProfileBoxSC>
              </li>
              <li>
                <LinkProfileBoxSC to="#">
                  <GoCreditCard />
                  Мой Карты
                </LinkProfileBoxSC>
              </li>

              <li>
                <LinkProfileBoxSC to="#">Баланс и история операций</LinkProfileBoxSC>
              </li>
              <li>
                <LinkProfileBoxSC to="#">Отзывы и вопросы</LinkProfileBoxSC>
              </li>
              <li class="logout">
                <LinkProfileBoxSC to="/" onClick={handleLogout}>
                  Выйти
                </LinkProfileBoxSC>
              </li>
            </ul>
          </div>
        ) : null}
        <DivBoxIconHeaderSC>
          <DivBoxIconSC>
            <DivBoxButtonCreateStoreSC to="#" onClick={openCart}>
              Создать магазин
            </DivBoxButtonCreateStoreSC>
            {!loggedIn ? (
              <LinkIconSC to="/signin">
                <DivBoxIconEndSC>
                  <UilUser size="35" color="rgba(37, 37, 37, 0.8)" />
                </DivBoxIconEndSC>

                <SpanEndHeaderSC>Войти</SpanEndHeaderSC>
              </LinkIconSC>
            ) : null}
            <LinkIconHideSC to="/cart">
              <DivBoxIconEndSC>
                <UilShoppingCart size="35" color="rgba(37, 37, 37, 0.8)" />
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
