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
const EcoModal = ({ title, subTitle, cropImageModal, photoUrl, setPhotoUrls, photoUrls }) => {
  const { open, setOpen, modalData } = useContext(AppContext);
  const cropperRef = useRef(null);
  let cropper;
  let imageElement;
  const onCrop = () => {
    console.log('123');
    imageElement = cropperRef.current;
    console.log(imageElement);
    cropper = imageElement.cropper;
    // console.log(URL.createObjectURL(cropper));
  };
  const submitModal = (isCrop) => {
    if (isCrop) {
      cropper.getCroppedCanvas().toBlob((blob) => {
        const urlToSave = URL.createObjectURL(blob);
        setPhotoUrls({ ...photoUrls, storePhotoUrl: urlToSave });
      });
      setOpen(false);
    }
  };

  return (
    <>
      <BlockModal isOpen={open} contentLabel="Modal">
        <DivWrapModal>
          <ButtonPrevModal onClick={() => setOpen(false)}>
            <IoIosArrowBackSC />
          </ButtonPrevModal>

          <CenterItemsSC>
            <StoreCreationTitleSC>{title}</StoreCreationTitleSC>
            <StoreCreationSubTitleSC>{subTitle}</StoreCreationSubTitleSC>
            <CropperContainer>
              {cropImageModal && (
                <Cropper src={photoUrl} aspectRatio={1 / 1} crop={onCrop} ref={cropperRef} />
                // <ReactCrop crop={crop} onChange={(c) => setCrop(c)} aspectRation={1}>
                //   <img onLoad={onImageLoad} ref={imgRef} src={photoUrl} />
                // </ReactCrop>
              )}
            </CropperContainer>

            {modalData.inputs.map(({ input }) => (
              <DivBoxRowModalSC>
                <EmailFieldSC label="email" type="email" name={input} fullSize={true} placeholder={input} />
              </DivBoxRowModalSC>
            ))}
            {modalData.button ? (
              <DivBoxRowModalContSC>
                <ButtonContinueModal onClick={() => submitModal(cropImageModal)}>Продолжить</ButtonContinueModal>
              </DivBoxRowModalContSC>
            ) : null}
          </CenterItemsSC>
        </DivWrapModal>
      </BlockModal>
    </>
  );
};

export default EcoModal;