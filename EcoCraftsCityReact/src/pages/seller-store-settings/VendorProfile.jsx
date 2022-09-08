import { Delete, Margin, TextFields } from '@mui/icons-material';
import { Form, Formik } from 'formik';
import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import StarRating from '../../components/StarRating';
import TextFieldStore from '../../components/TextFieldStore';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import { DivBackBoxSC, DivHistorySC, NavLinkSC } from '../../styled-components-css/styles.product-detail';
import ShowItemCarouselReview from '../../components/ShowItemCarouselReview';
import { toast } from 'react-toastify';
import {
    DivStoreLeftPanelSC,
    DivStoreOptionsRightPanelSC,
    DivStoreOptionsSC,
    DivStoreRightPanelSC,
    DivStoreWrapSC,
    DivWrapLinkSC,
    H1BoldTextSC,
} from '../../styled-components-css/styles-seller-store-settings/styles.store';
import {
    SpanTextTitleSC,
    DivAddProductBox,
    DivInfoVendorBoxSC,
    DivStoreInfoStuffProfileSC,
    DivItemsOptionsSC,
    DivInnerContentSC,
    DivTwoSidesSC,
    H1DefinSC,
    ButtonBannerSC,
    ButtonImgSC,
    DivBGImageSC,
    DivAboutYourselfSC,
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
    DivInnerPhotoInputSC,
    H1SC,
    IconImgImgSC,
    DivButtonBottomSaveVendSC,
    SaveButtonPanelVendSC,
    GreenST,
    OverlayProfileImgSC,
    OverlayProfileImageTextSC,
    OverlayBannerImageTextSC,
    OverlayBannerImgSC,
    DivBoxShowPhotoSC,
    DeleteIconSC,
    DivInputsDisplayNoneSC,
    OlifnoSC,
    LiInfoSC,
    DivButtonChangrInformSC,
    DivButtonChangrInformBottomSC,
    SpanTextTitleAdaptiveSC,
    DivInfoVendorBoxAdaptiveSC
} from '../../styled-components-css/styles-seller-store-settings/styles.VendorProfile';
import EcoModal from '../../components/Modal';
import axiosCustom from '../../apis/admin-rest';
import axios from 'axios';
import VenderCarouselReview from '../../components/VenderCarouselReview';

import AppContext from '../../context/AppContext';
import VendorNavMenu from '../../components/VendorNavMenu';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import hostName from "../../tools/HostName";

const VendorProfile = () => {
    const [indexSelectedButton, getIndexButton] = useState(0);
    const [apiStoreData, setApiStoreData] = useState(null);

    const { setShowCatalog, showCatalog, setOpen, setModalData } = React.useContext(AppContext);
    const [photoUrls, setPhotoUrls] = useState({
        storePhotoUrl: `${hostName.getHost()}/stores/defaultStore.svg`,
        storeBannerUrl: `${hostName.getHost()}/stores/defaultStore.svg`,
        storeGalleryUrls: [],
    });
    const [activePhotoUrl, setActivePhotoUrl] = useState('');
    const [cropType, setCropType] = useState('');
    const [aspect, setAspect] = useState(1);
    const [modalOpen, seModalOpen] = useState(true);
    const [galleryFiles, setGalleryFiles] = useState([]);

    const onClickTab = (index) => (e) => {
        getIndexButton(index);
    };
    const [response, error, loading, axiosFetch] = useAxiosFunction();
    const storePhotoRef = useRef(null);
    const storeBannerRef = useRef(null);
    const storeGalleryRef = useRef(null);
    let testId = '62e38df24c1f460016904636';
    useEffect(() => {
        // axiosFetch({
        //   axiosInstance: axiosCustom,
        //   method: 'GET',
        //   url: `/api/v1/store/${testId}`,
        // });

        axios
            .get(`${hostName.getHost()}/api/v1/store/${testId}`)
            .then((res) => {
                setApiStoreData(res);
            })
            .catch((err) => {
                console.log(err);
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
        if (apiStoreData) {
            let photoUrl;

            let timesrun = 0;
            Object.entries(apiStoreData.data.data.data).forEach((field) => {
                if (field[0] === 'storePhoto') {
                    photoUrl = `${hostName.getHost()}/stores/${field[1]}`;
                    setPhotoUrls({ ...photoUrls, storePhotoUrl: photoUrl });
                } else if (field[0] === 'storeBanner') {
                    photoUrl = `${hostName.getHost()}/stores/${field[1]}`;
                    setPhotoUrls({ ...photoUrls, storeBannerUrl: photoUrl });
                } else if (field[0] === 'storeAboutPhotos') {
                    field[1].map((url) => {
                        timesrun += 1;
                        let photoUrlArray = [];

                        photoUrl = `${hostName.getHost()}/stores/${url}`;
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
            setAspect(1332 / 352);
            setCropType('storeBannerPhoto');
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
        const newFiles = [...galleryFiles.filter((element) => ![galleryFiles[i]].includes(element))];
        setGalleryFiles(newFiles);
        setPhotoUrls({ ...photoUrls, storeGalleryUrls: newPhotos });
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





                <DivAddProductBox>
                    <DivInfoVendorBoxSC>

                        <SpanTextTitleSC>Profile name  <DivButtonChangrInformSC onClick={onClickTab(1)}>Change the information</DivButtonChangrInformSC></SpanTextTitleSC>
                        <OlifnoSC>
                            <LiInfoSC>Address</LiInfoSC>
                            <LiInfoSC>Store existence time</LiInfoSC>
                            <LiInfoSC>Store: е-mail</LiInfoSC>
                            <LiInfoSC>Products:<GreenST>In stock(1), Ordered(0), All(1)</GreenST></LiInfoSC>
                            <DivButtonChangrInformBottomSC onClick={onClickTab(1)}>Change the information</DivButtonChangrInformBottomSC>
                        </OlifnoSC>


                    </DivInfoVendorBoxSC>

                    <DivInfoVendorBoxAdaptiveSC>
                        <SpanTextTitleAdaptiveSC>Reviews</SpanTextTitleAdaptiveSC>


                        <VenderCarouselReview>

                        </VenderCarouselReview>
                    </DivInfoVendorBoxAdaptiveSC>
                </DivAddProductBox>



            ),
        },
        {
            page: (
                <DivStoreRightPanelSC>
                    {console.log('photoUrls', photoUrls)}
                    <DivStoreInfoStuffProfileSC>
                        <H1BoldTextSC>My profile</H1BoldTextSC>
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
                                formData.append('storePhoto', storePhotoRef.current.files[0]);
                            }

                            if (storeBannerRef.current.files[0]) {
                                formData.append('storeBanner', storeBannerRef.current.files[0]);
                            }
                            if (galleryFiles !== []) {
                                console.log(galleryFiles, 'ASBCbakjscbacsb');
                                galleryFiles.map((file) => formData.append('storeAboutPhotos', file));
                            }
                            for (const value of formData.getAll('storeAboutPhotos')) {
                                console.log('formData value', value);
                            }

                            axios
                                .patch(`${hostName.getHost()}/api/v1/store/${testId}`, formData, {
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
                                </DivInputsDisplayNoneSC>

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
                                <DivItemsOptionsSC>
                                    <DivInnerContentSC>
                                        <DivTwoSidesSC>
                                            <H1DefinSC>Store banner</H1DefinSC>
                                            <ButtonBannerSC
                                                photoUrl={photoUrls.storeBannerUrl}
                                                onClick={() => handleUploadFile('storeBannerRef')}
                                            >
                                                <OverlayBannerImgSC>
                                                    <OverlayBannerImageTextSC>Change photo</OverlayBannerImageTextSC>
                                                </OverlayBannerImgSC>

                                                {apiStoreData != null && apiStoreData.length != 0 && !apiStoreData.data.data.bannerPhoto ? (
                                                    <DivInnerPhotoInputSC>
                                                        <IconImgImgSC />
                                                        <H1SC>Upload photo</H1SC>
                                                    </DivInnerPhotoInputSC>
                                                ) : null}
                                            </ButtonBannerSC>
                                        </DivTwoSidesSC>
                                        <DivTwoSidesSC>
                                            <H1DefinSC>Photo</H1DefinSC>

                                            <ButtonImgSC photoUrl={photoUrls.storePhotoUrl} onClick={() => handleUploadFile('storePhotoRef')}>
                                                <OverlayProfileImgSC>
                                                    <OverlayProfileImageTextSC>Change photo</OverlayProfileImageTextSC>
                                                </OverlayProfileImgSC>
                                                {apiStoreData != null && apiStoreData.length != 0 && !apiStoreData.data.data.storePhoto ? (
                                                    <DivInnerPhotoInputSC>
                                                        <IconImgImgSC />
                                                        <H1SC>Upload photo</H1SC>
                                                    </DivInnerPhotoInputSC>
                                                ) : null}
                                            </ButtonImgSC>
                                        </DivTwoSidesSC>
                                        <DivTwoSidesSC>
                                            <H1DefinSC>Name</H1DefinSC>
                                            <TextFieldStore label="123" type="text" name="storeName" />
                                        </DivTwoSidesSC>
                                        <DivTwoSidesSC>
                                            <H1DefinSC> Place of Residence</H1DefinSC>
                                            <TextFieldStore label="123" type="text" name="storeLocation" placeholder="Krasnoyarsk region, Russia"/>
                                            {/* <NameNCityFieldSC label="email" type="email" placeholder="Krasnoyarsk region, Russia" /> */}
                                        </DivTwoSidesSC>
                                    </DivInnerContentSC>
                                </DivItemsOptionsSC>

                                <DivAboutYourselfSC>
                                    <DivBGImageSC>
                                        <DivBoxColumnAboutYourselfSC>
                                            <DivBoxText>
                                                <DivTextSC>About me</DivTextSC>
                                            </DivBoxText>
                                            <DivBoxInputAboutYourself>
                                                <TextFieldStore type="text" name="storeDescription" isTextArea={true} />
                                            </DivBoxInputAboutYourself>
                                        </DivBoxColumnAboutYourselfSC>
                                        <DivBoxRowsAboutCreativity>
                                            <DivBoxText2>
                                                <DivText2SC>About the work</DivText2SC>
                                            </DivBoxText2>
                                            <DivBoxText3>
                                                <DivText3>Show inspiring work moments, upload diplomas and certificates</DivText3>
                                            </DivBoxText3>
                                        </DivBoxRowsAboutCreativity>
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
                                    </DivBGImageSC>
                                </DivAboutYourselfSC>
                                <DivButtonBottomSaveVendSC>
                                    <SaveButtonPanelVendSC type="submit">Save</SaveButtonPanelVendSC>
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
            <BreadCrumbs/>
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

