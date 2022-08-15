import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { DivWrapModal,H1ContentInfoSC,BlockModal,DivContentWrapModal, ButtonContinueModal, PContentInfoSC, BoldSC, } from "../styled-components-css/styles-seller-store-settings/styles.settingsSeller";
import {
  DivBoxRowModalContSC,
} from "../styled-components-css/styles.modal";
const MailModal = () => {
    const { mail, setMail} = useContext(AppContext);
    return (
        <>
          <BlockModal isOpen={mail} contentLabel="Modal">
           <DivWrapModal>
            <DivContentWrapModal>
           <H1ContentInfoSC>Замена адреса</H1ContentInfoSC>
           <PContentInfoSC>Мы отправили Вам письмо на <BoldSC>lisaraklova@gmail.com.</BoldSC> Перейдите по ссылке из него, чтобы начать процедуру</PContentInfoSC>
          
               <ButtonContinueModal onClick={() => setMail(false)}>Продолжить</ButtonContinueModal>
          
           </DivContentWrapModal>
           </DivWrapModal>
          </BlockModal>
        </>
      );
    };
    
    export default MailModal;
    