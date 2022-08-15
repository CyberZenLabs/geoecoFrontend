import React, { useContext, useState, useRef, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import {
  BlockModal,
  ButtonContinueModal,
  ButtonPrevModal,
  CenterItemsSC,
  DivBoxRowModalContSC,
  DivBoxRowModalSC,
  DivWrapModal,
  EmailFieldSC,
  IoIosArrowBackSC,
  StoreCreationTitleSC,
  StoreCreationSubTitleSC,
  CropperContainer,
} from '../styled-components-css/styles.modal';
const EcoModal = ({
  title,
  subTitle,
  cropImageModal,
  photoUrl,
  setPhotoUrls,
  storeGalleryUrls,
  photoUrls,
  aspect,
  cropType,
}) => {
  const { open, setOpen, modalData } = useContext(AppContext);
  const cropperRef = useRef(null);
  let cropper;
  let imageElement;

  const onCrop = () => {
    imageElement = cropperRef.current;

    cropper = imageElement.cropper;

    // console.log(URL.createObjectURL(cropper));
  };
  const submitModal = (isCrop) => {
    if (isCrop) {
      if (cropType === 'storeBannerPhoto') {
        cropper.getCroppedCanvas().toBlob((blob) => {
          const urlToSave = URL.createObjectURL(blob);
          setPhotoUrls({ ...photoUrls, storeBannerUrl: urlToSave });
        });
        setOpen(false);
      } else if (cropType === 'storeProfilePhoto') {
        cropper.getCroppedCanvas().toBlob((blob) => {
          const urlToSave = URL.createObjectURL(blob);
          setPhotoUrls({ ...photoUrls, storePhotoUrl: urlToSave });
        });
        setOpen(false);
      } else if (cropType === 'storeGalleryPhotos') {
        cropper.getCroppedCanvas().toBlob((blob) => {
          const urlToSave = URL.createObjectURL(blob);
          setPhotoUrls({ ...photoUrls, storeGalleryUrls: [...storeGalleryUrls, urlToSave] });
        });
        setOpen(false);
      }
    }
  };

  return (
    <>
      <BlockModal isOpen={open} contentLabel="Modal">
        <DivWrapModal isCropModal={cropImageModal}>
          <ButtonPrevModal onClick={() => setOpen(false)}>
            <IoIosArrowBackSC />
          </ButtonPrevModal>

          <CenterItemsSC>
            <StoreCreationTitleSC>{title}</StoreCreationTitleSC>
            <StoreCreationSubTitleSC>{subTitle}</StoreCreationSubTitleSC>
            <CropperContainer>
              {cropImageModal && (
                <Cropper
                  background={false}
                  responsive={true}
                  viewMode={1}
                  minCropBoxHeight={1}
                  minCropBoxWidth={1}
                  style={{
                    maxHeight: '600px',
                    height: '70%',
                    width: '100%',
                    maxWidth: '1322px',
                    margin: '0px 20px',
                    background: 'white !important',
                  }}
                  src={photoUrl}
                  aspectRatio={aspect}
                  crop={onCrop}
                  ref={cropperRef}
                />
                // <ReactCrop crop={crop} onChange={(c) => setCrop(c)} aspectRation={1}>
                //   <img onLoad={onImageLoad} ref={imgRef} src={photoUrl} />
                // </ReactCrop>
              )}
            </CropperContainer>

            {modalData.inputs.lenght === 0 &&
              modalData.inputs.map(({ input }) => (
                <DivBoxRowModalSC>
                  <EmailFieldSC label="email" type="email" name={input} fullSize={true} placeholder={input} />
                </DivBoxRowModalSC>
              ))}

            {modalData.button ? (
              <DivBoxRowModalContSC>
                <ButtonContinueModal onClick={() => submitModal(cropImageModal)}>Continue</ButtonContinueModal>
              </DivBoxRowModalContSC>
            ) : null}
          </CenterItemsSC>
        </DivWrapModal>
      </BlockModal>
    </>
  );
};

export default EcoModal;