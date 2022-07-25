import { Margin } from '@mui/icons-material';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import StarRating from '../components/StarRating';
import { DivBackBoxSC, DivHistorySC, NavLinkSC } from '../styled-components-css/styles.product-detail';
import {
  DivOptionsPanelSC,
  DivStarsPanelSC,
  DivStoreInfoDataSC,
  DivStoreInfoImageSC,
  DivStoreInfoSC,
  DivStoreInfoStuffSC,
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
  ProductsNumSC,
  StoreInfoHeaderSC,
  StoreInfoSubHeaderSC,
  StoreSalesAndAccountLinkSC,
  StoreSalesAndAccountLinkSearchSC,
} from '../styled-components-css/styles.store';
import {
  SpanTextTitleSC,
  DivAddProductBox,
  DivInfoVendorBoxSC,
  DivButtonChangrInformSC,
  UlifnoSC,
  DivStoreInfoStuffProfileSC,
  DivItemsOptionsSC,
  DivInnerContentSC,
  DivTwoSidesSC,
  H1DefinSC,
  NameNCityFieldSC,
  BirthFieldSC,
  ButtonBannerSC,
  ButtonImgSC,
} from '../styled-components-css/styles.VendorProfile';
const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
const routes = [
  {
    path: '/custom-props',
    breadcrumb: CustomPropsBreadcrumb,
    props: { someProp: 'Hi' },
  },
];
const VendorProfile = () => {
  const [indexSelectedButton, getIndexButton] = useState(0);
  const onClickTab = (index) => (e) => {
    getIndexButton(index);
  };
  const breadcrumbs = useReactRouterBreadcrumbs(routes);
  const listContent = [
    {
      page: (
        <DivStoreRightPanelSC>
          <DivAddProductBox>
            <DivInfoVendorBoxSC>
              <SpanTextTitleSC>
                Имя профиля{' '}
                <DivButtonChangrInformSC onClick={onClickTab(1)}>Изменить информацию</DivButtonChangrInformSC>
              </SpanTextTitleSC>
              <UlifnoSC>
                <li>fffff</li>
                <li>ffffff</li>
                <li>fffffff</li>
                <li>fffff</li>
              </UlifnoSC>
            </DivInfoVendorBoxSC>
            <DivInfoVendorBoxSC>FFFFFF</DivInfoVendorBoxSC>
          </DivAddProductBox>
        </DivStoreRightPanelSC>
      ),
    },
    {
      page: (
        <DivStoreRightPanelSC>
          <DivStoreInfoStuffProfileSC>
            <H1BoldTextSC>Мой профиль</H1BoldTextSC>
          </DivStoreInfoStuffProfileSC>
          <DivItemsOptionsSC>
            <DivInnerContentSC>
              <DivTwoSidesSC>
                <H1DefinSC>Баннер магазина</H1DefinSC><ButtonBannerSC>Загрузить баннер</ButtonBannerSC>
              </DivTwoSidesSC>
              <DivTwoSidesSC>
                <H1DefinSC>Фото</H1DefinSC><ButtonImgSC>Загрузить фото</ButtonImgSC>
              </DivTwoSidesSC>
              <DivTwoSidesSC>
                <H1DefinSC>Имя / название</H1DefinSC>
                <NameNCityFieldSC label="email" type="email" placeholder="Фамилия  имя" />
              </DivTwoSidesSC>
              <DivTwoSidesSC>
                <H1DefinSC>Обращение</H1DefinSC><label><input type="radio" checked name="dva"/> описание1</label> <label><input type="radio" name="dva"/> описание2</label>
              </DivTwoSidesSC>
              <DivTwoSidesSC>
                <H1DefinSC>Дата рождения</H1DefinSC>  <BirthFieldSC label="email" type="email" placeholder="дд.мм.гг" />
              </DivTwoSidesSC>
              <DivTwoSidesSC>
                <H1DefinSC>Место проживания</H1DefinSC>
                <NameNCityFieldSC label="email" type="email" placeholder="Красноярский край, Россия" />
              </DivTwoSidesSC>
            </DivInnerContentSC>
          </DivItemsOptionsSC>
        </DivStoreRightPanelSC>
      ),
    },
  ];

  return (
    <>
      <DivWrapLinkSC>
        <DivHistorySC>
          <DivBackBoxSC>
            <FaArrowLeft color={'#85CB33'} size={15} />
            <NavLinkSC iscolor={true} to={'/'}>
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
            <DivStoreInfoImageSC src={'/default-images/plant.jpg'}></DivStoreInfoImageSC>
            <DivStoreInfoDataSC>
              <StoreInfoHeaderSC>Название магазина</StoreInfoHeaderSC>
              <StoreInfoSubHeaderSC>Город</StoreInfoSubHeaderSC>
            </DivStoreInfoDataSC>
          </DivStoreInfoSC>
          <DivStoreOptionsSC>
            <DivStoreOptionsLinkStoreSC to="/VendorProfile">Профиль</DivStoreOptionsLinkStoreSC>
            <br />
            <DivStoreOptionsLinkSC to="/sellersettings">Настройки</DivStoreOptionsLinkSC>
            <br />
            <HrLinkSC />
            <DivStoreOptionsLinkSC to="/store/1">Магазин 50</DivStoreOptionsLinkSC>
            <br />
            <DivStoreOptionsLinkSC to="/">Оплата и доставка</DivStoreOptionsLinkSC>
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
        {listContent[indexSelectedButton].page}
      </DivStoreWrapSC>
    </>
  );
};
export default VendorProfile;
