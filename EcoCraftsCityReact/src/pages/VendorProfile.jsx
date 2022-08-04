import { Delete, Margin, TextFields } from '@mui/icons-material';
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
import { toast } from 'react-toastify';
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
  OverlayProfileImgSC,
  OverlayProfileImageTextSC,
  OverlayBannerImageTextSC,
  OverlayBannerImgSC,
  DivBoxShowPhotoSC,
  DeleteIconSC,
} from '../styled-components-css/styles.VendorProfile';
import EcoModal from '../components/Modal';
import axiosCustom from '../apis/admin-rest';
import axios from 'axios';
import VenderCarousel from '../components/VenderCarousel';
import AppContext from '../context/AppContext';
import VendorNavMenu from '../components/VendorNavMenu';

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
  const [apiStoreData, setApiStoreData] = useState(null);

  const { setShowCatalog, showCatalog, setOpen, setModalData } = React.useContext(AppContext);
  const [photoUrls, setPhotoUrls] = useState({
    storePhotoUrl: 'https://radiant-river-29802.herokuapp.com/stores/defaultStore.svg',
    storeBannerUrl: 'https://radiant-river-29802.herokuapp.com/stores/defaultStore.svg',
    storeGalleryUrls: [],
  });
  const [activePhotoUrl, setActivePhotoUrl] = useState('');
  const [cropType, setCropType] = useState('');
  const [aspect, setAspect] = useState(1);
  const [modalOpen, seModalOpen] = useState(true);

  const onClickTab = (index) => (e) => {
    getIndexButton(index);
  };
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const breadcrumbs = useReactRouterBreadcrumbs(routes);
  const storePhotoRef = useRef(null);
  const storeBannerRef = useRef(null);
  const storeGalleryRef = useRef(null);
  let testId = '62e38df24c1f460016904636';
  useEffect(() => {
    const getProfileData = async () => {
      await axiosFetch({
        axiosInstance: axiosCustom,
        method: 'GET',
        url: `/api/v1/store/${testId}`,
      });
    };

    getProfileData().then((res) => {
      setApiStoreData(response);
    });
  }, []);

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

  useEffect(() => {
    console.log(response);

    // if (response != []) {
    //   console.log('RESPONSE', response);

    // } else {
    //   photoUrl = `https://radiant-river-29802.herokuapp.com/stores/defaultStore.svg`;
    // }
  }, [response]);

  useEffect(() => {
    console.log('ME', apiStoreData);
    let photoUrl;

    const checkStringLogic = () => {
      console.log(apiStoreData, 'storeData');
      if (apiStoreData != null && apiStoreData.length != 0) {
        return apiStoreData.data.data.storePhoto;
      } else {
        return 'defaultStore.svg';
      }
    };
    photoUrl = `https://radiant-river-29802.herokuapp.com/stores/${checkStringLogic()}`;
    setPhotoUrls({ ...photoUrls, photoUrl });
  }, [apiStoreData]);

  // const setNewPhotoUrl = () => {
  //   setPhotoUrls({...photoUrls, storePhotoUrl: "123" });
  // }

  const handleUploadFile = (type) => {
    if (type === 'storePhotoRef') {
      storePhotoRef.current.click();
    }
    if (type === 'storeBannerRef') {
      storeBannerRef.current.click();
    }
    if (type === 'storeGalleryRef') {
      storeGalleryRef.current.click();
    }
  };

  const fileChangeHandler = (type) => {
    if (type == 'storePhotoRef') {
      setAspect(1);
      setCropType('storeProfilePhoto');
      setOpen(true);

      const objectUrl = URL.createObjectURL(storePhotoRef.current.files[0]);
      setPhotoUrls({ ...photoUrls, storePhotoRef: objectUrl });
      setActivePhotoUrl(objectUrl);
    } else if (type == 'storeBannerRef') {
      setAspect(1350 / 322);
      setCropType('storeBannerPhoto');
      setOpen(true);
      const objectUrl = URL.createObjectURL(storeBannerRef.current.files[0]);
      setPhotoUrls({ ...photoUrls, storeBannerRef: objectUrl });
      setActivePhotoUrl(objectUrl);
    } else if (type == 'storeGalleryRef') {
      if (photoUrls.storeGalleryUrls.length <= 10) {
        setAspect(1);
        setCropType('storeGalleryPhotos');
        setOpen(true);

        const objectUrl = URL.createObjectURL(storeGalleryRef.current.files[0]);
        setPhotoUrls({ ...photoUrls, storeGalleryRef: objectUrl });
        setActivePhotoUrl(objectUrl);
      } else if (photoUrls.storeGalleryUrls.length > 10) {
        showToast('error', 'Нельзя загружать больше 10 фотографий');
      }
    }
  };

  const handlePhotoDelete = (i) => {
    const newPhotos = [
      ...photoUrls.storeGalleryUrls.filter((element) => ![photoUrls.storeGalleryUrls[i]].includes(element)),
    ];
    console.log('errroe', newPhotos);
    setPhotoUrls({ ...photoUrls.storeGalleryUrls, storeGalleryUrls: newPhotos });
  };

  const arrayStorePhotosExtra = photoUrls.storeGalleryUrls;

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
          {console.log('123', photoUrls)}
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
          <DivStoreInfoStuffProfileSC>
            <H1BoldTextSC>Мой профиль</H1BoldTextSC>
          </DivStoreInfoStuffProfileSC>
          <Formik
            initialValues={startingValues}
            initialErrors={startingValues}
            onSubmit={(values) => {
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

              console.log('Hello!!!!!');
              axios
                .patch(`https://radiant-river-29802.herokuapp.com/api/v1/store/${testId}`, formData, {
                  // You need to use `getHeaders()` in Node.js because Axios doesn't
                  // automatically set the multipart form boundary in Node.
                  headers: {
                    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                  },
                })
                .then((res) => {
                  console.log(res.data.data.data);
                })
                .catch((err) => {
                  console.log(err);
                });

              // axiosFetch({
              //   axiosInstance: axiosCustom(formData),
              //   method: 'PATCH',
              //   url: `/api/v1/store/${testId}`,
              //   requestFormDataConfig: formData,
              //   formData: true,
              // });
            }}
          >
            {(formik) => (
              <Form>
                <input
                  ref={storePhotoRef}
                  type="file"
                  name="storePhoto"
                  onChange={() => fileChangeHandler('storePhotoRef')}
                />
                <input
                  ref={storeBannerRef}
                  type="file"
                  name="bannerPhoto"
                  onChange={() => fileChangeHandler('storeBannerRef')}
                />
                <input
                  ref={storeGalleryRef}
                  type="file"
                  name="storeGallery"
                  onChange={() => fileChangeHandler('storeGalleryRef')}
                />
                <EcoModal
                  open={modalOpen}
                  title="Загрузка фотографии"
                  subTitle="Поместите фото профиля в выбранную область"
                  cropImageModal={true}
                  cropType={cropType}
                  aspect={aspect}
                  photoUrl={activePhotoUrl}
                  setPhotoUrls={setPhotoUrls}
                  photoUrls={photoUrls}
                  storeGalleryUrls={photoUrls.storeGalleryUrls}
                ></EcoModal>
                <DivItemsOptionsSC>
                  <DivInnerContentSC>
                    <DivTwoSidesSC>
                      <H1DefinSC>Баннер магазина</H1DefinSC>
                      <ButtonBannerSC
                        photoUrl={photoUrls.storeBannerUrl}
                        onClick={() => handleUploadFile('storeBannerRef')}
                      >
                        <OverlayBannerImgSC>
                          <OverlayBannerImageTextSC>Изменить фото</OverlayBannerImageTextSC>
                        </OverlayBannerImgSC>
                        {console.log(apiStoreData, 'now')}
                        {apiStoreData != null && apiStoreData.length != 0 && !apiStoreData.data.data.bannerPhoto ? (
                          <DivInnerPhotoInputSC>
                            <IconImgImgSC />
                            <H1SC>Загрузить фото</H1SC>
                          </DivInnerPhotoInputSC>
                        ) : null}
                      </ButtonBannerSC>
                    </DivTwoSidesSC>
                    <DivTwoSidesSC>
                      <H1DefinSC>Фото</H1DefinSC>
                      {console.log('photoUrls', photoUrls)}
                      <ButtonImgSC photoUrl={photoUrls.storePhotoUrl} onClick={() => handleUploadFile('storePhotoRef')}>
                        <OverlayProfileImgSC>
                          <OverlayProfileImageTextSC>Изменить фото</OverlayProfileImageTextSC>
                        </OverlayProfileImgSC>
                        {apiStoreData != null && apiStoreData.length != 0 && !apiStoreData.data.data.storePhoto ? (
                          <DivInnerPhotoInputSC>
                            <IconImgImgSC />
                            <H1SC>Загрузить фото</H1SC>
                          </DivInnerPhotoInputSC>
                        ) : null}
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
                        <ButtonImgSC onClick={() => handleUploadFile('storeGalleryRef')}>
                          <DivInnerPhotoInputSC>
                            <IconImgImgSC />
                            <H1SC>Загрузить фото</H1SC>
                          </DivInnerPhotoInputSC>
                        </ButtonImgSC>
                      </DivBoxFoto1SC>
                      <DivBoxShowPhotoSC photoUrl={photoUrls.storeGalleryUrls[0] && photoUrls.storeGalleryUrls[0]}>
                        <DeleteIconSC onClick={() => handlePhotoDelete(0)}></DeleteIconSC>
                      </DivBoxShowPhotoSC>
                      <DivBoxShowPhotoSC photoUrl={photoUrls.storeGalleryUrls[1] && photoUrls.storeGalleryUrls[1]}>
                        <DeleteIconSC onClick={() => handlePhotoDelete(1)}></DeleteIconSC>
                      </DivBoxShowPhotoSC>
                      <DivBoxShowPhotoSC photoUrl={photoUrls.storeGalleryUrls[2] && photoUrls.storeGalleryUrls[2]}>
                        <DeleteIconSC onClick={() => handlePhotoDelete(2)}></DeleteIconSC>
                      </DivBoxShowPhotoSC>

                      {photoUrls.storeGalleryUrls.length >= 3 ? (
                        <>
                          {[...photoUrls.storeGalleryUrls].splice(3, 7).map((photo, i) => (
                            <DivBoxShowPhotoSC photoUrl={photo}>
                              <DeleteIconSC onClick={() => handlePhotoDelete(i + 3)}></DeleteIconSC>
                            </DivBoxShowPhotoSC>
                          ))}
                        </>
                      ) : null}
                    </DivBoxColumnsFotosSC>
                  </DivBGImageSC>
                </DivAboutYourselfSC>
                <DivButtonBottomSaveVendSC>
                  <SaveButtonPanelVendSC type="submit">Сохранить</SaveButtonPanelVendSC>
                </DivButtonBottomSaveVendSC>
              </Form>
            )}
          </Formik>
        </DivStoreRightPanelSC>
      ),
    },
  ];

  return (
    <>
      {/* function CropDemo({ src }) {
  const [crop, setCrop] = useState<Crop>()
  return (
    <ReactCrop crop={crop} onChange={c => setCrop(c)}>
      <img src={src} />
    </ReactCrop>
  )
} */}
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
          <VendorNavMenu page={0}/>
        </DivStoreLeftPanelSC>
        {listContent[indexSelectedButton].page}
      </DivStoreWrapSC>
    </>
  );
};
export default VendorProfile;
