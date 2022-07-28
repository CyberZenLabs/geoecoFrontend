import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { DivWrapModal,H1ContentInfoSC,BlockModal,DivContentWrapModal, ButtonContinueModal, PContentInfoSC, BoldSC, } from "../styled-components-css/styles.settingsSeller";
import {
  DivBoxRowModalContSC,
} from "../styled-components-css/styles.modal";
const PassModal = () => {
    const { pass, setPass} = useContext(AppContext);
    return (
        <>
          <BlockModal isOpen={pass} contentLabel="Modal">
           <DivWrapModal>
            <DivContentWrapModal>
           <H1ContentInfoSC>Изменение пароля</H1ContentInfoSC>
           <PContentInfoSC>Мы отправили Вам письмо на <BoldSC>lisaraklova@gmail.com.</BoldSC> Перейдите по ссылке из него, чтобы начать процедуру</PContentInfoSC>
          
               <ButtonContinueModal onClick={() => setPass(false)}>Продолжить</ButtonContinueModal>
          
           </DivContentWrapModal>
           </DivWrapModal>
          </BlockModal>
        </>
      );
    };
    
    export default PassModal;
    