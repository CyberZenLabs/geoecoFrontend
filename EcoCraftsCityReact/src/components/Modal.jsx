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
  PasswordFieldSC,
  DivBoxTextSC,
  SpanQuSC,
  LinkSC,
  SelectInputSC,
  OptionInputSC,
} from "../styled-components-css/styles.modal";

import Modals from "../components/ModalSendEmail";
import ModalSendEmail from "../components/ModalSendEmail";
import App from "./SelectUl";
const EcoModal = () => {
  const { open, setOpen, modalData } = useContext(AppContext);
  const {openEmail, setOpenEmail}=useContext(AppContext);
   const openMod = () => {
    setOpenEmail(true);
    setOpen(false);
  };
  return (
    <>
      <BlockModal isOpen={open} contentLabel="Modal" >
        <DivWrapModal>
          <ButtonPrevModal onClick={() => setOpen(false)}>
            <IoIosArrowBackSC />
          </ButtonPrevModal>
          <CenterItemsSC>
           
           
           <StoreCreationTitleSC>Создание магазина</StoreCreationTitleSC>
            {modalData.inputs.map(({ email}) => (
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
             {modalData.inputs.map(({ password}) => (
              <DivBoxRowModalSC>
               
             
                <PasswordFieldSC
                  label="password"
                  type="password"
                  name={password}
                  fullSize={true}
                  placeholder={password}
                />
                
              </DivBoxRowModalSC>
              
            ))}
            {modalData.inputs.map(({ repeat_password}) => (
              <DivBoxRowModalSC>
               
             
                <PasswordFieldSC
                  label="repeat_password"
                  type="password"
                  name={repeat_password}
                  fullSize={true}
                  placeholder={repeat_password}
                />
                
              </DivBoxRowModalSC>
              
            ))}
            {modalData.inputs.map(({ city}) => (
              <DivBoxRowModalSC>
               
             
                <PasswordFieldSC
                  label="city"
                  type="text"
                  name={city}
                  fullSize={true}
                  placeholder={city}
                />
                
              </DivBoxRowModalSC>
              
            ))}
              <DivBoxRowModalSC>
               
           
                <App></App>
                
               
             </DivBoxRowModalSC>
             
            {modalData.button ? (
              <DivBoxRowModalContSC>
               <ButtonContinueModal  onClick={openMod}>Продолжить</ButtonContinueModal>
             </DivBoxRowModalContSC>
          ) : null} 
            <DivBoxTextSC>
                        <SpanQuSC>У вас есть аккаунт? </SpanQuSC>
                        <LinkSC to="/signin" onClick={() => setOpen(false)}>Войти</LinkSC>
                      </DivBoxTextSC>
          </CenterItemsSC>
        
        </DivWrapModal>
        <ModalSendEmail/>
      </BlockModal>
      <ModalSendEmail/>
    </>
  );
};

export default EcoModal;
