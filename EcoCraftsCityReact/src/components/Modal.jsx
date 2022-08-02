import React, { useContext, useState, useRef, useEffect } from 'react';
import AppContext from '../context/AppContext';
import ReactCrop, { makeAspectCrop, centerCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
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
} from '../styled-components-css/styles.modal';
const EcoModal = ({ title, subTitle, cropImageModal, photoUrl }) => {
  const { open, setOpen, modalData } = useContext(AppContext);
  const imgRef = useRef({});
  const [crop, setCrop] = useState({});

  function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 90,
          height: 90,
          x: 25,
          y: 25,
          
        },
        aspect,
        mediaWidth,
        mediaHeight,
      ),
      mediaWidth,
      mediaHeight,
    );
  }

  function onImageLoad(e) {

      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, 1 / 1))

  }

  useEffect(() => {
    const { width, height } = imgRef.current;
    setCrop(centerAspectCrop(width, height, 1 / 1));
  }, [imgRef.current])



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
            {cropImageModal && (
              <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
                <img onLoad={onImageLoad} ref={imgRef} src={photoUrl} />
              </ReactCrop>
            )}
            {modalData.inputs.map(({ input }) => (
              <DivBoxRowModalSC>
                <EmailFieldSC label="email" type="email" name={input} fullSize={true} placeholder={input} />
              </DivBoxRowModalSC>
            ))}
            {modalData.button ? (
              <DivBoxRowModalContSC>
                <ButtonContinueModal>Продолжить</ButtonContinueModal>
              </DivBoxRowModalContSC>
            ) : null}
          </CenterItemsSC>
        </DivWrapModal>
      </BlockModal>
    </>
  );
};

export default EcoModal;
