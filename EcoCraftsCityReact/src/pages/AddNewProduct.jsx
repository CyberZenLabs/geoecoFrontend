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
  DivNewProductWrapSC,
  InputImageSC,
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
} from '../styled-components-css/styles-seller-store-settings/styles.VendorProfile';
import { ButtonCustomWhiteSC } from '../styled-components-css/styles.custom-button-white';
import AppContext from '../context/AppContext';
import { toast } from 'react-toastify';
import useAxiosFunction from '../hooks/useAxiosFunction';
import EcoModal from '../components/Modal';
import axios from 'axios';
import { BreadCrumbs } from '../components/BreadCrumbs';
import { DivStoreWrapSC } from '../styled-components-css/styles-seller-store-settings/styles.store';

const AddNewProduct = () => {
  const storeGalleryRef = useRef(null);
  const storeBannerRef = useRef(null);
  const [apiStoreData, setApiStoreData] = useState(null);
  let testId = '62e38df24c1f460016904636';
  const { setShowCatalog, showCatalog, setOpen, setModalData } = React.useContext(AppContext);
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter <= 1) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };
  const [photoUrls, setPhotoUrls] = useState({
    storePhotoUrl: 'https://geoeco-t7js76po3a-uc.a.run.app/stores/defaultStore.svg',
    storeBannerUrl: 'https://geoeco-t7js76po3a-uc.a.run.app/stores/defaultStore.svg',
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
        showToast('error', 'Cannot upload more than 11 photos');
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
          .patch(`https://geoeco-t7js76po3a-uc.a.run.app/api/v1/store/${testId}`, formData, {
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

          <InputImageSC
            ref={storeGalleryRef}
            type="file"
            name="storeGallery"
            onChange={() => fileChangeHandler('storeGalleryRef')}
          />
          <EcoModal
            open={modalOpen}
            title="Photo upload"
            subTitle="Place your profile photo in the selected area"
            cropImageModal={true}
            cropType={cropType}
            aspect={aspect}
            photoUrl={activePhotoUrl}
            setPhotoUrls={setPhotoUrls}
            photoUrls={photoUrls}
            storeGalleryUrls={photoUrls.storeGalleryUrls}
          ></EcoModal>
          <DivBoxAddNewProductSC>
            <BreadCrumbs />
            <DivNewProductWrapSC>
              <div>
                <DivBoxTextNewProductSC>
                  <DivTextNewProductSC>New product</DivTextNewProductSC>
                </DivBoxTextNewProductSC>

                {/* <DivBoxColumnsRectangleSC> */}
                <DivBoxBigGrayRectangleSC>
                  <DivBoxRowsNameProductSC>
                    <DivBoxTextNameProductSC>
                      <DivTextNameProduct>Photo, category, product name</DivTextNameProduct>
                    </DivBoxTextNameProductSC>

                    <DivBoxColumnsFotosSC>
                      <DivBoxFoto1SC>
                        <ButtonImgSC onClick={() => handleUploadFile('storeGalleryRef')}>
                          <DivInnerPhotoInputSC>
                            <IconImgImgSC />
                            <H1SC>Upload photo</H1SC>
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
                        <DivTextSC>Video</DivTextSC>
                      </DivBoxText>
                      <DivBoxInputAboutYourself>
                        <InputVideoSC
                          isTextArea={true}
                          type="text"
                          name="video"
                          placeholder="Add a link to YouTube or VK-video"
                        />
                      </DivBoxInputAboutYourself>
                    </DivBoxColumnAboutYourselfSC>

                    <DivBoxColumnProductNameSC>
                      <DivBoxText1>
                        <DivText1SC>Product name</DivText1SC>
                      </DivBoxText1>
                      <DivBoxInputProductName>
                        <InputProductName
                          name="productname"
                          isTextArea={true}
                          type="text"
                          placeholder="Enter a product name"
                        />
                      </DivBoxInputProductName>
                    </DivBoxColumnProductNameSC>
                  </DivBoxRowsNameProductSC>
                </DivBoxBigGrayRectangleSC>

                {/* </DivBoxColumnsRectangleSC> */}
                <DivBoxImgGrayRectanglePriceSC>
                  <DivImgGrayRectanglePriceSC>
                    <DivBoxRowsPriceSC>
                      <DivBoxTextPriceAndNumberSC>
                        <DivTextPriceAndNumberSC>Price and quantity</DivTextPriceAndNumberSC>
                      </DivBoxTextPriceAndNumberSC>
                      <DivBoxColumnsPriceSC>
                        <DivBoxTextPriceSC>
                          <DivTextPriceSC>Price</DivTextPriceSC>
                        </DivBoxTextPriceSC>
                        <DivBoxInputPrice>
                          <InputPrice type="number" min={0} name="price" />
                        </DivBoxInputPrice>
                        <DivImgRubSC>$</DivImgRubSC>
                      </DivBoxColumnsPriceSC>
                      <DivBoxColumnsNumberSC>
                        <DivBoxTextNumberSC>
                          <DivTextNumberSC>Quantity</DivTextNumberSC>
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
                          <DivTextDiscountSC>Discount</DivTextDiscountSC>
                        </DivBoxTextDiscountSC>
                        <DivBoxInputDiscount>
                          <InputDiscount type="number" min={0} name="discount" />
                        </DivBoxInputDiscount>
                        <DivImgRub2SC>$</DivImgRub2SC>
                      </DivBoxColumnsDiscountSC>
                    </DivBoxRowsPriceSC>
                  </DivImgGrayRectanglePriceSC>
                </DivBoxImgGrayRectanglePriceSC>
                <DivBoxImgGrayRectangleDescriptionSC>
                  <DivImgGrayRectangleDescriptionSC>
                    <DivBoxRowsDesctriptionSC>
                      <DivContainerDescriptionSC>
                        <DivBoxTextDescriptionSC>
                          <DivTextDescriptionSC>Description</DivTextDescriptionSC>
                        </DivBoxTextDescriptionSC>
                        <DivBoxInputDescriptonSC>
                          <InputDescription
                            type="text"
                            name="description"
                            isTextArea={true}
                            placeholder="Describe your product in detail, specify everything that is important for the customer to know"
                          />
                        </DivBoxInputDescriptonSC>
                      </DivContainerDescriptionSC>

                      <DivContainerCharacteristicsSC>
                        <DivBoxTextCharacteristicsSC>
                          <DivTextCharacteristicsSC>Characteristics</DivTextCharacteristicsSC>
                        </DivBoxTextCharacteristicsSC>
                        <DivBoxInputCharacteristicsSC>
                          <InputCharacteristics type="text" name="charactiristics" isTextArea={true} />
                        </DivBoxInputCharacteristicsSC>
                      </DivContainerCharacteristicsSC>

                      <DivContainerKeywordsSC>
                        <DivBoxTextKeywordsSC>
                          <DivTextKeywordsSC>Keywords</DivTextKeywordsSC>
                        </DivBoxTextKeywordsSC>
                        <DivBoxInputKeywordsSC>
                          <InputKeywords
                            type="text"
                            placeholder="Specify from 2 to 20 keywords"
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
                        <DivTextDeliverySC> Delivery settings</DivTextDeliverySC>
                      </DivBoxTextDeliverySC>
                      <DivBoxItemDeliverySC>
                        <DivItemDeliverySC>
                          <DivContainerColumnsPostSC>
                            <DivBoxImgDotSC>
                              <DivImgDotSC></DivImgDotSC>
                            </DivBoxImgDotSC>
                            <DivBoxTextRussianPostSC>
                              <DivTextRussianPostSC>Russian Post </DivTextRussianPostSC>
                            </DivBoxTextRussianPostSC>
                            <DivBoxTextFromThePriceSC>
                              <DivTextFromThePriceSC>from $3</DivTextFromThePriceSC>
                            </DivBoxTextFromThePriceSC>
                          </DivContainerColumnsPostSC>

                          <DivContainerColumnsSDEKSC>
                            <DivBoxImgDot1SC>
                              <DivImgDot1SC></DivImgDot1SC>
                            </DivBoxImgDot1SC>
                            <DivBoxTextSDEKSC>
                              <DivTextSDEKSC>CDEK</DivTextSDEKSC>
                            </DivBoxTextSDEKSC>
                            <DivBoxTextFromThePrice1SC>
                              <DivTextFromThePrice1SC>$4</DivTextFromThePrice1SC>
                            </DivBoxTextFromThePrice1SC>
                          </DivContainerColumnsSDEKSC>
                        </DivItemDeliverySC>
                      </DivBoxItemDeliverySC>
                    </DivContainerDeliverySC>
                  </DivImgGrayRectangleDeliverySC>
                </DivBoxImgGrayRectangleDeliverySC>
                <DivBoxButtonsSC>
                  <DivButtonsSC>
                    <ButtonCustomWhiteSC width={'100%'} type="submit">
                      To Drafts
                    </ButtonCustomWhiteSC>

                    <PlaceButtonSC to={'/store/:id'} width={'100%'} padding={'18px 32px'} type="submit">
                      Post
                    </PlaceButtonSC>
                  </DivButtonsSC>
                </DivBoxButtonsSC>
              </div>
              <DivBoxGrayRectangleRulesSC>
                <DivBoxTextRulesSC>
                  <DivTextRulesSC>How to use</DivTextRulesSC>
                </DivBoxTextRulesSC>
              </DivBoxGrayRectangleRulesSC>
            </DivNewProductWrapSC>
          </DivBoxAddNewProductSC>
        </Form>
      )}
    </Formik>
  );
};

export default AddNewProduct;
