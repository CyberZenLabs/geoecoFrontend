import { Margin } from '@mui/icons-material';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { MdOutlinePhotoCamera } from "react-icons/md";
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import StarRating from '../components/StarRating';
import { DivBackBoxSC, DivHistorySC, NavLinkSC } from '../styled-components-css/styles.product-detail';

import ShowItemCarousel from '../components/ShowItemCarousel';

import VendorInfoMenu from '../components/VendorInfoMenu';

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
  DivBGImageSC,
  DivAboutYourselfSC,
  InputAboutYourself,
  DivBoxColumnAboutYourselfSC,
  DivTextSC,
  DivBoxInputAboutYourself,
  DivBoxText,
  DivBoxRowsAboutCreativity,
  DivText2SC,
  DivBoxText2,
  DivText3,
  DivBoxText3,
  DivBoxColumnsFotosSC,
  DivBoxFoto1SC,
  DivBoxFoto2SC,
  DivBoxFoto3SC,
  DivBoxFoto4SC,
  DivFoto1SC,
  DivFoto2SC,
  DivFoto3SC,
  DivFoto4SC,
  DivInnerPhotoInputSC,
  H1SC,
  IconImgImgSC,
  DivBoxNewProductsBigST,
  DivBoxItemsSC,
  MenuProductST,
  GreenST,
  DivBoxNewProductsST,
} from '../styled-components-css/styles.VenderProfile';
import VenderCarousel from '../components/VenderCarousel';

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
        <DivBoxNewProductsBigST>
      
        <DivBoxNewProductsST>
           
      
           
            <DivAddProductBox>
            <SpanTextTitleSC>Имя профиля  <DivButtonChangrInformSC onClick={onClickTab(1)}>Изменить информацию</DivButtonChangrInformSC></SpanTextTitleSC>
           <VendorInfoMenu></VendorInfoMenu>
             <DivInfoVendorBoxSC>
           <VenderCarousel>
           <ShowItemCarousel></ShowItemCarousel>
           <ShowItemCarousel></ShowItemCarousel>
           <ShowItemCarousel></ShowItemCarousel>
           <ShowItemCarousel></ShowItemCarousel>
           </VenderCarousel>
             </DivInfoVendorBoxSC>
            </DivAddProductBox>
            

    </DivBoxNewProductsST>

    </DivBoxNewProductsBigST>
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
                <H1DefinSC>Фото</H1DefinSC><ButtonImgSC><DivInnerPhotoInputSC><IconImgImgSC/><H1SC>Загрузить фото</H1SC></DivInnerPhotoInputSC></ButtonImgSC>
              </DivTwoSidesSC>
              <DivTwoSidesSC>
                <H1DefinSC>Имя / название</H1DefinSC>
                <NameNCityFieldSC label="email" type="email" placeholder="Фамилия  имя" />
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

          <DivAboutYourselfSC>
      <DivBGImageSC>
        <DivBoxColumnAboutYourselfSC>
          <DivBoxText>
            <DivTextSC>О себе</DivTextSC>
          </DivBoxText>
          <DivBoxInputAboutYourself>
            <InputAboutYourself type="text" />
          </DivBoxInputAboutYourself>
        </DivBoxColumnAboutYourselfSC>
        <DivBoxRowsAboutCreativity>
          <DivBoxText2>
            <DivText2SC>О творчестве</DivText2SC>
          </DivBoxText2>
          <DivBoxText3>
            <DivText3> Покажите вдохновляющие рабочие моменты, загрузите дипломы и сертификаты </DivText3>
          </DivBoxText3>
        </DivBoxRowsAboutCreativity>
        <DivBoxColumnsFotosSC>
          <DivBoxFoto1SC>
          <ButtonImgSC><DivInnerPhotoInputSC><IconImgImgSC/><H1SC>Загрузить фото</H1SC></DivInnerPhotoInputSC></ButtonImgSC>
          </DivBoxFoto1SC>
          <DivBoxFoto2SC>
            <DivFoto2SC></DivFoto2SC>
          </DivBoxFoto2SC>
          <DivBoxFoto3SC>
            <DivFoto3SC></DivFoto3SC>
          </DivBoxFoto3SC>
          <DivBoxFoto4SC>
            <DivFoto4SC></DivFoto4SC>
          </DivBoxFoto4SC>
        </DivBoxColumnsFotosSC>
      </DivBGImageSC>
    </DivAboutYourselfSC>
    
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
            <DivStoreOptionsLinkStoreSC to="/vendorprofile">Профиль</DivStoreOptionsLinkStoreSC>
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







