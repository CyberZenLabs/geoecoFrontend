import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";

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
} from "../styled-components-css/styles.modal";
const EcoModal = () => {
  const { open, setOpen, modalData } = useContext(AppContext);

  console.log(modalData);
  return (
    <>
      <BlockModal isOpen={open} contentLabel="Modal" >
        <DivWrapModal>
          <ButtonPrevModal onClick={() => setOpen(false)}>
            <IoIosArrowBackSC />
          </ButtonPrevModal>
          <CenterItemsSC>
            <StoreCreationTitleSC>Создание магазина</StoreCreationTitleSC>
            {modalData.inputs.map(({ email }) => (
              <DivBoxRowModalSC>
                <EmailFieldSC
                  label="email"
                  type="email"
                  name={email}
                  fullSize={true}
                  placeholder={email}
                />
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
