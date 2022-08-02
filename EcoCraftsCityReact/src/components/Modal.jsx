import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import ReactCrop from 'react-image-crop';
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
  const [crop, setCrop] = useState({
    unit: 'px', // Can be 'px' or '%'
    // x: 25,
    // y: 25,
    // width: 50,
    // height: 50,
    // aspect: 1,
    // locked: true,
    circularCrop: true,
  });

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
              <ReactCrop className="ReactCrop--locked" crop={crop} onChange={(c) => setCrop(c)}>
                <img src={photoUrl} />
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
