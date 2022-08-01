import { Margin, TextFields } from '@mui/icons-material';
import { Form, Formik } from 'formik';
import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import StarRating from '../components/StarRating';
import TextFieldStore from '../components/TextFieldStore';
import useAxiosFunction from '../hooks/useAxiosFunction';
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
  SaveButtonPanelSC,
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
  DivButtonBottomSaveVendSC,
  SaveButtonPanelVendSC,
  DivBoxNewProductsBigST,
  DivBoxItemsSC,
  MenuProductST,
  GreenST,
  DivBoxNewProductsST,
} from '../styled-components-css/styles.VendorProfile';
import axiosCustom from '../apis/form-data';
import axios from 'axios';
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
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const breadcrumbs = useReactRouterBreadcrumbs(routes);
  const storePhotoRef = useRef(null);

  useEffect(() => {}, []);

  const handleUploadFile = (type) => {
    if (type === 'storePhoto') {
      storePhotoRef.current.click();
    }
  };

  const startingValues = {
    storeName: '',
    storeBirthday: Date.now(),
    storeLocation: '',
    storeDescription: '',
  };

  const listContent = [
    {
      page: (
        <DivStoreRightPanelSC>
          <DivAddProductBox>
            <DivInfoVendorBoxSC>
              <SpanTextTitleSC>
                Имя профиля
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
          {console.log(response)}
          <DivStoreInfoStuffProfileSC>
            <H1BoldTextSC>Мой профиль</H1BoldTextSC>
          </DivStoreInfoStuffProfileSC>
          <Formik
            initialValues={startingValues}
            initialErrors={startingValues}
            onSubmit={(values) => {
              let testId = '62dfc4498a50cefd8fe0cd2c';

              var formData = new FormData();

              Object.keys(values).forEach((key) => {
                console.log('key', key);
                console.log('keyvalue', values[key]);
                formData.append(key, values[key]);
              });

              if (storePhotoRef.current.files[0]) {
                console.log('No 0', storePhotoRef.current.files);
                formData.append('storePhoto', storePhotoRef.current.files[0]);
              }

              for (let [key, value] of formData) {
                console.log(`"ascascac" ${key}: ${value}`);
              }

              axios
                .patch('https://radiant-river-29802.herokuapp.com', formData, {
                  // You need to use `getHeaders()` in Node.js because Axios doesn't
                  // automatically set the multipart form boundary in Node.
                  headers: formData.getHeaders(),
                })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });

              // axiosFetch({
              //   axiosInstance: axiosCustom,
              //   method: 'PATCH',
              //   url: `/api/v1/store/${testId}`,
              //   requestFormDataConfig: formData,
              //   formData: true,
              // });
            }}
          >
            {(formik) => (
              <Form>
                <input ref={storePhotoRef} type="file" name="storePhoto" />
                <DivItemsOptionsSC>
                  <DivInnerContentSC>
                    <DivTwoSidesSC>
                      <H1DefinSC>Баннер магазина</H1DefinSC>
                      <ButtonBannerSC>Загрузить баннер</ButtonBannerSC>
                    </DivTwoSidesSC>
                    <DivTwoSidesSC>
                      <H1DefinSC>Фото</H1DefinSC>
                      <ButtonImgSC onClick={() => handleUploadFile('storePhoto')}>
                        <DivInnerPhotoInputSC>
                          <IconImgImgSC />
                          <H1SC>Загрузить фото</H1SC>
                        </DivInnerPhotoInputSC>
                      </ButtonImgSC>
                    </DivTwoSidesSC>
                    <DivTwoSidesSC>
                      <H1DefinSC>Имя / название</H1DefinSC>
                      <TextFieldStore label="123" type="text" name="storeName" />
                    </DivTwoSidesSC>
                    <DivTwoSidesSC>
                      {/* <H1DefinSC>Дата рождения</H1DefinSC> <TextFieldStore label="123" type="text" name="dateOfBirth" /> */}
                      {/* <BirthFieldSC label="email" type="date" placeholder="дд.мм.гг" /> */}
                    </DivTwoSidesSC>
                    <DivTwoSidesSC>
                      <H1DefinSC>Место проживания</H1DefinSC>
                      <TextFieldStore label="123" type="text" name="storeLocation" />
                      {/* <NameNCityFieldSC label="email" type="email" placeholder="Красноярский край, Россия" /> */}
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
                        <TextFieldStore type="text" name="storeDescription" isTextArea={true} />
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
                        <ButtonImgSC>
                          <DivInnerPhotoInputSC>
                            <IconImgImgSC />
                            <H1SC>Загрузить фото</H1SC>
                          </DivInnerPhotoInputSC>
                        </ButtonImgSC>
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
                {/* <DivButtonBottomSaveVendSC> */}
                {/* <SaveButtonPanelVendSC type="submit">Сохранить</SaveButtonPanelVendSC> */}
                {/* </DivButtonBottomSaveVendSC> */}
              </Form>
            )}
          </Formik>
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
