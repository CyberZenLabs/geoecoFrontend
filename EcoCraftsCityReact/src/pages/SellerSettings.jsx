import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import {
  DivBackBoxSC,
  DivHistorySC,
  NavLinkSC,
} from "../styled-components-css/styles.product-detail";
import {
  DivStarsPanelSC,
  DivStoreInfoDataSC,
  DivStoreInfoImageSC,
  DivStoreInfoSC,
  DivStoreLeftPanelSC,
  DivStoreOptionsLeftPanelSC,
  DivStoreOptionsLinkSC,
  DivStoreOptionsLinkStoreSC,
  DivStoreOptionsRightPanelSC,
  DivStoreOptionsSC,
  DivStoreRightPanelSC,
  DivStoreWrapSC,
  DivWrapLinkSC,
  H1BoldTextSC,
  HrLinkSC,
  StoreInfoHeaderSC,
  StoreInfoSubHeaderSC,
} from "../styled-components-css/styles.store";
import AppContext from "../context/AppContext";
import StarRating from "../components/StarRating";
import {
  BettonContentEditSC,
  ButtonContentEditSC,
  ButtonContinueModal,
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
} from "../styled-components-css/styles.settingsSeller";
const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
const routes = [
  {
    path: "/custom-props",
    breadcrumb: CustomPropsBreadcrumb,
    props: { someProp: "Hi" },
  },
];
const SellerSettings = ({ product }) => {
  const { setPass, setMail } = React.useContext(AppContext);
  const openPass = () => {
    setPass(true);
  };
  const openMail = () => {
    setMail(true);
  };
  const breadcrumbs = useReactRouterBreadcrumbs(routes);
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
              <H1ContentInfoSC>Телефон, email и пароль</H1ContentInfoSC>
              <ButtonContentEditSC 
            
              onClick={onClickTab(1)}>Изменить</ButtonContentEditSC>
            </DivContentInfoButtonSC>
            <DivContent1PageSC>
              <DivContentRowsSC>
                <H1ContentNameSC>Телефон</H1ContentNameSC>
                <H1ContentNameSC>Пароль</H1ContentNameSC>
                <H1ContentNameSC>Email</H1ContentNameSC>
              </DivContentRowsSC>
              <DivContentRowsSC>
                <H1ContentDefinSC>+70000000000</H1ContentDefinSC>
                <H1ContentDefinSC>*********</H1ContentDefinSC>
                <H1ContentDefinSC>lisaraklova@gmail.com</H1ContentDefinSC>
              </DivContentRowsSC>
            </DivContent1PageSC>
          </DivMainInfoSC>

          <DivMainInfoSC>
            <H1ContentInfoSC>Адрес</H1ContentInfoSC>
            <DivContent2SC>
              <DivFirstColumnSC>
                <H1ContentNameSC>Текущий адрес</H1ContentNameSC>
                <H1ContentNameMailSC>https://</H1ContentNameMailSC>
                <ButtonContentEditSC onClick={openMail}>
                  Изменить
                </ButtonContentEditSC>
              </DivFirstColumnSC>
              <H1ContentNameSC>
                Адрес можно поменять только один раз
              </H1ContentNameSC>
              <H1ContentNameSC>
                Важно: адрес магазина является логином, который используется для
                входа в аккаунт наряду с email. Логин также будет изменен.
              </H1ContentNameSC>
            </DivContent2SC>
          </DivMainInfoSC>
        </>
      ),
    },
    {
      blocks: (
        <>
          <DivMainInfo2PageSC>
            <DivContentInfoButtonSC>
              <H1ContentInfoSC>Телефон, email и пароль</H1ContentInfoSC>
            </DivContentInfoButtonSC>
            <DivContentSC>
              <DivContentDivisionSC>
                <DivContentRows2PageSC>
                  <H1ContentNameSC>Телефон</H1ContentNameSC>
                  <H1ContentNameSC>Новый телефон</H1ContentNameSC>
                  <H1ContentNameSC>Текущий пароль</H1ContentNameSC>
                </DivContentRows2PageSC>
                <DivContentRows2PageSC>
                  <H1ContentDefinSC>+70000000000</H1ContentDefinSC>
                  <H1ContentDefinSC>
                 
                    <EmailFieldSC
                      label="phone"
                      type="phone"
                      placeholder="Введите свой номер телефона"
                    />
                  </H1ContentDefinSC>
                  <H1ContentDefinSC>
                  
                    <EmailFieldSC
                      label="password"
                      type="password"
                      placeholder="Введите пароль"
                    />
                  </H1ContentDefinSC>
                </DivContentRows2PageSC> <ButtonSave 
              onClick={onClickTab(0)}>Сохранить</ButtonSave>
              </DivContentDivisionSC>
             
              <DivContentDivisionSC>
                <DivContentRows2Page2SC>
                  
                  <H1ContentNameSC>Пароль</H1ContentNameSC>
                  <H1ContentNameSC>Email</H1ContentNameSC>
                  <H1ContentNameSC>Новый email</H1ContentNameSC>
                  <H1ContentNameSC>Пароль</H1ContentNameSC>
                </DivContentRows2Page2SC>
                <DivContentRows2Page2SC>
                <DivContentInfoButtonSC>
                  <H1ContentDefinSC>*********</H1ContentDefinSC><ButtonContentEditSC onClick={openPass}>Изменить</ButtonContentEditSC></DivContentInfoButtonSC>
                  <H1ContentDefinSC>lisaraklova@gmail.com</H1ContentDefinSC>
                  <H1ContentDefinSC>
                    <EmailFieldSC
                      label="email"
                      type="email"
                      placeholder="Введите почту"
                    />
                  </H1ContentDefinSC>
                  <H1ContentDefinSC>
                    <EmailFieldSC
                      label="password"
                      type="password"
                      placeholder="Введите пароль"
                    />
                  </H1ContentDefinSC>
                </DivContentRows2Page2SC> <ButtonSave 
              onClick={onClickTab(0)}>Сохранить</ButtonSave>
              </DivContentDivisionSC>
             
            </DivContentSC>
          </DivMainInfo2PageSC>

          <DivMainInfoSC>
            <H1ContentInfoSC>Адрес</H1ContentInfoSC>
            <DivContent2SC>
              <DivFirstColumnSC>
                <H1ContentNameSC>Текущий адрес</H1ContentNameSC>
                <H1ContentNameMailSC>https://</H1ContentNameMailSC>
                <ButtonContentEditSC onClick={openMail}>
                  Изменить
                </ButtonContentEditSC>
              </DivFirstColumnSC>
              <H1ContentNameSC>
                Адрес можно поменять только один раз
              </H1ContentNameSC>
              <H1ContentNameSC>
                Важно: адрес магазина является логином, который используется для
                входа в аккаунт наряду с email. Логин также будет изменен.
              </H1ContentNameSC>
            </DivContent2SC>
          </DivMainInfoSC>
        </>
      ),
    },
    {
    blocks:(<></>),},
  ];

  
  return (
    <>
      <DivWrapLinkSC>
        <DivHistorySC>
          <DivBackBoxSC>
            <FaArrowLeft color={"#85CB33"} size={15} />
            <NavLinkSC iscolor={true} to={"/"}>
              Назад
            </NavLinkSC>
          </DivBackBoxSC>
          <div>
            {breadcrumbs.map(({ match, breadcrumb }) => (
              <span key={match.pathname}>
                <NavLinkSC to={match.pathname}>{breadcrumb} / </NavLinkSC>
              </span>
            ))}
          </div>
        </DivHistorySC>
      </DivWrapLinkSC>
      <DivStoreWrapSC>
        <DivStoreLeftPanelSC>
          <DivStoreInfoSC>
            <DivStoreInfoImageSC
              src={"/default-images/plant.jpg"}
            ></DivStoreInfoImageSC>
            <DivStoreInfoDataSC>
              <StoreInfoHeaderSC>Название магазина</StoreInfoHeaderSC>
              <StoreInfoSubHeaderSC>Город</StoreInfoSubHeaderSC>
            </DivStoreInfoDataSC>
          </DivStoreInfoSC>
          <DivStoreOptionsSC>
            <DivStoreOptionsLinkSC to="/vendorprofile">Профиль</DivStoreOptionsLinkSC>
            <br />
            <DivStoreOptionsLinkStoreSC to="/sellersettings">
              Настройки
              </DivStoreOptionsLinkStoreSC>
            <br />
            <HrLinkSC />
            <DivStoreOptionsLinkSC to="/store/1">
              Магазин 50
            </DivStoreOptionsLinkSC>
            <br />
            <DivStoreOptionsLinkSC to="/">
              Оплата и доставка
            </DivStoreOptionsLinkSC>
            <br />
            <HrLinkSC />
            <DivStoreOptionsLinkSC to="/">Покупки</DivStoreOptionsLinkSC>
            <br />
            <DivStoreOptionsLinkSC to="/">Продажи</DivStoreOptionsLinkSC>
            <br />
            <DivStarsPanelSC>
              <DivStoreOptionsLeftPanelSC>
                <DivStoreOptionsLinkSC to="/">Отзывы 30</DivStoreOptionsLinkSC>
                <br />
              </DivStoreOptionsLeftPanelSC>
              <DivStoreOptionsRightPanelSC>
                <StarRating product={true} />
              </DivStoreOptionsRightPanelSC>
            </DivStarsPanelSC>
          </DivStoreOptionsSC>
        </DivStoreLeftPanelSC>
        <DivStoreRightPanelSC>
          <DivStoreInfoStuffSC>
            <H1BoldTextSC>Настройки</H1BoldTextSC>
          </DivStoreInfoStuffSC>
          <DivPagesSC>
            <H1PageOptionSC
              isActive={indexSelectedButton === 0}
              onClick={onClickTab(0)}
            >
              Основные
            </H1PageOptionSC>
            <H1PageOptionHidesSC
              isActive={indexSelectedButton === 2}
              onClick={onClickTab(2)}
            >
              Оповещания
            </H1PageOptionHidesSC>
          </DivPagesSC>
          {listContent[indexSelectedButton].blocks}
        </DivStoreRightPanelSC>
      </DivStoreWrapSC>
    </>
  );
};

export default SellerSettings;
