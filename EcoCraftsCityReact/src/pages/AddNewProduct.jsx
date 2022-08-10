import React from 'react';
import { useState, useRef, useEffect } from 'react';

import { Form, Formik } from 'formik';
import {
  DivBoxItemsSC,
  MenuProductST,
  GreenST,
  DivBoxAddNewProductSC,
  DivBoxGrayRectangleRulesSC,
  DivBoxBigGrayRectangleSC,
  DivBoxTextNewProductSC,
  DivTextNewProductSC,
  DivBoxColumnsRectangleSC,
  DivBoxRowsNameProductSC,
  DivBoxTextNameProductSC,
  DivTextNameProduct,
  DivBoxColumnAboutYourselfSC,
  DivTextSC,
  DivBoxInputAboutYourself,
  DivBoxText,
  DivBoxColumnProductNameSC,
  DivBoxText1,
  DivText1SC,
  DivBoxInputProductName,
  InputProductName,
  DivImgGrayRectanglePriceSC,
  DivBoxImgGrayRectanglePriceSC,
  DivBoxRowsPriceSC,
  DivBoxTextPriceAndNumberSC,
  DivTextPriceAndNumberSC,
  DivBoxColumnsPriceSC,
  DivTextPriceSC,
  DivBoxTextPriceSC,
  DivBoxInputPrice,
  InputPrice,
  DivImgRubSC,
  DivBoxColumnsNumberSC,
  DivBoxTextNumberSC,
  DivTextNumberSC,
  DivBoxColumnsDiscountSC,
  DivTextDiscountSC,
  DivBoxTextDiscountSC,
  DivBoxInputDiscount,
  InputDiscount,
  DivImgRub2SC,
  DivBoxImgGrayRectangleDescriptionSC,
  DivImgGrayRectangleDescriptionSC,
  DivBoxRowsDesctriptionSC,
  DivContainerDescriptionSC,
  DivBoxTextDescriptionSC,
  DivTextDescriptionSC,
  DivBoxInputDescriptonSC,
  InputDescription,
  DivContainerCharacteristicsSC,
  DivBoxTextCharacteristicsSC,
  DivTextCharacteristicsSC,
  DivBoxInputCharacteristicsSC,
  InputCharacteristics,
  DivContainerKeywordsSC,
  DivBoxTextKeywordsSC,
  DivTextKeywordsSC,
  DivBoxInputKeywordsSC,
  InputKeywords,
  DivBoxImgGrayRectangleDeliverySC,
  DivImgGrayRectangleDeliverySC,
  DivContainerDeliverySC,
  DivBoxTextDeliverySC,
  DivTextDeliverySC,
  DivBoxItemDeliverySC,
  DivItemDeliverySC,
  DivBoxImgDotSC,
  DivImgDotSC,
  DivBoxTextRussianPostSC,
  DivTextRussianPostSC,
  DivContainerColumnsPostSC,
  DivTextFromThePriceSC,
  DivTextSDEKSC,
  DivBoxTextSDEKSC,
  DivContainerColumnsSDEKSC,
  DivBoxImgDot1SC,
  DivImgDot1SC,
  DivTextFromThePrice1SC,
  DivBoxTextFromThePrice1SC,
  DivBoxColumnButtonsPMSC,
  DivBoxButtonMinusSC,
  ButtonMinusSC,
  DivBoxNum1SC,
  DivBoxButtonPlusSC,
  ButtonPlusSC,
  DivButtonsSC,
  DivBoxButtonsSC,
  DivBoxTextFromThePriceSC,
  DivBoxTextRulesSC,
  DivTextRulesSC,
  DivBox2ButtonsSC,
  InputVideoSC,
  PlaceButtonSC,
} from '../styled-components-css/styles.AddNewProduct';
import {
  ButtonImgSC,
  DivInnerPhotoInputSC,
  IconImgImgSC,
  H1SC,
  DivBoxShowPhotoSC,
  DeleteIconSC,
  DivBoxColumnsFotosSC,
  DivBoxFoto1SC,
  DivInputsDisplayNoneSC,
} from '../styled-components-css/styles.VendorProfile';
import { ButtonCustomWhiteSC } from '../styled-components-css/styles.custom-button-white';
import AppContext from '../context/AppContext';
import { toast } from 'react-toastify';
import useAxiosFunction from '../hooks/useAxiosFunction';
import EcoModal from '../components/Modal';
import axios from 'axios';
import { BreadCrumbs } from '../components/BreadCrumbs';

const AddNewProduct = () => {
  const storeGalleryRef = useRef(null);
  const storeBannerRef = useRef(null);
  const [apiStoreData, setApiStoreData] = useState(null);
  let testId = '62e38df24c1f460016904636';
  const { setShowCatalog, showCatalog, setOpen, setModalData } = React.useContext(AppContext);
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  const [photoUrls, setPhotoUrls] = useState({
    storePhotoUrl: 'https://radiant-river-29802.herokuapp.com/stores/defaultStore.svg',
    storeBannerUrl: 'https://radiant-river-29802.herokuapp.com/stores/defaultStore.svg',
    storeGalleryUrls: [],
  });
  const [aspect, setAspect] = useState(1);
  const [modalOpen, seModalOpen] = useState(true);
  const [cropType, setCropType] = useState('');
  const [activePhotoUrl, setActivePhotoUrl] = useState('');
  const [galleryFiles, setGalleryFiles] = useState([]);

  const handleUploadFile = (type) => {
    if (type === 'storeGalleryRef') {
      storeGalleryRef.current.click();
    }
  };

  useEffect(() => {
    if (apiStoreData) {
      let photoUrl;
      let timesrun = 0;
      Object.entries(apiStoreData.data.data.data).forEach((field) => {
        if (field[0] === 'storeAboutPhotos') {
          field[1].map((url) => {
            timesrun += 1;
            let photoUrlArray = [];

            photoUrl = `http://localhost:5767/stores/${url}`;
            photoUrlArray.push(url);

            console.log(photoUrlArray);
            console.log('result', {
              ...photoUrls,
              storeGalleryUrls: [...photoUrls.storeGalleryUrls, ...photoUrlArray],
            });
            setPhotoUrls({ ...photoUrls, storeGalleryUrls: [...photoUrls.storeGalleryUrls, ...photoUrlArray] });
            console.log(timesrun);
          });
        }

        console.log('object field', field);
      });
    }

    // const checkStringLogic = () => {
    //   if (apiStoreData != null && apiStoreData.length != 0) {
    //     return apiStoreData.data.data.storePhoto;
    //   } else {
    //     return 'defaultStore.svg';
    //   }
    // };

    // setPhotoUrls({ ...photoUrls, photoUrl });
  }, [apiStoreData]);

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
  const fileChangeHandler = (type) => {
    if (type == 'storePhotoRef') {
      setAspect(1);
      setCropType('storeProfilePhoto');
      setOpen(true);

      const objectUrl = URL.createObjectURL(storeBannerRef.current.files[0]);
      setPhotoUrls({ ...photoUrls, storeBannerRef: objectUrl });
      setActivePhotoUrl(objectUrl);
    } else if (type == 'storeGalleryRef') {
      if (photoUrls.storeGalleryUrls.length < 11) {
        setAspect(1);
        setCropType('storeGalleryPhotos');
        setOpen(true);
        setGalleryFiles([...galleryFiles, storeGalleryRef.current.files[0]]);
        const objectUrl = URL.createObjectURL(storeGalleryRef.current.files[0]);
        setPhotoUrls({ ...photoUrls, storeGalleryRef: objectUrl });
        setActivePhotoUrl(objectUrl);
      } else if (photoUrls.storeGalleryUrls.length >= 11) {
        showToast('error', 'Нельзя загружать больше 11 фотографий');
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

  const startingValues = {
    video: '',
    productname: '',
    price: '',
    discount: '',
    description: '',
    charactiristics: '',
    keywords: '',
  };

  return (
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

        /*  if (storePhotoRef.current.files[0]) {
          console.log('No 0', storePhotoRef.current.files);
          formData.append('storePhoto', storePhotoRef.current.files[0]);
        } */

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
          <DivInputsDisplayNoneSC>
          <input
            ref={storeGalleryRef}
            type="file"
            name="storeGallery"
            onChange={() => fileChangeHandler('storeGalleryRef')}
          />
          </DivInputsDisplayNoneSC>
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
          <DivBoxAddNewProductSC>
          <BreadCrumbs/>
            <DivBoxTextNewProductSC>
              <DivTextNewProductSC>Новый товар</DivTextNewProductSC>
            </DivBoxTextNewProductSC>

            <DivBoxColumnsRectangleSC>
              <DivBoxBigGrayRectangleSC>
                <DivBoxRowsNameProductSC>
                  <DivBoxTextNameProductSC>
                    <DivTextNameProduct>Фото, рубрика, название товара</DivTextNameProduct>
                  </DivBoxTextNameProductSC>

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
                        {[...photoUrls.storeGalleryUrls].splice(3, 8).map((photo, i) => (
                          <DivBoxShowPhotoSC photoUrl={photo}>
                            <DeleteIconSC onClick={() => handlePhotoDelete(i + 3)}></DeleteIconSC>
                          </DivBoxShowPhotoSC>
                        ))}
                      </>
                    ) : null}
                  </DivBoxColumnsFotosSC>

                  <DivBoxColumnAboutYourselfSC>
                    <DivBoxText>
                      <DivTextSC>Видео</DivTextSC>
                    </DivBoxText>
                    <DivBoxInputAboutYourself>
                      <InputVideoSC
                        isTextArea={true}
                        type="text"
                        name="video"
                        placeholder="Вставьте ссылку на YouTube или VK-видео"
                      />
                    </DivBoxInputAboutYourself>
                  </DivBoxColumnAboutYourselfSC>

                  <DivBoxColumnProductNameSC>
                    <DivBoxText1>
                      <DivText1SC>Название товара</DivText1SC>
                    </DivBoxText1>
                    <DivBoxInputProductName>
                      <InputProductName
                        name="productname"
                        isTextArea={true}
                        type="text"
                        placeholder="Введите название товара"
                      />
                    </DivBoxInputProductName>
                  </DivBoxColumnProductNameSC>
                </DivBoxRowsNameProductSC>
              </DivBoxBigGrayRectangleSC>
              <DivBoxGrayRectangleRulesSC>
                <DivBoxTextRulesSC>
                  <DivTextRulesSC>Правила</DivTextRulesSC>
                </DivBoxTextRulesSC>
              </DivBoxGrayRectangleRulesSC>
            </DivBoxColumnsRectangleSC>
            <DivBoxImgGrayRectanglePriceSC>
              <DivImgGrayRectanglePriceSC>
                <DivBoxRowsPriceSC>
                  <DivBoxTextPriceAndNumberSC>
                    <DivTextPriceAndNumberSC>Цена и колличество</DivTextPriceAndNumberSC>
                  </DivBoxTextPriceAndNumberSC>
                  <DivBoxColumnsPriceSC>
                    <DivBoxTextPriceSC>
                      <DivTextPriceSC>Цена</DivTextPriceSC>
                    </DivBoxTextPriceSC>
                    <DivBoxInputPrice>
                      <InputPrice type="text" name="price" isTextArea={true} />
                    </DivBoxInputPrice>
                    <DivImgRubSC src={'/default-images/Rub.svg'}></DivImgRubSC>
                  </DivBoxColumnsPriceSC>
                  <DivBoxColumnsNumberSC>
                    <DivBoxTextNumberSC>
                      <DivTextNumberSC>Колличество</DivTextNumberSC>
                    </DivBoxTextNumberSC>
                    <DivBoxColumnButtonsPMSC>
                      <DivBoxButtonMinusSC>
                        <ButtonMinusSC onClick={decrement}>-</ButtonMinusSC>
                      </DivBoxButtonMinusSC>
                      <DivBoxNum1SC>{counter}</DivBoxNum1SC>
                      <DivBoxButtonPlusSC>
                        <ButtonPlusSC onClick={increment}>+</ButtonPlusSC>
                      </DivBoxButtonPlusSC>
                    </DivBoxColumnButtonsPMSC>
                  </DivBoxColumnsNumberSC>
                  <DivBoxColumnsDiscountSC>
                    <DivBoxTextDiscountSC>
                      <DivTextDiscountSC>Скидка</DivTextDiscountSC>
                    </DivBoxTextDiscountSC>
                    <DivBoxInputDiscount>
                      <InputDiscount type="text" name="discount" isTextArea={true} />
                    </DivBoxInputDiscount>
                    <DivImgRub2SC src={'/default-images/Rub.svg'}></DivImgRub2SC>
                  </DivBoxColumnsDiscountSC>
                </DivBoxRowsPriceSC>
              </DivImgGrayRectanglePriceSC>
            </DivBoxImgGrayRectanglePriceSC>
            <DivBoxImgGrayRectangleDescriptionSC>
              <DivImgGrayRectangleDescriptionSC>
                <DivBoxRowsDesctriptionSC>
                  <DivContainerDescriptionSC>
                    <DivBoxTextDescriptionSC>
                      <DivTextDescriptionSC>Описание</DivTextDescriptionSC>
                    </DivBoxTextDescriptionSC>
                    <DivBoxInputDescriptonSC>
                      <InputDescription
                        type="text"
                        name="description"
                        isTextArea={true}
                        placeholder="Подробно опишите свой товар, укажите всё, что важно знать покупателю"
                      />
                    </DivBoxInputDescriptonSC>
                  </DivContainerDescriptionSC>

                  <DivContainerCharacteristicsSC>
                    <DivBoxTextCharacteristicsSC>
                      <DivTextCharacteristicsSC>Характеристики</DivTextCharacteristicsSC>
                    </DivBoxTextCharacteristicsSC>
                    <DivBoxInputCharacteristicsSC>
                      <InputCharacteristics type="text" name="charactiristics" isTextArea={true} />
                    </DivBoxInputCharacteristicsSC>
                  </DivContainerCharacteristicsSC>

                  <DivContainerKeywordsSC>
                    <DivBoxTextKeywordsSC>
                      <DivTextKeywordsSC>Ключевые слова</DivTextKeywordsSC>
                    </DivBoxTextKeywordsSC>
                    <DivBoxInputKeywordsSC>
                      <InputKeywords
                        type="text"
                        placeholder="Укажите от 2 до 20 ключевых слов"
                        name="keywords"
                        isTextArea={true}
                      />
                    </DivBoxInputKeywordsSC>
                  </DivContainerKeywordsSC>
                </DivBoxRowsDesctriptionSC>
              </DivImgGrayRectangleDescriptionSC>
            </DivBoxImgGrayRectangleDescriptionSC>
            <DivBoxImgGrayRectangleDeliverySC>
              <DivImgGrayRectangleDeliverySC>
                <DivContainerDeliverySC>
                  <DivBoxTextDeliverySC>
                    <DivTextDeliverySC>Настройка доставки</DivTextDeliverySC>
                  </DivBoxTextDeliverySC>
                  <DivBoxItemDeliverySC>
                    <DivItemDeliverySC>
                      <DivContainerColumnsPostSC>
                        <DivBoxImgDotSC>
                          <DivImgDotSC></DivImgDotSC>
                        </DivBoxImgDotSC>
                        <DivBoxTextRussianPostSC>
                          <DivTextRussianPostSC>Почта России</DivTextRussianPostSC>
                        </DivBoxTextRussianPostSC>
                        <DivBoxTextFromThePriceSC>
                          <DivTextFromThePriceSC>от 180 руб</DivTextFromThePriceSC>
                        </DivBoxTextFromThePriceSC>
                      </DivContainerColumnsPostSC>

                      <DivContainerColumnsSDEKSC>
                        <DivBoxImgDot1SC>
                          <DivImgDot1SC></DivImgDot1SC>
                        </DivBoxImgDot1SC>
                        <DivBoxTextSDEKSC>
                          <DivTextSDEKSC>СДЭК</DivTextSDEKSC>
                        </DivBoxTextSDEKSC>
                        <DivBoxTextFromThePrice1SC>
                          <DivTextFromThePrice1SC>200 руб</DivTextFromThePrice1SC>
                        </DivBoxTextFromThePrice1SC>
                      </DivContainerColumnsSDEKSC>
                    </DivItemDeliverySC>
                  </DivBoxItemDeliverySC>
                </DivContainerDeliverySC>
              </DivImgGrayRectangleDeliverySC>
            </DivBoxImgGrayRectangleDeliverySC>
            <DivBoxButtonsSC>
              <DivBox2ButtonsSC>
                <DivButtonsSC>
                  <ButtonCustomWhiteSC width={'100%'} padding={'18px 32px'} type="submit">
                    В черновик
                  </ButtonCustomWhiteSC>

                  <PlaceButtonSC width={'100%'} padding={'18px 32px'} type="submit">
                    Разместить
                  </PlaceButtonSC>
                </DivButtonsSC>
              </DivBox2ButtonsSC>
            </DivBoxButtonsSC>
          </DivBoxAddNewProductSC>
        </Form>
      )}
    </Formik>
  );
};

export default AddNewProduct;
